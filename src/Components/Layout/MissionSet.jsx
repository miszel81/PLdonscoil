import React from "react";
import About from "./About";
// import NavBar from "./NavBar";

const MissionSet = ({ user }) => {
  return (
    // <div>
    <div className="full-page">
      {/* <NavBar user={user} /> */}
      {/* <div className="container-fluid"> */}
      <div>
        <About user={user} />
      </div>
    </div>
  );
};

export default MissionSet;
