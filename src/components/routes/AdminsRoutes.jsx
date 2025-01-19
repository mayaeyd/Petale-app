import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { GetSelf } from "../../redux/slices/authSlice";
import { userThunks } from "../../redux/admin/thunks/userThunks";
import { orderThunks } from "../../redux/admin/thunks/orderThunks";
import { plantThunks } from "../../redux/admin/thunks/plantThunks";
import { postThunks } from "../../redux/admin/thunks/postThunks";
import { GetAllGardenersOrders } from "../../redux/slices/orderSlice";

const AdminsRoutes = () => {
  const { user, loading, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      if (localStorage.getItem("token") && !user) {
        await dispatch(GetSelf());
      }

      if (user?.role === "admin") {
        dispatch(userThunks.fetchUsers());
        dispatch(plantThunks.fetchPlants());
        dispatch(postThunks.fetchPosts());
        dispatch(orderThunks.fetchOrders());
        dispatch(orderThunks.fetchSales());
        dispatch(GetAllGardenersOrders());
      }
    };

    checkAuth();
  }, [dispatch, user]);

  if (loading || (token && !user)) return null;
  if (!token || !user || user.role !== "admin") return <Navigate to="/" />;

  return <Outlet />;
};

export default AdminsRoutes;
