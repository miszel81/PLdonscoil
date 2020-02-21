import React from "react";
const Input = ({ name, label, value, onChange, type, placeholder, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        name={name}
        onChange={onChange}
        type={type}
        className="form-control"
        id={name}
        placeholder={placeholder}
        // style={{ fontSize: "1.5rem" }}
        autoComplete="nope"
        data-placement="bottom"
        title={error ? error : null}
        style={
          error
            ? { border: "solid 1px red" }
            : value
            ? { border: "solid 1px green" }
            : { border: "solid 1px grey" }
        }
      />
      {error && <span className="badge badge-danger">{error}</span>}
      {/* {error && <div className="alert alert-danger">{error}</div>} */}
    </div>
  );
};

export default Input;
