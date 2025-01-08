import React from "react";
import AdminNavbar from "../../../components/common/AdminNavbar";
import { CircularProgress } from "@mui/material";
import {
  selectAllUsers,
  selectUsersLoading,
} from "../../../redux/admin/adminSlice";
import { useSelector } from "react-redux";
import StickyTable from "../../../components/base/Table";
import "./style.css";

const AdminDashboard = () => {
  const users = useSelector(selectAllUsers);
  const firstThreeUsers = users.slice(0, 3);

  const usersLoading = useSelector(selectUsersLoading);
  if (usersLoading)
    return (
      <div>
        <AdminNavbar />
        <div className="spinner-container">
          <CircularProgress />
        </div>
      </div>
    );

  const columns = [
    { id: "name", label: "Name", minWidth: 100 },
    { id: "role", label: "Role", minWidth: 100 },
    { id: "email", label: "Email", minWidth: 100 },
    { id: "tel", label: "Phone Number", minWidth: 100 },
    { id: "banned", label: "Banned", minWidth: 100 },
    { id: "createdat", label: "Created At", minWidth: 100 },
  ];

  const rows = firstThreeUsers.map((user) =>
    createData(
      `${user.firstName} ${user.lastName}`,
      user.role.charAt(0).toUpperCase() + String(user.role).slice(1),
      user.email,
      user.phoneNumber,
      `${user.isBanned ? "Yes" : "No"}`,
      formatDateTime(user.createdAt)
    )
  );

  function createData(name, role, email, tel, banned, createdat) {
    return { name, role, email, tel, banned, createdat };
  }

  function formatDateTime(timestamp) {
    const dateObj = new Date(timestamp);
    const formattedDate = dateObj.toISOString().split("T")[0]; // Get date
    const formattedTime = dateObj.toTimeString().split(" ")[0]; // Get time
    return `${formattedDate} ${formattedTime}`; // Combine
  }

  return (
    <>
      <AdminNavbar />
      <div className="dashboard-info">
        <StickyTable rows={rows} columns={columns} />
      </div>
    </>
  );
};

export default AdminDashboard;
