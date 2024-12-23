import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const GardenersRoutes = () => {
  const [check, setCheck] = useState(false);

  const { user, token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user && token && user.role === "gardener") {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [user, token]);

  return check ? <Outlet /> : <Navigate to={"/"} />;
};

export default GardenersRoutes;
