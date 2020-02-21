// import React from "react";
import React, { Component } from "react";
import Login from "../../Components/Auth/Login";
import { Helmet } from "react-helmet";
import { Redirect } from "react-router-dom";

import NavBar from "./NavBar";
class LoginSet extends Component {
  render() {
    if (this.props.user) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <React.Fragment>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <div className="container-fluid table-background full-page">
          <NavBar user={this.props.user} />
          <Login location={this.props.location} />
        </div>
      </React.Fragment>
    );
  }
}

export default LoginSet;
