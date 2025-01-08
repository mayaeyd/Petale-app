import React, { useEffect } from "react";
import AdminNavbar from "../../../components/common/AdminNavbar";
import { CircularProgress } from "@mui/material";
import {
  selectAllUsers,
  selectUsersLoading,
} from "../../../redux/admin/adminSlice";
import { useSelector } from "react-redux";

const AdminDashboard = () => {
  const users = useSelector(selectAllUsers);
  const usersLoading = useSelector(selectUsersLoading);
  if (usersLoading) return <CircularProgress />;

  console.log(users);

  return (
    <>
      <AdminNavbar />
    </>
  );
};

export default AdminDashboard;
