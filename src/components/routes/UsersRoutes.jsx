import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const UsersRoutes = () => {
  const { user } = useSelector((state) => state.auth);
  const [check, setCheck] = useState(null);

  if (check === null) {
    return;
  }

  if (user) {
    setCheck(user.role === "user");
  }

  return check ? <Outlet /> : <Navigate to={"/"} />;
};

export default UsersRoutes;
