import React, { useState } from "react";
import LogoNoText from "../../../assets/images/LogoNoText";
import AuthImage from "../../../assets/images/AuthImage";
import "./style.css";
import Input from "../../../components/base/Input";
import WhiteButton from "../../../components/base/WhiteButton";
import { useLocation } from "react-router-dom";

const SignUpGardener = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [gardenName, setGardenName] = useState("");
  const [gardenLocation, setGardenlocation] = useState("");

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
    gardenName,
    gardenLocation,
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
              placeholder="First Name"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              placeholder="Last Name"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
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
          <Input
            placeholder="Confirm Password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Input
            placeholder=""
            type="tel"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <div className="name-container">
            <Input
              placeholder="Garden Name"
              type="text"
              onChange={(e) => setGardenName(e.target.value)}
            />
            <Input
              placeholder="Garden Location"
              type="text"
              onChange={(e) => setGardenlocation(e.target.value)}
            />
          </div>
          <WhiteButton label="Sign Up" />
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

export default SignUpGardener;
