import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Dashboard.css";
import AccountAppliedProjects from "../AccountAppliedProjects";
import AccountWatchlistProjects from "../AccountWachlistProjects";
// import AlertBox from "../../Layout/AlertBox/AlertBox";

class DashboardAdminSchool extends Component {
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
            <h2 className="mt-3">Hello {user.firstName}!</h2>
            <h5 className="mb-3" style={{ color: "#333", fontSize: "1rem" }}>
              {" "}
              Hope you are well!
            </h5>

            <div className="btn-group mt-3" role="group">
              <Link
                to={`/projects/account/${user.account}`}
                className="btn btn-secondary"
              >
                See all school projects!
              </Link>
              <Link to="/projects/new/create" className="btn btn-success">
                Create new
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          {/* <div className="jumbotron col-md-12">
            <AlertBox />
          </div> */}

          {/* <div
            className="jumbotron col-md-12"
            syle={{ backgroundColor: "#f2ebb1" }}
          >
            <h3>Your projects are doing great!</h3>
            <p className="dev">
              Tabela?: Jaki projekt, ile kasy zebrane, ile czasu zostalo{" "}
            </p>
            <div className="btn-group" role="group">
              <Link to="/projects/new/create" className="btn btn-success">
                Create new project now!
              </Link>
              <Link
                to={`/projects/account/${user.account}`}
                className="btn btn-secondary"
              >
                See all your projects!
              </Link>
            </div>
          </div> */}

          <div
            className="jumbotron col-md-12"
            syle={{ backgroundColor: "#f2ebb1" }}
          >
            <h3>
              <span className="green">{account.accountName}'s</span>{" "}
              applications:
            </h3>
            <div className="">
              <AccountAppliedProjects accountId={user.account} />
            </div>

            <Link to="/search" className="btn btn-info">
              Apply for a new project
            </Link>
          </div>
          <div
            className="jumbotron col-md-12"
            syle={{ backgroundColor: "#f2ebb1" }}
          >
            <h3>On your watchlist:</h3>
            <AccountWatchlistProjects
              accountId={user.account}
              userId={user._id}
            />
            <Link to="/search" className="btn btn-info">
              Add new projects
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

export default DashboardAdminSchool;
