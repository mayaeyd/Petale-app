import React from "react";
import UserNavbar from "../../../components/common/UserNavbar";
import "./style.css";
import CustomInput from "../../../components/base/WhiteTextField";
import WhiteTextField from "../../../components/base/WhiteTextField";

const Checkout = () => {
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
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Checkout;
