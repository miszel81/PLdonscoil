import React, { Component } from "react";
import CreateAccount from "../Register/CreateAccount";
class RegisterSet extends Component {
  state = {};
  render() {
    return (
      <div>
        <CreateAccount props={this.props} />
      </div>
    );
  }
}

export default RegisterSet;
