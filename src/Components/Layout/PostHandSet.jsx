import React, { Component } from "react";
import PostHand from "../Project/PostHand";
import NavBar from "./NavBar";

class PostHandSet extends Component {
  render() {
    const { user } = this.props;

    return (
      <div className="container-fluid table-background">
        <NavBar user={user} />
        <PostHand />
      </div>
    );
  }
}

export default PostHandSet;
