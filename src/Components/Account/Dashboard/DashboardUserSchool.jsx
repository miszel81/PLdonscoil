import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Dashboard.css";
import AccountAppliedProjects from "../AccountAppliedProjects";
import AccountWatchlistProjects from "../AccountWachlistProjects";

// import AlertBox from "../../Layout/AlertBox/AlertBox";

class DashboardUserSchool extends Component {
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
            <h2 className="mt-3">Hello {user.firstName}! Hope you are well!</h2>
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
            {/* <h3>Your projects are doing great!</h3> */}
            <div className="btn-group" role="group">
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
            <h3>{account.accountName} has applied for:</h3>
            <AccountAppliedProjects accountId={user.account} />
            <Link to="/search" className="btn btn-info">
              Add new project
            </Link>
          </div>
          <div
            className="jumbotron col-md-12"
            syle={{ backgroundColor: "#f2ebb1" }}
          >
            <h3>Sponsors' projects on your watchlist:</h3>
            <AccountWatchlistProjects
              accountId={user.account}
              userId={user._id}
            />
            <Link to="/search" className="btn btn-info">
              Add new project
            </Link>
          </div>
          <div
            className="jumbotron col-md-12"
            syle={{ backgroundColor: "#f2ebb1" }}
          >
            <h3>Admin panel</h3>
            <div>
              {/* <p className="standard-user-profile">
                First Name: {user.firstName}
              </p>
              <p className="standard-user-profile">Surname: {user.lastName}</p>
              <p className="standard-user-profile">Title: {user.title}</p> */}
              <Link
                to={`/users/edit/${user._id}`}
                className="btn btn-outline-outline-secondary mt-3"
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

export default DashboardUserSchool;
