import React from "react";
import LogoNoText from "../../../assets/images/LogoNoText";
import AuthImage from "../../../assets/images/AuthImage";
import "./style.css";
import Input from "../../../components/base/Input";
import WhiteButton from "../../../components/base/WhiteButton";

const SignUpGardener = () => {
  return (
    <div className="main-container">
      <div className="form-container">
        <div className="logo-container">
          <LogoNoText />
          <h1>Sign Up</h1>
          <p>
            Join us today to start exploring and caring for your favorite
            flowers!
          </p>
        </div>

        <div className="inputs-container">
          <div className="name-container">
            <Input placeholder="First Name" type="text" />
            <Input placeholder="Last Name" type="text" />
          </div>
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <Input placeholder="Confirm Password" type="password" />
          <Input placeholder="" type="tel" />
          <div className="name-container">
            <Input placeholder="Garden Name" type="text" />
            <Input placeholder="Location" type="text" />
          </div>
          <WhiteButton label="Sign Up" />
          <p>Already have an account? <a>Login</a></p>
        </div>
      </div>
      <div className="image-container">
        <AuthImage />
      </div>
    </div>
  );
};

export default SignUpGardener;
