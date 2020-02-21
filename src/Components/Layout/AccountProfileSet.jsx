import React from "react";
// import SchoolProfile from "../Account/SchoolProfile";
import AccountProfile from "../Account/AccountProfile";
import NavBar from "./NavBar";

const AccountProfileSet = props => {
  const id = props.match.params.id;
  return (
    <div className="container-fluid schoolprofile-background">
      <NavBar user={props.user} />
      <AccountProfile id={id} />
    </div>
  );
};

export default AccountProfileSet;
