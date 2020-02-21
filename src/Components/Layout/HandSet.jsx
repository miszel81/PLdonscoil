import React, { Component } from "react";
import Hand from "../Project/Hand";
import NavBar from "./NavBar";

class HandSet extends Component {
  render() {
    const { user } = this.props;
    const id = this.props.match.params.id;

    return (
      <div className="container-fluid table-background">
        <NavBar user={user} />
        <Hand user={this.props.user} props={this.props} projectId={id} />
      </div>
    );
  }
}

export default HandSet;
