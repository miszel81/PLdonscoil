import React, { Component } from "react";
import TableHeader from "../Common/TableHeader";
import TableBody from "../Common/TableBody";
// import "../Project/CountyProjectsTable.css";
import { getUserWatchedProjects } from "../../services/campaignService";
// import { getAccountWatchedProjects } from "../../services/campaignService";
import _ from "lodash";
import { Link } from "react-router-dom";
import { paginate } from "../../utils/paginate";
import Pagination from "../Common/Pagination";

class AccountWatchlistProjects extends Component {
  state = {
    projects: [],
    errors: {},
    sortColumn: { path: "project.name", order: "asc" },
    loading: true,
    pageSize: 5,
    currentPage: 1
  };

  columns = [
    {
      path: "project.name",
      label: "Name",
      content: project => (
        <Link to={`/projects/${project.project._id}`}>
          {project.project.name}
        </Link>
      )
    },
    { path: "account.accountName", label: "By" },
    {
      path: "project.deadline",
      label: "When"
    },

    { path: "account.city", label: "Where" }
  ];

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  async componentDidMount() {
    const { data: projects } = await getUserWatchedProjects(this.props.userId);
    this.setState({ projects, loading: false });
  }

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    const { sortColumn, pageSize, currentPage, projects } = this.state;
    const sorted = _.orderBy(projects, [sortColumn.path], [sortColumn.order]);
    const contetnt = paginate(sorted, currentPage, pageSize);

    return (
      <div className="">
        <div className="">
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
              <h5 className="mb-3" style={{ color: "#333", fontSize: "1rem" }}>
                Sorry, no projects on your watchlist.
              </h5>
            </div>
          ) : (
            <div>
              <table className="table">
                <TableHeader
                  columns={this.columns}
                  sortColumn={this.state.sortColumn}
                  onSort={this.handleSort}
                />
                <TableBody columns={this.columns} data={contetnt} />
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

export default AccountWatchlistProjects;
