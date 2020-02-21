import React, { Component } from "react";
import { getSchools } from "../../services/accountService";
import TableHeader from "../Common/TableHeader";
import TableBody from "../Common/TableBody";
import { Link } from "react-router-dom";
import _ from "lodash";
import "../Project/CountyProjectsTable.css";
import { Helmet } from "react-helmet";

import NavBar from "../Layout/NavBar";

class SchoolSearchResult extends Component {
  state = {
    schools: [],
    searchQuery: this.props.match.params.searchQueryEntered,
    errors: {},
    sortColumn: { path: "name", order: "asc" },
    loading: true
  };

  async componentDidMount() {
    try {
      const { data: schools } = await getSchools();
      this.setState({ schools, loading: false });
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.setState({ loading: false });
      }
    }
  }

  columns = [
    {
      path: "accountName",
      label: "Name",
      content: school => (
        <Link to={`/account/${school._id}`}>{school.accountName}</Link>
      )
    },
    {
      path: "city",
      label: "Location"
    },
    {
      path: "county",
      label: "County"
    }
  ];

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getLocalSchools = () => {
    const { schools, searchQuery } = this.state;

    if (searchQuery.length > 2) {
      let filtered = schools.filter(
        s =>
          s.accountName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.city.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (filtered.length === 0) return "noResult";

      return filtered;
    }

    return [];
  };
  render() {
    const schools = this.getLocalSchools();

    const { sortColumn } = this.state;
    const sorted = _.orderBy(schools, [sortColumn.path], [sortColumn.order]);
    const { user } = this.props;
    return (
      <React.Fragment>
        <Helmet>
          <title>Search results</title>
        </Helmet>
        {/* // background from Common.css */}
        <div className="results-background full-page">
          <div className="container-fluid">
            <NavBar user={user} />
          </div>
          <div className="container-fluid">
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
              ) : schools === "noResult" ? (
                <h1>Sorry, no school found.</h1>
              ) : (
                <div>
                  <h1>Search result:</h1>
                  <table className="table">
                    <TableHeader
                      columns={this.columns}
                      sortColumn={this.state.sortColumn}
                      onSort={this.handleSort}
                    />
                    <TableBody columns={this.columns} data={sorted} />
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SchoolSearchResult;
