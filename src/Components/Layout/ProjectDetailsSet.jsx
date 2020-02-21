import React from "react";
import ProjectDetails from "../Project/ProjectDetails";
import NavBar from "./NavBar";

const ProjectDetailsSet = props => {
  const id = props.match.params.id;
  const { user } = props;
  return (
    <div className="container-fluid table-background">
      <NavBar user={user} />
      <ProjectDetails projectId={id} loggedInUser={user} props={props} />
    </div>
  );
};

export default ProjectDetailsSet;
