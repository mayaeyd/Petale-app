import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userThunks } from "../../../redux/admin/thunks/userThunks";
import { useParams } from "react-router-dom";
import {
  selectSelectedUser,
  selectUsersLoading,
} from "../../../redux/admin/adminSlice";
import { CircularProgress } from "@mui/material";
import AdminNavbar from "../../../components/common/AdminNavbar";

const UserDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectUsersLoading);
  const user = useSelector(selectSelectedUser);

  useEffect(() => {
    dispatch(userThunks.fetchUsers(id));
  }, [dispatch, id]);

  if (loading)
    return (
      <div className="spinner-container">
        <CircularProgress />
      </div>
    );

  console.log(user);

  return (
    <>
      <AdminNavbar />
    </>
  );
};

export default UserDetails;
