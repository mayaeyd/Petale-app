import React, { useEffect } from "react";
import AdminNavbar from "../../../components/common/AdminNavbar";
import { CircularProgress } from "@mui/material";
import {
  selectAllUsers,
  selectUsersLoading,
} from "../../../redux/admin/adminSlice";
import { useSelector } from "react-redux";
import StickyTable from "../../../components/base/Table";

const AdminDashboard = () => {
  const users = useSelector(selectAllUsers);
  const usersLoading = useSelector(selectUsersLoading);
  if (usersLoading) return <CircularProgress />;

  console.log(users);
  const columns = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "role", label: "Role", minWidth: 170 },
    { id: "email", label: "Email", minWidth: 100 },
    { id: "tel", label: "Phone Number", minWidth: 100 },
    { id: "banned", label: "Banned", minWidth: 170 },
    { id: "createdat", label: "Created At", minWidth: 170 },
  ];

  return (
    <>
      <AdminNavbar />
    </>
  );
};

export default AdminDashboard;
