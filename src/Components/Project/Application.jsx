import React from "react";
import NavBar from "../Layout/NavBar";
import { getAccount } from "../../services/accountService";
import { getUserDetails } from "../../services/userServices";
import {
  saveApplication,
  getProjectDetails
} from "../../services/projectService";
import "../Layout/Common.css";
import "../Common/Loader.css";
import Form from "../Common/Form";
import Joi from "joi-browser";
import { applyProject } from "../../services/campaignService";
import { Redirect } from "react-router-dom";

class Application extends Form {
  state = {
    data: {
      schoolId: "",
      schoolName: "",
      schoolCity: "",
      schoolAddress: "",
      additionalInfo: "",
      sponsorProjectId: "",
      sponsorProjectName: "",
      userEmail: "",
      userFirstName: "",
      userLastName: "",
      userPhone: "",
      userTitle: ""
    },
    loading: true,
    errors: {}
  };

  schema = {
    additionalInfo: Joi.string()
      .required()
      .min(3)
      .max(500)
      .label("Additional Info"),
    schoolId: Joi.string(),
    schoolName: Joi.string(),
    schoolCity: Joi.string(),
    schoolAddress: Joi.string(),
    sponsorProjectId: Joi.string(),
    sponsorProjectName: Joi.string(),
    userEmail: Joi.string(),
    userFirstName: Joi.string(),
    userLastName: Joi.string(),
    userPhone: Joi.string(),
    userTitle: Joi.string()
  };

  componentDidMount() {
    this.populateAccount(this.props.user.account);
  }

  populateAccount = async accountID => {
    const data = { ...this.state.data };
    // get school details
    const { data: account } = await getAccount(accountID);
    data.schoolId = account._id;
    data.schoolName = account.accountName;
    data.schoolCity = account.city;
    data.schoolAddress = account.street;

    // get id of the sponsor project
    const { id } = this.props.match.params;
    data.sponsorProjectId = id;

    //get project name

    const { data: projectData } = await getProjectDetails(
      this.props.match.params.id
    );
    data.sponsorProjectName = projectData.name;

    // get the user details
    const { data: user } = await getUserDetails(this.props.user._id);
    data.userEmail = user.email;
    data.userFirstName = user.firstName;
    data.userPhone = user.phone;
    data.userTitle = user.title;
    data.userLastName = user.lastName;

    this.setState({ data, loading: false });
  };

  doSubmit = async () => {
    try {
      await applyProject(this.props.match.params.id, this.props.user.account);
      await saveApplication(this.state.data);
      this.props.history.push("/projects/applied");
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
    if (!user) return <Redirect to="/login" />;
    return (
      <div className="container-fluid login-background">
        <NavBar user={user} />
        {this.state.loading ? (
          <div className="container lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <div>
            <div className="jumbotron jumbotron-about">
              <h1 className="h-text-fontMainTitle text-center mt-5 mb-5">
                {" "}
                Application form
              </h1>
              <h3 className="text-center mb-5">
                "{this.state.data.sponsorProjectName}"
              </h3>
              <div className="container">
                <h3> School details</h3>
                <div className="jumbotron application">
                  <p>
                    <span className="school-app-title">Name:</span>{" "}
                    {this.state.data.schoolName}
                  </p>
                  <p>
                    <span className="school-app-title">Location:</span>{" "}
                    {this.state.data.schoolCity}
                  </p>
                  <p>
                    <span className="school-app-title">Address:</span>{" "}
                    {this.state.data.schoolAddress}
                  </p>
                </div>

                <h3> Contact person</h3>
                <div className=" jumbotron application">
                  <p>
                    <span className="school-app-title">Name:</span>{" "}
                    {this.state.data.userFirstName}
                    <span> </span>
                    {this.state.data.userLastName}
                  </p>
                  <p>
                    <span className="school-app-title">Title:</span>{" "}
                    {this.state.data.userTitle}
                  </p>
                  <p>
                    <span className="school-app-title">Email:</span>{" "}
                    {this.state.data.userEmail}
                  </p>
                  <p>
                    <span className="school-app-title">Phone:</span>{" "}
                    {this.state.data.userPhone}
                  </p>
                </div>
                <form onSubmit={this.handleSubmit}>
                  <h3> Additional info</h3>
                  <div className="form-row addInfo alert-headingmt-3">
                    <div className="form-group  col-md-12">
                      {this.renderTextArea(
                        "additionalInfo",
                        "Please provide some additional info to support your application*",
                        "Start writing here..."
                      )}
                    </div>
                  </div>
                  {this.renderButton("Submit school application")}
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Application;
