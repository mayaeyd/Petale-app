import React from "react";
// import ".style.css";
import UserNavbar from "../../components/common/UserNavbar";
import Footer from "../../components/common/Footer";
import FlowerUpload from "../../components/common/FlowerUpload";

const FlowerRecognition = () => {
  return (
    <>
      <UserNavbar />
      <FlowerUpload />
      <Footer />
    </>
  );
};

export default FlowerRecognition;
