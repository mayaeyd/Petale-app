import React from "react";
import Input from "../../../components/base/Input";
import "./style.css";
import AuthImage from "../../../assets/AuthImage";
import LogoNoText from "../../../assets/LogoNoText";

const RolePage = () => {
  return (
    <div className="main-container">
      <div className="form-container">
        <LogoNoText />
      </div>
      <div className="image-container">
        <AuthImage />
      </div>
    </div>
  );
};

export default RolePage;
