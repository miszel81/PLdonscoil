import React, { Component } from "react";
import "./CountyProjectsTable.css";
import { Link } from "react-router-dom";
import TableHeader from "../Common/TableHeader";
import TableBody from "../Common/TableBody";
import _ from "lodash";
import { getProjects } from "../../services/projectService";
import { paginate } from "../../utils/paginate";
import Pagination from "../Common/Pagination";
import "../Common/Loader.css";

class ProjectsTable extends Component {
  state = {
    projects: [],
    errors: {},
    sortColumn: { path: "name", order: "asc" },
    loading: true,
    pageSize: 8,
    currentPage: 1
  };
  columns = [
    {
      path: "name",
      label: "Name",
      content: project => (
        <Link to={`/projects/${project._id}`}>{project.name}</Link>
      )
    },
    { path: "city", label: "Where" },
    {
      path: "account.accountName",
      label: "Who",
      content: project => (
        <Link to={`/account/${project.account._id}`}>
          {project.account.accountName}
        </Link>
      )
    },

    {
      path: "deadline",
      label: "When"
    }
  ];

  async componentDidMount() {
    try {
      const { data: projects } = await getProjects(this.props.projectType);
      this.setState({ projects, loading: false });
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.setState({ loading: false });
      }
    }
  }

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { sortColumn, projects, currentPage, pageSize } = this.state;
    const sorted = _.orderBy(projects, [sortColumn.path], [sortColumn.order]);
    const content = paginate(sorted, currentPage, pageSize);
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
          ) : this.state.projects.length === 0 ? (
            <h1>Sorry, no projects available at the moment.</h1>
          ) : (
            <div className="table-bottom">
              <h1>List of all projects:</h1>
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
          )}
        </div>
      </div>
    );
  }
}

export default ProjectsTable;
