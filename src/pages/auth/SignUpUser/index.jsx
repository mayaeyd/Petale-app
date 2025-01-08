import React, { useState } from "react";
import LogoNoText from "../../../assets/images/LogoNoText";
import AuthImage from "../../../assets/images/AuthImage";
import "./style.css";
import Input from "../../../components/base/Input";
import WhiteButton from "../../../components/base/WhiteButton";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from "../../../redux/slices/authSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const SignUpUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const location = useLocation();
  const role = location.state.role;

  const phoneNumberAsNumber = Number(phoneNumber);

  const credentials = {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    phoneNumber: phoneNumberAsNumber,
    role,
  };

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
            <Input
              label="First Name"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            <Input
              label="Last Name"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </div>
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
          <Input
            label="Confirm Password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          <Input
            label=""
            type="tel"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />
          <WhiteButton
            label={
              loading ? (
                <CircularProgress color="inherit" size="20px" />
              ) : (
                "Sign Up"
              )
            }
            onClick={() => {
              dispatch(RegisterUser(credentials));
              navigate("/login");
            }}
          />
          {error && <p className="error-message">{error.message}</p>}
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
      <div className="image-container">
        <AuthImage />
      </div>
    </div>
  );
};

export default SignUpUser;
