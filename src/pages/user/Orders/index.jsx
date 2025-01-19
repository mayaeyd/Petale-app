import React from "react";
import { useSelector } from "react-redux";
import UserNavbar from "../../../components/common/UserNavbar";
import "./style.css";

export default function OrdersPage() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <UserNavbar />
      <div className="orders-page-container">
        <div className="orders-page-header">
          <div>
            <h1>Your Orders</h1>
            <h4>
              <span>{user.orders?.length} Orders</span>
            </h4>
          </div>
        </div>

        {user?.orders && user?.orders.length > 0 ? (
          <div className="orders-page-list">
            {user?.orders?.map((order) => (
              <div key={order._id} className="order-card">
                <div className="order-header">
                  <h3>Order ID: {order._id}</h3>
                  <p>Status: {order.status}</p>
                  <p>
                    Order Date: {new Date(order.orderDate).toLocaleString()}
                  </p>
                  <p>Delivery Address: {order.deliveryAddress}</p>
                </div>
                <div className="order-footer">
                  <h4>Total Amount: ${order.totalAmount}</h4>
                </div>

                <div className="order-items-list">
                  <div className="cart-page-table">
                    <div className="cart-page-table-header">
                      <div className="cart-page-table-item">Item</div>
                      <div className="cart-page-table-item">Price</div>
                      <div className="cart-page-table-item">Quantity</div>
                      <div className="cart-page-table-item">Total</div>
                    </div>
                    {order.orderItems.map((item) => (
                      <div key={item?.id} className="cart-page-table-row">
                        <div className="cart-page-table-item">
                          <div className="cart-page-table-product-info">
                            <div>
                              <h5>{item?.name}</h5>
                              <h2>{item?.type}</h2>
                            </div>
                          </div>
                        </div>
                        <div className="cart-page-table-item">
                          <div className="cart-page-table-price">
                            ${item?.price}
                          </div>
                        </div>
                        <div className="cart-page-table-item">
                          <div className="cart-page-table-quantity">
                            <h4>{item?.quantity}</h4>
                          </div>
                        </div>
                        <div className="cart-page-table-item">
                          <div className="cart-page-table-price">
                            ${item?.quantity * item?.price}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-orders-container">
            <h2>No orders found</h2>
          </div>
        )}
      </div>
    </div>
  );
}
