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
import { Flower, Leaf } from "lucide-react";

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

  const formatDate = (date) => {
    const dateformat = new Date(date);

    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(dateformat);
  };

  return (
    <>
      <AdminNavbar />
      <div className="posted-plant-container">
        <ImageGallery images={post.images} />
        <div className="posted-plant-details">
          <h2>{post.plantName}</h2>
          <span>
            {post.plantType === "plant" ? (
              <Leaf color="#878787" strokeWidth="1" />
            ) : (
              <Flower color="#878787" strokeWidth="1" />
            )}
            <p>{post.plantType}</p>
          </span>
          <p className="posted-plant-price">${post.price}</p>
          <h3>Description</h3>
          <p className="posted-plant-description">{post.description}</p>
          <p className="posted-plant-quantity">
            Remaining {post.plantType}s: <span>{post.quantity}</span>
          </p>
          <p className="posted-plant-date">
            Harvested on {formatDate(post.harvestDate)}
          </p>
        </div>
      </div>
    </>
  );
};

export default ListingDetails;
