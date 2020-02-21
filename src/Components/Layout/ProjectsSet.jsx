import React, { Component } from "react";
import ProjectsTable from "../Project/ProjectsTable";

import NavBar from "./NavBar";

class ProjectsSet extends Component {
  render() {
    const projectType = this.props.match.params.projectType;
    const { user } = this.props;
    return (
      <div className="container-fluid table-background">
        <NavBar user={user} />
        <ProjectsTable projectType={projectType} />
      </div>
    );
  }
}

export default ProjectsSet;
