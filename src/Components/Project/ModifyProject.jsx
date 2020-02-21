import React from "react";
import Form from "../Common/Form";
import Joi from "joi-browser";
import {
  updateProject,
  getProjectDetails
} from "../../services/projectService";
import { Redirect } from "react-router-dom";
import { listOfCounties } from "../Common/ListOfCounties";
import "../Common/Loader.css";
import { listOfCategories } from "../Common/ListOfCategories";
import CancelButton from "../Common/CancelButton";

class ModifyProject extends Form {
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
      donateButton: "",
      otherSupportButton: "",
      imgUrl: ""
    },
    errors: {},
    loading: true
  };

  componentDidMount() {
    this.populateState();
  }

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

  async populateState() {
    try {
      const data = { ...this.state.data };
      const projectId = this.props.projectId;
      const project = await getProjectDetails(projectId);
      data.description = project.data.description;
      data.category = project.data.category;
      data.name = project.data.name;
      data.reach = project.data.reach;
      data.imgUrl = project.data.imgUrl;
      // data.deadline = new Date(project.data.deadline);
      data.deadline = project.data.deadline.substring(0, 10);
      data.donateButton = project.data.donateButton;
      data.otherSupportButton = project.data.otherSupportButton;
      data.teaser = project.data.teaser;
      data.account = project.data.account._id;
      data.owner = project.data.owner;
      data.projectType = project.data.projectType;

      this.setState({ data, loading: false });
    } catch (error) {}
  }

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

  doSubmit = async () => {
    try {
      await updateProject(this.state.data, this.props.projectId);
      window.location = `/projects/${this.props.projectId}`;
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
    const { user } = this.props;
    const { data, loading } = this.state;
    const btnClassDonate = this.state.data.donateButton
      ? "btn btn-info"
      : "btn btn-outline-info";

    const otherSupportButton = this.state.data.otherSupportButton
      ? "btn btn-info"
      : "btn btn-outline-info";

    if (!user) {
      return <Redirect to="/login" />;
    }
    if (loading) {
      return (
        <div className="container edit-form">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      );
    }

    if (user.account !== data.account) {
      return <Redirect to="/logout" />;
    }

    return (
      <div className="container edit-form">
        <div className="jumbotron modify-project ">
          <h3 className="header-form mb-3">Edit Project</h3>
          {/* <label htmlFor="file">Project image</label> */}
          <div className="image-edit-top">
            {!data.imgUrl && (
              <input
                type="file"
                onChange={this.handleFileChange}
                name="file"
                id="file"
              />
            )}
            {data.imgUrl && (
              <img
                src={data.imgUrl}
                // style={{ height: "100px" }}
                alt="ig"
              />
            )}
            {!data.imgUrl && (
              <button
                onClick={this.handleUpload}
                className="btn btn-info ml-3"
                disabled={this.checkFile()}
              >
                Upload
              </button>
            )}

            {data.imgUrl && (
              <button
                onClick={this.handleRemoveImage}
                className="btn btn-outline-secondary ml-3"
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
                  "Sorry! Only .jpg or .png files. Max size 0.5Mb"
                </span>
              )
            ) : (
              ""
            )}
          </div>

          <form onSubmit={this.handleSubmit}>
            <div className="form-row mt-3">
              <div className="form-group col-md-12">
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
            <div className="form-row">
              <div className="form-group col-12 ddd">
                {this.renderTextArea(
                  "description",
                  "Project Description",
                  "text",
                  "Tell us more aboute the project"
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-4 data-input">
                {this.renderInput("deadline", "When? ", "date")}
                {/* {this.renderDate("deadline", "When?")} */}
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
                  <option value="1">{data.category}</option>
                  {listOfCategories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Finance section for schools only  */}
            {user.type === "School" && (
              <div className="modify-project-img">
                <h1>Choose the form of support</h1>
                <p className="finlabel">Add money transfer button</p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="donateButton"
                    id="donateButton"
                    // value="option1"
                    checked={data.donateButton}
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
                    checked={data.otherSupportButton}
                    onChange={this.handleCheckBoxChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="otherSupportButton"
                  >
                    <button className={otherSupportButton} disabled>
                      Give a Hand! <i className="fas fa-people-carry"></i>
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
                Selected counties (*click to remove):
              </p>
              {data.reach.map(county => (
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
            <div className="btn-group mt-3">
              {this.renderButton("Save Changes")} <CancelButton />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ModifyProject;
