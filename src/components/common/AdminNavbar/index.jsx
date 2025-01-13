import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import LogoText from "../../../assets/images/LogoText";
import { BarChart3, Flower, Package, ShoppingBag, Users } from "lucide-react";
import PinkButtonRound from "../../base/PinkButtonRound";
import { logout } from "../../../redux/slices/authSlice";
import { useDispatch } from "react-redux";

const AdminNavbar = () => {
  const dispatch = useDispatch();

  return (
    <div className="admin-navbar">
      <LogoText />
      <div className="admin-nav-links">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            isActive ? "admin-nav-link active" : "admin-nav-link"
          }
        >
          <BarChart3 strokeWidth="1" />
          <p>Overview</p>
        </NavLink>

        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            isActive ? "admin-nav-link active" : "admin-nav-link"
          }
        >
          <Users strokeWidth="1" />
          <p>Users</p>
        </NavLink>

        <NavLink
          to="/admin/marketplace"
          className={({ isActive }) =>
            isActive ? "admin-nav-link active" : "admin-nav-link"
          }
        >
          <ShoppingBag strokeWidth="1" />
          <p>Marketplace</p>
        </NavLink>

        <NavLink
          to="/admin/growing-plants"
          className={({ isActive }) =>
            isActive ? "admin-nav-link active" : "admin-nav-link"
          }
        >
          <Flower strokeWidth="1" />
          <p>Growing Plants</p>
        </NavLink>

        <NavLink
          to="/admin/orders"
          className={({ isActive }) =>
            isActive ? "admin-nav-link active" : "admin-nav-link"
          }
        >
          <Package strokeWidth="1" />
          <p>Orders</p>
        </NavLink>
      </div>
      <PinkButtonRound
        label="Logout"
        color="#4b5842"
        backgroundColor="white"
        onClick={() => dispatch(logout())}
        className="logout-btn"
      />
    </div>
  );
};

export default AdminNavbar;
