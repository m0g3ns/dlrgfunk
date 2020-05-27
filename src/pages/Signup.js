import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    signup,
    signInWithGoogle,
    signInWithGitHub,
    signInAnonymous,
} from "../helpers/auth";
import Header from "../components/Header";

export default class SignUp extends Component {
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
            await signup(this.state.email, this.state.password);
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
                <form className="mt-5 py-5 px-5" onSubmit={this.handleSubmit}>
                    <h1>
                        Registrieren im
                        <Link className="title ml-2" to="/dlrgfunk/">
                            DLRG Online Funk
                        </Link>
                    </h1>
                    <p className="lead">
                        Füll die Felder unten aus um dich zu registrieren.
                    </p>
                    <div className="form-group">
                        <input
                            className="form-control signupmail"
                            placeholder="Email"
                            name="email"
                            type="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                        ></input>
                    </div>
                    <div className="form-group signupmail">
                        <input
                            className="form-control signupmail"
                            placeholder="Password"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                            type="password"
                        ></input>
                    </div>
                    <div className="form-group">
                        {this.state.error ? (
                            <p className="text-danger">{this.state.error}</p>
                        ) : null}
                        <button
                            className="btn btn-primary px-5 signupbtn"
                            type="submit"
                        >
                            Registrieren
                        </button>
                    </div>
                    <p>
                        Du kannst dich auch mit folgenden Anbietern
                        registrieren:
                    </p>
                    <button
                        className="btn btn-danger mr-2 signupbtn"
                        type="button"
                        onClick={this.googleSignIn}
                    >
                        Registrieren mit Google
                    </button>
                    <button
                        className="btn btn-secondary mr-2 signupbtn"
                        type="button"
                        onClick={this.githubSignIn}
                    >
                        Registrieren mit GitHub
                    </button>
                    <button
                        className="btn btn-dark loginbtn"
                        type="button"
                        onClick={this.anonSignIn}
                    >
                        Anonym Anmelden
                    </button>
                    <hr></hr>
                    <p>
                        Du hast dich schon registriert?{" "}
                        <Link to="/dlrgfunk/login">Login</Link>
                    </p>
                </form>
            </div>
        );
    }
}
