import React, { Component } from "react";
import ProjectsTable from "../Project/ProjectsTable";

class SponsorProjectSet extends Component {
  state = {};

  render() {
    const countyName = this.props.match.params.countyName;

    return (
      <div>
        <ProjectsTable countyName={countyName} projectType="Sponsor" />
      </div>
    );
  }
}

export default SponsorProjectSet;
