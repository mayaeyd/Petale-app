import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const GardenersRoutes = () => {
  const [check, setCheck] = useState(false);

  const getAuthUser = async () => {
    const { data } = await axios.get("http://127.0.0.1:8080/auth/getSelf", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    setCheck(data.user.role === "gardener");
  };

  useEffect(() => {
    getAuthUser();
  }, []);

  return check ? <Outlet /> : <Navigate to={"/"} />;
};

export default GardenersRoutes;
