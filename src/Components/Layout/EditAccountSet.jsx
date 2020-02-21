import React, { Component } from "react";
import EditAccount from "../Account/EditAccount";
import NavBar from "./NavBar";
// import { Render, Redirect } from "react-router-dom";

class EditAccountSet extends Component {
  checkIfEligible = () => {
    try {
      const userAccount = this.props.user.account;
      const accountToModify = this.props.match.params.id;

      if (userAccount !== accountToModify) {
        // go back if unauthorized
        this.props.history.goBack();
      }
    } catch (error) {}
  };

  render() {
    const { user } = this.props;
    const modifyAccount = this.props.match.params.id;
    this.checkIfEligible();

    return (
      <div className="container-fluid table-background">
        <NavBar user={user} />
        <EditAccount user={user} modifyAccount={modifyAccount} />
      </div>
    );
  }
}

export default EditAccountSet;
