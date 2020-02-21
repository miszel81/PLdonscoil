import React, { Component } from "react";
import "./SchoolProfile.css";
import "../Common/Loader.css";
import ProjectCards from "../Project/ProjectCards";
import {
  getSchoolDetails,
  getSchoolProjects
} from "../../services/schoolServices";

class SchoolProfile extends Component {
  state = { school: "", projects: [], errors: {}, loading: true };

  async componentDidMount() {
    const { data: school } = await getSchoolDetails(this.props.id);
    const { data: projects } = await getSchoolProjects(this.props.id);
    this.setState({ school, projects, loading: false });
    // this.setState({ loading: false });
  }

  render() {
    const { school } = this.state;

    return (
      <div>
        {this.state.loading ? (
          <div className="lds-roller container">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <div className="container-fluid">
            {/* <div className="jumbotron SchoolDetails-photo" /> */}
            <div className="container-fluid">
              <div className="jumbotron">
                {school.imgUrl ? (
                  <div className="container img-display">
                    <img src={school.imgUrl} alt="donscoil" />
                  </div>
                ) : null}
                <p className="schoolName">
                  Hello! Welcome to {school.accountName}!
                </p>
                <h1>{school.description}</h1>
                <h1>
                  Visit our website: {school.website} or email us:{" "}
                  {school.contactEmail}
                </h1>
                <div className="row">
                  <ProjectCards projects={this.state.projects} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SchoolProfile;
