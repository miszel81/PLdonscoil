import React from "react";
import AccountProjectsTable from "../Project/AccountProjectsTable";
import NavBar from "./NavBar";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

const AccountProjectsSet = ({ user, match }) => {
  const accountId = match.params.accountId;
  // if (!user) return <Redirect to="/login" />;
  // console.log("user: ", typeof user.account, user.account);
  // console.log("params: ", typeof accountId, accountId);
  // console.log("if: ", user.account !== accountId);
  if (user.account !== accountId) {
    // console.log("PUSHING LOGOUT");
    // console.log("user.account: ", user.account);
    // console.log("accountId: ", accountId);
    return <Redirect to="/logout" />;
  }

  return (
    <div className="container-fluid table-background">
      <Helmet>
        <title>Own projects</title>
      </Helmet>
      <NavBar user={user} />
      <AccountProjectsTable accountId={accountId} user={user} />
    </div>
  );
};

export default AccountProjectsSet;
