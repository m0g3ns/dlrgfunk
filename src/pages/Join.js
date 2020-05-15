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
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.myRef = React.createRef();
    }

    getCity() {
        if (this.props.location.state !== undefined)
            return this.props.location.state.city;
        return null;
    }

    async componentDidMount() {
        this.setState({ readError: null, loadingStations: true });
        try {
            firestore
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
        } catch (error) {
            this.setState({ readError: error.message, loadingChats: false });
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
        try {
        } catch (error) {
            this.setState({ writeError: error.message });
        }
    }

    render() {
        const stations = this.state.stations.map((station) => {
            return (
                <Funkteilnehmer
                    key={station.id}
                    city={this.state.city}
                    station={station}
                />
            );
        });
        return (
            <div>
                <Header />
                <div className="join">
                    {this.state.city === null ? (
                        <Redirect to="/dlrgfunk/city" />
                    ) : (
                        console.log(this.state.city)
                    )}
                    {this.state.loadingStations ? (
                        <div
                            className="spinner-border text-success"
                            role="status"
                        >
                            <span className="sr-only">Loading...</span>
                        </div>
                    ) : (
                        stations
                    )}
                </div>
            </div>
        );
    }
}
