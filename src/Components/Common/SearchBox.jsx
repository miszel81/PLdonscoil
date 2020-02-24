import React from "react";
import "./SearchBox.css";
const SearchBox = ({ value, onChange, onSubmit }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 col-sm-5 mainSearchBox">
          {/* <form autoComplete="off"> */}
          {/* <input type="hidden" value="something" /> */}

          <input
            onKeyPress={ev => {
              if (ev.key === "Enter") {
                // wraca do SchoolSearchBox jako handleSubmit = async searchQueryEntered{}
                onSubmit(value);
                ev.preventDefault();
              }
            }}
            type="text"
            name="query"
            className="form-control mainsearch"
            placeholder="Find your school here:"
            value={value}
            onChange={e => onChange(e.currentTarget.value)}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect="off"
          />

          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
