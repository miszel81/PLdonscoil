import React from "react";
import ResetPass from "../Auth/ResetPass";
import NavBar from "./NavBar";

const ResetPassSet = props => {
  const { user } = props;
  return (
    <div className="container-fluid table-background">
      <NavBar user={user} />
      <ResetPass />
    </div>
  );
};

export default ResetPassSet;
