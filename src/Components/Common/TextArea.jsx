import React from "react";
const TextArea = ({ name, label, value, onChange, placeholder, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <textarea
        value={value}
        name={name}
        onChange={onChange}
        className="form-control"
        id={name}
        placeholder={placeholder}
        style={{ fontSize: "1rem", backgroundColor: "#fff" }}
        rows={4}
      />
      {error && <span className="badge badge-danger">{error}</span>}
    </div>
  );
};

export default TextArea;
