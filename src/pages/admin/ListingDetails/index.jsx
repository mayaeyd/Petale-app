import React, { useEffect } from "react";
import AdminNavbar from "../../../components/common/AdminNavbar";
import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postThunks } from "../../../redux/admin/thunks/postThunks";
import {
  selectPostsLoading,
  selectSelectedPost,
} from "../../../redux/admin/adminSlice";
import { CircularProgress } from "@mui/material";

const ListingDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectPostsLoading);
  const post = useSelector(selectSelectedPost);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(postThunks.fetchPosts(id));
  }, [dispatch, id]);

  if (loading || !post)
    return (
      <div className="spinner-container">
        <CircularProgress />
      </div>
    );
  console.log(post);

  return (
    <>
      <AdminNavbar />
      <div className="listing-details">
        <h1>Listing Details</h1>
      </div>
    </>
  );
};

export default ListingDetails;
