import React, { Component } from "react";
import _ from "lodash";
import "./TableBody.css";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    // Sprawdzam czy column.path to data. Jezeli tak to formatuje do postaci:"2019-12-12"
    if (column.path === "deadline" || column.path === "project.deadline") {
      const date = new Date(_.get(item, column.path));
      const formattedDate = date.toISOString().substring(0, 10);
      return formattedDate;
    }

    // Jezeli nie data to zwracam tak jak leci z bazy.
    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };

  render() {
    const { columns, data } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            {columns.map(column => (
              <td className="wrap" key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
