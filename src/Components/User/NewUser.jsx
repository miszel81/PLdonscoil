import React from "react";
import Form from "../Common/Form";
import Joi from "joi-browser";
import { addUser } from "../../services/userServices";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

class NewUser extends Form {
  state = {
    data: {
      firstName: "",
      lastName: "",
      title: "",
      phone: "",
      email: "",
      password: "",
      account: "",
      role: "user",
      type: ""
    },
    errors: {}
  };

  schema = {
    firstName: Joi.string()
      .max(30)
      .required(),
    lastName: Joi.string()
      .max(30)
      .required(),
    title: Joi.string()
      .max(30)
      .required(),
    phone: Joi.string()
      .max(30)
      .regex(/^\d+$/)
      .options({
        language: {
          string: {
            regex: {
              base: "Only digits allowed!"
            }
          }
        }
      })
      .required(),
    email: Joi.string()
      .required()
      .max(35)
      .email(),
    password: Joi.string()
      .required()
      // .regex(/^[a-zA-Z0-9]/)
      // .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"))
      .max(30)
      .min(8),
    account: Joi.string().required(),
    role: Joi.string()
      .max(15)
      .required(),
    type: Joi.string()
      .max(15)
      .required()
  };

  componentDidMount() {
    this.populateState();
  }

  populateState() {
    try {
      const data = { ...this.state.data };
      data.account = this.props.user.account;
      data.type = this.props.user.type;
      this.setState({ data });
    } catch (error) {}
  }

  doSubmit = async () => {
    try {
      await addUser(this.state.data);
      window.location = `/account/users/${this.props.user.account}`;
      // this.props.history.push("/dashboard");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors[ex.response.data.details[0].path[0]] =
          ex.response.data.details[0].message;
        this.setState({ errors } || {});
      }
    }
  };

  render() {
    if (!this.props.user) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="jumbotron full-page">
        <Helmet>
          <title>Create new user</title>
        </Helmet>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={this.handleSubmit}>
              <h2 className="header-form">Create new user</h2>
              <div className="form-row mt-6">
                <div className="form-group col-md-4">
                  {this.renderInput(
                    "firstName",
                    "First Name*",
                    "text",
                    "Ciara"
                  )}
                </div>
                <div className="form-group col-md-5">
                  {this.renderInput(
                    "lastName",
                    "Last Name*",
                    "text",
                    "O'Donnel"
                  )}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-5">
                  {this.renderInput(
                    "title",
                    "Role*",
                    "text",
                    "Marketing Director"
                  )}
                </div>
                <div className="form-group col-md-4">
                  {this.renderInput("phone", "Phone*", "text", "087 345 15 15")}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  {this.renderInput(
                    "email",
                    "Email/Login*",
                    "text",
                    "Ciara@school.com"
                  )}
                </div>
                <div className="form-group col-md-6">
                  {this.renderInput(
                    "password",
                    "Password (Password Manager recommended)*",
                    "password",
                    "min 8 characters"
                  )}
                </div>
              </div>
              {this.renderButton("Create User")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewUser;
