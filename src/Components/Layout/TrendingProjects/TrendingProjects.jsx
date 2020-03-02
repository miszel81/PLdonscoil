import React, { Component } from "react";
// import "./TrendingProjects.css";
import { getTrendingProjects } from "../../../services/projectService";
import Card from "../../Project/Card";

class TrendingProjects extends Component {
  state = { projects: [], errors: {}, projectType: "" };

  async componentDidMount() {
    // DETERMINE PROJECT TYPE
    let projectType = "School";
    try {
      projectType = this.props.props.match.path === "/" ? "School" : "Sponsor";
      if (this.props.props.location.pathname === "/forsupporters") {
        projectType = "School";
      }
    } catch (error) {}

    // REQUEST PROJECT OF THE ABOVE PROJECT TYPE
    try {
      const { data: projects } = await getTrendingProjects(projectType);
      this.setState({ projects, projectType });
    } catch (error) {}
  }
  render() {
    return (
      <div className="container jumbotronWhite">
        {/* CHECK WHAT TYPE OF TRENDING PROJECTS ARE REQUIRED SCHOOL OR SPONSOR*/}
        <h3 className="mt-5 h-text-fontMainTrending mb-3 trendingHeaderMobile">
          What's popular now?
        </h3>
        <div className="row justify-content-center mt-5">
          {this.state.projects.map(project => (
            <Card key={project._id} project={project} />
          ))}
        </div>
      </div>
    );
  }
}

export default TrendingProjects;
