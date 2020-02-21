import React, { Component } from "react";
import NavBar from "../Layout/NavBar";
import { toast } from "react-toastify";
import { getProjectDetails } from "../../services/projectService";
import { getUserDetails } from "../../services/userServices";
import { getUser } from "../../services/authServices";
import {
  supportProject,
  getCampaignSupportes
} from "../../services/campaignService";
import CustomButton from "../Project/CustomButton";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { css } from "glamor";

class SupportInent extends Component {
  state = {
    data: {},
    owner: {},
    loading: true,
    disabledSupport: false,
    errors: []
  };

  async populateState() {
    const projectId = this.props.match.params.id;
    const { data } = await getProjectDetails(projectId);
    const userId = data.owner;
    const { data: owner } = await getUserDetails(userId);
    this.setState({
      data,
      owner,
      loading: false
    });
  }

  async checkSupport() {
    const projectId = this.props.match.params.id;
    const user = getUser();
    if (user) {
      const campaign = await getCampaignSupportes(projectId, user.account);
      if (campaign.data === this.state.disabledSupport) return;
      else {
        this.setState({ disabledSupport: true });
      }
    } else {
      return;
    }
  }
  supportRenderHandler = () => {
    const user = getUser();
    if (user) {
      if (this.state.disabledSupport) {
        return "Supported!";
      }
      return "Send my contact details";
    }
    return "Send my contact details";
  };

  supportHandler = () => {
    const projectId = this.props.match.params.id;
    const user = getUser();
    if (!this.state.disabledSupport) {
      supportProject(projectId, user.account, user._id);
      this.setState({ disabledSupport: true });
      this.notifyF();
    }
  };

  //toast
  notifyF = () =>
    toast("Your contact details has been sent!", {
      className: css({
        background: "#333",
        borderRadius: "25px"
      }),
      bodyClassName: css({
        fontSize: "2rem",
        fontFamily: "Open Sans Condensed",
        padding: "1rem"
      }),
      progressClassName: css({
        background:
          "repeating-radial-gradient(circle at center, black 0, white, grey 30px)"
      })
    });

  componentDidMount() {
    window.scrollTo(0, 0);
    this.populateState();
    this.checkSupport();
  }

  render() {
    const { user } = this.props;
    if (!user) return <Redirect to="/login" />;
    return (
      <div className="container-fluid table-background full-page">
        <div>
          <NavBar user={user} />
        </div>
        <div className="container">
          <div className="jumbotron jumbotron-about">
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
              <div className="container mb-3">
                <Helmet>
                  <title>Donate: "{this.state.data.name}" </title>
                </Helmet>
                <div className="jumbotron jumbotron-about">
                  <h1 className="fontMainTitleSupport text-center mb-3 mt-3">
                    "{this.state.data.name}"
                  </h1>
                  <p className="text-center mt-5">
                    {" "}
                    We really appreciate your interest in our project!
                  </p>
                </div>
                <div className="jumbotron text-center fontMainTitleSupportP">
                  <p className="text-center">
                    {" "}
                    Click the button to send your contact details to
                  </p>

                  <p className="text-center mb-5">
                    {this.state.data.account.accountName}
                  </p>
                  <CustomButton
                    value={this.supportRenderHandler()}
                    disabled={this.state.disabledSupport}
                    className={"btn btn-info mb-4"}
                    onClick={() => {
                      this.supportHandler();
                    }}
                  />
                </div>

                <h1 className="container text-center mt-3">
                  <p className="mt-5">We will be in touch shortly!</p>
                  <p>
                    <i className="fab fa-grav fa-2x"></i>
                    <i className="fas fa-brain fa-2x"></i>
                    <i className="fas fa-code fa-2x"></i>
                  </p>
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default SupportInent;
