import React from "react";
import "./AfterRegistraionPage.css";
import { Link } from "react-router-dom";

const AfterRegistrationPage = () => {
  return (
    <div className="jumbotron text-center after-registration">
      <h3>
        {" "}
        Thanks a million! We will review your application and contact you soon.{" "}
      </h3>

      <Link to="/" className="btn btn-info mt-3 p-15">
        Main Page
      </Link>
    </div>
  );
};

export default AfterRegistrationPage;
