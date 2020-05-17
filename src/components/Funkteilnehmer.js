import React from "react";
import { auth } from "../services/firebase";
import { firestore } from "../services/firebase";
import { Redirect } from "react-router-dom";
import trash from "../media/trash.svg";
import check from "../media/check.svg";

export default class Funkteilnehmer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: auth().currentUser,
            username: "",
            errorWrite: "",
            redirect: false,
        };

        this.updateInput = this.updateInput.bind(this);
        this.redirect = this.redirect.bind(this);
        this.linkClicked = this.linkClicked.bind(this);

        this.ref = React.createRef();
    }

    updateInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    redirect = () => {
        return (
            <Redirect
                to={{
                    pathname: "/dlrgfunk/chat",
                    state: {
                        station: this.props.station,
                        city: this.props.city,
                    },
                }}
            />
        );
    };

    async linkClicked(e) {
        if (
            this.state.username !== "" &&
            this.state.user.uid !== this.props.station.data.uid &&
            this.props.station.data.uid === ""
        ) {
            //JOIN ACTION
            let cancelled = false;
            let stationsRef = firestore.collection(
                `cities/${this.props.city.id}/stations`
            );
            let stationRef = stationsRef.doc(this.props.station.id);

            await stationsRef
                .where("uid", "==", this.state.user.uid)
                .get()
                .then((snaps) => {
                    snaps.forEach((snap) => {
                        this.setState({
                            errorWrite:
                                "Bitte zuerst aus der anderen Sitzung ausloggen!",
                        });
                        cancelled = true;
                    });
                });

            if (cancelled) return;

            await stationRef.get().then((val) => {
                //Checken ob Station schon besetzt
                const data = val.data();
                if (data.uid !== "" || data.name !== "") cancelled = true;
            });

            if (cancelled) return;

            if (this.props.station.data.Bezeichnung === "") {
                const name = prompt("Admin Passwort");
                if (name !== "1234") {
                    return;
                }
            }

            await stationRef
                .update({
                    uid: this.state.user.uid,
                    name: this.state.username,
                })
                .then((res) => {
                    this.setState({ redirect: true });
                })
                .catch((err) => {
                    this.setState({ errorWrite: err });
                    e.preventDefault();
                });
        } else if (
            this.state.user.uid === this.props.station.data.uid &&
            [...e.currentTarget.classList].includes("joinBtn")
            //REJOIN ACTION
        ) {
            this.setState({ redirect: true });
        } else if (this.state.user.uid === this.props.station.data.uid) {
            //DELETE ACTION
            let stationRef = firestore
                .collection(`cities/${this.props.city.id}/stations`)
                .doc(this.props.station.id);

            await stationRef
                .update({
                    uid: "",
                    name: "",
                })
                .then((res) => {
                    this.setState({
                        username: "",
                    });
                })
                .catch((err) => {
                    this.setState({ errorWrite: err });
                    e.preventDefault();
                });
        }
    }

    render() {
        if (this.state.errorWrite !== "") {
            alert(this.state.errorWrite);
            this.setState({ errorWrite: "" });
        }

        return (
            <div className="funkteilnehmer">
                {this.state.redirect ? this.redirect() : ""}
                <span>
                    {this.props.station.data.Rufname +
                        " " +
                        this.props.station.data.Ort +
                        " " +
                        this.props.station.data.Bezeichnung}
                </span>
                <input
                    className="funk-name form-control"
                    type="text"
                    name="username"
                    placeholder="Name"
                    onChange={this.updateInput}
                    value={
                        this.props.station.data.uid !== ""
                            ? this.props.station.data.name
                            : this.state.username
                    }
                    disabled={
                        this.props.station.data.uid !== "" ? "disabled" : ""
                    }
                />
                <button
                    className={
                        this.props.station.data.uid !== this.state.user.uid
                            ? this.props.station.data.uid !== ""
                                ? "btn btn-primary px-5 ml-3 disabled"
                                : "btn btn-primary px-5 ml-3"
                            : "btn btn-danger delete"
                    }
                    onClick={this.linkClicked}
                    disabled={
                        this.props.station.data.uid !== "" &&
                        this.props.station.data.uid !== this.state.user.uid
                            ? "disabled"
                            : ""
                    }
                >
                    {this.props.station.data.uid !== this.state.user.uid ? (
                        "Beitreten"
                    ) : (
                        <img src={trash} alt="trash" />
                    )}
                </button>
                {this.props.station.data.uid === this.state.user.uid ? (
                    <button
                        className="btn btn-success joinBtn"
                        onClick={this.linkClicked}
                    >
                        <img src={check} alt="check" />
                    </button>
                ) : (
                    ""
                )}
            </div>
        );
    }
}
