import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn }; // cloning sort column from the state
    // console.log(sortColumn);
    if (sortColumn.path === path)
      // checking the path if equale to state, if true
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    //setting the order to oposit to the state
    else {
      //if false
      sortColumn.path = path; //setting the new path
      sortColumn.order = "asc"; // setting the order to asc
    }
    this.props.onSort(sortColumn); // raising the sort event
  };

  renderSortIcon = column => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc" />;
    return <i className="fa fa-sort-desc" />;
  };

  render() {
    return (
      <thead className="thead">
        <tr>
          {this.props.columns.map(column => (
            <th
              className="clickable"
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
