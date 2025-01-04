import React from "react";
import UserNavbar from "../../../components/common/UserNavbar";
import Footer from "../../../components/common/Footer";
import "./style.css";
import PinkButtonRound from "../../../components/base/PinkButtonRound";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";

const UserHomePage = () => {
  return (
    <div>
      <UserNavbar />
      <div className="hero-section">
        <div>
          <h1>PÉTALE</h1>
          <h3>Nurture. Bloom. Connect</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserHomePage;
