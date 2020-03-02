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
            <p>Find</p>
            <div className="search-text">
              <p>
                Explore fantastic projects from {""}
                local <Link to="/forsupporters"> schools</Link> or apply for
                school programs offered by our {""}
                <Link to="/forschools">sponsors </Link>
              </p>
            </div>
          </div>
          <div className="howItWorks-create exposed">
            <div className="icon">
              <i className="green fas fa-paint-brush fa-5x"></i>
            </div>
            <p>Create</p>
            <div className="create-text">
              <p>
                {" "}
                Promote your own ideas and campaigns. Do it today! It all starts
                with letting people know about it.
              </p>
            </div>
          </div>
          <div className="howItWorks-register">
            <div className="icon">
              <i className="far fa-smile-beam fa-5x"></i>
            </div>
            <p>Support</p>
            <div className="register-text">
              <p>
                Help kids learn and develop their skills. Support their effort
                and make them feel important.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container howItWorks">
        <div className="howItWorks-header">
          <p className="text-left">Register account</p>
        </div>
        <div className="howItWorks-content">
          <div className="howItWorks-register">
            <div className="icon">
              <i className="fas fa-rocket fa-5x"></i>
            </div>
            <h3>Sponsor</h3>
            <div className="register-text">
              <p>
                Share your values. Let kids understand your business. Help them
                learn. Make a difference!
              </p>
              <Link
                to="/register/sponsor"
                className="btn btn-outline-secondary mb-5"
              >
                {" "}
                Register
              </Link>
            </div>
          </div>
          <div className="howItWorks-register">
            <div className="icon">
              <i className="fas fa-graduation-cap fa-5x"></i>
            </div>
            <h3>School</h3>
            <div className="register-text">
              <p>
                Find funding opportunities. Apply for projects from sponsors.
                Promote school initiatives.
              </p>
              <Link
                to="/register/school"
                className="btn btn-outline-secondary mb-5"
              >
                {" "}
                Register
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </React.Fragment>
  );
};

export default About;
