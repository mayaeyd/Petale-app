import React, { useState } from "react";
import LogoText from "../../../assets/images/LogoText";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import PinkButtonRound from "../../base/PinkButtonRound";
import { logout } from "../../../redux/slices/authSlice";
import { Menu, ShoppingBag, X } from "lucide-react";

const GardenerNavbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "unset";
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn" onClick={toggleMenu}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`gardener-navbar ${isMenuOpen ? "mobile-open" : ""}`}>
        {/* Desktop Logo */}
        <div className="desktop-header">
          <LogoText />
        </div>

        {/* Mobile Logo */}
        <div className="mobile-header">
          <LogoText />
        </div>

        <div className="gardener-info">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet" // This helps maintain the aspect ratio
          >
            <circle cx="17" cy="17" r="16.5" fill="#D9D9D9" /> // Slightly
            reduced radius
            <path
              d="M17 8.5C19.21 8.5 21 10.29 21 12.5C21 14.71 19.21 16.5 17 16.5C14.79 16.5 13 14.71 13 12.5C13 10.29 14.79 8.5 17 8.5ZM17 20.5C22.25 20.5 27 23.13 27 25.5V27.5H7V25.5C7 23.13 11.75 20.5 17 20.5Z"
              fill="#808080"
            />
          </svg>
          <div className="gardener-name">
            <h3>
              {user.firstName} {user.lastName}
            </h3>
            <p>{user.gardenerProfile.garden.name}</p>
          </div>
        </div>

        <div className="plants-nav-links">
          <NavLink
            to="/gardener/growing-plants"
            className={({ isActive }) =>
              isActive ? "gardener-nav-link active" : "gardener-nav-link"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-activity"
            >
              <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
            </svg>
            <p>Growing Plants</p>
          </NavLink>
          <NavLink
            to="/gardener/posted-plants"
            className={({ isActive }) =>
              isActive ? "gardener-nav-link active" : "gardener-nav-link"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-clipboard-check"
            >
              <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
              <path d="m9 14 2 2 4-4" />
            </svg>
            <p>Posted Plants</p>
          </NavLink>
          <NavLink
            to="/gardener/orders"
            className={({ isActive }) =>
              isActive ? "gardener-nav-link active" : "gardener-nav-link"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <ShoppingBag strokeWidth="1" />
            <p>Orders</p>
          </NavLink>
          <NavLink
            to="/gardener/sold-plants"
            className={({ isActive }) =>
              isActive ? "gardener-nav-link active" : "gardener-nav-link"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-coins"
            >
              <circle cx="8" cy="8" r="6" />
              <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
              <path d="M7 6h1v4" />
              <path d="m16.71 13.88.7.71-2.82 2.82" />
            </svg>
            <p>Sold Plants</p>
          </NavLink>
        </div>

        <div className="personal-nav-links" style={{ visibility: "hidden" }}>
          <NavLink
            to="/gardener/profile"
            className={({ isActive }) =>
              isActive ? "gardener-nav-link active" : "gardener-nav-link"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user-round"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
            <p>Profile</p>
          </NavLink>
          <NavLink
            to="/gardener/revenue"
            className={({ isActive }) =>
              isActive ? "gardener-nav-link active" : "gardener-nav-link"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chart-no-axes-combined"
            >
              <path d="M12 16v5" />
              <path d="M16 14v7" />
              <path d="M20 10v11" />
              <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" />
              <path d="M4 18v3" />
              <path d="M8 14v7" />
            </svg>
            <p>Track Revenue</p>
          </NavLink>
        </div>
        <div className="logout-button">
          <PinkButtonRound
            label="Logout"
            color="#4b5842"
            backgroundColor="white"
            onClick={() => dispatch(logout())}
          />
        </div>
      </div>
    </>
  );
};

export default GardenerNavbar;
