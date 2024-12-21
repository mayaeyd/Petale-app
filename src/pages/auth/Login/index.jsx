import React from "react";
import LogoNoText from "../../../assets/images/LogoNoText";
import AuthImage from "../../../assets/images/AuthImage";
import "./style.css";
import Input from "../../../components/base/Input";
import WhiteButton from "../../../components/base/WhiteButton";

const Login = () => {
  return (
    <div className="main-container">
      <div className="image-container">
        <AuthImage />
      </div>
      <div className="form-container">
        <div className="logo-container">
          <LogoNoText />
          <h1>Login</h1>
          <p>
            Welcome back! Please enter your credentials to access your account.
          </p>
        </div>

        <div className="inputs-container">
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <WhiteButton label="Login" />
          <p>
            Don't have an account? <a href="/role">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
