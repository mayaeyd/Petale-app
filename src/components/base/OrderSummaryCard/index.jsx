import React from "react";
import "./style.css";

const OrderSummaryCard = ({ image, type, name, quantity, price }) => {
  return (
    <div className="order-summary-card">
      <div
        className="order-summary-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="order-summary-details">
        <p>{name}</p>
        <p>{type}</p>
        <p>Quantity: {quantity}</p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default OrderSummaryCard;
