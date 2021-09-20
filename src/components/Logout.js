import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { handleLogout } from "../actions/shared";

class Logout extends React.Component{

    componentDidMount(){
        this.props.dispatch(handleLogout())
    }

    render(){
        return(
            <Redirect to="login" />
        )
    }
}

export default connect()(Logout);