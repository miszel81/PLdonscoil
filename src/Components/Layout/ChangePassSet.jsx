import React from "react";
import NavBar from "./NavBar";
import { Redirect } from "react-router-dom";
import ChangePassForUser from "../Auth/ChangePassForUser";
import ChangePassForAdmin from "../Auth/ChangePassForAdmin";

const ChangePassSet = ({ user, match }) => {
  if (!user) return <Redirect to="/login" />;

  if (user.role === "admin") {
    if (user._id === match.params.userId) {
      return (
        <React.Fragment>
          <div className="container-fluid login-background">
            <NavBar user={user} />
            <ChangePassForUser user={user} />
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="container-fluid login-background">
            <NavBar user={user} />
            <ChangePassForAdmin user={user} userId={match.params} />
          </div>
        </React.Fragment>
      );
    }
  } else {
    return (
      <React.Fragment>
        <div className="container-fluid login-background">
          <NavBar user={user} />
          <ChangePassForUser user={user} />
        </div>
      </React.Fragment>
    );
  }
};

export default ChangePassSet;
