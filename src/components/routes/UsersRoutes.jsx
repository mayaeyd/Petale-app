import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";

const UsersRoutes = () => {
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("No token found");
        }

        const { data } = await axios.post("http://localhost:8080/auth/getSelf", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (data.user.role === "user") {
          setCheck(true);
        } else {
          setCheck(false);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setCheck(false);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Optionally add a spinner or loader
  }

  return check ? <Outlet /> : <Navigate to="/" />;
};

export default UsersRoutes;
