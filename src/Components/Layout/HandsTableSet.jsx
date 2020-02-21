import React, { Component } from "react";
import HandsTable from "../Project/HandsTable";
import { Redirect } from "react-router-dom";

import NavBar from "./NavBar";

class HandsSet extends Component {
  render() {
    const { user } = this.props;
    if (!user) return <Redirect to="/login" />;
    const projectId = this.props.match.params.projectId;

    return (
      <div className="container-fluid table-background">
        <NavBar user={user} />
        <HandsTable projectId={projectId} />
      </div>
    );
  }
}

export default HandsSet;
