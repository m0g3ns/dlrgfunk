import React, { Component } from "react";
import {
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Teacher from "./pages/Teacher";
import NotFound from "./pages/NotFound";
import Join from "./pages/Join";
import City from "./pages/City";

import { auth } from "./services/firebase";
import "./styles.css";

function PrivateRoute({ component: Component, authenticated, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) =>
                authenticated === true ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/dlrgfunk/login",
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) =>
                authenticated === false ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/dlrgfunk/city" />
                )
            }
        />
    );
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            authenticated: false,
            loading: true,
        };
    }

    componentDidMount() {
        auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    authenticated: true,
                    loading: false,
                });
            } else {
                this.setState({
                    authenticated: false,
                    loading: false,
                });
            }
        });
    }

    render() {
        return this.state.loading === true ? (
            <div
                className="spinner-border text-success spinner-center"
                role="status"
            >
                <span className="sr-only">Loading...</span>
            </div>
        ) : (
            <Router>
                <Switch>
                    <Route
                        exact
                        path="/dlrgfunk/"
                        render={(props) => (
                            <Home
                                {...props}
                                authenticated={this.state.authenticated}
                            />
                        )}
                    />
                    <PrivateRoute
                        path="/dlrgfunk/teacher"
                        authenticated={this.state.authenticated}
                        component={Teacher}
                    />
                    <PrivateRoute
                        path="/dlrgfunk/join"
                        authenticated={this.state.authenticated}
                        component={Join}
                    />
                    <PrivateRoute
                        path="/dlrgfunk/city"
                        authenticated={this.state.authenticated}
                        component={City}
                    />
                    <PrivateRoute
                        path="/dlrgfunk/chat"
                        authenticated={this.state.authenticated}
                        component={Chat}
                    />
                    <PublicRoute
                        path="/dlrgfunk/signup"
                        authenticated={this.state.authenticated}
                        component={Signup}
                    />
                    <PublicRoute
                        path="/dlrgfunk/login"
                        authenticated={this.state.authenticated}
                        component={Login}
                    />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

export default App;
