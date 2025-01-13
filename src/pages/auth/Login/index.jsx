import React, { useEffect, useState } from "react";
import LogoNoText from "../../../assets/images/LogoNoText";
import AuthImage from "../../../assets/images/AuthImage";
import "./style.css";
import Input from "../../../components/base/Input";
import WhiteButton from "../../../components/base/WhiteButton";
import { LoginUser } from "../../../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const credentials = {
    email,
    password,
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, user } = useSelector((state) => state.auth);

  // useEffect to handle navigation after successful login
  useEffect(() => {
    if (user && user.role) {
      switch (user.role) {
        case "gardener":
          navigate("/gardener/growing-plants");
          break;
        case "user":
          navigate("/user/home");
          break;
        case "admin":
          navigate("/admin/dashboard");
          break;
        default:
          navigate("/");
      }
    }
  }, [user, navigate]);

  const handleClick = async () => {
    try {
      await dispatch(LoginUser(credentials));
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="main-container">
      <div className="image-container">
        <AuthImage />
      </div>
      <div className="form-container-login">
        <div className="logo-container-login">
          <LogoNoText />
          <h1>Login</h1>
          <p>
            Welcome back! Please enter your credentials to access your account.
          </p>
        </div>

        <div className="inputs-container-login">
          <Input
            label="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <WhiteButton
            label={
              loading ? (
                <CircularProgress color="inherit" size="20px" />
              ) : (
                "Login"
              )
            }
            onClick={handleClick}
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
