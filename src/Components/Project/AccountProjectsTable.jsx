import React, { Component } from "react";
import "./CountyProjectsTable.css";
import TableHeader from "../Common/TableHeader";
import TableBody from "../Common/TableBody";
import { Link } from "react-router-dom";
import { paginate } from "../../utils/paginate";
import Pagination from "../Common/Pagination";
import _ from "lodash";
import { getAccountProjects } from "../../services/projectService";

class AccountProjectsTable extends Component {
  state = {
    projects: [],
    errors: {},
    sortColumn: { path: "name", order: "asc" },
    loading: true,
    pageSize: 9,
    currentPage: 1
  };
  columns = [
    {
      path: "name",
      label: "Project name",
      content: project => (
        <Link to={`/projects/${project._id}`}>{project.name}</Link>
      )
    },
    {
      path: "deadline",
      label: "Deadline"
    },
    {
      path: "Status",
      label: "Status",
      content: project => (project.isActivated ? "Active" : "Inactive")
    },
    {
      key: "Action",
      label: "Action",
      content: project => (
        <Link
          to={`/projects/${project._id}`}
          className="btn btn-outline-secondary btn-sm"
        >
          info
        </Link>
      )
    }
  ];

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  async componentDidMount() {
    const { data: projects } = await getAccountProjects(this.props.accountId);
    this.setState({ projects, loading: false });
  }

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    const { sortColumn, projects, currentPage, pageSize } = this.state;
    const sorted = _.orderBy(projects, [sortColumn.path], [sortColumn.order]);
    const content = paginate(sorted, currentPage, pageSize);
    return (
      <div className="container full-page">
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
          ) : this.state.projects.length === 0 ? (
            <div>
              <h1>Sorry, you have no projects at the moment.</h1>
              <Link to="/projects/new/create" className="btn btn-info">
                Create new project
              </Link>
            </div>
          ) : (
            <div>
              <h1>Our projects:</h1>

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
              <Link to="/projects/new/create" className="btn btn-info">
                Create new project
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default AccountProjectsTable;
