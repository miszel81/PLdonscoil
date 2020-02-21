import React from "react";
import PostReset from "../Auth/PostReset";
import NavBar from "./NavBar";

const PostResetSet = props => {
  const { user } = props;
  return (
    <div className="container-fluid table-background">
      <NavBar user={user} />
      <PostReset />;
    </div>
  );
};

export default PostResetSet;
