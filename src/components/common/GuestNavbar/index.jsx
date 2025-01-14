import React from "react";
import LogoText from "../../../assets/images/LogoText";
import PinkButtonRound from "../../base/PinkButtonRound";
import OutlinedButton from "../../base/OutlinedButton";
import "./style.css";

const GuestNavbar = () => {
  return (
    <nav>
      <LogoText />
      <div className="guest-buttons-container">
        <OutlinedButton
          color="white"
          borderColor="white"
          fontFamily="Kobe Regular"
          label="Login"
        />
        <PinkButtonRound
          color="#4b5842"
          backgroundColor="white"
          fontFamily="Kobe Regular"
          label="Sign Up"
        />
      </div>
    </nav>
  );
};

export default GuestNavbar;
