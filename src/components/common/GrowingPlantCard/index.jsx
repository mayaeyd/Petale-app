import React from "react";
import "./style.css";

const GrowingPlantCard = ({ name, date }) => {
  return <div className="growing-plt-card">
    <h2>{name}</h2>
    <p>{date}</p>
  </div>;
};

export default GrowingPlantCard;
