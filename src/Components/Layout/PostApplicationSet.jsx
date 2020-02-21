import React, { Component } from "react";
import PostApplication from "../Project/PostApplication";
import NavBar from "./NavBar";
import { Redirect } from "react-router-dom";

class PostApplicationSet extends Component {
  render() {
    const { user } = this.props;
    if (!user) return <Redirect to="/login" />;
    return (
      <div className="container-fluid table-background full-page">
        <NavBar user={user} />
        <PostApplication />;
      </div>
    );
  }
}

export default PostApplicationSet;
