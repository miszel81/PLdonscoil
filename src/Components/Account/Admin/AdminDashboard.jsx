import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "../Dashboard.css";

class Admin extends Component {
  render() {
    const { account, user } = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="jumbotron col-md-12">
            {account.imgUrl ? (
              <div className=" img-display-sponsor">
                <img src={account.imgUrl} alt="donscoil" />
              </div>
            ) : null}
            <h4 className="mt-3">Admin Panel</h4>
            <h2 className="mt-3">Hello {user.firstName}! Welcome back.</h2>
          </div>
        </div>

        <div className="row">
          <div
            className="jumbotron col-md-12"
            syle={{ backgroundColor: "#f2ebb1" }}
          >
            <h3>??</h3>
          </div>
          <div
            className="jumbotron col-md-12"
            syle={{ backgroundColor: "#f2ebb1" }}
          >
            <h3>????:</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
