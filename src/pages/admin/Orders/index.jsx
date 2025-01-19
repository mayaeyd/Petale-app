import React from "react";
import AdminNavbar from "../../../components/common/AdminNavbar";
import "./style.css";
import { useSelector } from "react-redux";
import SortableTable from "../../../components/common/SortableTable";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const { orders } = useSelector((state) => state.order);

  const headers = [
    { key: "orderDate", label: "Order Date", sortable: true },
    { key: "buyerName", label: "Buyer Name", sortable: true },
    { key: "buyerEmail", label: "Buyer Email", sortable: true },
    { key: "gardenerName", label: "Gardener Name", sortable: true },
    { key: "gardenName", label: "Garden Name", sortable: true },
    { key: "plantName", label: "Plant Name", sortable: true },
    { key: "quantity", label: "Quantity", sortable: true },
    { key: "totalPrice", label: "Total Price", sortable: true },
    { key: "address", label: "Delivery Address", sortable: true },
  ];

  const rows = orders?.flatMap((gardener) =>
    gardener.orders.map((order) => ({
      id: order._id,
      orderDate: new Date(order.orderDate).toLocaleDateString(),
      buyerName: order.buyerInfo.name,
      buyerEmail: order.buyerInfo.email,
      gardenerName: order.gardenerName,
      gardenName: order.gardenName,
      plantName: order.name,
      quantity: order.quantity,
      totalPrice: `$${order.totalPrice.toFixed(2)}`,
      address: order.deliveryAddress,
    }))
  );

  return (
    <>
      <AdminNavbar />
      <div className="orders-container">
        <h1>Orders</h1>
        <SortableTable headers={headers} rows={rows || []} />
      </div>
    </>
  );
};

export default Orders;
