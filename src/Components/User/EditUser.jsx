import React from "react";
import Form from "../Common/Form";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import {
  editUser,
  getUserDetails,
  deleteUser
} from "../../services/userServices";
import { Redirect } from "react-router-dom";
import CancelButton from "../Common/CancelButton";

class EditUser extends Form {
  state = {
    data: {
      firstName: "",
      lastName: "",
      title: "",
      phone: "",
      account: ""
    },
    _id: "",
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
    account: Joi.string()
      .max(130)
      .required()
  };

  componentDidMount() {
    this.populateState();
  }

  deleteHandler() {
    deleteUser(this.props.modifyUser);
  }

  async populateState() {
    try {
      const data = { ...this.state.data };
      const { data: user } = await getUserDetails(this.props.modifyUser);
      this.state._id = user._id;
      data.firstName = user.firstName;
      data.lastName = user.lastName;
      data.title = user.title;
      data.phone = user.phone;
      data.account = user.account;
      this.setState({ data });
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        // const errors = { ...this.state.errors };
        window.location = "/not-found";
        // console.log(ex.response);
        // errors[ex.response.data.details[0].path[0]] =
        //   ex.response.data.details[0].message;
        // this.setState({ errors } || {});
      }
    }
  }

  doSubmit = async () => {
    try {
      await editUser(this.props.modifyUser, this.state.data);
      this.props.user.role === "admin"
        ? (window.location = `/account/users/${this.props.user.account}`)
        : this.props.history.push("/dashboard");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors[ex.response.data.details[0].path[0]] =
          ex.response.data.details[0].message;
        this.setState({ errors } || {});
      } else if (ex.response && ex.response.status === 401) {
        this.props.history.push("/logout");
      }
    }
  };

  checkAdmin() {
    const { user } = this.props;
    if (user.role === "admin") {
      if (user._id !== this.state._id) {
        return true;
      }
    }
  }

  render() {
    if (!this.props.user) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="container">
        <div className="jumbotron full-page">
          <div className="row">
            <div className="col-md-12 ">
              <form onSubmit={this.handleSubmit}>
                <h2 className="header-form">Edit User</h2>
                <div className="form-row mt-6">
                  <div className="form-group col-md-4">
                    {this.renderInput(
                      "firstName",
                      "First Name",
                      "text",
                      "Ciara"
                    )}
                  </div>
                  <div className="form-group col-md-6">
                    {this.renderInput(
                      "lastName",
                      "Last Name",
                      "text",
                      "Fitzpatrick"
                    )}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    {this.renderInput(
                      "title",
                      "Title",
                      "text",
                      "e.g. Director"
                    )}
                  </div>
                  <div className="form-group col-md-4">
                    {this.renderInput("phone", "Phone", "text", "087 234 1515")}
                  </div>
                </div>
                <div className="btn-group">
                  {this.renderButton("Save changes")}
                  <CancelButton />
                </div>
              </form>
              {/* <CancelButton /> */}
              <h2 className="header-form mt-5">Other actions</h2>
              <div className="container">
                <div className="mt-3">
                  <Link
                    to={`/change-password/${this.props.match.params.id}`}
                    className="btn btn-outline-secondary btn-sm"
                  >
                    Change password
                  </Link>
                </div>
                {this.checkAdmin() && (
                  <div>
                    <button
                      type="button"
                      className="btn btn-outline-danger mt-3"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Delete user
                    </button>

                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Delete user
                            </h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            Please, confirm you wish to delete this user.
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => {
                                this.deleteHandler();
                                window.location = `/account/users/${this.props.user.account}`;
                              }}
                            >
                              Delete user
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <button
                      className="btn btn-outline-danger btn-sm mt-3"
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you wish to delete this User? "
                          )
                        )
                          this.deleteHandler();
                        window.location = `/account/users/${this.props.user.account}`;
                      }}
                    >
                      Delete User
                    </button> */}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditUser;
