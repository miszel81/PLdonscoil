import React, { Component } from "react";
import NewUser from "../User/NewUser";
// import { Redirect } from "react-router-dom";
import NavBar from "./NavBar";

class NewUserSet extends Component {
  render() {
    const { user } = this.props;
    // if (!user) return <Redirect to="/login" />;
    return (
      <div className="container-fluid table-background">
        <NavBar user={user} />
        <NewUser user={user} />
      </div>
    );
  }
}

export default NewUserSet;
