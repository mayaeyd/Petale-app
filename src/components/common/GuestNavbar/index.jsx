import React from "react";
import LogoText from "../../../assets/images/LogoText";
import PinkButtonRound from "../../base/PinkButtonRound";
import OutlinedButton from "../../base/OutlinedButton";
import "./style.css";
import { useNavigate } from "react-router-dom";

const GuestNavbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="guest-logo-container">
        <LogoText />
      </div>
      <div className="guest-buttons-container">
        <OutlinedButton
          color="white"
          borderColor="white"
          fontFamily="Kobe Regular"
          label="Login"
          onClick={() => navigate("/login")}
        />
        <PinkButtonRound
          color="#4b5842"
          backgroundColor="white"
          fontFamily="Kobe Regular"
          label="Sign Up"
          onClick={() => navigate("/role")}
        />
      </div>
    </nav>
  );
};

export default GuestNavbar;
