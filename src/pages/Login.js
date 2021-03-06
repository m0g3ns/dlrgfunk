import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import {
    signin,
    signInWithGoogle,
    signInWithGitHub,
    signInAnonymous,
} from "../helpers/auth";

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            error: null,
            email: "",
            password: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.googleSignIn = this.googleSignIn.bind(this);
        this.githubSignIn = this.githubSignIn.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({ error: "" });
        try {
            await signin(this.state.email, this.state.password);
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    async googleSignIn() {
        try {
            await signInWithGoogle();
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    async githubSignIn() {
        try {
            await signInWithGitHub();
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    async anonSignIn() {
        try {
            await signInAnonymous();
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    render() {
        return (
            <div className="container">
                <Header></Header>
                <form
                    className="mt-5 py-5 px-5"
                    autoComplete="off"
                    onSubmit={this.handleSubmit}
                >
                    <h1>
                        Anmelden im
                        <Link className="title ml-2" to="/dlrgfunk/">
                            DLRG Online Funk
                        </Link>
                    </h1>
                    <p className="lead">
                        Fülle die Felder unten aus, um dich einzuloggen.
                    </p>
                    <div className="form-group">
                        <input
                            className="form-control loginmail"
                            placeholder="Email"
                            name="email"
                            type="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control loginmail"
                            placeholder="Passwort"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                            type="password"
                        />
                    </div>
                    <div className="form-group">
                        {this.state.error ? (
                            <p className="text-danger">{this.state.error}</p>
                        ) : null}
                        <button
                            className="btn btn-primary px-5 loginbtn"
                            type="submit"
                        >
                            Anmelden
                        </button>
                    </div>
                    <p>Du kannst dich auch mit folgenden Anbietern anmelden:</p>
                    <button
                        className="btn btn-danger mr-2 loginbtn"
                        type="button"
                        onClick={this.googleSignIn}
                    >
                        Anmelden mit Google
                    </button>
                    <button
                        className="btn btn-secondary mr-2 loginbtn"
                        type="button"
                        onClick={this.githubSignIn}
                    >
                        Anmelden mit GitHub
                    </button>
                    <button
                        className="btn btn-dark loginbtn"
                        type="button"
                        onClick={this.anonSignIn}
                    >
                        Anonym Anmelden
                    </button>
                    <hr />
                    <p>
                        Noch keinen Account?{" "}
                        <Link to="/dlrgfunk/signup">Registrieren</Link>
                    </p>
                </form>
            </div>
        );
    }
}
