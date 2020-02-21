import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "../Layout/Layout.css";

import Footer from "./Footer";
// import NavBar from "../Layout/NavBar";
// Home page
import HomePageSet from "./HomePageSet";
import ForSchoolsSet from "./ForSchoolsSet";
import ForLoggedSchoolsSet from "./forLoggedSchoolsSet";
import ContactSet from "./ContactSet";
import LoginSet from "./LoginSet";
import LogoutSet from "./LogoutSet";
import RegisterSet from "./RegisterSet";
import ProjectsSet from "./ProjectsSet";
import AccountProjectsSet from "./AccountProjectsSet";
// import MainSearchSet from "./MainSearchSet";
import ProjectDetailsSet from "./ProjectDetailsSet";
import NewProjectSet from "./NewProjectSet";
import NewUserSet from "./NewUserSet";
import ModifyProjectSet from "./ModifyProjectSet";
import AccountProfileSet from "./AccountProfileSet";
import DashboardSet from "./DashboardSet";
import AfterRegistrationSet from "./AfterRegistrationSet";
import MissionSet from "./MissionSet";
import SchoolSearchResult from "../Account/SchoolSearchResult";
import CountyProjectsTable from "../Project/CountyProjectsTable";
import ResetPassSet from "./ResetPassSet";
import NewPassSet from "./NewPassSet";
import AccountUsersSet from "./AccountUsersSet";
import PostResetSet from "./PostResetSet";
import EditUserSet from "./EditUserSet";
import EditAccountSet from "./EditAccountSet";
// import MainSearchSetSponsors from "./MainSearchSetSchool";
import ForSponsorsSet from "./ForSponsorsSet";
import ChangePassSet from "./ChangePassSet";
import PostChangeSet from "./PostChangeSet";
import Application from "../Project/Application";
import ApplicantsTable from "../Project/ApplicantsTable";
import NotFoundSet from "./NotFoundSet";
import HandSet from "./HandSet";
import PostHandSet from "./PostHandSet";
import HandsTableSet from "./HandsTableSet";
import PostApplicationSet from "./PostApplicationSet";
import ForSupportersSet from "./ForSupportersSet";
import SupportIntent from "../Project/SupportIntent";
import SupportIntentAnonymous from "../Project/SupportIntentAnonymous";
import ToManyAttepts from "../Auth/ToManyAttempts";

import authOnly from "../Auth/authOnly";
// import { auth } from "firebase";

class Layout extends Component {
  render() {
    const { user } = this.props;
    const AuthDashboardSet = authOnly(DashboardSet);
    const AuthNewUserSet = authOnly(NewUserSet);
    const AuthEditUserSet = authOnly(EditUserSet);
    const AuthAccountProjectsSet = authOnly(AccountProjectsSet);
    const AuthApplication = authOnly(Application);
    const AuthSupportIntent = authOnly(SupportIntent);
    const AuthPostApplicationSet = authOnly(PostApplicationSet);
    const AuthApplicantsTable = authOnly(ApplicantsTable);
    const AuthAccountUsersSet = authOnly(AccountUsersSet);
    const AuthEditAccountSet = authOnly(EditAccountSet);
    const AuthNewProjectSet = authOnly(NewProjectSet);
    const AuthModifyProjectSet = authOnly(ModifyProjectSet);
    const AuthHandsTableSet = authOnly(HandsTableSet);
    const AuthChangePassSet = authOnly(ChangePassSet);

    return (
      <div className="layout">
        {/* NavBar */}
        {/* <NavBar user={user} /> */}
        {/** Layout management */}
        <div className="switch">
          <Switch>
            <Route
              path="/"
              exact
              render={props => <HomePageSet {...props} user={user} />}
              //OPEN ROUTE
            />
            <Route
              path="/contact"
              exact
              render={props => <ContactSet {...props} user={user} />}
              //OPEN ROUTE
            />
            <Route
              path="/forschools"
              exact
              render={props => <ForSchoolsSet {...props} user={user} />}
              //OPEN ROUTE
            />
            <Route
              path="/forsupporters"
              exact
              render={props => <ForSupportersSet {...props} user={user} />}
              //OPEN ROUTE
            />
            <Route
              path="/forsponsors"
              exact
              render={props => <ForSponsorsSet {...props} user={user} />}
              //OPEN ROUTE
            />
            {/* <Route
            path="/forschools/:countyName"
            exact
            component={SponsorProjectsSet}
          /> */}

            {/* <Route
              path="/forschools"
              exact
              render={props => <MainSearchSet user={user} {...props} />}
            /> */}
            <Route
              path="/account/:id"
              exact
              render={props => <AccountProfileSet user={user} {...props} />}
              // OPEN ROUTE
            />
            <Route
              path="/results/:searchQueryEntered"
              exact
              render={props => <SchoolSearchResult {...props} user={user} />}
              // OPEN ROUTE
            />
            <Route
              exact
              path="/users/new/create"
              render={props => <AuthNewUserSet {...props} user={user} />}
              // PROTECTED ROUTE
            />
            <Route
              exact
              path="/users/edit/:id"
              render={props => (
                <AuthEditUserSet
                  {...props}
                  user={user}
                  modifyUser={this.props.location}
                  // PROTECTED ROUTE
                />
              )}
            />
            <Route
              exact
              path="/projects/account/:accountId"
              render={props => (
                <AuthAccountProjectsSet {...props} user={user} />
              )}
              // PROTECTED ROUTE
            />
            <Route
              exact
              path="/projects/apply/:id"
              render={props => <AuthApplication {...props} user={user} />}
              // PROTECTED ROUTE
            />
            <Route
              exact
              path="/projects/support/:id"
              render={props => <AuthSupportIntent {...props} user={user} />}
              // PROTECTED ROUTE
            />
            <Route
              exact
              path="/projects/donate/:id"
              render={props => (
                <SupportIntentAnonymous {...props} user={user} />
                // OPEN ROUTE
              )}
            />
            <Route
              exact
              path="/projects/applied/"
              render={props => (
                <AuthPostApplicationSet {...props} user={user} />
              )}
              // PROTECTED ROUTE
            />
            <Route
              exact
              path="/projects/applicants/:projectId"
              render={props => <AuthApplicantsTable {...props} user={user} />}
              // PROTECTED ROUTE
            />

            {/* <Route
              exact
              path="/account/users/:accountId"
              render={props => <AuthAccountUsersSet {...props} user={user} />}
            /> */}
            <Route
              exact
              path="/account/users/:accountId"
              render={props => <AuthAccountUsersSet {...props} user={user} />}
              // PROTECTED ROUTE
            />
            <Route
              exact
              path="/account/edit/:id"
              render={props => (
                <AuthEditAccountSet
                  {...props}
                  user={user}
                  account={this.props.location}
                />
                // PROTECTED ROUTE
              )}
            />
            <Route
              exact
              path="/projects/new/create"
              render={props => <AuthNewProjectSet {...props} user={user} />}
              // PROTECTED ROUTE
            />
            <Route
              exact
              path="/projects/all/:projectType"
              render={props => <ProjectsSet {...props} user={user} />}
              // OPEN ROUTE
            />
            <Route
              exact
              path="/projects/county/:county"
              render={props => (
                <CountyProjectsTable {...props} user={user} visitor={null} />
                // OPEN ROUTE
              )}
            />
            <Route
              exact
              path="/projects/support/county/:county"
              render={props => (
                <CountyProjectsTable
                  {...props}
                  user={user}
                  visitor={{ type: "Sponsor" }}
                  // OPEN ROUTE
                />
              )}
            />
            <Route
              exact
              path="/projects/edit/:id"
              render={props => (
                <AuthModifyProjectSet
                  {...props}
                  user={user}
                  project={this.props.location}
                  // PROTECTED ROUTE
                />
              )}
            />
            <Route
              exact
              path="/hand/project/:id"
              render={props => (
                <HandSet {...props} user={user} project={this.props.location} />
                // OPEN ROUTE
              )}
            />
            <Route
              exact
              path="/hands/:projectId"
              render={props => <AuthHandsTableSet {...props} user={user} />}
              // PROTECTED ROUTE
            />
            <Route
              exact
              path="/projects/:id"
              render={props => <ProjectDetailsSet {...props} user={user} />}
              // OPEN ROUTE
            />
            <Route
              path="/login"
              exact
              render={props => <LoginSet {...props} user={user} />}
              // OPEN ROUTE
            />
            <Route path="/logout" exact component={LogoutSet} />

            <Route
              path="/reset-password/:token"
              exact
              render={
                props => <NewPassSet {...props} />
                //OPEN ROUTE
              }
            />
            <Route
              path="/reset-password"
              exact
              render={
                props => <ResetPassSet {...props} user={user} />
                //OPEN ROUTE
              }
            />
            {/* <Route
              path="/change-password"
              exact
              render={props => <ChangePassSet {...props} user={user} />}
              //ROUTE NIE JEST UZYWANY
            /> */}
            <Route
              path="/change-password/:userId"
              exact
              render={
                props => <AuthChangePassSet {...props} user={user} />
                //PROTECTED ROUTE
              }
            />
            <Route path="/postreset" exact component={PostResetSet} />
            <Route path="/postchange" exact component={PostChangeSet} />
            <Route path="/blocked" exact component={ToManyAttepts} />
            <Route
              path="/posthand/thank_you/:name"
              exact
              render={
                props => <PostHandSet {...props} />
                // OPEN ROUTE
              }
            />
            <Route
              path="/register"
              exact
              render={
                props => <RegisterSet {...props} user={user} />
                // OPEN ROUTE
              }
            />
            <Route
              path="/register/sponsor"
              exact
              render={
                props => <RegisterSet {...props} user={user} />
                // OPEN ROUTE
              }
            />
            <Route
              path="/register/school"
              exact
              render={props => <RegisterSet {...props} user={user} />}
            />
            <Route
              path="/registration-successfull"
              exact
              render={
                props => <AfterRegistrationSet {...props} user={user} />
                // OPEN ROUTE
              }
            />
            <Route
              path="/dashboard"
              exact
              render={
                props => <AuthDashboardSet {...props} user={user} />
                // PROTECTED ROUTE
              }
            />
            {/* <Route
              path="/dashboard"
              exact
              render={props => <DashboardSet {...props} user={user} />}
            /> */}
            <Route
              path="/ourmission"
              exact
              render={
                props => <MissionSet user={user} {...props} />
                //OPEN ROUTE
              }
            />
            <Route
              path="/not-found"
              exact
              render={
                props => <NotFoundSet user={user} {...props} />
                //OPEN ROUTE
              }
            />

            <Route
              path="/search"
              exact
              render={
                props => <ForLoggedSchoolsSet user={user} {...props} />
                //OPEN ROUTE
              }
            />

            <Redirect to="/not-found" />
          </Switch>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

// 404
// account/projects
// account/profile
// account/profile/update?
// account/profile/delete

export default Layout;
