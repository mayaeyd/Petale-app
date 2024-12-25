import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const GardenersRoutes = () => {
  // const { user,loading } = useSelector((state) => state.auth);
  // const [check, setCheck] = useState(null);

  // if (loading) {
  //   return;
  // }

  // if (user) {
  //   setCheck(user.role === "gardener");
  // }

  return <Outlet />;
};

export default GardenersRoutes;
