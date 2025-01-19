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
      </div>
    </div>
  );
}
