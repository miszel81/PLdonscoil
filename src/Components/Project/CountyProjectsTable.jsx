import React, { Component } from "react";
import "./CountyProjectsTable.css";
import { Link } from "react-router-dom";
import TableHeader from "../Common/TableHeader";
import TableBody from "../Common/TableBody";
import _ from "lodash";
import { getCountyProjets } from "../../services/projectService";
import { Helmet } from "react-helmet";

import NavBar from "../Layout/NavBar";

class CountyProjectsTable extends Component {
  state = {
    projects: [],
    errors: {},
    sortColumn: { path: "name", order: "asc" },
    loading: true
  };

  async componentDidMount() {
    const { county } = this.props.match.params;
    if (this.props.user === null && this.props.visitor === null) {
      const { data: projects } = await getCountyProjets(county, "Sponsor");
      this.setState({ projects });
      this.setState({ loading: false });
    } else if (this.props.visitor || this.props.user.type === "Sponsor") {
      const { data: projects } = await getCountyProjets(county, "School");
      this.setState({ projects });
      this.setState({ loading: false });
    } else {
      const { data: projects } = await getCountyProjets(county, "Sponsor");
      this.setState({ projects });
      this.setState({ loading: false });
    }
  }

  columns = [
    {
      path: "name",
      label: "Name",
      content: project => (
        <Link to={`/projects/${project._id}`}>{project.name}</Link>
      )
    },
    { path: "account.city", label: "Location" },
    { path: "account.accountName", label: "Institution" },
    {
      path: "deadline",
      label: "Date/deadline"
    }
  ];

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    const { county } = this.props.match.params;

    const { sortColumn, projects } = this.state;
    const sorted = _.orderBy(projects, [sortColumn.path], [sortColumn.order]);

    // const { length: count } = this.state.projects;
    // if (count === 0) return <h1>No Projects found. </h1>;

    // loader

    return (
      <div className="container-fluid CountyProjectsTable-background">
        <NavBar user={this.props.user} />
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
            <div className="table-container">
              <Helmet>
                <title>Projects in {county}</title>
              </Helmet>
              <h1>Sorry, no projects in county {county} at the moment.</h1>
            </div>
          ) : (
            <div>
              <Helmet>
                <title>Projects in {county}</title>
              </Helmet>
              <h1>Projects in county {county}:</h1>
              <div className="table-container">
                <table className="table">
                  <TableHeader
                    columns={this.columns}
                    sortColumn={this.state.sortColumn}
                    onSort={this.handleSort}
                  />
                  <TableBody columns={this.columns} data={sorted} />
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CountyProjectsTable;
