import React from "react";
import "./style.css";
import AuthImage from "../../../assets/images/AuthImage";
import LogoNoText from "../../../assets/images/LogoNoText";
import BigButton from "../../../components/base/BigButton";
import GardenerIcon from "../../../assets/icons/GardenerIcon";
import UserRoleIcon from "../../../assets/icons/UserRoleIcon";
import WhiteButton from "../../../components/base/WhiteButton";

const RolePage = () => {
  return (
    <div className="main-container">
      <div className="form-container">
        <div className="logo-container">
          <LogoNoText />
          <h1>Sign Up</h1>
        </div>
        <BigButton
          icon={<UserRoleIcon />}
          title="As a Buyer"
          subtitle="I'm here to buy plants"
        />
        <BigButton
          icon={<GardenerIcon />}
          title="As a Gardener"
          subtitle="I'm here to sell and care for my plants"
        />
        <WhiteButton 
          label="Continue"
        />
      </div>
      <div className="image-container">
        <AuthImage />
      </div>
    </div>
  );
};

export default RolePage;
