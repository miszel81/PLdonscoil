import React from "react";
import Card from "./Card";

const ProjectCards = ({ projects }) => {
  // const { length: count } = projects;
  if (projects.length === 0)
    return (
      <div className="container">
        <p className="text-center">No school projects at the moment. </p>
      </div>
    );
  return (
    <div className="container text-center">
      <h1>Support our projects</h1>

      <div className="row justify-content-center mt-3">
        {/* Project card template */}
        {projects.map(project => (
          <Card key={project._id} project={project} />
        ))}

        {/* END OF PROJECT CARD TEMPLATE */}
      </div>
    </div>
  );
};

export default ProjectCards;
