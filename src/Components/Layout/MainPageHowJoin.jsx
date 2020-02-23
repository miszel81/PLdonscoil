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
                and <Link to="/forsupporters"> schools </Link> across Ireland to
                find funding or inspiration.
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
    </React.Fragment>
  );
};

export default About;
