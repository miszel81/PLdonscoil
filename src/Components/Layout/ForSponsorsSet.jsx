import React from "react";
import SchoolSearchBox from "../Project/SchoolSearchBox";
import NavBar from "./NavBar";
import { Helmet } from "react-helmet";

const ForSponsorsSet = props => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Sponsors</title>
      </Helmet>
      <div className="container-fluid forschools-background full-page">
        <NavBar user={props.user} />
        <div className="jumbotron for-school">
          <h3>Available school projects</h3>
          <SchoolSearchBox props={props} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ForSponsorsSet;
