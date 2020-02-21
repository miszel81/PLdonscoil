import React from "react";
import Form from "../Common/Form";
import Joi from "joi-browser";
import { newPass } from "../../services/authServices";
import "./Auth.css";

class NewPass extends Form {
  state = {
    data: {
      password: ""
    },
    errors: {}
  };

  schema = {
    password: Joi.string()
      .required()
      .min(8)
      .label("Password")
  };

  doSubmit() {
    try {
      const { data } = this.state;
      const token = this.props.match.params.token;
      newPass(token, data.password);
      window.location = "/login";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  }

  render() {
    return (
      <div className="container">
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="container full-page">
              <div className="row">
                <div className="col-md-6 offset-md-3 jumbotron">
                  <h1>Enter your new password:</h1>
                  {this.renderInput(
                    "password",
                    "Password",
                    "password",
                    "Password:"
                  )}
                  {this.renderButton("Set New Password")}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewPass;
