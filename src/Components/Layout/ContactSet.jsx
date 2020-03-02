import React from "react";
import NavBar from "./NavBar";
import { Helmet } from "react-helmet";
const ContactSet = props => {
  const { user } = props;
  return (
    <div className="nothing">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div className="container-fluid contact-background">
        <NavBar user={user} />
      </div>

      <div className="container-fluid ">
        <div className="jumbotron jumbotronWhite">
          <div className="container mb-5">
            <h1 className="h-text-fontMainTitle text-center mb-3 mt-3">
              Contact Us:
            </h1>
            <h3 className="text-center mb-3 mt-3">info@donscoil.ie</h3>
            <div className="project-details-share mt-3">
              <a
                href="https://www.facebook.com/donscoil"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fab fa-facebook fa-3x"></i>
              </a>
              <a
                href="https://www.twitter.com/donscoil"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fab fa-twitter fa-3x"></i>
              </a>
              <a
                href="https://www.instagram.com/donscoil"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fab fa-instagram fa-3x"></i>
              </a>
            </div>
            <h3 className="text-center mb-3 mt-5">
              donscoil is based in Tramore, <br />
              Co. Waterford, Ireland.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSet;
