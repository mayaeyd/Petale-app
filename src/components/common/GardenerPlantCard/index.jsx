import React from "react";
import "./style.css";

const GardenerPlantCard = ({
  imageSrc,
  title,
  description,
  price,
  children,
  ...props
}) => {
  return (
    <div className="card-container" {...props}>
      <div
        className="card-img-container"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="cart-button">{children}</div>
      </div>
      <div className="card-info-container">
        <h2>{title}</h2>
        <p className="card-description">{description}</p>
        <p>From ${price}</p>
      </div>
    </div>
  );
};

export default GardenerPlantCard;
