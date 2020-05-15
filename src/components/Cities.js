import React from "react";
import { Redirect } from "react-router-dom";
import { auth } from "../services/firebase";

export default class Cities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: auth().currentUser,
            redirect: false,
        };
    }

    redirect = () => {
        return (
            <Redirect
                to={{
                    pathname: "/dlrgfunk/join",
                    state: { city: this.props.city },
                }}
            />
        );
    };

    render() {
        return (
            <div className="input-group">
                {this.state.redirect ? this.redirect() : ""}
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        {this.props.city.data.name}
                    </div>
                </div>
                <button
                    className="form-control cityJoinBtn btn-success"
                    aria-describedby="btnGroupAddon"
                    onClick={() => {
                        this.setState({ redirect: true });
                    }}
                >
                    Beitreten
                </button>
            </div>
        );
    }
}
