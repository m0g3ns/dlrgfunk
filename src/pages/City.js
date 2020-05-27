import React, { Component } from "react";
import Header from "../components/Header";
import Cities from "../components/Cities";
import { auth } from "../services/firebase";
import { firestore } from "../services/firebase";

export default class Join extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: auth().currentUser,
            cities: [],
            readError: null,
            writeError: null,
            loadingCities: false,
        };
        this.myRef = React.createRef();
    }

    async componentDidMount() {
        this.setState({ readError: null, loadingCities: true });
        try {
            firestore
                .collection("cities")
                .get()
                .then((snapshot) => {
                    let cities = [];
                    snapshot.forEach((snap) => {
                        cities.push({
                            id: snap.id,
                            data: snap.data(),
                        });
                    });
                    cities.sort();
                    this.setState({ cities });
                    this.setState({ loadingCities: false });
                });
        } catch (error) {
            this.setState({ readError: error.message, loadingCities: false });
        }
    }

    render() {
        const cities = this.state.cities.map((city) => {
            return <Cities key={city.id} city={city} />;
        });
        return (
            <div>
                <Header />
                <div className="cities">
                    {this.state.loadingCities ? (
                        <div
                            className="spinner-border text-success"
                            role="status"
                        >
                            <span className="sr-only">Loading...</span>
                        </div>
                    ) : (
                        cities
                    )}
                </div>
            </div>
        );
    }
}
