import React, { Component } from "react";
import "./Partners.css";
import logoMMlab from "../img/mmlab.png";

class Partners extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h3 className="mt-5 text-center partner-header">Strategic Partner</h3>
        <div className="container DonscoilPartners img-fluid mt-4">
          <div>
            {" "}
            <img src={logoMMlab} alt="MMLab software" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Partners;
