import React, { Component } from "react";
import "./SchoolProfile.css";
import "../Common/Loader.css";
import ProjectCards from "../Project/ProjectCards";
import { getAccount } from "../../services/accountService";
import { getAccountProjects } from "../../services/projectService";
import { Helmet } from "react-helmet";

class AccountProfile extends Component {
  state = { account: "", projects: [], errors: {}, loading: true };

  async componentDidMount() {
    try {
      const accountId = this.props.id;
      const { data: account } = await getAccount(accountId);
      const { data: projects } = await getAccountProjects(accountId);
      this.setState({ account, projects, loading: false });
      // this.setState({ loading: false });
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        window.location = "/not-found";
      }
    }
  }

  render() {
    const { account } = this.state;

    return (
      <div>
        {this.state.loading ? (
          <div className="lds-roller container">
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
          <div className="container account-profile">
            <Helmet>
              <title>{account.accountName}</title>
            </Helmet>
            <div className="container-flu1id">
              <div className="jumbotron">
                {account.imgUrl ? (
                  <div className="container img-display">
                    <img src={account.imgUrl} alt="donscoil" />
                  </div>
                ) : null}
                <div className="jumbotron">
                  <div className="account-profile-title">
                    <h1>Welcome to {account.accountName}!</h1>
                    <p className="green text-center">
                      {/* Visit our website: {account.website} or email us:{" "} */}

                      {account.contactEmail}
                    </p>
                  </div>

                  <div className="account-profile-description">
                    <p>{account.description}</p>
                  </div>
                </div>

                <div className="row">
                  <ProjectCards projects={this.state.projects} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AccountProfile;
