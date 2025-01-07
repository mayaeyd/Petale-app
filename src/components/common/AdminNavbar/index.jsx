import React from "react";
import "./style.css";

const AdminNavbar = () => {
  return (
    <div className="admin-navbar">
      <LogoText />
      <div className="plants-nav-links">
        <NavLink
          to="/admin/growing-plants"
          className={({ isActive }) =>
            isActive ? "admin-nav-link active" : "admin-nav-link"
          }
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
          to="/admin/posted-plants"
          className={({ isActive }) =>
            isActive ? "admin-nav-link active" : "admin-nav-link"
          }
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
          to="/admin/sold-plants"
          className={({ isActive }) =>
            isActive ? "admin-nav-link active" : "admin-nav-link"
          }
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

      <div className="personal-nav-links">
        <NavLink
          to="admin/profile"
          className={({ isActive }) =>
            isActive ? "admin-nav-link active" : "admin-nav-link"
          }
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
      </div>
    </div>
  );
};

export default AdminNavbar;
