import React from "react";
import "./CreateAccount.css";
import Form from "../Common/Form";
import Joi from "joi-browser";
import { createAccount } from "../../services/accountService";
import "../Layout/Common.css";
import NavBar from "../Layout/NavBar";
import { Helmet } from "react-helmet";

class CreateAccount extends Form {
  state = {
    data: {
      // About account
      accountName: "",
      croRoll: "",
      bankAccountNumber: "",
      description: "",
      website: "",
      contactEmail: "",
      street: "",
      city: "",
      county: "",
      imgUrl: "",
      // About user
      firstName: "",
      lastName: "",
      title: "",
      email: "",
      phone: "",
      password: ""
    },
    errors: {}
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  // Register new account should be easy. As minimum fields as possible.

  schema = {
    // About Account:
    accountName: Joi.string()
      .required()
      .min(2)
      .max(35)
      .label("Name"),

    croRoll: Joi.string()
      .min(3)
      .max(30)
      .required()
      .label("Registration Number"),

    bankAccountNumber: Joi.string()
      .min(22)
      .max(22)
      .required()
      .label("Bank Account Number"),

    website: Joi.string()
      .required()
      .max(35)
      .label("Website"),

    description: Joi.string()
      .required()
      .max(5000)
      .label("Tell us about your company"),
    street: Joi.string()
      .required()
      .max(35)
      .label("Street"),
    city: Joi.string()
      .required()
      .max(35)
      .label("City"),
    county: Joi.string()
      .required()
      .max(35)
      .label("County"),
    contactEmail: Joi.string()
      .required()
      .max(35)
      .email()
      .label("Contact Email"),
    imgUrl: Joi.string().allow(""),
    // About user:
    firstName: Joi.string()
      .required()
      .max(30)
      .label("First Name"),
    lastName: Joi.string()
      .required()
      .max(30)
      .label("Last Name"),
    title: Joi.string()
      .required()
      .min(2)
      .max(30)
      .label("Title"),
    phone: Joi.string()
      .required()
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
      .min(8)
      .max(30)
      .label("Phone"),
    email: Joi.string()
      .email()
      .required()
      .max(30)
      .label("Email"),
    password: Joi.string()
      .required()
      .min(8)
      .max(30)
      .label("Password")
  };

  schemaNoBank = {
    // About Account:
    accountName: Joi.string()
      .required()
      .min(2)
      .max(50)
      .label("Name"),

    croRoll: Joi.string()
      .min(3)
      .max(30)
      .required()
      .label("Registration Number"),

    bankAccountNumber: Joi.string()
      .min(22)
      .max(22)
      .allow("")
      .label("Bank Account Number"),

    website: Joi.string()
      .required()
      .max(255)
      .label("Website"),

    description: Joi.string()
      .required()
      .max(5000)
      .label("Tell us about your company"),
    street: Joi.string()
      .required()
      .max(255)
      .label("Street"),
    city: Joi.string()
      .required()
      .max(35)
      .label("City"),
    county: Joi.string()
      .required()
      .max(255)
      .label("County"),
    contactEmail: Joi.string()
      .required()
      .max(255)
      .email()
      .label("Contact Email"),
    imgUrl: Joi.string().allow(""),
    // About user:
    firstName: Joi.string()
      .required()
      .max(30)
      .label("First Name"),
    lastName: Joi.string()
      .required()
      .max(30)
      .label("Last Name"),
    title: Joi.string()
      .required()
      .min(2)
      .max(30)
      .label("Title"),
    phone: Joi.string()
      .required()
      .regex(/^\d+$/)
      .min(8)
      .max(30)

      .label("Phone"),
    email: Joi.string()
      .email()
      .required()
      .max(30)
      .label("Email"),
    password: Joi.string()
      .required()
      .min(8)
      .max(30)
      .label("Password")
  };

  doSubmit = async () => {
    try {
      if (this.props.props.match.url === "/register/sponsor") {
        const dane = { ...this.state.data, type: "Sponsor" };
        await createAccount(dane);
        this.props.props.history.push("/registration-successfull");
      }
      if (this.props.props.match.url === "/register/school") {
        const dane = { ...this.state.data, type: "School" };
        await createAccount(dane);
        this.props.props.history.push("/registration-successfull");
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };

        errors[ex.response.data.details[0].path[0]] =
          ex.response.data.details[0].message;
        this.setState({ errors: errors || {} });
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

  handleSelect = e => {
    const type = e.currentTarget.value;
    this.props.props.history.push(`/register/${type}`);
  };

  render() {
    const { user } = this.props.props;

    if (this.props.props.match.url === "/register/sponsor") {
      return (
        <div className="container-fluid register-background">
          <Helmet>
            <title>Register sponsor</title>
          </Helmet>
          <NavBar user={user} />
          <div className="">
            <div className="jumbotron">
              {/* <h2>Create Sponsor Account</h2> */}
              <div className="row">
                <div className="col-md-10 offset-md-1">
                  <form onSubmit={this.handleSubmit}>
                    <h2 className="header-form">About Company</h2>
                    <div className="form-row">
                      <div className="form-group col-md-5">
                        {this.renderInput(
                          "accountName",
                          "Name*",
                          "text",
                          "mmlab"
                        )}
                      </div>
                      <div className="form-group col-md-2">
                        {this.renderInput("croRoll", "CRO*", "text", "123456")}
                      </div>
                      <div className="form-group col-md-5">
                        {this.renderInput(
                          "website",
                          "Website*",
                          "text",
                          "www.mmlab.ie"
                        )}
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-3">
                        {this.renderInput("city", "City*", "text", "Cork")}
                      </div>
                      <div className="form-group col-md-3">
                        {this.renderInput("county", "County*", "text", "Cork")}
                      </div>
                      <div className="form-group col-md-6">
                        {this.renderInput(
                          "street",
                          "Street*",
                          "text",
                          "12 Main Street"
                        )}
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group col-md-6">
                        {this.renderInput(
                          "contactEmail",
                          "Company email*",
                          "email",
                          "info@company.ie"
                        )}
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-12">
                        {this.renderTextArea(
                          "description",
                          "About your company*",
                          "We are a family business company.."
                        )}
                      </div>
                    </div>
                  </form>
                  <label htmlFor="file1">Upload a company logo</label>
                  <div className="account-image">
                    <input
                      type="file"
                      onChange={this.handleFileChange}
                      name="file"
                      id="file1"
                    />
                    {this.state.data.imgUrl && (
                      <img
                        src={this.state.data.imgUrl}
                        style={{ height: "100px" }}
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
                        onClick={this.handleUpload}
                        className="btn btn-danger ml-3"
                      >
                        Remove
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
                          "Sorry! Only .jpg or .png files. Max size 0.5Mb"
                        </span>
                      )
                    ) : (
                      ""
                    )}
                  </div>
                  <form onSubmit={this.handleSubmit}>
                    <h2 className="header-form mt-3">About You</h2>
                    <div className="form-row">
                      <div className="form-group col-md-3">
                        {this.renderInput(
                          "firstName",
                          "First Name*",
                          "text",
                          "Aoife"
                        )}
                      </div>
                      <div className="form-group col-md-3">
                        {this.renderInput(
                          "lastName",
                          "Last Name*",
                          "text",
                          "Walsh"
                        )}
                      </div>
                      <div className="form-group col-md-6">
                        {this.renderInput(
                          "title",
                          "Title*",
                          "text",
                          "Marketing Manager"
                        )}
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        {this.renderInput(
                          "email",
                          "Email*",
                          "text",
                          "awalsh@company.com"
                        )}
                      </div>
                      <div className="form-group col-md-6">
                        {this.renderInput(
                          "phone",
                          "Phone Number*",
                          "text",
                          "089 238 45 55"
                        )}
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        {this.renderInput(
                          "password",
                          "Create Password (Password manager recommended)*",
                          "password",
                          "min. 8 characters"
                        )}
                      </div>
                    </div>

                    {this.renderButton2("Register sponsor")}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="container-fluid register-background">
          <Helmet>
            <title>Register school</title>
          </Helmet>
          <NavBar user={user} />
          {/* <h2>Create School Account</h2> */}
          <div className="">
            {/* <h1 className="text-light">School registration form:</h1> */}
            <div className="jumbotron">
              <div className="row">
                <div className="col-md-10 offset-md-1">
                  <form onSubmit={this.handleSubmit}>
                    <h2 className="header-form">About School</h2>
                    <div className="form-row">
                      <div className="form-group col-md-5">
                        {this.renderInput(
                          "accountName",
                          "Name of School*",
                          "text",
                          "Scoil Bhride"
                        )}
                      </div>
                      <div className="form-group col-md-2">
                        {this.renderInput(
                          "croRoll",
                          "Roll Number*",
                          "text",
                          "S34430"
                        )}
                      </div>
                      <div className="form-group col-md-5">
                        {this.renderInput(
                          "website",
                          "Website*",
                          "text",
                          "www.scoil.ie"
                        )}
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-3">
                        {this.renderInput(
                          "city",
                          "City*",
                          "text",
                          "Portlaoise"
                        )}
                      </div>
                      <div className="form-group col-md-3">
                        {this.renderInput("county", "County*", "text", "Laois")}
                      </div>
                      <div className="form-group col-md-6">
                        {this.renderInput(
                          "street",
                          "Street*",
                          "text",
                          "12 Main Road"
                        )}
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        {this.renderInput(
                          "contactEmail",
                          "School email*",
                          "email",
                          "info@scoil.ie"
                        )}
                      </div>
                      <div className="form-group col-md-6">
                        {this.renderInput(
                          "bankAccountNumber",
                          "Bank Account Number*",
                          "text",
                          "IE29 AIBK 9311 5212 3456 78"
                        )}
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group col-md-12">
                        {this.renderTextArea(
                          "description",
                          "About the school*",
                          "Scoil Bhride is a..."
                        )}
                      </div>
                    </div>
                  </form>
                  <label htmlFor="file">Upload a school photo or logo</label>
                  <div className="account-image">
                    <input
                      type="file"
                      onChange={this.handleFileChange}
                      name="file"
                      id="file"
                    />
                    {this.state.data.imgUrl && (
                      <img
                        src={this.state.data.imgUrl}
                        style={{ height: "100px" }}
                        alt="ig"
                      />
                    )}
                    {!this.state.data.imgUrl && (
                      <button
                        onClick={this.handleUpload}
                        className="btn btn-info btn-sm"
                        disabled={this.checkFile()}
                      >
                        Upload
                      </button>
                    )}

                    {this.state.data.imgUrl && (
                      <button
                        onClick={this.handleRemoveImage}
                        className="btn btn-danger btn-sm mt-3"
                      >
                        Remove
                      </button>
                    )}

                    {this.state.image ? (
                      (this.state.image.type === "image/jpeg" &&
                        this.state.image.size < 500000) ||
                      (this.state.image.type === "image/png" &&
                        this.state.image.size < 500000) ? (
                        ""
                      ) : (
                        <span className="badge badge-danger mt-3">
                          "Sorry! Only .jpg or .png files. Max size 0.5Mb"
                        </span>
                      )
                    ) : (
                      ""
                    )}
                  </div>
                  <form onSubmit={this.handleSubmit}>
                    <h2 className="header-form mt-3">About You</h2>
                    <div className="form-row">
                      <div className="form-group col-md-3">
                        {this.renderInput(
                          "firstName",
                          "First Name*",
                          "text",
                          "Ciara"
                        )}
                      </div>
                      <div className="form-group col-md-3">
                        {this.renderInput(
                          "lastName",
                          "Last Name*",
                          "text",
                          "O'Connel"
                        )}
                      </div>
                      <div className="form-group col-md-6">
                        {this.renderInput(
                          "title",
                          "Title*",
                          "text",
                          "Principal"
                        )}
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        {this.renderInput(
                          "email",
                          "Email*",
                          "text",
                          "ck@scoil.ie"
                        )}
                      </div>
                      <div className="form-group col-md-6">
                        {this.renderInput(
                          "phone",
                          "Phone Number*",
                          "text",
                          "089 238 45 55"
                        )}
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        {this.renderInput(
                          "password",
                          "Create Password (Password manager recommended)*",
                          "password",
                          "min. 8 characters"
                        )}
                      </div>
                    </div>
                    {this.renderButton("Register school")}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateAccount;
