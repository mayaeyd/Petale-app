import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { GetSelf } from "../../redux/slices/authSlice";
import { fetchPostedPlants } from "../../redux/slices/postedPlantsSlice";
import { fetchSoldPlants } from "../../redux/slices/soldPlantsSlice";

const GardenersRoutes = () => {
  const { user, loading, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      if (localStorage.getItem("token") && !user) {
        await dispatch(GetSelf());
      }
    };

    if (user?.role === "gardener") {
      dispatch(fetchPostedPlants());
      dispatch(fetchSoldPlants());
    }

    checkAuth();
  }, [dispatch, user]);

  if (loading || (token && !user)) return null;
  if (!token || !user || user.role !== "gardener") return <Navigate to="/" />;

  return <Outlet />;
};

export default GardenersRoutes;
