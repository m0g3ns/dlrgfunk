import React, { Component } from "react";
import Header from "../components/Header";
import Funkteilnehmer from "../components/Funkteilnehmer";
import { Redirect } from "react-router-dom";
import { auth } from "../services/firebase";
import { firestore } from "../services/firebase";

export default class Join extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: auth().currentUser,
            city: this.getCity(),
            stations: [],
            readError: null,
            writeError: null,
            loadingStations: false,
            newRufname: "Adler",
            newOrt: this.getCityName(),
            newBezeichnung: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeAllParticipants = this.removeAllParticipants.bind(this);
        this.myRef = React.createRef();
    }

    getCity() {
        if (this.props.location.state !== undefined)
            return this.props.location.state.city;
        return null;
    }

    getCityName() {
        if (this.props.location.state !== undefined)
            return this.props.location.state.city.data.name;
        return null;
    }

    getAdmin() {
        this.state.stations.forEach((station) => {
            if (
                station.uid === this.state.user.uid &&
                station.Bezeichnung === ""
            )
                return true;
        });
        return false;
    }

    async componentDidMount() {
        this.setState({ readError: null, loadingStations: true });
        try {
            await firestore
                .collection(`cities/${this.state.city.id}/stations`)
                .get()
                .then((snapshot) => {
                    let stations = [];
                    snapshot.forEach((snap) => {
                        stations.push({
                            id: snap.id,
                            data: snap.data(),
                            input: "",
                        });
                    });
                    stations.sort(function (a, b) {
                        if (a.data.Bezeichnung < b.data.Bezeichnung) return -1;
                        if (a.data.Bezeichnung >= b.data.Bezeichnung) return 1;
                        return 0;
                    });
                    this.setState({ stations });
                    this.setState({ loadingStations: false });
                });
            this.listener = firestore
                .collection(`cities/${this.state.city.id}/stations`)
                .where("Bezeichnung", ">=", "")
                .onSnapshot((snaps) => {
                    const newStations = [];
                    snaps.forEach((snap) => {
                        newStations.push({
                            id: snap.id,
                            data: snap.data(),
                            input: "",
                        });
                    });
                    newStations.sort(function (a, b) {
                        if (a.Bezeichnung < b.Bezeichnung) return -1;
                        if (a.Bezeichnung >= b.Bezeichnung) return 1;
                        return 0;
                    });
                    this.setState({ stations: newStations });
                });
        } catch (error) {
            this.setState({ readError: error.message, loadingChats: false });
        }
    }

    componentWillUnmount() {
        if (typeof this.listener === "function") {
            this.listener();
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({ writeError: null });
        try {
            if (this.state.newBezeichnung === "") return;
            firestore
                .collection("cities")
                .doc(this.state.city.id)
                .collection("stations")
                .add({
                    Rufname: this.state.newRufname,
                    Ort: this.state.newOrt,
                    Bezeichnung: this.state.newBezeichnung,
                    uid: "",
                    name: "",
                })
                .then(() => {
                    this.setState({
                        stations: [
                            ...this.state.stations,
                            {
                                id: Date.now(),
                                data: {
                                    Rufname: this.state.newRufname,
                                    Ort: this.state.newOrt,
                                    Bezeichnung: this.state.newBezeichnung,
                                    uid: "",
                                    name: "",
                                    wantingMore: false,
                                },
                            },
                        ],
                    });
                });
        } catch (error) {
            this.setState({ writeError: error.message });
        }
    }

    async removeAllParticipants(e) {
        const password = prompt("Admin Passwort");
        if(password !== "1234") return;
        this.state.stations.map(async (station) => {
            let stationRef = firestore
                .collection(`cities/${this.state.city.id}/stations`)
                .doc(station.id);
            await stationRef
                .update({
                    uid: "",
                    name: "",
                })
                .catch((err) => {
                    this.setState({ errorWrite: err });
                    e.preventDefault();
                });
        })
    }

    render() {
        return (
            <div>
                <Header />
                <div className="join">
                    {this.state.city === null ? (
                        <Redirect to="/dlrgfunk/city" />
                    ) : (
                        ""
                    )}
                    {this.state.loadingStations ? (
                        <div
                            className="spinner-border text-success"
                            role="status"
                        >
                            <span className="sr-only">Loading...</span>
                        </div>
                    ) : (
                        this.state.stations.map((station) => {
                            return (
                                <Funkteilnehmer
                                    key={station.id}
                                    city={this.state.city}
                                    station={station}
                                />
                            );
                        })
                    )}
                    {this.state.user.uid === "6GD9eEtrrLZfwThwQtPEFKtQLqA3" ? (
                        <form onSubmit={this.handleSubmit} className="addForm">
                            <div className="form-group">
                                <label>
                                    Rufname
                                    <input
                                        type="text"
                                        className="form-control addBtn"
                                        name="newRufname"
                                        value={this.state.newRufname}
                                        onChange={this.handleChange}
                                        disabled
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <label>
                                    Ort
                                    <input
                                        type="text"
                                        className="form-control addBtn"
                                        name="newOrt"
                                        value={this.state.newOrt || ""}
                                        onChange={this.handleChange}
                                        disabled
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <label>
                                    Bezeichnung
                                    <input
                                        type="text"
                                        className="form-control addBtn"
                                        name="newBezeichnung"
                                        value={this.state.newBezeichnung}
                                        onChange={this.handleChange}
                                    />
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Hinzufügen
                            </button>
                        </form>
                    ) : (
                        ""
                    )}
                    <button 
                        onClick={this.removeAllParticipants}
                        className="btn btn-danger"
                    >
                        Alle Teilnehmer entfernen
                    </button>
                </div>
            </div>
        );
    }
}
