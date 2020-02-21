import React from "react";
import Dashboard from "../Account/Dashboard";
import { Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import { Helmet } from "react-helmet";

const DashboardSet = ({ user }) => {
  if (!user) return <Redirect to="/login" />;
  return (
    <div className="container-fluid dashboard-background">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <NavBar user={user} />
      <Dashboard user={user} />
    </div>
  );
};

export default DashboardSet;
