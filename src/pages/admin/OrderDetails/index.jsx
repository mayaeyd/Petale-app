import React, { useEffect } from "react";
import "./style.css";
import AdminNavbar from "../../../components/common/AdminNavbar";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSelectedUser,
  selectUsersLoading,
} from "../../../redux/admin/adminSlice";
import { userThunks } from "../../../redux/admin/thunks/userThunks";
import { CircularProgress } from "@mui/material";

const OrderDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectUsersLoading);
  const buyer = useSelector(selectSelectedUser);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userThunks.fetchUserById(id));
  }, [dispatch, id]);

  if (loading || !buyer)
    return (
      <>
        <AdminNavbar />
        <div className="spinner-container">
          <CircularProgress color="success" />
        </div>
      </>
    );

  const orders = buyer.purchaseHistory;

  const formatDate = (date) => {
    const dateformat = new Date(date);

    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(dateformat);
  };

  console.log(buyer);

  return (
    <>
      <AdminNavbar />
    </>
  );
};

export default OrderDetails;
