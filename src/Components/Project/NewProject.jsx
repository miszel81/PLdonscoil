import React from "react";
import Form from "../Common/Form";
import Joi from "joi-browser";
import { saveProject } from "../../services/projectService";
import { Redirect } from "react-router-dom";
import "../Layout/Common.css";
import { listOfCounties } from "../Common/ListOfCounties";
import { listOfCategories } from "../Common/ListOfCategories";
import { Helmet } from "react-helmet";

class NewProject extends Form {
  state = {
    data: {
      name: "",
      projectType: "",
      description: "",
      category: "",
      deadline: "",
      reach: [],
      account: "",
      owner: "",
      teaser: "",
      donateButton: false,
      otherSupportButton: false,
      // image: null,
      imgUrl: ""
    },
    errors: {}
  };

  schema = {
    name: Joi.string()
      .required()
      .min(3)
      .max(50),
    projectType: Joi.string().required(),
    description: Joi.string()
      .required()
      .min(3)
      .max(5000),
    category: Joi.string()
      .max(20)
      .required(),
    deadline: Joi.date().required(),
    reach: Joi.array().required(),
    account: Joi.string(),
    owner: Joi.string(),
    teaser: Joi.string()
      .min(3)
      .max(150),
    donateButton: Joi.boolean(),
    otherSupportButton: Joi.boolean(),
    imgUrl: Joi.string().allow("")
  };

  componentDidMount() {
    this.populateState();
    window.scrollTo(0, 0);
  }

  populateState() {
    try {
      const data = { ...this.state.data };
      data.account = this.props.user.account;
      data.owner = this.props.user._id;
      data.projectType = this.props.user.type;
      this.setState({ data });
    } catch (error) {}
  }

  doSubmit = async () => {
    try {
      await saveProject(this.state.data);
      window.location = `/projects/account/${this.state.data.account}`;
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
    const btnClassDonate = this.state.data.donateButton
      ? "btn btn-info"
      : "btn btn-outline-info";

    const otherSupportButton = this.state.data.otherSupportButton
      ? "btn btn-info"
      : "btn btn-outline-info";

    if (!this.props.user) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="container">
        <Helmet>
          <title>Create new project</title>
        </Helmet>
        <div className="jumbotron">
          <h1>Create new project</h1>
          <label htmlFor="file">Add a project image or photo</label>
          <div className="finance">
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
                onClick={this.handleRemoveImage}
                className="btn btn-danger ml-3"
              >
                Change
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
            <div className="form-row mt-3">
              <div className="form-group col-md-10">
                {this.renderInput(
                  "name",
                  "Project Name",
                  "text",
                  "e.g. Let's Build the Tower"
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-12">
                {this.renderInput(
                  "teaser",
                  "Short info about your project. A teaser.",
                  "text",
                  "e.g. We have an idea how to improve our safety."
                )}
              </div>
            </div>

            {/* Textarea project description  */}
            <div className="form-row">
              <div className="form-group col-12">
                {this.renderTextArea(
                  "description",
                  "Detailed Description",
                  "Tell us more about the project"
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="data form-group col-md-4 data-input">
                {/* {this.renderInput("deadline", "When? ", "date")} */}
                {this.renderDate("deadline", "When?")}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4 data-select">
                <label htmlFor="listOfCategories">
                  Select a category of your project
                </label>
                <select
                  // className="form-control"
                  className="form-control"
                  // id="listOfCategorie"
                  onChange={this.handleCategorySelect}
                >
                  <option value="1">Choose a category:</option>
                  {listOfCategories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Finance section for schools only  */}
            {this.props.user.type === "School" && (
              <div className="finance">
                <h1>Choose the form of support</h1>
                <p className="finlabel">Add money transfer button</p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="donateButton"
                    id="donateButton"
                    // value="option1"
                    checked={this.state.donateButton}
                    onChange={this.handleCheckBoxChange}
                  />
                  <label className="form-check-label" htmlFor="donateButton">
                    <button className={btnClassDonate} disabled>
                      Donate! <i className="fas fa-euro-sign"></i>
                    </button>
                  </label>
                </div>
                <p className="finlabel mt-3">
                  Add non-financial support button
                </p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="otherSupportButton"
                    id="otherSupportButton"
                    // value="option2"
                    checked={this.state.otherSupportButton}
                    onChange={this.handleCheckBoxChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="otherSupportButton"
                  >
                    <button className={otherSupportButton} disabled>
                      Give a hand <i className="fas fa-people-carry"></i>
                    </button>
                  </label>
                </div>
              </div>
            )}

            {/* End of finance section  */}

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="listOfCounties">
                  Select all counties where you wish to promote your project
                </label>
                <select
                  multiple
                  className="form-control"
                  id="listOfCounties"
                  onChange={this.handleCountyMultiSelect}
                >
                  <option selected></option>
                  {listOfCounties.map(county => (
                    <option key={county} value={county}>
                      {county}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <p className="selectedCounties">
                Selected (*click name to remove):
              </p>
              {this.state.data.reach.map(county => (
                <span
                  key={county}
                  className="d-inline-block"
                  tabIndex="0"
                  data-toggle="tooltip"
                  title="Click to remove"
                >
                  <p
                    className="selectedCounties green"
                    onClick={() => this.handleDeselectCounty(county)}
                  >
                    {county}
                  </p>
                </span>
              ))}
            </div>
            <div className="mt-3">{this.renderButton("Create project")}</div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewProject;
