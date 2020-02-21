import React from "react";
// import About from "./About";
import About2 from "./About_2nd";
// import NavBar from "./NavBar";

const MissionSet = ({ user }) => {
  return (
    // <div>
    <div className="full-page">
      {/* <NavBar user={user} /> */}
      {/* <div className="container-fluid"> */}
      <div>
        <About2 user={user} />
      </div>
    </div>
  );
};

export default MissionSet;
