import React, { Component } from "react";

import { Link } from "react-router-dom";
// import CountyCampaigns from "./countyCampaigns";
import "./SponsorSearchBox.css";
import { listOfCounties } from "../Common/ListOfCounties";

class SponsorSearchBox extends Component {
  state = { sponsorProjects: [], county: "" };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleChange = e => {
    this.props.props.history.push(`/projects/county/${e.target.value}`);
    this.setState({ county: e.target.value });
  };

  render() {
    return (
      <div>
        <div>
          {/* <div className="for-school-search-text">
            <p>
              Sports, education, infrastructure and other projects for your
              school:
            </p>
          </div> */}

          <select value={this.state.county} onChange={this.handleChange}>
            <option value="1">Choose your County:</option>
            {listOfCounties.map(county => (
              <option key={county} value={county}>
                {county}
              </option>
            ))}
          </select>

          <p className="All-campaigns mt-3">
            <Link to="/projects/all/sponsor">
              Click here for all counties.
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default SponsorSearchBox;
