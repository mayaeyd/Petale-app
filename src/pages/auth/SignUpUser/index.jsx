import React, { useState } from "react";
import LogoNoText from "../../../assets/images/LogoNoText";
import AuthImage from "../../../assets/images/AuthImage";
import "./style.css";
import Input from "../../../components/base/Input";
import WhiteButton from "../../../components/base/WhiteButton";

const SignUpUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [location, setLocation] = useState("");

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
          <Input placeholder="Location" type="text" />
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

export default SignUpUser;
