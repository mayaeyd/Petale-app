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
import {
  AccountCircleOutlined,
  EmailOutlined,
  Fingerprint,
  LocationOnOutlined,
  YardOutlined,
} from "@mui/icons-material";

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
          <div className="seller-details-container">
            <div>
              <div className="user-credentials">
                <div>
                  <div className="user-detail-title">
                    <Fingerprint />
                    Seller ID
                  </div>
                  <div className="user-detail-title">
                    <AccountCircleOutlined />
                    Seller Name
                  </div>
                  <div className="user-detail-title">
                    <EmailOutlined />
                    Seller Email
                  </div>
                  <div className="user-detail-title">
                    <YardOutlined />
                    Garden Name
                  </div>
                  <div className="user-detail-title">
                    <LocationOnOutlined />
                    Garden Location
                  </div>
                </div>
                <div>
                  <div>
                    <p>{sellerId}</p>
                    <p>{sellerName}</p>
                    <p>{sellerEmail}</p>
                    <p>{gardenName}</p>
                    <p>{gardenLocation}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
