import React, { Component } from "react";
import "./CountyProjectsTable.css";
import TableHeader from "../Common/TableHeader";
import TableBody from "../Common/TableBody";
import { paginate } from "../../utils/paginate";
import Pagination from "../Common/Pagination";
import _ from "lodash";
import { getHands } from "../../services/projectService";

class HandsTable extends Component {
  state = {
    hands: [],
    errors: {},
    sortColumn: { path: "lastName", order: "asc" },
    loading: true,
    pageSize: 9,
    currentPage: 1
  };
  columns = [
    {
      path: "firstName",
      label: "Name"
    },
    {
      path: "lastName",
      label: "Surname"
    },
    {
      path: "phone",
      label: "Phone"
    },
    {
      path: "email",
      label: "Email"
    },
    {
      path: "message",
      label: "Hand Message"
    }
  ];

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  async componentDidMount() {
    const { data: hands } = await getHands(this.props.projectId);

    this.setState({ hands, loading: false });
  }

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    const { sortColumn, hands, currentPage, pageSize } = this.state;
    const sorted = _.orderBy(hands, [sortColumn.path], [sortColumn.order]);
    const content = paginate(sorted, currentPage, pageSize);
    return (
      <div className="jumbotron full-page">
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
              <h1>Helping hands: </h1>

              <table className="table">
                <TableHeader
                  columns={this.columns}
                  sortColumn={this.state.sortColumn}
                  onSort={this.handleSort}
                />
                <TableBody columns={this.columns} data={content} />
              </table>
              <Pagination
                itemsCount={this.state.hands.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default HandsTable;
