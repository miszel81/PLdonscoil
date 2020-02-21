import React from "react";
import Form from "../Common/Form";
import Joi from "joi-browser";
import { getAccount, editAccount } from "../../services/accountService";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import CancelButton from "../Common/CancelButton";

class EditAccount extends Form {
  state = {
    data: {
      accountName: "",
      description: "",
      website: "",
      contactEmail: "",
      bankAccountNumber: "",
      street: "",
      city: "",
      county: "",
      imgUrl: ""
    },
    errors: {}
  };

  schema = {
    accountName: Joi.string().required(),
    description: Joi.string().required(),
    website: Joi.string().required(),
    contactEmail: Joi.string().required(),
    bankAccountNumber: Joi.string().required(),
    street: Joi.string().required(),
    city: Joi.string().required(),
    county: Joi.string().required(),
    imgUrl: Joi.string().allow("")
  };
  schemaNoBank = {
    accountName: Joi.string().required(),
    description: Joi.string().required(),
    website: Joi.string().required(),
    contactEmail: Joi.string().required(),
    bankAccountNumber: Joi.string().allow(""),
    street: Joi.string().required(),
    city: Joi.string().required(),
    county: Joi.string().required(),
    imgUrl: Joi.string().allow("")
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.populateState();
  }

  async populateState() {
    try {
      const data = { ...this.state.data };
      const { data: account } = await getAccount(this.props.modifyAccount);
      data.accountName = account.accountName;
      data.description = account.description;
      data.website = account.website;
      data.contactEmail = account.contactEmail;
      data.bankAccountNumber = account.bankAccountNumber;
      data.street = account.street;
      data.city = account.city;
      data.county = account.county;
      data.imgUrl = account.imgUrl;
      this.setState({ data });
    } catch (error) {}
  }

  doSubmit = async () => {
    try {
      await editAccount(this.props.modifyAccount, this.state.data);
      window.location = "/dashboard";
      // this.props.history.push("/dashboard");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors[ex.response.data.details[0].path[0]] =
          ex.response.data.details[0].message;
        this.setState({ errors } || {});
      } else if (ex.response && ex.response.status === 401) {
        // this.props.history.push("/logout");
        window.location = "/logout";
      }
    }
  };

  checkFile = () => {
    if (!this.state.image) {
      return true;
    }

    if (this.state.image) {
      if (this.state.image.type === "image/jpeg") {
        if (this.state.image.size < 500000) {
          return false;
        }
        return true;
      }
      if (this.state.image.type === "image/png") {
        if (this.state.image.size < 500000) {
          return false;
        }
        return true;
      }
    }

    return true;
  };

  render() {
    const { user } = this.props;
    if (!user) {
      return <Redirect to="/login" />;
    }
    if (user.type === "Sponsor") {
      // USER IS SPONSOR - NO BANK ACCOUNT
      return (
        <div className="container">
          <div className="jumbotron full-page">
            <Helmet>
              <title>Edit account</title>
            </Helmet>
            <h2 className="header-form mb-3">Edit Account</h2>
            <div className="image-edit-top">
              {!this.state.data.imgUrl && (
                <input
                  type="file"
                  onChange={this.handleFileChange}
                  name="file"
                  id="file"
                />
              )}
              {this.state.data.imgUrl && (
                <img
                  src={this.state.data.imgUrl}
                  // style={{ height: "100px" }}
                  alt={this.state.accountName}
                />
              )}
              {!this.state.data.imgUrl && (
                <button
                  onClick={this.handleUpload}
                  className="btn btn-info ml-3"
                  disabled={this.checkFile()}
                >
                  Upload
                </button>
              )}

              {this.state.data.imgUrl && (
                <button
                  onClick={this.handleRemoveImage}
                  className="btn btn-outline-secondary ml-3"
                  // data-toggle="tooltip"
                  // data-placement="top"
                  // title="Choose new image first"
                >
                  Change image
                </button>
              )}

              {this.state.image ? (
                (this.state.image.type === "image/jpeg" &&
                  this.state.image.size < 500000) ||
                (this.state.image.type === "image/png" &&
                  this.state.image.size < 500000) ? (
                  ""
                ) : (
                  <span style={{ color: "red" }}>
                    <p>"Sorry! Only .jpg or .png files. Max size 0.5Mb"</p>
                  </span>
                )
              ) : (
                ""
              )}
            </div>
            <div className="row">
              <div className="col-md-12 mt-3">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-row mt-6">
                    <div className="form-group col-md-12">
                      {this.renderInput("accountName", "Account Name", "text")}
                    </div>
                    <div className="form-group col-md-4">
                      {this.renderInput("website", "Website", "text")}
                    </div>
                    <div className="form-group col-md-4">
                      {this.renderInput(
                        "contactEmail",
                        "Contact Email",
                        "text"
                      )}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-3">
                      {this.renderInput("street", "Street", "text")}
                    </div>
                    <div className="form-group col-md-4">
                      {this.renderInput("city", "City", "text")}
                    </div>
                    <div className="form-group col-md-4">
                      {this.renderInput("county", "County", "text")}
                    </div>

                    <div className="form-group col-md-12">
                      {this.renderTextArea(
                        "description",
                        "Description",
                        "text"
                      )}
                    </div>
                  </div>
                  <div className="btn-group">
                    {this.renderButton2("Save changes")}
                    <CancelButton />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      // USER IS SCHOOL - BANK ACCOUNT INCLUDED
      return (
        <div className="container">
          <div className="jumbotron">
            <h3 className="header-form mb-3">Edit Account</h3>
            <div className="image-edit-top">
              {!this.state.data.imgUrl && (
                <input
                  type="file"
                  onChange={this.handleFileChange}
                  name="file"
                  id="file"
                />
              )}
              {this.state.data.imgUrl && (
                <img
                  src={this.state.data.imgUrl}
                  // style={{ height: "100px" }}
                  alt="ig"
                />
              )}
              {!this.state.data.imgUrl && (
                <button
                  onClick={this.handleUpload}
                  className="btn btn-info ml-3"
                  disabled={this.checkFile()}
                >
                  Upload
                </button>
              )}

              {this.state.data.imgUrl && (
                <button
                  onClick={this.handleRemoveImage}
                  className="btn btn-outline-secondary ml-3"
                  // data-toggle="tooltip"
                  // data-placement="top"
                  // title="Choose new image first"
                >
                  Change image
                </button>
              )}

              {this.state.image ? (
                (this.state.image.type === "image/jpeg" &&
                  this.state.image.size < 500000) ||
                (this.state.image.type === "image/png" &&
                  this.state.image.size < 500000) ? (
                  ""
                ) : (
                  <span style={{ color: "red" }}>
                    <p>"Sorry! Only .jpg or .png files. Max size 0.5Mb"</p>
                  </span>
                )
              ) : (
                ""
              )}
            </div>
            <div className="row">
              <div className="col-md-12 mt-3">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-row mt-6">
                    <div className="form-group col-md-4">
                      {this.renderInput("accountName", "Account Name", "text")}
                    </div>
                    <div className="form-group col-md-4">
                      {this.renderInput("website", "Website", "text")}
                    </div>
                    <div className="form-group col-md-4">
                      {this.renderInput(
                        "contactEmail",
                        "Contact Email",
                        "text"
                      )}
                    </div>
                    <div className="form-group col-md-12">
                      {this.renderInput(
                        "bankAccountNumber",
                        "Bank Account Number",
                        "text"
                      )}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-3">
                      {this.renderInput("street", "Street", "text")}
                    </div>
                    <div className="form-group col-md-4">
                      {this.renderInput("city", "City", "text")}
                    </div>
                    <div className="form-group col-md-4">
                      {this.renderInput("county", "County", "text")}
                    </div>

                    <div className="form-group col-md-12">
                      {this.renderTextArea(
                        "description",
                        "Description",
                        "text"
                      )}
                    </div>
                  </div>
                  <div className="btn-group">
                    {this.renderButton2("Save changes")}
                    <CancelButton />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default EditAccount;
