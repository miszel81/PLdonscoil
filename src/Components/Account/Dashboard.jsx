import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Dashboard.css";
import { getUserDetails } from "../../services/userServices";
import { getAccount } from "../../services/accountService";
import DashboardUserSchool from "./Dashboard/DashboardUserSchool";
import DashboardUserSponsor from "./Dashboard/DashboardUserSponsor";
import DashboardAdminSchool from "./Dashboard/DashboardAdminSchool";
import DashboardAdminSponsor from "./Dashboard/DashboardAdminSponsor";
import Admin from "./Admin/AdminDashboard";

class Dashboard extends Component {
  state = {
    userData: {},
    account: {},
    loading: true
  };
  async populateState() {
    try {
      const { data: userData } = await getUserDetails(this.props.user._id);
      const { data: account } = await getAccount(this.props.user.account);
      this.setState({ userData, account, loading: false });
    } catch (error) {
      return;
    }
  }

  componentDidMount() {
    this.populateState();
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
    }

    const { userData, account } = this.state;
    const { user } = this.props;

    if (!user) {
      return (
        <div>
          <p className="dev">
            You have no permision to enter this site. Please
            <Link to="/login"> Login</Link>
          </p>
        </div>
      );
    }
    if (user.account !== account._id) return <Redirect to="logout" />;
    if (user.type === "School") {
      if (user.role === "user") {
        return <DashboardUserSchool user={userData} account={account} />;
      } else {
        return <DashboardAdminSchool user={userData} account={account} />;
      }
    } else if (user.type === "Sponsor") {
      if (user.role === "user") {
        return <DashboardUserSponsor user={userData} account={account} />;
      } else {
        return <DashboardAdminSponsor user={userData} account={account} />;
      }
    } else if (user.type === "Admin") {
      return <Admin user={userData} account={account} />;
    }
  }
}

export default Dashboard;
