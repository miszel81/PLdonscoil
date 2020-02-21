import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
// import SearchImage from "../Layout/img/search3.png";
// import CreateImage from "../Layout/img/create.png";
// import RegisterImage from "../Layout/img/register2.png";
// import SponsorImage from "../Layout/img/sponsor.png";
// import SchoolImage from "../Layout/img/school.png";
import "./MainPageHowJoin.css";

const About = () => {
  return (
    <React.Fragment>
      <div className="container howItWorks">
        <div className="howItWorks-header">
          <p className="text-left">How donscoil works?</p>
        </div>
        <div className="howItWorks-content">
          <div className="howItWorks-search">
            <div className="icon">
              <i className="fas fa-search fa-5x"></i>
            </div>
            <h3>Search</h3>
            <div className="search-text">
              <p>
                Start with a search. Check out the projects both from {""}
                <Link to="/forschools">sponsors </Link>
                or <Link to="/forsupporters"> schools </Link> across Ireland to
                find founding or inspiration.
              </p>
            </div>
          </div>
          <div className="howItWorks-register">
            <div className="icon">
              <i className="fas fa-user-plus fa-5x"></i>
            </div>
            <h3>Register</h3>
            <div className="register-text">
              <p>
                Use our 60 day free trial account. Create your identity as a{" "}
                <Link to="/register/school"> school </Link>
                or <Link to="/register/sponsor"> sponsor </Link>
                and explore the world of donscoil. Apply for projects from
                sponsors or promote your own campaigns.
              </p>
            </div>
          </div>
          <div className="howItWorks-create">
            <div className="icon">
              <i className="fas fa-paint-brush fa-5x"></i>
            </div>
            <h3>Create</h3>
            <div className="create-text">
              <p>
                {" "}
                Transform your needs into projects. Doesn't matter if you need a
                couple of books or a new computer lab. It all starts with
                letting people know about it.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <section className="u-relative about-background-mainpage">
        <div className="u-maxWIdth1000 u-marginAuto u-paddingTop60 u-paddingBottom60 u-relative">
          <div className="h-text-font u-paddingTop100 u-paddingBottom100">
            <h1 className="h-text-fontMain u-textAlignCenter">
              How donscoil works
            </h1>
            <div className="u-flex u-flexWrap u-maxWidth1000 u-marginAuto u-relative">
              <div className="u-paddingRight15 u-paddingLeft15 u-paddingTop60 u-xs-paddingRight30">
                <div className="u-height165 u-flexEnd u-relative u-marginBottom15 u-xs-height140">
                  <img src={SearchImage} className="u-flex0" alt="search" />
                </div>
                <div className="u-flexTop">
                  <div className="brand-numberedPill u-flex0 u-marginRight15 u-marginTop5">
                    1
                  </div>
                  <div className="u-width260 u-xs-width175">
                    <h3 className="h-text-fontTitle u-paddingBottom15 u-fontSize20">
                      Search
                    </h3>
                    <p className="h-text-font">
                      Start with a search. Check out the projects both from
                      <Link to="/forschools"> sponsors </Link>
                      or <Link to="/forsupporters"> schools </Link> across
                      Irealnd to find founding or inspiration.
                    </p>
                  </div>
                </div>
              </div>
              <div className="u-paddingRight15 u-paddingLeft15 u-paddingTop60 ">
                <div className="u-height165 u-flexEnd u-relative u-marginBottom15">
                  <img src={RegisterImage} className="u-flex0" alt="register" />
                </div>
                <div className="u-flexTop">
                  <div className="brand-numberedPill u-flex0 u-marginRight15 u-marginTop5">
                    2
                  </div>
                  <div className="u-width260">
                    <h3 className="h-text-fontTitle u-paddingBottom15 u-fontSize20">
                      Register
                    </h3>
                    <p className="h-text-font">
                      Use our 60 day free trial account. Create your identity as
                      a <Link to="/register/school"> school </Link>
                      or <Link to="/register/sponsor"> sponsor </Link>
                      and explore the world of donscoil. Apply for sponsor
                      projects or promote your campaigns.
                    </p>
                  </div>
                </div>
              </div>
              <div className="u-paddingRight15 u-paddingLeft15 u-paddingTop60 u-xs-paddingRight30">
                <div className="u-height165 u-flexEnd u-relative u-marginBottom15 u-xs-height140">
                  <img src={CreateImage} className="u-flex0" alt="create" />
                </div>
                <div className="u-flexTop">
                  <div className="brand-numberedPill u-flex0 u-marginRight15 u-marginTop5">
                    3
                  </div>
                  <div className="u-width260 u-xs-width175">
                    <h3 className="h-text-fontTitle u-paddingBottom15 u-fontSize20">
                      Create
                    </h3>
                    <p className="h-text-font">
                      Transform your needs into projects. Doesn't matter if you
                      need a couple of books or new computer lab. Whether you
                      want to promote localy or nationwide. It all starts with
                      letting the right people know about it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </section> */}

      {/* <section className="u-relative about-background-mainpage2">
        <div className="u-maxWIdth1000 u-marginAuto u-paddingTop60 u-paddingBottom60 u-relative">
          <div className="h-text-font u-paddingTop100 u-paddingBottom100">
            <h1 className="h-text-fontMain u-textAlignCenter">Join us! </h1>
            <div className="u-flex u-flexWrap u-maxWidth1000 u-marginAuto u-relative">
              <div className="u-paddingRight15 u-paddingLeft15 u-paddingTop60 u-xs-paddingRight30">
                <div className="u-height165 u-flexEnd u-relative u-marginBottom15 u-xs-height140">
                  <img src={SchoolImage} className="u-flex0" alt="search" />
                </div>
                <div className="u-flexTop">
                  <div className="u-width260 u-xs-width175">
                    <Link to="/register/school" className="btn btn-primary">
                      Register school
                    </Link>
                  </div>
                </div>
              </div>
              <div className=" u-absolute u-right0 u-paddingRight15 u-paddingLeft15 u-paddingTop60 u-xs-paddingRight30">
                <div className="u-height165 u-flexEnd u-relative u-marginBottom15 u-xs-height140">
                  <img src={SponsorImage} className="u-flex0" alt="create" />
                </div>
                <div className="u-flexTop">
                  <div className="u-width260 u-xs-width175">
                    <Link
                      to="/register/sponsor"
                      className="btn btn-primary btn-space"
                    >
                      Register sponsor
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </React.Fragment>
  );
};

export default About;
