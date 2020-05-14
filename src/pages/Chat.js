import React, { Component } from "react";
import Header from "../components/Header";
import { auth, db, firestore } from "../services/firebase";
import { Redirect } from "react-router-dom";

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: auth().currentUser,
            chats: [],
            station: this.getStation(),
            content: "",
            readError: null,
            writeError: null,
            loadingChats: false,
            redirect: false,
            otherStations: [],
            selectedValues: [],
        };
        this.change = this.change.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.myRef = React.createRef();
    }

    getStation() {
        if (this.props.location.state !== undefined) {
            return this.props.location.state.station;
        }
        return {
            data: {},
        };
    }

    async componentDidMount() {
        this.setState({ readError: null, loadingChats: true });
        let redirect = true;
        let stationsRef = firestore.collection("stations");
        await stationsRef
            .where("uid", "==", this.state.user.uid) //Check ob es Station mit uid gibt
            .get()
            .then((snaps) => {
                snaps.forEach((snap) => {
                    redirect = false;
                });
            })
            .catch((err) => {
                redirect = false;
                console.error(err);
            });
        this.setState({ redirect });
        if (redirect) return; //keine weiteren Daten abrufen
        if (this.state.station.data.Bezeichnung === "") {
            await stationsRef
                .where("Bezeichnung", ">", "")
                .get()
                .then((snaps) => {
                    const stations = [];
                    snaps.forEach((snap) => {
                        stations.push(snap.data());
                    });
                    stations.sort(function (a, b) {
                        if (a.Bezeichnung < b.Bezeichnung) return -1;
                        if (a.Bezeichnung >= b.Bezeichnung) return 1;
                        return 0;
                    });
                    this.setState({ otherStations: stations });
                });
        }
        const chatArea = this.myRef.current;
        if (this.state.station.data.Bezeichnung !== "") {
            try {
                db.ref("chats/" + this.state.station.data.Bezeichnung).on(
                    "value",
                    (snapshot) => {
                        let chats = [];
                        snapshot.forEach((snap) => {
                            chats.push(snap.val());
                        });
                        chats.sort(function (a, b) {
                            return a.timestamp - b.timestamp;
                        });
                        this.setState({ chats });
                        chatArea.scrollBy(0, chatArea.scrollHeight);
                        this.setState({ loadingChats: false });
                    }
                );
            } catch (error) {
                this.setState({
                    readError: error.message,
                    loadingChats: false,
                });
            }
        } else {
            this.setState({ loadingChats: false });
        }
    }

    handleChange(event) {
        this.setState({
            content: event.target.value,
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({ writeError: null });

        const chatArea = this.myRef.current || null;
        try {
            this.state.selectedValues.map(async (val) => {
                await db.ref("chats/" + val).push({
                    receiver: val,
                    content: this.state.content,
                    timestamp: Date.now(),
                    uid: this.state.user.uid,
                });
            });
            this.setState({ content: "" });
            if (chatArea != null) {
                chatArea.scrollBy(0, chatArea.scrollHeight);
            }
        } catch (error) {
            this.setState({ writeError: error.message });
        }
    }

    redirect = () => {
        return (
            <Redirect
                to={{
                    pathname: "/dlrgfunk/join",
                }}
            />
        );
    };

    formatTime(timestamp) {
        const d = new Date(timestamp);
        const time = `${d.getDate()}.${
            d.getMonth() + 1
        }.${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
        return time;
    }

    change(val) {
        const selectedValues = [];
        [...val.target.selectedOptions].forEach((el) => {
            selectedValues.push(el.value);
        });
        this.setState({ selectedValues });
    }

    render() {
        return (
            <div>
                <Header />
                {this.state.redirect ? this.redirect() : ""}
                <h3 style={{ margin: "70px 0 10px 10px" }}>
                    Du bist&nbsp;
                    {this.state.station.data.Rufname +
                        " " +
                        this.state.station.data.Ort +
                        " " +
                        this.state.station.data.Bezeichnung}
                </h3>
                {this.state.station.data.Bezeichnung !== "" ? (
                    <div className="chat-area" ref={this.myRef}>
                        {this.state.loadingChats ? (
                            <div
                                className="spinner-border text-success"
                                role="status"
                            >
                                <span className="sr-only">Loading...</span>
                            </div>
                        ) : (
                            ""
                        )}
                        {this.state.chats.map((chat) => {
                            return (
                                <p
                                    key={chat.timestamp}
                                    className={
                                        "chat-bubble " +
                                        (this.state.user.uid === chat.uid
                                            ? "current-user"
                                            : "")
                                    }
                                >
                                    {chat.content}
                                    <br />
                                    <span className="chat-time float-right">
                                        {this.formatTime(chat.timestamp)}
                                    </span>
                                </p>
                            );
                        })}
                    </div>
                ) : (
                    <form onSubmit={this.handleSubmit} className="mx-3">
                        {this.state.station.data.Bezeichnung === "" ? (
                            <div className="form-group">
                                <select
                                    multiple
                                    className="form-control"
                                    onChange={this.change}
                                >
                                    {this.state.otherStations.map((station) => {
                                        return (
                                            <option
                                                key={
                                                    station.Ort +
                                                    station.Bezeichnung
                                                }
                                            >
                                                {station.Bezeichnung}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        ) : (
                            ""
                        )}
                        <textarea
                            className="form-control"
                            name="content"
                            onChange={this.handleChange}
                            value={this.state.content}
                        ></textarea>
                        {this.state.writeError ? (
                            <p className="text-danger">
                                {this.state.writeError}
                            </p>
                        ) : null}
                        <button
                            type="submit"
                            className="btn btn-submit px-5 mt-4"
                        >
                            Absenden
                        </button>
                    </form>
                )}
                <div className="py-5 mx-3">
                    Eingeloggt als:{" "}
                    <strong className="text-info">{this.state.user.uid}</strong>
                </div>
            </div>
        );
    }
}
