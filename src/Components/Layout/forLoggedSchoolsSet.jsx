import React from "react";
import SponsorSearchBox from "../Project/SponsorSearchBox";
import NavBar from "./NavBar";
import { Helmet } from "react-helmet";
import TrendingProjects from "../Layout/TrendingProjects/TrendingProjects";

const forLoggedSchoolsSet = props => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Search for projects</title>
      </Helmet>
      <div className="container-fluid forschools-background">
        <NavBar user={props.user} />
        <div className="jumbotron for-school">
          <h3>Projects available for schools:</h3>
          <SponsorSearchBox props={props} />
        </div>
        <div
          className="jumbotron for-school"
          style={{ backgroundColor: "white" }}
        >
          <div className="">
            <TrendingProjects props={props} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default forLoggedSchoolsSet;
