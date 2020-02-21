import React, { Component } from "react";
import { getSchools } from "../../services/accountService";
import { Link } from "react-router-dom";
import SearchBox from "../Common/SearchBox";
import "./SchoolSearchBox.css";

class SchoolSearchBox extends Component {
  state = {
    schools: [],
    searchQuery: "",
    searchQueryEntered: ""
  };
  async componentDidMount() {
    try {
      const { data: schools } = await getSchools();
      this.setState({ schools });
      this.setState({ searchQueryEntered: "" });
    } catch (error) {}
  }

  handleSubmit = async searchQueryEntered => {
    this.setState({ searchQueryEntered });
    this.props.props.history.push(`/results/${searchQueryEntered}`);
  };

  handleSearch = query => {
    this.setState({ searchQuery: query });
  };

  getLocalSchools = () => {
    const { schools, searchQuery } = this.state;
    if (searchQuery.length > 2) {
      let filtered = schools.filter(
        s =>
          s.accountName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.city.toLowerCase().includes(searchQuery.toLowerCase())
        // ewentualnie dodać jeszcze filtrowanie po 'County'
      );

      if (filtered.length === 0) return "noResult";

      return filtered;
    }

    return [];
  };

  render() {
    const schools = this.getLocalSchools();
    return (
      <React.Fragment>
        <div className="container-fluid mt-5">
          <div className="slogan">
            <h4>Your kids can do amazing things</h4>
            <h5>They just need a bit of your support</h5>
          </div>

          <div className="container searchbox">
            <SearchBox
              value={this.state.searchQuery}
              onChange={this.handleSearch}
              onSubmit={this.handleSubmit}
            />

            <div className="col-md-8 offset-md-2">
              <div className="list-group m-0 noSchool">
                {schools === "noResult" ? (
                  <span className="foundNoSchool">
                    Sorry! I can't find this school. Try entering location...
                  </span>
                ) : (
                  schools.map(school => (
                    <Link
                      key={school._id}
                      className="list-group-item list-group-item-action "
                      to={`/account/${school._id}`}
                    >
                      {" "}
                      {school.accountName}, {school.city}
                    </Link>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default SchoolSearchBox;
