import React from "react";
import Form from "../Common/Form";
import Joi from "joi-browser";
import { changePass } from "../../services/authServices";
import "./Auth.css";
import CancelButton from "../Common/CancelButton";

//COMPONENT CHYBA NIE JEST WYKORZYSTANY!!
class ChangePass extends Form {
  state = {
    data: {
      password: "",
      newPassword: ""
    },
    errors: {}
  };

  schema = {
    password: Joi.string()
      .required()
      .min(8)
      .label("Password"),
    newPassword: Joi.string()
      .required()
      .min(8)
      .label("New Password")
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await changePass(this.props.user._id, data.password, data.newPassword);
      localStorage.removeItem("token");
      window.location = "/postchange";
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
              <div className="col-md-6 offset-md-3 jumbotron">
                <h1>Change password:</h1>
                {this.renderInput(
                  "password",
                  "Current password",
                  "password",
                  "Enter your current password:"
                )}
                {this.renderInput(
                  "newPassword",
                  "New password",
                  "password",
                  "Enter your new password"
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

export default ChangePass;
