import React from "react";
import NavBar from "../Layout/NavBar";
import "./Auth.css";

const ToManyAttepts = () => {
  return (
    <React.Fragment>
      <div className="container-fluid login-background full-page">
        <NavBar />
        <div className="jumbotron">
          <h1>
            Due to number of failed login attempts, your account HAS BEEN
            BLOCKED! Try again in 1 hour
          </h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ToManyAttepts;
