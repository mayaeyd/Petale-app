import React from "react";
import "./style.css";

const WhiteTextField = ({ label }) => {
  return (
    <div className="white-input-container">
      <h3>{label}</h3>
      <input />
    </div>
  );
};

export default WhiteTextField;
