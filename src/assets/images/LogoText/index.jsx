import React from "react";
import logoText from "./logoText.png";
import { useNavigate } from "react-router-dom";

const LogoText = ({ role }) => {
  const navigate = useNavigate();

  const path =
    role === "user"
      ? "/user/home"
      : role === "gardener"
      ? "/gardener/home"
      : "/";

  return <img src={logoText} alt="Logo" onClick={() => navigate(path)} />;
};

export default LogoText;
