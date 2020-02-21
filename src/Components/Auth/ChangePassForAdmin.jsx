import React from "react";
import Form from "../Common/Form";
import Joi from "joi-browser";
import { changePassForAdmin } from "../../services/authServices";
import "./Auth.css";
import CancelButton from "../Common/CancelButton";

class ChangePassForAdmin extends Form {
  state = {
    data: {
      newPassword: ""
    },
    errors: {}
  };

  schema = {
    newPassword: Joi.string()
      .required()
      .min(8)
      .label("New Password")
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const { userId } = this.props.userId;
      await changePassForAdmin(userId, data.newPassword);
      window.location = `/account/users/${this.props.user.account}`;
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.password = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div className="container full-page">
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-10 offset-1 jumbotron">
                <h1>Change password:</h1>

                {this.renderInput(
                  "newPassword",
                  "New password",
                  "password",
                  "Enter new User password"
                )}
                <div className="btn-group mt-3">
                  {this.renderButton("Set New Password")}
                  <CancelButton />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ChangePassForAdmin;
