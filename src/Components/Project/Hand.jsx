import React from "react";
import Form from "../Common/Form";
import Joi from "joi-browser";
import { getProjectDetails, giveHand } from "../../services/projectService";
// import { toast } from "react-toastify";
import "../Common/Loader.css";
import { Helmet } from "react-helmet";

class Hand extends Form {
  state = {
    data: {
      project: this.props.projectId,
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: ""
    },
    project: {
      name: ""
    },
    errors: {}
  };

  schema = {
    project: Joi.string().required(),
    firstName: Joi.string()
      .max(30)
      .required(),
    lastName: Joi.string()
      .max(30)
      .required(),
    phone: Joi.string()
      .max(30)
      .required(),
    email: Joi.string()
      .email()
      .max(35)
      .required(),
    message: Joi.string()
      .max(150)
      .required()
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.populateState();
  }

  async populateState() {
    try {
      const projectDetails = await getProjectDetails(this.props.projectId);
      const project = { ...this.state.project };
      project.name = projectDetails.data.name;
      this.setState({ project });
    } catch (error) {}
  }

  doSubmit = async () => {
    try {
      await giveHand(this.state.data);
      // lepiej zastosowac props.push zeby nie robic full page reload.
      this.props.props.history.replace(
        `/posthand/thank_you/${this.state.data.firstName}`
      );
      // window.location = `/posthand/`;
      // this.notifyA();
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors[ex.response.data.details[0].path[0]] =
          ex.response.data.details[0].message;
        this.setState({ errors } || {});
      }
    }
  };

  //toasts
  // notifyA = () =>
  //   toast("Thanks for your Hand. Your contact details was sent to school ", {
  //     containerId: "A"
  //   });

  render() {
    return (
      <div className="container-fluid edit-form container-hand">
        {this.state.loading ? (
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
        ) : (
          <div className="jumbotron jumbotron-about container-hand">
            <Helmet>
              <title>Support project: "{this.state.project.name}"</title>
            </Helmet>
            <div className="text-center mt-3">
              Give a hand to:
              <h1 className="account-profile-title mt-5 mb-5">
                "{this.state.project.name}".
              </h1>
            </div>
            <div className="jumbotron col-sm-10 col-md-8 offset-md-2">
              <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    {this.renderInput(
                      "firstName",
                      "First Name",
                      "text",
                      "Ciara"
                    )}
                  </div>
                  <div className="form-group col-md-8">
                    {this.renderInput("lastName", "Last Name", "text", "Byrne")}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    {this.renderInput(
                      "phone",
                      "Phone",
                      "text",
                      "087 344 45 54"
                    )}
                  </div>
                  <div className="form-group col-md-6">
                    {this.renderInput(
                      "email",
                      "Email",
                      "text",
                      "ciara@gmail.com"
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-12">
                    {this.renderTextArea(
                      "message",
                      "Your message",
                      "How can you help?"
                    )}
                  </div>
                </div>
                {this.renderButton("Send my details to school")}
                {/* <button className="btn btn-warning">
                    Give a hand! <i className="fas fa-people-carry"></i>
                  </button> */}
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Hand;
