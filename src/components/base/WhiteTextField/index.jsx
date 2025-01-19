import React from "react";
import "./style.css";

const WhiteTextField = ({ label, ...props }) => {
  return (
    <div className="white-input-container">
      <h3>{label}</h3>
      <input {...props} />
    </div>
  );
};

export default WhiteTextField;
