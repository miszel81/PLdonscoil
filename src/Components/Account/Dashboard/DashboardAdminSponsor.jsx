import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Dashboard.css";
import AccountWatchlistProjects from "../AccountWachlistProjects";
import AccountSupportedProjects from "../AccountSupportedProjects";

// import AlertBox from "../../Layout/AlertBox/AlertBox";

class DashboardAdminSponsor extends Component {
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
            {/* <img src={tznLogo} alt="logo" /> */}
            {/* <h1>{account.accountName} Dashboard</h1> */}
            <h2 className="mt-3">Hello {user.firstName}!</h2>
            <h5 className="mb-3" style={{ color: "#333", fontSize: "1rem" }}>
              Thanks a million for all the great support!
            </h5>
          </div>
        </div>

        <div className="row">
          {/* <div className="jumbotron col-md-12">
            <AlertBox />
          </div> */}
          <div
            className="jumbotron col-md-12"
            syle={{ backgroundColor: "#f2ebb1" }}
          >
            <h3>{account.accountName} projects</h3>
            <div className="btn-group" role="group">
              <Link
                to={`/projects/account/${user.account}`}
                className="btn btn-secondary"
              >
                See all projects
              </Link>
              <Link to="/projects/new/create" className="btn btn-success">
                Create new project
              </Link>
            </div>
          </div>
          <div
            className="jumbotron col-md-12"
            syle={{ backgroundColor: "#f2ebb1" }}
          >
            <h3>On your watchlist:</h3>
            <AccountWatchlistProjects accountId={user.account} />
            <Link to="forsponsors" className="btn btn-info">
              Add project
            </Link>
          </div>
          <div
            className="jumbotron col-md-12"
            syle={{ backgroundColor: "#f2ebb1" }}
          >
            <h3>Support offered to:</h3>
            <AccountSupportedProjects accountId={user.account} />
            <Link to="forsponsors" className="btn btn-info mt-3">
              Add project
            </Link>
          </div>
          <div
            className="jumbotron col-md-12"
            syle={{ backgroundColor: "#f2ebb1" }}
          >
            <h3>Admin Panel</h3>
            <div className="btn-group" role="group">
              <Link
                to={`/account/users/${user.account}`}
                className="btn btn-outline-secondary"
              >
                See All Users
              </Link>
              <Link
                to={`/account/edit/${user.account}`}
                className="btn btn-outline-info"
              >
                Edit Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardAdminSponsor;
