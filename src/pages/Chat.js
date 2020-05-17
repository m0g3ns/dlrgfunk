import React, { Component } from "react";
import Header from "../components/Header";
import { auth, db, firestore } from "../services/firebase";
import { Redirect } from "react-router-dom";
import { randomTerm, randomClothing, age, getMessage } from "../helpers/calc";

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
            successMessage: "",
            errorMessage: "",
            loadingChats: false,
            redirect: false,
            otherStations: [],
            selectedValues: [],
            persons: [],
            docId: "",
            wantingMore: false,
        };
        this.change = this.change.bind(this);
        this.handleCalc = this.handleCalc.bind(this);
        this.handlePerson = this.handlePerson.bind(this);
        this.handleAlarm = this.handleAlarm.bind(this);
        this.handleBridge = this.handleBridge.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleWantingMore = this.handleWantingMore.bind(this);
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
        let stationsRef = firestore.collection(
            `cities/${this.props.location.state.city.id}/stations`
        );
        await stationsRef
            .where("uid", "==", this.state.user.uid) //Check ob es Station mit uid gibt
            .get()
            .then((snaps) => {
                snaps.forEach((snap) => {
                    redirect = false;
                    this.setState({ docId: snap.id });
                });
            })
            .catch((err) => {
                redirect = false;
                console.error(err);
            });
        this.setState({ redirect });
        if (redirect) return; //keine weiteren Daten abrufen
        if (this.state.station.data.Bezeichnung === "") {
            //Lehrgangsleitung
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
            this.listener = stationsRef
                .where("Bezeichnung", ">", "")
                .onSnapshot((snaps) => {
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
            await firestore
                .collection("persons")
                .get()
                .then((snaps) => {
                    const persons = [];
                    snaps.forEach((snap) => {
                        persons.push(snap.data());
                    });
                    this.setState({ persons });
                });
        }
        const chatArea = this.myRef.current;
        if (this.state.station.data.Bezeichnung !== "") {
            try {
                this.chatListener = db
                    .ref(
                        "chats/" +
                            this.props.location.state.city.data.name +
                            "/" +
                            this.state.station.data.Bezeichnung
                    )
                    .on("value", (snapshot) => {
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
                    });
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

    componentWillUnmount() {
        if (typeof this.listener === "function") {
            this.listener();
        }
        if (this.state.station.data.Bezeichnung !== "") {
            db.ref(
                "chats/" +
                    this.props.location.state.city.data.name +
                    "/" +
                    this.state.station.data.Bezeichnung
            ).off();
        }
    }

    handleChange(event) {
        this.setState({
            content: event.target.value,
        });
    }

    async handleSubmit(event) {
        if (event !== undefined) event.preventDefault();
        if (this.state.content === "") return; //Dont send when there is no content
        this.setState({ writeError: null });

        const chatArea = this.myRef.current || null;
        try {
            this.state.selectedValues.map(async (val) => {
                await db
                    .ref(
                        "chats/" +
                            this.props.location.state.city.data.name +
                            "/" +
                            val.replace(new RegExp(/(\s\((.*)\))/), "")
                    )
                    .push({
                        receiver: val.replace(new RegExp(/(\s\((.*)\))/), ""),
                        content: this.state.content,
                        timestamp: Date.now(),
                        uid: this.state.user.uid,
                    })
                    .then(() => {
                        const successMessage =
                            "Die Nachricht an " +
                            val.replace(new RegExp(/(\s\((.*)\))/), "") +
                            " wurde erfolgreich gesendet!";
                        this.setState({ successMessage });
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
    async handlePerson() {
        if (this.state.persons.length === 1) {
            await firestore
                .collection("persons")
                .get()
                .then((snaps) => {
                    const persons = [];
                    snaps.forEach((snap) => {
                        persons.push(snap.data());
                    });
                    this.setState({ persons });
                });
        }
        const person = this.state.persons[
            Math.round(Math.random() * (this.state.persons.length - 1))
        ];
        const index = this.state.persons.indexOf(person);
        if (index !== -1)
            this.setState({
                persons: [
                    ...this.state.persons.filter(
                        (el) => el.lastname !== person.lastname
                    ),
                ],
            });
        const content = `Ein besorgter Badegast kommt zu dir: Gesucht wird ${
            person.firstname
        } ${person.lastname}, ${age(person.birthday)} Jahre alt, ${
            person.height
        } cm groß und trägt ein${randomClothing()} in der Farbe ${
            person.color
        }. Gib diese Suchmeldung an den Adler Bietigheim weiter!`;
        this.setState({ content });
    }

    handleCalc() {
        const content =
            "Löse folgende Rechenaufgabe und melde sowohl Aufgabe als auch Ergebnis an den Adler " +
            this.state.station.data.Ort +
            ": " +
            randomTerm();
        this.setState({ content });
    }

    async handleDelete() {
        this.state.selectedValues.forEach(async (val) => {
            await db
                .ref(
                    "chats/" +
                        this.props.location.state.city.data.name +
                        "/" +
                        val.replace(new RegExp(/(\s\((.*)\))/), "")
                )
                .set(null)
                .then(() => {
                    const successMessage =
                        "Die Nachrichten von " +
                        val.replace(new RegExp(/(\s\((.*)\))/), "") +
                        " wurden erfolgreich gelöscht!";
                    this.setState({ successMessage });
                });
        });
    }

    handleBridge() {
        if (this.state.selectedValues.length !== 1) {
            this.setState({ errorMessage: "Nur eine Station auswählen!" });
            return;
        }
        const seatedStations = this.state.otherStations.filter(
            (station) =>
                station.name !== "" &&
                this.state.selectedValues[0].replace(
                    new RegExp(/(\s\((.*)\))/),
                    ""
                ) !== station.Bezeichnung
        );
        if (seatedStations.length === 0) {
            this.setState({
                errorMessage:
                    "Es muss einen Überträger / 2 besetzte Stationen geben!",
            });
            return;
        }
        const station =
            seatedStations[
                Math.round(Math.random() * (seatedStations.length - 1))
            ];
        const content =
            "Du hast mehrfach versucht den Adler Bietigheim anzufunken, jedoch bist du außer Reichweite. Glücklicherweise bist du in Reichweite von " +
            station.Bezeichnung +
            ". Mache eine Funkbrücke über " +
            station.Bezeichnung +
            " und übermittle folgende Nachricht an den Adler Bietigheim: " +
            getMessage();
        this.setState({ content });
    }

    handleAlarm() {
        const content =
            "Alarm! Du entdeckst eine Person südlich der Badeinsel. Die Person droht unterzugehen! Dein Kamerad ist ins Wasser gegangen! Melde die Lage umgehend an den Adler Bietigheim!";
        this.setState({ content });
    }

    async handleWantingMore() {
        let stationsRef = firestore.collection(
            `cities/${this.props.location.state.city.id}/stations`
        );
        await stationsRef.doc(this.state.docId).update({
            wantingMore: true,
        });
        this.setState({ wantingMore: true });
        setTimeout(
            function () {
                stationsRef.doc(this.state.docId).update({
                    wantingMore: false,
                });
                this.setState({ wantingMore: false });
            }.bind(this),
            10000
        );
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
        let minutes = d.getMinutes();
        if (minutes < 10) minutes = "0" + minutes;
        const time = `${d.getDate()}.${
            d.getMonth() + 1
        }.${d.getFullYear()} ${d.getHours()}:${minutes}`;
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
                <div className="wrapper">
                    <div className="content">
                        {this.state.redirect ? this.redirect() : ""}
                        <h3>
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
                                        <span className="sr-only">
                                            Loading...
                                        </span>
                                    </div>
                                ) : (
                                    ""
                                )}
                                {this.state.chats.slice(-2).map((chat) => {
                                    //Last 2 messages
                                    if (chat.content === "") return "";
                                    const newMessage =
                                        Date.now() - chat.timestamp < 3000;
                                    const alarm = chat.content.includes(
                                        "Alarm!"
                                    );
                                    return (
                                        <p
                                            key={chat.timestamp}
                                            className={
                                                "chat-bubble " +
                                                (newMessage ? "new " : "") +
                                                (alarm ? "alarm" : "")
                                            }
                                            onClick={
                                                newMessage
                                                    ? (event) => {
                                                          event.target.classList.remove(
                                                              "new"
                                                          );
                                                      }
                                                    : () => {}
                                            }
                                        >
                                            {chat.content}
                                            <br />
                                            <span className="chat-time float-right">
                                                {this.formatTime(
                                                    chat.timestamp
                                                )}
                                            </span>
                                        </p>
                                    );
                                })}
                                <br />
                                {!this.state.wantingMore ? (
                                    <button
                                        className="btn btn-success"
                                        onClick={this.handleWantingMore}
                                    >
                                        Ich würde gerne eine Aufgabe bekommen!
                                    </button>
                                ) : (
                                    ""
                                )}
                            </div>
                        ) : (
                            <form onSubmit={this.handleSubmit} className="mx-3">
                                <div className="form-group select">
                                    <select
                                        multiple
                                        className="form-control"
                                        onChange={this.change}
                                    >
                                        {this.state.otherStations.map(
                                            (station) => {
                                                return (
                                                    <option
                                                        key={
                                                            station.Ort +
                                                            station.Bezeichnung
                                                        }
                                                        className={
                                                            station.wantingMore
                                                                ? "wantingMore"
                                                                : ""
                                                        }
                                                    >
                                                        {station.Bezeichnung}
                                                        {station.name !== ""
                                                            ? ` (${station.name})`
                                                            : ""}
                                                    </option>
                                                );
                                            }
                                        )}
                                    </select>
                                </div>
                                <div className="buttonColumn">
                                    <button
                                        className="btn btn-warning px-5 mb-2"
                                        onClick={this.handleCalc}
                                    >
                                        Rechenaufgabe
                                    </button>
                                    <button
                                        className="btn btn-warning px-5 mb-2"
                                        onClick={this.handlePerson}
                                    >
                                        Personensuche
                                    </button>
                                    <button
                                        className="btn btn-warning px-5 mb-2"
                                        onClick={this.handleBridge}
                                    >
                                        Funkbrücke
                                    </button>

                                    <button
                                        className="btn btn-warning px-5 mb-2"
                                        onClick={this.handleAlarm}
                                    >
                                        Alarm
                                    </button>
                                </div>
                                <br />
                                <button
                                    className="btn btn-danger px-5 mb-2"
                                    onClick={this.handleDelete}
                                >
                                    Chat löschen
                                </button>
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
                        {this.state.successMessage !== "" ? (
                            <div className="alert alert-success">
                                (
                                {setTimeout(
                                    function () {
                                        this.setState({ successMessage: "" });
                                    }.bind(this),
                                    5000
                                )}
                                )&nbsp;
                                {this.state.successMessage}
                            </div>
                        ) : (
                            ""
                        )}
                        {this.state.errorMessage !== "" ? (
                            <div className="alert alert-danger">
                                (
                                {setTimeout(
                                    function () {
                                        this.setState({ errorMessage: "" });
                                    }.bind(this),
                                    5000
                                )}
                                )&nbsp;{this.state.errorMessage}
                            </div>
                        ) : (
                            ""
                        )}
                        <div className="py-5 mx-3 info">
                            Eingeloggt als:{" "}
                            <strong className="text-info">
                                {this.state.user.email}
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
