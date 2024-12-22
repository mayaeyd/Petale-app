import React from "react";
import LogoText from "../../../assets/images/LogoText";

const UserNavbar = () => {
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default UserNavbar;
