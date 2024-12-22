import React, { useState } from "react";
import LogoNoText from "../../../assets/images/LogoNoText";
import AuthImage from "../../../assets/images/AuthImage";
import "./style.css";
import Input from "../../../components/base/Input";
import WhiteButton from "../../../components/base/WhiteButton";
import { LoginUser } from "../../../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { loading, error, token, isLoggedIn, user } = useSelector((state) => state.auth);

  const credentials = {
    email,
    password,
  };

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
          <Input
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <WhiteButton
            label={
              loading ? (
                <CircularProgress color="inherit" size="20px" />
              ) : (
                "Login"
              )
            }
            onClick={() => dispatch(LoginUser(credentials))}
          />
          {error && (
            <p className="error-message">{error.message || "Error occurred"}</p>
          )}
          <p>
            Don't have an account? <a href="/role">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
