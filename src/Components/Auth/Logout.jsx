import { Component } from "react";
import { deleteToken } from "../../services/authServices";

class Logout extends Component {
  async componentDidMount() {
    await deleteToken();
    localStorage.removeItem("session");
    window.location = "/";
  }
  render() {
    return null;
  }
}

export default Logout;
