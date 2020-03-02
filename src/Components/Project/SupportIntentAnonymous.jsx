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
import { Helmet } from "react-helmet";
import { css } from "glamor";
// import CustomButton from "../Project/CustomButton";

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
      return "Support";
    }
    return "Support";
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
    toast(
      "Thank you for you interest. We have sent your contact details to project owner. School will get back to you shortly ",
      {
        className: css({
          borderStyle: "none",
          borderRadius: "5px"
        }),
        bodyClassName: css({
          fontSize: "1.5rem",
          fontFamily: "Open Sans Condensed",
          padding: "1rem"
        }),
        hideProgressBar: true
      }
    );

  componentDidMount() {
    window.scrollTo(0, 0);
    this.populateState();
    this.checkSupport();
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <div className="container-fluid table-background full-page">
          <NavBar user={user} />

          <div className="container-fluid">
            {/* <p className="text-light">Payment options:</p> */}
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
                  <h1 className="h-text-fontMainTitle text-center mt-5 mb-5">
                    Payment options
                  </h1>

                  {/* <h1 className="h-text-fontMainText text-center  mt-3"></h1> */}
                  <div className="container">
                    <div className="jumbotron text-center">
                      <p className="text-center">
                        {this.state.data.account.accountName}'s bank account:
                      </p>{" "}
                      <h1 className="text-center mb-3 mt-3 mobileAccountNumber">
                        {this.state.data.account.bankAccountNumber}
                      </h1>
                      <p className="mobile-reference">
                        Reference: "{this.state.data.name}".
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="container">
                <div className="jumbotron text-center">
                  <h1>Online payment availabe soon!</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SupportInent;
