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
import PinkButtonRound from "../../../components/base/PinkButtonRound";
import { AccessTime, AccountCircle, Email } from "@mui/icons-material";
import { PhoneIcon } from "lucide-react";

const UserDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectUsersLoading);
  const user = useSelector(selectSelectedUser);

  useEffect(() => {
    dispatch(userThunks.fetchUserById(id));
  }, [dispatch, id]);

  if (loading || !user)
    return (
      <div className="spinner-container">
        <CircularProgress />
      </div>
    );

  console.log(user);

  const date = new Date(user.createdAt);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  return (
    <>
      <AdminNavbar />
      <div className="user-details-container">
        <div className="user-info">
          <div>
            <h1 className="user-name">
              {user?.firstName} {user?.lastName}
            </h1>
            <div className="user-role">
              {user?.role === "gardener" ? (
                <span>
                  <LocalFloristIcon style={{ color: "#858585" }} />
                </span>
              ) : (
                <span>
                  <ShoppingCartIcon style={{ color: "#858585" }} />
                </span>
              )}
              <p>{user.role}</p>
            </div>
          </div>
          <div className="user-action-buttons">
            <PinkButtonRound label="Ban User" />
          </div>
        </div>
        <div>
          <div className="user-credentials">
            <div>
              <div className="user-detail-title">
                <AccountCircle />
                {user.role} ID
              </div>
              <div className="user-detail-title">
                <PhoneIcon />
                Phone number
              </div>
              <div className="user-detail-title">
                <Email />
                Email Address
              </div>
              <div className="user-detail-title">
                <AccessTime />
                User since
              </div>
            </div>
            <div>
              <div>
                <p>{user._id}</p>
                <p>{user.phoneNumber}</p>
                <p>{user.email}</p>
                <p>{formattedDate}</p>
              </div>
            </div>
          </div>
        </div>
        <h2>{user.firstName}'s Growing Plants</h2>
        <h2>{user.firstName}'s Posts</h2>
        <h2>{user.firstName}'s Sold Plants</h2>
      </div>
    </>
  );
};

export default UserDetails;
