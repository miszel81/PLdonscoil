import React, { Component } from "react";
import EditUser from "../User/EditUser";
import NavBar from "./NavBar";
import { getUserDetails } from "../../services/userServices";

class EditUserSet extends Component {
  // check if the user is eligible to modify this user
  checkIfEligible = async () => {
    try {
      const { data: userToModify } = await getUserDetails(
        this.props.match.params.id
      );
      // console.log("krok 1", userToModify);
      // get the current logged id user
      const { user: editingUser } = this.props;
      console.log("krok 2", editingUser);

      if (!editingUser) {
        // console.log("logout 1");
        this.props.history.push("/logout");
      }

      // check if current user and user being modified belong to the same account
      if (userToModify.account === editingUser.account) {
        // check if standard user is not trying to modify other user

        if (editingUser.role !== "admin") {
          if (userToModify._id !== editingUser._id) {
            // console.log("logout 2");
            this.props.history.push("/logout");
          }
        }
      }
      // check if user is not trying to modify user from different account
      if (userToModify.account !== editingUser.account) {
        // console.log("logout 3");
        this.props.history.push("/logout");
      }
    } catch (error) {}
  };

  render() {
    const { user } = this.props;
    // if (!user) return <Redirect to="/login" />;
    const modifyUser = this.props.match.params.id;

    this.checkIfEligible();

    return (
      <div className="container-fluid table-background">
        <NavBar user={user} />
        <EditUser {...this.props} user={user} modifyUser={modifyUser} />
      </div>
    );
  }
}

export default EditUserSet;
