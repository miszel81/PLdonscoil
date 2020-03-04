import React from "react";
import "./AfterRegistraionPage.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const AfterRegistrationPage = () => {
  return (
    <div className="jumbotron jumbotron-about not-found text-center">
      <Helmet>
        <title>That's grand!</title>
      </Helmet>
      <h1 className="h-text-fontMainTitle text-center mt-3 mb-5">
        That's grand!
      </h1>
      <div className="jumbotron text-center">
        <p>We will review your application and contact you soon.</p>
      </div>
      <Link to="/" className="btn btn-outline-secondary mt-3">
        Back to home page
      </Link>
    </div>
  );
};

export default AfterRegistrationPage;
// return (
//   <div className="jumbotron text-center after-registration">
//     <h3>
//       {" "}
//       Thanks a million! We will review your application and contact you soon.{" "}
//     </h3>

//     <Link to="/" className="btn btn-info mt-3 p-15">
//       Main Page
//     </Link>
//   </div>
// );
