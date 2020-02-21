import React, { Component } from "react";
import "./AlertBox.css";
class AlertBox extends Component {
  state = {};
  render() {
    return (
      <div>
        <h3>AlertBOX</h3>
        <div className="alert-listing">
          <p>
            Coming deadlines:{" "}
            <span className="text-danger listing-item">Modern Library</span>
            <span className="text-danger listing-item">Trip to Paris</span>
          </p>
          <p>
            New arrivals:{" "}
            <span className="text-success listing-item">
              Computer classroom
            </span>
            <span className="text-success listing-item">Coding bootcamp</span>
          </p>
        </div>
      </div>
    );
  }
}

export default AlertBox;
