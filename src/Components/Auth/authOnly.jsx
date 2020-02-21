import React, { Component } from "react";
import { checkToken } from "../../services/authServices";

export default function authOnly(ProtectedComponent) {
  return class extends Component {
    state = {
      loading: true
    };

    async componentDidMount() {
      try {
        const check = await checkToken();
        if (check.status === 204) {
          this.setState({ loading: false });
        }
      } catch (ex) {
        if (ex.response && ex.response.status === 401) {
          window.location = "/login";
        } else {
          window.location = "/logout";
        }
      }
    }

    render() {
      const { loading } = this.state;
      if (loading) {
        return null;
      }
      return <ProtectedComponent {...this.props} />;
    }
  };
}
