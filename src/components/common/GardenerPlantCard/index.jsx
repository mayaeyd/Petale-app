import React from "react";
import "./style.css";

const GardenerPlantCard = ({ imageSrc, title, description, price }) => {
  return (
    <div className="card-container">
      <div className="card-img-container">
        <img src={imageSrc} alt="Plant" />
      </div>
    </div>
  );
};

export default GardenerPlantCard;
