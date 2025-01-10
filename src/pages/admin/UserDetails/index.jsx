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
import "./style.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";

const UserDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectUsersLoading);
  const user = useSelector(selectSelectedUser);

  useEffect(() => {
    dispatch(userThunks.fetchUserById(id));
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
      <div className="user-details-container">
        <h1>
          {user?.firstName} {user?.lastName}
        </h1>
        {user.role === "gardener" ? (
          <span>
            <LocalFloristIcon />
          </span>
        ) : (
          <span>
            <ShoppingCartIcon />
          </span>
        )}
        <p>{user.role}</p>
      </div>
    </>
  );
};

export default UserDetails;
