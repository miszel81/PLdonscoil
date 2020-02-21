import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./SponsorSearchBox.css";
import { listOfCounties } from "../Common/ListOfCounties";

class SponsorSearchBox extends Component {
  state = { schoolProjects: [], county: "" };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleChange = e => {
    this.props.props.history.push(`/projects/support/county/${e.target.value}`);
    this.setState({ county: e.target.value });
  };

  render() {
    return (
      <div>
        <div>
          {/* <h3>Find activites, infrastructure, ideas to support</h3> */}
          <select value={this.state.county} onChange={this.handleChange}>
            <option value="1">Choose your County:</option>
            {listOfCounties.map(county => (
              <option key={county} value={county}>
                {county}
              </option>
            ))}
          </select>

          <p className="All-campaigns">
            <Link to="/projects/all/school">Click here for all counties.</Link>
          </p>
        </div>

        {/* DYNAMIC CONTENT DEPENDENT ON THE URL PARAMETER: countyNAME
        <div className="container">
          <Switch>
            <Route
              path="/campaigns/active/:countyName"
              component={CountyCampaigns}
            />
          </Switch>
        </div> */}
      </div>
    );
  }
}

export default SponsorSearchBox;
