import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <Header></Header>
                <section>
                    <div className="jumbotron jumbotron-fluid py-5">
                        <div className="container text-center py-5">
                            <h1 className="display-4">
                                Willkommen zu DLRG Online Funkübungen
                            </h1>
                            <p className="lead">
                                Ein Programm um Erfahrung im Funken außerhalb
                                des Wachdiensts zu sammeln.
                            </p>
                            {!this.props.authenticated ? (
                                <div className="mt-4">
                                    <Link
                                        className="btn btn-primary px-5 mr-3"
                                        to="/dlrgfunk/signup"
                                    >
                                        Registrieren
                                    </Link>
                                    <Link
                                        className="btn px-5"
                                        to="/dlrgfunk/login"
                                    >
                                        Einloggen
                                    </Link>
                                </div>
                            ) : (
                                <div className="mt-4">
                                    <Link
                                        className="btn btn-primary px-5 mr-3"
                                        to="/dlrgfunk/join"
                                    >
                                        Übung beitreten
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
                <Footer></Footer>
            </div>
        );
    }
}
