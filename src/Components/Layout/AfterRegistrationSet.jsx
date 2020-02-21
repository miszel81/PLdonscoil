import React from "react";
import AfterRegistrationPage from "../Register/AfterRegistrationPage";
import NavBar from "./NavBar";

const AfterRegistrationSet = ({ user }) => {
  return (
    <div className="container-fluid table-background">
      <NavBar user={user} />
      <AfterRegistrationPage />
    </div>
  );
};

export default AfterRegistrationSet;
