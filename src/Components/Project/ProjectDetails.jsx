import React, { Component } from "react";
import { toast } from "react-toastify";
import {
  getProjectDetails,
  getApplication,
  deleteApplication,
  activateProject,
  getHands
} from "../../services/projectService";
import {
  observeProject,
  unObserveProject,
  supportProject,
  unSupportProject,
  // applyProject,
  resignProject,
  getCampaignObserve,
  getCampaignApply,
  getCampaignSupportes
} from "../../services/campaignService";
import { getUserDetails } from "../../services/userServices";
import { getCampaignDetails } from "../../services/campaignService";
import { getUser } from "../../services/authServices";
import OwnerViewSchoolProject from "./SchoolProjectDetailsViews/OwnerViewSchoolProject";
import SchoolViewSchoolProject from "./SchoolProjectDetailsViews/SchoolViewSchoolProject";
import SponsorViewSchoolProject from "./SchoolProjectDetailsViews/SponsorViewSchoolProject";
import AnonymousViewSchoolProject from "./SchoolProjectDetailsViews/AnonymousViewSchoolProject";
import AnonymousViewSponsorProject from "./SponsorProjectDetailsView/AnonymousViewSponsorProject";
import OwnerViewSponsorProject from "./SponsorProjectDetailsView/OwnerViewSponsorProject";
import SchoolViewSponsorProject from "./SponsorProjectDetailsView/SchoolViewSponsorProject";
import SponsorViewSponsorProject from "./SponsorProjectDetailsView/SponsorViewSponsorProject";
import { css } from "glamor";

class ProjectDetails extends Component {
  state = {
    data: {},
    disabledObserve: false,
    disabledApply: false,
    disabledSupport: false,
    owner: {},
    campaign: {},
    hands: [],
    application: {},
    loading: true,
    errors: [],
    loggedInUser: {}
  };

  applicationHandler = async () => {
    try {
      const projectId = this.props.projectId;
      const accountId = this.props.props.user.account;
      const { data: application } = await getApplication(projectId, accountId);
      return application;
    } catch (error) {
      return null;
    }
  };

  async populateState() {
    try {
      const projectId = this.props.projectId;
      const loggedInUser = this.props.loggedInUser;
      const { data } = await getProjectDetails(projectId);
      const userId = data.owner;
      const { data: owner } = await getUserDetails(userId);
      const { data: campaign } = await getCampaignDetails(projectId);
      const { data: hands } = await getHands(projectId);
      const application = await this.applicationHandler();
      this.setState({
        data,
        owner,
        campaign,
        application,
        loggedInUser,
        hands,
        loading: false
      });
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        window.location = "/not-found";
      } else if (ex.response && ex.response.status === 400) {
        window.location = "/not-found";
      }
    }
  }
  //Activate logic
  activateHandler = async () => {
    const projectId = this.props.projectId;
    const response = await activateProject(projectId);
    const data = { ...this.state.data };
    if (response.status === 201) {
      data.isActivated = data.isActivated ? false : true;
      this.setState({ data });
    }
  };

  activateRenderHandler = () => {
    if (this.state.data.isActivated) {
      return "Suspend";
    }
    return "Publish";
  };

  //Support logic
  async checkSupport() {
    const projectId = this.props.projectId;
    // const user = getUser();
    if (this.props.loggedInUser) {
      const campaign = await getCampaignSupportes(
        projectId,
        this.props.loggedInUser.account
      );
      if (campaign.data === this.state.disabledSupport) return;
      else {
        this.setState({ disabledSupport: true });
      }
    } else {
      return;
    }
  }
  supportRenderHandler = () => {
    // const user = getUser();
    if (this.props.loggedInUser) {
      if (this.state.disabledSupport) {
        return "Remove from supported";
      }
      return "Support";
    }
    return "Support";
  };

  supportHandler = async () => {
    const projectId = this.props.projectId;
    // const user = getUser();
    if (!this.state.disabledSupport) {
      await supportProject(
        projectId,
        this.props.loggedInUser.account,
        this.props.loggedInUser._id
      );
      this.setState({ disabledSupport: true });
      this.notifyF();
    }
  };

  unSupportHandler = async () => {
    const projectId = this.props.projectId;
    const user = getUser();
    if (this.state.disabledSupport) {
      await unSupportProject(projectId, user.account, user._id);
      this.setState({ disabledSupport: false });
      this.notifyG();
    }
  };

  //Watchlist logic
  async checkObserve() {
    const projectId = this.props.projectId;
    const user = getUser();
    if (user) {
      const campaign = await getCampaignObserve(projectId, user.account);
      if (campaign.data === this.state.disabledObserve) return;
      else {
        this.setState({ disabledObserve: true });
      }
    } else {
      return;
    }
  }
  observeHandler = async () => {
    const user = getUser();
    const projectId = this.props.projectId;
    if (this.state.disabledObserve) {
      await unObserveProject(projectId, user.account);
      this.setState({ disabledObserve: false });
      this.notifyE();
    } else {
      await observeProject(projectId, user.account);
      this.setState({ disabledObserve: true });
      this.notifyB();
    }
  };
  watchlistRenderHandler = () => {
    const user = getUser();
    if (user) {
      if (this.state.disabledObserve) {
        return "Remove from watchlist";
      }
      return "Add to watchlist";
    }
    return "Add to watchlist";
  };

  //Apply Logic
  async checkApply() {
    const projectId = this.props.projectId;
    const user = getUser();
    if (user) {
      const campaign = await getCampaignApply(projectId, user.account);
      if (campaign.data === this.state.disabledApply) return;
      else {
        this.setState({ disabledApply: true });
      }
    } else {
      return;
    }
  }
  applyHandler = async () => {
    const user = getUser();
    const projectId = this.props.projectId;
    if (this.state.disabledApply) {
      await resignProject(projectId, user.account);
      await deleteApplication(this.state.application._id);
      this.setState({ disabledApply: false });
      this.notifyD();
    } else {
      // linia 107 jest disabled -> applyProject dzieje sie po kliknieciu submit na ekranie Application.
      // applyProject(projectId, user.account);
      this.setState({ disabledApply: true });
      // this.notifyA();
    }
  };

  applyRenderHandler = () => {
    const user = getUser();
    if (user) {
      if (this.state.disabledApply) {
        return "Resign";
      }
      return "Apply";
    }
    return "Apply";
  };

  //toasts
  notifyA = () => toast("You have applied! ", { containerId: "A" });
  notifyB = () =>
    toast("Added to watchlist!", {
      className: css({
        background: "#333",
        borderRadius: "25px",
        width: "80%"
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
  // notifyB = () => toast("Added to your watchlist! ", { containerId: "B" });
  notifyC = () =>
    toast("Please log in! or register your School", { containerId: "C" });
  notifyD = () =>
    toast("You have resigned from this project!", { containerId: "D" });
  notifyE = () =>
    toast("Removed from watchlist!", {
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
  // notifyE = () => toast("Removed from your watchlist! ", { containerId: "E" });
  // notifyF = () =>
  //   toast(
  //     "Thank you for you interest. We have sent your contact details to project owner. School will get back to you shortly ",
  //     { containerId: "F" }
  //   );
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
  notifyG = () =>
    toast("Removed from supported projects! ", { containerId: "G" });

  componentDidMount() {
    this.populateState();
    this.checkObserve();
    this.checkApply();
    this.checkSupport();
  }

  render() {
    const { data, owner, loggedInUser, campaign, hands } = this.state;
    const user = getUser();
    return (
      <div className="container">
        <div className="jumbotron">
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
          ) : data.projectType === "School" ? (
            user && user.account === data.account._id ? (
              <OwnerViewSchoolProject
                {...this.props}
                data={data}
                owner={owner}
                campaign={campaign}
                activateHandler={this.activateHandler}
                activateRenderHandler={this.activateRenderHandler}
                hands={hands}
                projectId={this.props.projectId}
              />
            ) : user && user.type === data.projectType ? (
              <SchoolViewSchoolProject
                data={data}
                owner={owner}
                projectId={this.props.projectId}
              />
            ) : user ? (
              <SponsorViewSchoolProject
                data={data}
                owner={owner}
                observeHandler={this.observeHandler}
                watchlistRenderHandler={this.watchlistRenderHandler}
                supportRenderHandler={this.supportRenderHandler}
                supportHandler={this.supportHandler}
                unsupportHandler={this.unSupportHandler}
                disabledSupport={this.state.disabledSupport}
              />
            ) : (
              <AnonymousViewSchoolProject
                data={data}
                owner={owner}
                projectId={this.props.projectId}
              />
            )
          ) : user && user.account === data.account._id ? (
            <OwnerViewSponsorProject
              {...this.props}
              data={data}
              owner={owner}
              activateHandler={this.activateHandler}
              activateRenderHandler={this.activateRenderHandler}
              campaign={campaign}
              projectId={this.props.projectId}
            />
          ) : user && user.type === data.projectType ? (
            <SponsorViewSponsorProject
              data={data}
              owner={owner}
              projectId={this.props.projectId}
            />
          ) : user ? (
            <SchoolViewSponsorProject
              data={data}
              owner={owner}
              props={this.props}
              loggedInUser={loggedInUser}
              observeHandler={this.observeHandler}
              applyHandler={this.applyHandler}
              watchlistRenderHandler={this.watchlistRenderHandler}
              applyRenderHandler={this.applyRenderHandler}
            />
          ) : (
            <AnonymousViewSponsorProject
              {...this.props}
              data={data}
              owner={owner}
              applyOnClick={this.applyOnClick}
            />
          )}
        </div>
      </div>
    );
  }
}
// }
export default ProjectDetails;
