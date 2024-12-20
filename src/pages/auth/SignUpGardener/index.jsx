import React from "react";
import LogoNoText from "../../../assets/images/LogoNoText";
import AuthImage from "../../../assets/images/AuthImage";

const SignUpGardener = () => {
  return (
    <div className="main-container">
      <div className="form-container">
        <div className="logo-container">
          <LogoNoText />
          <h1>Sign Up</h1>
        </div>
      </div>
      <div className="image-container">
        <AuthImage />
      </div>
    </div>
  );
};

export default SignUpGardener;
