import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userThunks } from "../../../redux/admin/thunks/userThunks";
import { useParams } from "react-router-dom";
import { selectUsersLoading } from "../../../redux/admin/adminSlice";
import { CircularProgress } from "@mui/material";

const UserDetails = () => {
  const userId = useParams();
  const dispatch = useDispatch();
  const user = dispatch(userThunks.fetchUsers(userId));
  const loading = useSelector(selectUsersLoading);
  if (loading) return <CircularProgress />;

  console.log(user);

  return <></>;
};

export default UserDetails;
