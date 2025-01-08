import React from "react";
import "./style.css";

const AdminCard = ({ label, value, icon }) => {
  return (
    <div className="admin-card-container">
      <div className="admin-card-icon">{icon}</div>
      <div>
        <h2>{value}</h2>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default AdminCard;
