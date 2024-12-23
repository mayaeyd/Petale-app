import React from "react";
import PinkButtonRound from "../../base/PinkButtonRound";
import LogoNoText from "../../../assets/images/LogoNoText";
import "./style.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-sec-1">
        <div className="logo-subtitle">
          <div className="subtitle">
            <h2>PÉTALE</h2>
            <p>Grow Together</p>
          </div>
          <LogoNoText />
        </div>
        <p>Nurture. Bloom. Connect.</p>
        <PinkButtonRound label="Buy Flowers" />
      </div>
      <div className="footer-sec-2"></div>
      <div className="footer-sec-3"></div>
    </footer>
  );
};

export default Footer;
