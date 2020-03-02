import React, { Component } from "react";
import TableHeader from "../Common/TableHeader";
import TableBody from "../Common/TableBody";
import _ from "lodash";
import { Link } from "react-router-dom";
import { getAccountUsers } from "../../services/userServices";
import { getAccount } from "../../services/accountService";
import { Helmet } from "react-helmet";

class AccountUsers extends Component {
  state = {
    users: [],
    account: {},
    errors: {},
    sortColumn: { path: "lastName", order: "asc" },
    loading: true
  };

  columns = [
    {
      path: "lastName",
      label: "Name"
    },
    {
      path: "firstName",
      label: "Surname"
    },
    { path: "title", label: "Title" },
    {
      key: "delete",
      content: user => (
        <Link
          to={`/users/edit/${user._id}`}
          className="btn btn-outline-secondary btn-sm"
        >
          Edit user
        </Link>
      )
    }
  ];

  async componentDidMount() {
    const { data: account } = await getAccount(this.props.accountId);
    const { data: users } = await getAccountUsers(this.props.accountId);
    this.setState({ users, account, loading: false });
  }

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    const { sortColumn, users } = this.state;
    const sorted = _.orderBy(users, [sortColumn.path], [sortColumn.order]);

    return (
      <div className="full-page">
        <Helmet>
          <title>Admin panel</title>
        </Helmet>
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
          ) : this.state.users.length === 0 ? (
            <div>
              <h1>Sorry, you have no users at the moment.</h1>
              <Link to="/users/new/create" className="btn btn-info">
                Create new User
              </Link>
            </div>
          ) : (
            <div>
              <h1>{this.state.account.accountName}'s users:</h1>
              <table className="table">
                <TableHeader
                  columns={this.columns}
                  sortColumn={this.state.sortColumn}
                  onSort={this.handleSort}
                />
                <TableBody columns={this.columns} data={sorted} />
              </table>
              <Link to="/users/new/create" className="btn btn-info">
                Create new User
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default AccountUsers;
