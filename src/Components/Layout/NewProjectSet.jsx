import React, { Component } from "react";
import NewProject from "../Project/NewProject";
import NavBar from "./NavBar";
import { Redirect } from "react-router-dom";

class NewProjectSet extends Component {
  render() {
    const { user } = this.props;
    if (!user) return <Redirect to="/login" />;
    return (
      <React.Fragment>
        <div className="container-fluid create-project-background">
          <NavBar user={user} />
          <NewProject user={user} />
        </div>
      </React.Fragment>
    );
  }
}

export default NewProjectSet;
