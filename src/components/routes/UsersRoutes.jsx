import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const UsersRoutes = () => {
  const [check, setCheck] = useState(true);

  const getAuthUser = async () => {
    const { data } = await axios.get("http://127.0.0.1:8080/auth/getSelf", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    setCheck(data.user.role === "user");
  };

  useEffect(() => {
    getAuthUser();
  }, []);

  return check ? <Outlet /> : <Navigate to={"/"} />;
};

export default UsersRoutes;
