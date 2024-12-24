import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const GardenersRoutes = () => {
  const [check, setCheck] = useState(null);

  const getAuthUser = async () => {
    try {
      const { data } = await axios.get("http://127.0.0.1:8080/auth/getSelf", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setCheck(data.user.role === "gardener");
    } catch (error) {
      console.error("Error authenticating user:", error);
      setCheck(false);
    }
  };

  useEffect(() => {
    getAuthUser();
  }, []);

  if (check === null) {
    return;
  }

  return check ? <Outlet /> : <Navigate to={"/"} />;
};

export default GardenersRoutes;
