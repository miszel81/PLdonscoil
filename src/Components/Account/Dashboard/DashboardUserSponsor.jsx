import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Dashboard.css";
import AccountWatchlistProjects from "../AccountWachlistProjects";
import AccountSupportedProjects from "../AccountSupportedProjects";

class DashboardUserSponsor extends Component {
  state = {};
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
            {/* <h1>{account.accountName} Dashboard</h1> */}
            <h2 className="mt-3">
              Hello {user.firstName}, thanks a million for all the great
              support!
            </h2>
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
            <div className="btn-group">
              <Link to="/projects/new/create" className="btn btn-info">
                Create new project!
              </Link>
              <Link
                to={`/projects/account/${user.account}`}
                className="btn btn-outline-secondary"
              >
                See all your projects!
              </Link>
            </div>
          </div>
          <div
            className="jumbotron col-md-12"
            syle={{ backgroundColor: "#f2ebb1" }}
          >
            <h3>{account.accountName} offered support to:</h3>
            <AccountSupportedProjects accountId={user.account} />
          </div>
          <div
            className="jumbotron col-md-12"
            syle={{ backgroundColor: "#f2ebb1" }}
          >
            <h3>Schools' projects on your watchlist:</h3>
            <AccountWatchlistProjects
              accountId={user.account}
              userId={user._id}
            />
            <Link to="forsponsors" className="btn btn-info">
              Add new project
            </Link>
          </div>
          <div
            className="jumbotron col-md-12"
            syle={{ backgroundColor: "#f2ebb1" }}
          >
            <h3>Admin panel</h3>
            <div>
              {/* <p>Name: {user.firstName}</p>
              <p>Surname: {user.lastName}</p>
              <p>Title: {user.title}</p> */}
              <Link
                to={`/users/edit/${user._id}`}
                className="btn btn-outline-secondary mt-3"
              >
                Edit your profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardUserSponsor;
