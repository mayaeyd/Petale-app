import React from "react";
import LogoText from "../../../assets/images/LogoText";
import "./style.css";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const UserNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <nav>
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>
            Shop
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </li>
        </ul>
      </div>
      <LogoText role="user" />
      <div className="nav-icons">
        <svg
          onClick={() => {
            navigate("/user/cart");
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-shopping-cart"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
        <div class="dropdown">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-user-round"
          >
            <circle cx="12" cy="8" r="5" />
            <path d="M20 21a8 8 0 0 0-16 0" />
          </svg>
          <div class="dropdown-content">
            <a href="/user/order">Orders</a>
            <a
              onClick={() => {
                dispatch(logout());
              }}
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
