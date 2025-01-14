import React, { useState } from "react";
import UserNavbar from "../../../components/common/UserNavbar";
import "./style.css";
import CustomInput from "../../../components/base/WhiteTextField";
import WhiteTextField from "../../../components/base/WhiteTextField";
import DeliveryMethodCard from "../../../components/base/DeliveryMethodCard";

const Checkout = () => {
  const [selectedDelivery, setSelectedDelivery] = useState(null);

  return (
    <>
      <UserNavbar />
      <div className="checkout-container">
        <div>
          <h2>Shipping Information</h2>
          <div className="checkout-inputs-container">
            <WhiteTextField label="Address" />
            <WhiteTextField label="Apartment, suite, etc." />
          </div>
          <h2 className="checkout-label">Delivery Method</h2>
          <div className="delivery-cards-container">
            <DeliveryMethodCard
              title="Standard"
              subtitle="4-5 business days"
              pricing="$5.00"
              isSelected={selectedDelivery === "standard"}
              onClick={() => setSelectedDelivery("standard")}
            />
            <DeliveryMethodCard
              title="Express"
              subtitle="1-2 business days"
              pricing="$10.00"
              isSelected={selectedDelivery === "express"}
              onClick={() => setSelectedDelivery("express")}
            />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Checkout;
