import React from "react";
import AdminNavbar from "../../../components/common/AdminNavbar";
import { CircularProgress } from "@mui/material";
import {
  selectAllUsers,
  selectOrdersCount,
  selectPlantsCount,
  selectPostsCount,
  selectSalesCount,
  selectUsersCount,
  selectUsersLoading,
} from "../../../redux/admin/adminSlice";
import { useSelector } from "react-redux";
import StickyTable from "../../../components/base/Table";
import "./style.css";
import AdminCard from "../../../components/base/AdminCard";
import { Users } from "lucide-react";

const AdminDashboard = () => {
  const users = useSelector(selectAllUsers);
  const usersCount = useSelector(selectUsersCount);
  const postsCount = useSelector(selectPostsCount);
  const ordersCount = useSelector(selectOrdersCount);
  const plantsCount = useSelector(selectPlantsCount);
  const salesCount = useSelector(selectSalesCount);

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
    const formattedDate = dateObj.toISOString().split("T")[0];
    const formattedTime = dateObj.toTimeString().split(" ")[0];
    return `${formattedDate} ${formattedTime}`;
  }

  return (
    <>
      <AdminNavbar />
      <div className="dashboard-info">
        <AdminCard
          label="Total Users"
          value={usersCount}
          icon={<Users strokeWidth="1" color="white" />}
        />
        <h1>Recent Users</h1>
        <StickyTable rows={rows} columns={columns} />
      </div>
    </>
  );
};

export default AdminDashboard;
