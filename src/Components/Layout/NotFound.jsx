import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const NotFound = () => {
  return (
    <div className="container">
      <div className="jumbotron jumbotron-about not-found">
        <Helmet>
          <title>Page Not Found</title>
        </Helmet>
        <h1 className="h-text-fontMainTitle text-center mt-3 mb-5">
          Page Not Found
        </h1>
        <div className="jumbotron text-center">
          <p>
            Please check the address again or visit our{" "}
            <Link to="/" className="btn btn-info">
              Home page
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
