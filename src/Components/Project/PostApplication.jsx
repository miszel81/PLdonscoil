import React from "react";
import "../Layout/Common.css";

const PostApplication = () => {
  return (
    <div>
      <div
        className="jumbotron jumbotron-about text-center"
        style={{ color: "#333" }}
      >
        <h1 className="text-dark">
          {" "}
          Thank you for your application. <br />
        </h1>
        <p className="mt-5">
          Sponsor of this project has received your details.
        </p>
        <p className="mt-5">Good luck!</p>
        <p>
          <i className="far fa-thumbs-up fa-2x"></i>
          <i className="fab fa-grav fa-2x"></i>
          <i className="fas fa-brain fa-2x"></i>
        </p>
      </div>
    </div>
  );
};

export default PostApplication;
