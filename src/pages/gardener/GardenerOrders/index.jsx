import React from "react";
import { useSelector } from "react-redux";
import "./style.css";
import GardenerNavbar from "../../../components/common/GardenerNavbar";

export default function GardenerOrdersPage() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <GardenerNavbar />
      <div className="gardeners-orders-page-container">
        <div className="gardeners-orders-page-header">
          <h1
            style={{
              color: "#333",
            }}
          >
            Your Orders
          </h1>
          <h4>
            <span>{user?.gardenerProfile?.orders?.length || 0} Orders</span>
          </h4>
        </div>

        {user?.gardenerProfile?.orders &&
        user?.gardenerProfile?.orders?.length > 0 ? (
          <div className="gardeners-orders-page-list">
            {user.gardenerProfile.orders.map((order) => (
              <div key={order._id} className="gardener-order-card">
                <h3>{order.name}</h3>
                <p>
                  <strong>Quantity:</strong> {order.quantity}
                </p>
                <p>
                  <strong>Total Price:</strong> ${order.totalPrice}
                </p>
                <p>
                  <strong>Delivery Address:</strong> {order.deliveryAddress}
                </p>
                <p>
                  <strong>Order Date:</strong>{" "}
                  {new Date(order.orderDate).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-orders-container">
            <div className="empty-state-container"></div>
          </div>
        )}
      </div>
    </div>
  );
}
