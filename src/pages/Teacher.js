import React, { Component } from "react";
import Header from "../components/Header";
import { auth } from "../services/firebase";
import { firestore } from "../services/firebase";

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: auth().currentUser,
            readError: null,
            writeError: null,
            firstname: "",
            lastname: "",
            birthday: "",
            color: "",
            height: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.myRef = React.createRef();
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({ writeError: null });
        try {
            await firestore.collection("persons").add({
                birthday: this.state.birthday,
                color: this.state.color,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                height: this.state.height,
            });
            this.setState({
                birthday: "",
                color: "",
                firstname: "",
                lastname: "",
                height: "",
            });
        } catch (error) {
            this.setState({ writeError: error.message });
        }
    }

    updateInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        return (
            <div>
                <Header />
                <form onSubmit={this.handleSubmit} className="mx-3 teacher">
                    <input
                        className="form-control"
                        type="text"
                        name="firstname"
                        placeholder="Vorname"
                        onChange={this.updateInput}
                        value={this.state.firstname}
                    />
                    <br />
                    <input
                        className="form-control"
                        type="text"
                        name="lastname"
                        placeholder="Nachname"
                        onChange={this.updateInput}
                        value={this.state.lastname}
                    />
                    <br />
                    <input
                        className="form-control"
                        type="number"
                        name="height"
                        placeholder="Größe in cm"
                        onChange={this.updateInput}
                        value={this.state.height}
                    />
                    <br />
                    <input
                        className="form-control"
                        type="date"
                        name="birthday"
                        placeholder="Geburtstag"
                        onChange={this.updateInput}
                        value={this.state.birthday}
                    />
                    <br />
                    <input
                        className="form-control"
                        type="text"
                        name="color"
                        placeholder="Farbe"
                        onChange={this.updateInput}
                        value={this.state.color}
                    />
                    <br />
                    {this.state.writeError ? (
                        <p className="text-danger">{this.state.writeError}</p>
                    ) : null}
                    <button type="submit" className="btn btn-submit px-5 mt-4">
                        Absenden
                    </button>
                </form>
                <div className="py-5 mx-3">
                    Eingeloggt als:{" "}
                    <strong className="text-info">
                        {this.state.user.email}
                    </strong>
                </div>
            </div>
        );
    }
}
