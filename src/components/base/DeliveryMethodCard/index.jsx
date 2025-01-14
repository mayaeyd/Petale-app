import React from "react";
import "./style.css";

const DeliveryMethodCard = ({ title, subtitle, pricing }) => {
  return (
    <div className="delivery-method-card">
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <p>{pricing}</p>
    </div>
  );
};

export default DeliveryMethodCard;
