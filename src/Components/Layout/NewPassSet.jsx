import React from "react";
import NewPass from "../Auth/NewPass";
import NavBar from "./NavBar";

const NewPassSet = props => {
  const { user } = props;
  return (
    <div className="container-fluid table-background">
      <NavBar user={user} />
      <NewPass {...props} />;
    </div>
  );
};

export default NewPassSet;
