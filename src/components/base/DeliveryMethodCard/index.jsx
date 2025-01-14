import React from "react";
import "./style.css";

const DeliveryMethodCard = ({
  title,
  subtitle,
  pricing,
  isSelected,
  onClick,
}) => {
  return (
    <div
      className={`delivery-method-card ${isSelected ? "deliver-active" : ""}`}
      onClick={onClick}
    >
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <p>{pricing}</p>
    </div>
  );
};

export default DeliveryMethodCard;
