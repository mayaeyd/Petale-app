import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { GetSelf } from "../../redux/slices/authSlice";
import { getAllPosts } from "../../redux/slices/marketplaceSlice";

const UsersRoutes = () => {
  const { user, loading, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      if (localStorage.getItem("token") && !user) {
        await dispatch(GetSelf());
      }
    };

    if (user?.role === "user") {
      dispatch(getAllPosts());
    }

    checkAuth();
  }, [dispatch, user]);

  if (loading || (token && !user)) return null;
  if (!token || !user || user.role !== "user") return <Navigate to="/" />;

  return <Outlet />;
};

export default UsersRoutes;
