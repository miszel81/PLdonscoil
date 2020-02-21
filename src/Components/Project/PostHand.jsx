import React from "react";
import "../Layout/Common.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const PostHand = props => {
  return (
    <div className="jumbotron jumbotron-about not-found text-center">
      <Helmet>
        <title>Thank you!</title>
      </Helmet>
      <h1 className="h-text-fontMainTitle text-center mt-3 mb-5">
        Thank you so much!
      </h1>
      <div className="jumbotron text-center">
        <p>School will be in touch with you shortly!</p>
      </div>
      <Link to="/" className="btn btn-outline-secondary mt-3">
        Back to home page
      </Link>
    </div>
  );
};

export default PostHand;
