import React from "react";
import PostChange from "../Auth/PostChange";
import NavBar from "./NavBar";
import { Redirect } from "react-router-dom";

const PostChangeSet = ({ user }) => {
  if (!user) return <Redirect to="/login" />;
  return (
    <div className="container-fluid table-background">
      <NavBar user={user} />
      <PostChange />;
    </div>
  );
};

export default PostChangeSet;
