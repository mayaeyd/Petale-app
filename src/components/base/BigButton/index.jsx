import React, { useState } from "react";
import "./style.css";

const BigButton = ({ icon, title, subtitle, active, onClick }) => {
  return (
    <div
      className={`button-container ${active ? "active" : ""}`}
      onClick={() => onClick()}
    >
      <div className="icon-container">{icon}</div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default BigButton;
