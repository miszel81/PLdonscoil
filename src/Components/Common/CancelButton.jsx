import React from "react";
import { useHistory } from "react-router-dom";

function CancelButton() {
  let history = useHistory();
  return (
    <button
      type="button"
      className="btn btn-outline-secondary "
      onClick={() => history.goBack()}
      style={{ fontSize: "1.5rem" }}
    >
      Cancel
    </button>
  );
}

export default CancelButton;
