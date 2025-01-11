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
import ImageGallery from "../../../components/base/ImageGallery";

const ListingDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectPostsLoading);
  const postDetails = useSelector(selectSelectedPost);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(postThunks.fetchPosts(id));
  }, [dispatch, id]);

  if (loading || !postDetails)
    return (
      <>
        <AdminNavbar />
        <div className="spinner-container">
          <CircularProgress color="success" />
        </div>
      </>
    );

  const {
    gardenLocation,
    gardenName,
    post,
    sellerEmail,
    sellerId,
    sellerName,
  } = postDetails;

  return (
    <>
      <AdminNavbar />
      <div className="listing-details">
        <ImageGallery images={post.images} />
      </div>
    </>
  );
};

export default ListingDetails;
