import React from "react";
import "./style.css";

const GardenerPlantCard = ({ imageSrc, title, description, price }) => {
  return (
    <div className="card-container">
      <div
        className="card-img-container"
        style={{ backgroundImage: { imageSrc } }}
      ></div>
      <div className="card-info-container">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>From ${price}</p>
      </div>
    </div>
  );
};

export default GardenerPlantCard;
