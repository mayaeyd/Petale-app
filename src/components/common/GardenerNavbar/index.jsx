import React, { useEffect } from "react";
import LogoText from "../../../assets/images/LogoText";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { GetSelf } from "../../../redux/slices/authSlice";

const GardenerNavbar = () => {
  //   const state = useSelector((state) => state.auth);

  //   const dispatch = useDispatch();

  //   useEffect(()=>{
  //       dispatch(GetSelf())
  //       console.log("fromnavbar", state.user);
  //   },[])

  return (
    <nav className="gardener-navbar">
      <div>
        <LogoText />

        <div className="gardener-info">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="17" cy="17" r="17" fill="#D9D9D9" />
          </svg>
          <div className="gardener-name">
            <h3>John Doe</h3>
            <p>John Doe Co.</p>
          </div>
        </div>

        <div className="plants-nav-links">
          <div className="gardener-nav-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-activity"
            >
              <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
            </svg>
            <a>Growing Plants</a>
          </div>
          <div className="gardener-nav-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-clipboard-check"
            >
              <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
              <path d="m9 14 2 2 4-4" />
            </svg>
            <a>Posted Plants</a>
          </div>
          <div className="gardener-nav-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-coins"
            >
              <circle cx="8" cy="8" r="6" />
              <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
              <path d="M7 6h1v4" />
              <path d="m16.71 13.88.7.71-2.82 2.82" />
            </svg>
            <a>Sold Plants</a>
          </div>
        </div>
        <div className="personal-nav-links">
          <div className="gardener-nav-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-user-round"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
            <a>Profile</a>
          </div>
          <div className="gardener-nav-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chart-no-axes-combined"
            >
              <path d="M12 16v5" />
              <path d="M16 14v7" />
              <path d="M20 10v11" />
              <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" />
              <path d="M4 18v3" />
              <path d="M8 14v7" />
            </svg>
            <a>Track Revenue</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default GardenerNavbar;
