import React, { Component } from "react";
import "./CountyProjectsTable.css";
import TableHeader from "../Common/TableHeader";
import TableBody from "../Common/TableBody";
import { Link } from "react-router-dom";
import { paginate } from "../../utils/paginate";
import Pagination from "../Common/Pagination";
import _ from "lodash";
import { getApplicants } from "../../services/projectService";
import NavBar from "../Layout/NavBar";
import { Redirect } from "react-router-dom";

class ApplicantsTable extends Component {
  state = {
    projects: [],
    errors: {},
    sortColumn: { path: "schoolName", order: "asc" },
    loading: true,
    pageSize: 9,
    currentPage: 1
  };
  columns = [
    {
      path: "schoolName",
      label: "Name",
      content: project => (
        <Link to={`/account/${project.schoolId}`}>{project.schoolName}</Link>
      )
    },
    {
      path: "userFirstName",
      label: "Contact person"
    },
    {
      path: "userPhone",
      label: "Phone"
    },
    {
      path: "userEmail",
      label: "Email"
    }
  ];

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  async componentDidMount() {
    try {
      const { data: projects } = await getApplicants(
        this.props.match.params.projectId
      );

      this.setState({ projects, loading: false });
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        window.location = "/not-found";
      }
    }
  }

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    const { sortColumn, projects, currentPage, pageSize } = this.state;
    const { user } = this.props;
    const sorted = _.orderBy(projects, [sortColumn.path], [sortColumn.order]);
    const content = paginate(sorted, currentPage, pageSize);
    if (!user) return <Redirect to="/login" />;
    return (
      <div className="container-fluid login-background full-page">
        <NavBar user={user} />
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
          ) : (
            //   ) : this.state.projects.length === 0 ? (
            //     <div>
            //       <h1>Sorry, no schools applied for the project at the moment.</h1>
            //     </div>
            //   ) : (
            <div className="">
              <div>
                <h1>Participants</h1>

                <table className="table">
                  <TableHeader
                    columns={this.columns}
                    sortColumn={this.state.sortColumn}
                    onSort={this.handleSort}
                  />
                  <TableBody columns={this.columns} data={content} />
                </table>
                <Pagination
                  itemsCount={this.state.projects.length}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={this.handlePageChange}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ApplicantsTable;
