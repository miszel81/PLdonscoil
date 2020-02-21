import React from "react";

const CustomButton = ({ className, onClick, value, disabled }) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {value}
    </button>
  );
};

export default CustomButton;
