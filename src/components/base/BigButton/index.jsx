import React, { useState } from "react";
import "./style.css";

const BigButton = ({ icon, title, subtitle }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`button-container ${isActive ? "active" : ""}`}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="icon-container">{icon}</div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default BigButton;
