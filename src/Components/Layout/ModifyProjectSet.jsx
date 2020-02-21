import React, { Component } from "react";
import ModifyProject from "../Project/ModifyProject";
import NavBar from "./NavBar";
import { Redirect } from "react-router-dom";

class ModifyProjectSet extends Component {
  render() {
    const { user } = this.props;
    const id = this.props.match.params.id;
    if (!user) return <Redirect to="/login" />;
    return (
      <div className="container-fluid table-background">
        <NavBar user={user} />
        <ModifyProject user={this.props.user} projectId={id} />
      </div>
    );
  }
}

export default ModifyProjectSet;
