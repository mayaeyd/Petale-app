import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { GetSelf } from "../../redux/slices/authSlice";

const GardenersRoutes = () => {
  const { user, loading, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      if (localStorage.getItem("token") && !user) {
        await dispatch(GetSelf());
      }
    };

    checkAuth();
  }, [dispatch,user]);

  if (loading) {
    return null;
  }

  if (token && !user) {
    return null;
  }

  if (!token || !user) {
    return <Navigate to="/" />;
  }

  if (user.role !== "gardener") {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default GardenersRoutes;
