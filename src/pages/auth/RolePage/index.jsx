import React, { useState } from "react";
import "./style.css";
import AuthImage from "../../../assets/images/AuthImage";
import LogoNoText from "../../../assets/images/LogoNoText";
import BigButton from "../../../components/base/BigButton";
import GardenerIcon from "../../../assets/icons/GardenerIcon";
import UserRoleIcon from "../../../assets/icons/UserRoleIcon";
import WhiteButton from "../../../components/base/WhiteButton";
import { useNavigate } from "react-router-dom";

const RolePage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const roles = ["user", "gardener"];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const handleContinue = () => {
    if (activeIndex === null) return;
    const selectedRole = roles[activeIndex];
    navigate(`/signup/${selectedRole}`, {
      state: { role: selectedRole },
    });
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <div className="logo-container" style={{marginTop:'10px'}}>
          <LogoNoText />
          <h1>Sign Up</h1>
        </div>
        <BigButton
          active={activeIndex === 0}
          onClick={() => handleClick(0)}
          icon={<UserRoleIcon />}
          title="As a Buyer"
          subtitle="I'm here to buy plants"
        />
        <BigButton
          active={activeIndex === 1}
          onClick={() => handleClick(1)}
          icon={<GardenerIcon />}
          title="As a Gardener"
          subtitle="I'm here to sell and care for my plants"
        />
        <div className="btn-container">
          <WhiteButton label="Continue" onClick={handleContinue} />
        </div>
      </div>
      <div className="image-container">
        <AuthImage />
      </div>
    </div>
  );
};

export default RolePage;
