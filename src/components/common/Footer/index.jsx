import React from "react";
import PinkButtonRound from "../../base/PinkButtonRound";
import LogoNoText from "../../../assets/images/LogoNoText";

const Footer = () => {
  return (
    <footer>
      <div className="logo-subtitle">
        <div className="subtitle">
          <h2>PÉTALE</h2>
          <p>Grow Together</p>
        </div>
        <LogoNoText />
      </div>
      <PinkButtonRound label="Buy Flowers" />
    </footer>
  );
};

export default Footer;
