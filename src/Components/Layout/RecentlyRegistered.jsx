import React from "react";
import EtnsLogo from "../Layout/img/etns_logo.png";
// import ArdscoilLogo from "../Layout/img/anm_logo.png";

const RecentlyRegistered = () => {
  return (
    <div className="container mt-5">
      <h1 className="section-header">Recently registered:</h1>
      <div className="recently-registered-logos mt-5">
        <div className="img-box">
          <img className="img-fluid" src={EtnsLogo} alt="ETNS Tramore" />
        </div>
      </div>
    </div>
  );
};

export default RecentlyRegistered;
