import React from "react";
import { useDispatch, useSelector } from "react-redux";

import PinkButtonSquared from "../../../components/base/PinkButtonSquared";
import UserNavbar from "../../../components/common/UserNavbar";
import "./style.css";
import {
  removeItemFromCart,
  updateItemQuantity,
} from "../../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const handleIncreaseQuantity = (id) => {
    const item = cart.items.find((item) => item.id === id);
    if (item) {
      dispatch(updateItemQuantity({ id, quantity: item.quantity + 1 }));
    }
  };

  const handleDecreaseQuantity = (id) => {
    const item = cart.items.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      dispatch(updateItemQuantity({ id, quantity: item.quantity - 1 }));
    }

    if (item.quantity === 1) {
      dispatch(removeItemFromCart(id));
    }
  };

  return (
    <div>
      <UserNavbar />
      <div className="cart-page-container">
        <div className="cart-page-header">
          <div>
            <h1>Shopping Cart</h1>
            <h4>
              <span>{cart?.totalQuantity} items</span> in your cart
            </h4>
          </div>

          <div>
            {cart && cart.items.length > 0 && (
              <PinkButtonSquared
                onClick={() => {
                  navigate("/user/checkout");
                }}
                label={"Proceed To Checkout"}
              />
            )}
          </div>
        </div>

        {cart && cart.items.length > 0 ? (
          <div className="cart-page-table">
            <div className="cart-page-table-header">
              <div className="cart-page-table-item">Item</div>
              <div className="cart-page-table-item">Price</div>
              <div className="cart-page-table-item">Quantity</div>
              <div className="cart-page-table-item">Total</div>
            </div>

            {cart?.items?.map((item) => (
              <div key={item?.id} className="cart-page-table-row">
                <div className="cart-page-table-item">
                  <div className="cart-page-table-product-info">
                    <img src={item?.image} alt={item?.name} />
                    <div>
                      <h5>{item?.name}</h5>
                      <h2>{item?.type}</h2>
                    </div>
                  </div>
                </div>
                <div className="cart-page-table-item">
                  <div className="cart-page-table-price">${item?.price}</div>
                </div>
                <div className="cart-page-table-item">
                  <div className="cart-page-table-quantity">
                    <button onClick={() => handleDecreaseQuantity(item.id)}>
                      -
                    </button>
                    <h4>{item?.quantity}</h4>
                    <button onClick={() => handleIncreaseQuantity(item.id)}>
                      +
                    </button>
                  </div>
                </div>
                <div className="cart-page-table-item">
                  <div className="cart-page-table-price">
                    ${item?.totalPrice}
                  </div>
                </div>
              </div>
            ))}

            <div className="cart-page-table-footer">
              <div className="cart-page-table-item">Total</div>
              <div className="cart-page-table-item"></div>
              <div className="cart-page-table-item"></div>
              <div className="cart-page-table-item">
                <div className="cart-page-table-price">${cart?.totalPrice}</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="no-items-cart-container">
            <div className="empty-state-container">
              <p>No items found in cart</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
