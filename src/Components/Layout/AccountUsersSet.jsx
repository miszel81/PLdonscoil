import React, { Component } from "react";
import AccountUsers from "../Account/AccountUsers";
import NavBar from "./NavBar";
import { Redirect } from "react-router-dom";

class AccountUsersSet extends Component {
  render() {
    const accountId = this.props.match.params.accountId;
    const { user } = this.props;
    if (!user) return <Redirect to="/login" />;
    // // if admin tries to view other accounts' users
    if (accountId !== user.account) {
      return <Redirect to="/logout" />;
    }
    return (
      <div className="container-fluid table-background">
        <NavBar user={user} />
        <AccountUsers accountId={accountId} />
      </div>
    );
  }
}

export default AccountUsersSet;
