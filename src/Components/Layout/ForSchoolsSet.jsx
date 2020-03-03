import React from "react";
import Partners from "../Layout/Partners/Partners";
import TrendingProjects from "../Layout/TrendingProjects/TrendingProjects";
import SponsorSearchBox from "../Project/SponsorSearchBox";
import { Link } from "react-router-dom";
import "./ForschoolSet.css";
import { Helmet } from "react-helmet";
import NavBar from "./NavBar";

const ForSchoolsSet = props => {
  const { user } = props;
  return (
    <div className="nothing">
      <Helmet>
        <title>Schools</title>
      </Helmet>
      <div className="container-fluid schools-background">
        <NavBar user={user} />
      </div>

      <div className="container-fluid ">
        <div className="jumbotron jumbotronWhite">
          <div className="container mb-5">
            <h1 className="h-text-fontMainTitle text-center mb-3 mt-3">
              Apply for fantastic projects, initiatives <br />
              and funding
            </h1>
          </div>

          <section className="container u-relative mt-3">
            {/* <div className="u-absolute u-right0 u-width50pct u-height600"></div> */}
            <div className="u-maxWIdth1000 u-marginAuto u-paddingBottom60 u-relative mt-3">
              <div className="h-text-font h-text-backround u-padding60 u-paddingBottom100 u-foreground  shadow u-borderBox ">
                <h1 className="h-text-fontMain">
                  Check out projects in your area now.
                </h1>
                <SponsorSearchBox props={props} />
              </div>
            </div>
          </section>

          <div className="container">
            <div className="jumbotron jumbotron-trending">
              <TrendingProjects props={props} />
            </div>
          </div>

          {/* <div className="jumbotron for-school">
          <SponsorSearchBox props={props} />
        </div> */}
        </div>

        <div className="container">
          {!user && (
            <section className="container u-relative">
              <div className="u-absolute u-left0 u-width50pct u-height600 forschools-background-image-register"></div>
              <div className="u-maxWIdth1000 u-marginAuto u-paddingTop60 u-paddingBottom60 u-relative">
                <div className="h-text-font h-text-backround u-rightn40 u-padding60 u-paddingBottom100 u-foreground u-width60pct shadow u-borderBox u-marginTop8">
                  <h1 className="h-text-fontMain">
                    Join us and promote your own ideas and programs.
                  </h1>
                  <Link to="/register/school" className="btn btn-primary">
                    Register school
                  </Link>
                </div>
              </div>
            </section>
          )}
          <Partners />
        </div>
      </div>
    </div>
  );
};

export default ForSchoolsSet;
