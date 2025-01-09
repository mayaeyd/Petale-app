import React from "react";
import "./style.css";
import AdminNavbar from "../../../components/common/AdminNavbar";
import { selectAllUsers } from "../../../redux/admin/adminSlice";
import StickyTable from "../../../components/base/Table";
import { useSelector } from "react-redux";

const Users = () => {
  const users = useSelector(selectAllUsers);

  const usersColumns = [
    { id: "name", label: "Name", minWidth: 100 },
    { id: "role", label: "Role", minWidth: 100 },
    { id: "email", label: "Email", minWidth: 100 },
    { id: "tel", label: "Phone Number", minWidth: 100 },
    { id: "banned", label: "Banned", minWidth: 100 },
    { id: "createdat", label: "Created At", minWidth: 100 },
  ];

  const usersRows = users.map((user) =>
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
      <div className="users-container">
        <h1>Users</h1>
        <StickyTable rows={usersRows} columns={usersColumns} paginate />
      </div>
    </>
  );
};

export default Users;
