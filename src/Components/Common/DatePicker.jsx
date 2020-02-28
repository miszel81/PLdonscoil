import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Datepicker = ({ selected, onChange, error, name, label }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div />
      <DatePicker
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
        selected={selected}
        onChange={onChange}
        className="form-control dp"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Datepicker;
