import React, { useEffect, useState } from "react";
import UserNavbar from "../../../components/common/UserNavbar";
import "./style.css";
import WhiteTextField from "../../../components/base/WhiteTextField";
import DeliveryMethodCard from "../../../components/base/DeliveryMethodCard";
import OrderSummaryCard from "../../../components/base/OrderSummaryCard";
import { useDispatch, useSelector } from "react-redux";
import PinkButtonSquared from "../../../components/base/PinkButtonSquared";
import { CreateOrder } from "../../../redux/slices/orderSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [address, setAddress] = useState("");
  const [selectedDelivery, setSelectedDelivery] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const { items, totalPrice } = useSelector((state) => state.cart);
  const { success } = useSelector((state) => state.order);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    console.log(address, selectedDelivery);

    if (!address || !selectedDelivery) {
      setErrorMessage(
        "Please fill out all fields and select a delivery method"
      );
      return;
    }

    const orderData = {
      deliveryAddress: address,
      deliveryMethod: selectedDelivery,
      orderItems: items.map(({ id, name, quantity, price }) => ({
        id,
        name,
        quantity,
        price,
      })),
      totalAmount: totalPrice,
    };

    dispatch(CreateOrder(orderData));
  };

  useEffect(() => {
    if (success) {
      navigate(`/user/order`);
    }
  }, [success]);

  return (
    <>
      <UserNavbar />
      <div className="checkout-container">
        <div>
          <h2>Shipping Information</h2>
          <div className="checkout-inputs-container">
            <WhiteTextField
              onChange={(e) => setAddress(e.target.value)}
              label="Address"
            />
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
        <div>
          <div>
            <div className="order-summary-cards">
              {items.map((item) => {
                return (
                  <OrderSummaryCard
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                  />
                );
              })}
            </div>
            <div className="checkout-order-pricing">
              <div>
                {cart?.items.map((item) => (
                  <p>
                    {item.name} x {item.quantity}
                  </p>
                ))}
                <p>Total</p>
              </div>
              <div>
                {cart?.items.map((item) => (
                  <p style={{ fontFamily: "Proxima Nova Regular" }}>
                    {item.totalPrice.toFixed(2)}
                  </p>
                ))}
                <p style={{ fontFamily: "Proxima Nova Regular" }}>
                  {cart?.totalPrice}
                </p>
              </div>
            </div>
            <PinkButtonSquared
              label={"Place Order"}
              onClick={handlePlaceOrder}
            />
            {errorMessage && (
              <p
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  color: "#ff4444",
                  marginTop: "10px",
                }}
              >
                {errorMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
