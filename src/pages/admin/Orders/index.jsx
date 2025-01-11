import React from "react";
import AdminNavbar from "../../../components/common/AdminNavbar";
import "./style.css";
import { useSelector } from "react-redux";
import { selectAllOrders } from "../../../redux/admin/adminSlice";
import SortableTable from "../../../components/common/SortableTable";
import PinkButtonRound from "../../../components/base/PinkButtonRound";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const orders = useSelector(selectAllOrders);
  const navigate = useNavigate();

  const headers = [
    { key: "buyerName", label: "Buyer Name", sortable: true },
    { key: "buyerEmail", label: "Buyer Email", sortable: true },
    { key: "numberofOrders", label: "Number of Orders", sortable: true },
    { key: "address", label: "Buyer Address", sortable: true },
  ];

  const rows = orders.map((order) => ({
    buyerName: order.buyerName,
    buyerEmail: order.buyerEmail,
    numberofOrders: order.orders.length,
    address: order.orders[0].buyerAddress,
    id: order.buyerId,
  }));
  console.log(orders);

  const handleViewDetails = (row) => {
    navigate(`/admin/orders/${row.id}`);
  };

  return (
    <>
      <AdminNavbar />
      <div className="orders-container">
        <h1>Orders</h1>
        <SortableTable
          headers={headers}
          rows={rows}
          rowActions={(row) => (
            <PinkButtonRound
              label="View Details"
              onClick={(e) => {
                handleViewDetails(row);
              }}
            />
          )}
        />
      </div>
    </>
  );
};

export default Orders;
