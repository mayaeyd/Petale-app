import React, { useEffect } from "react";
import "./style.css";
import AdminNavbar from "../../../components/common/AdminNavbar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPostsLoading,
  selectSelectedPosts,
  selectSelectedUser,
  selectUsersLoading,
} from "../../../redux/admin/adminSlice";
import { userThunks } from "../../../redux/admin/thunks/userThunks";
import { CircularProgress } from "@mui/material";
import { postThunks } from "../../../redux/admin/thunks/postThunks";

const OrderDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectUsersLoading);
  const postsLoading = useSelector(selectPostsLoading);
  const buyer = useSelector(selectSelectedUser);
  const listings = useSelector(selectSelectedPosts);
  const listingsIds = [];

  useEffect(() => {
    dispatch(userThunks.fetchUserById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (buyer && buyer.purchaseHistory) {
      buyer.purchaseHistory.forEach((order) => {
        listingsIds.push(order.listingId);
      });

      dispatch(postThunks.fetchPostsByIds(listingsIds));
    }
  }, [dispatch, buyer]);

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

  if (postsLoading) {
    return <CircularProgress />;
  }
  console.log(listings);

  return (
    <>
      <AdminNavbar />
      <div className="buyer-orders">
        y<h1>Buyer Orders Details</h1>
        <div className="cards-grid">
          <div key={buyer.buyerId} className="buyer-card">
            <div className="buyer-header">
              <h2>
                {buyer.firstName} {buyer.lastName}
              </h2>
              <span className="email">{buyer.email}</span>
            </div>
            <div>
              {orders.map((order) => {
                const listing = listings[order.listingId];
                console.log(listings, orders);

                return (
                  <div key={order._id} className="order-card">
                    <div className="order-header">
                      <span className="order-id">
                        Order #{order._id.slice(-6)}
                      </span>
                      <span className="purchase-date">
                        {formatDate(order.purchaseDate)}
                      </span>
                    </div>
                    <div className="order-details">
                      {listing && (
                        <div className="listing-info">
                          <span className="listing-name">{listing.name}</span>
                          <span className="listing-price">
                            ${listing.price} per item
                          </span>
                        </div>
                      )}
                      <div className="order-info">
                        <div className="info-item">
                          <span className="info-label">Quantity:</span>
                          <span className="info-value">
                            {order.quantity} items
                          </span>
                        </div>
                        <div className="info-item">
                          <span className="info-label">Total Price:</span>
                          <span className="info-value">
                            ${order.totalPrice.toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <div className="address-section">
                        <span className="address-label">Delivery Address:</span>
                        <span className="address-value">
                          {order.buyerAddress}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
