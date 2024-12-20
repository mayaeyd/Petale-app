import React from "react";
import Input from "../../../components/base/Input";
import "./style.css";
import AuthImage from "../../../assets/AuthImage";

const RolePage = () => {
  return (
    <div className="main-container">
      <div className="form-container">
        <div className="inputs-container">
        <div className="name-container">
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
        </div>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        </div>
      </div>
      <div className="image-container">
        <AuthImage />
      </div>
    </div>
  );
};

export default RolePage;
