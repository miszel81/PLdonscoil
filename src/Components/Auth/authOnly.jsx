import React, { Component } from "react";
import { checkToken } from "../../services/authServices";
import { toast } from "react-toastify";

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
          console.log(ex);
          // window.location = "/login";
        } else if (ex.response && ex.response.status === 400) {
          console.log(ex);
          // window.location = "/logout";
        } else {
          console.log("ELSE", ex);
          toast.error("Unexpected error! Try again later!");
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
