import React from "react";
import NavBar from "./NavBar";
import NotFound from "./NotFound";

const NotFoundSet = ({ user }) => {
  return (
    <React.Fragment>
      <div className="container-fluid login-background">
        <NavBar user={user} />
        <NotFound />
      </div>
    </React.Fragment>
  );
};

export default NotFoundSet;
