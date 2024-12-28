import React from "react";
import "./style.css";
import UserNavbar from "../../components/common/UserNavbar";
import Footer from "../../components/common/Footer";
import FlowerUpload from "../../components/common/FlowerUpload";
import BackgroundFlower from "../../assets/images/BackgroundFlower";

const FlowerRecognition = () => {
  return (
    <div className="flower-recoganition-div">
      <UserNavbar />
      <div className="flower-1">
        <BackgroundFlower />
      </div>
      <div className="file-upload-container">
        <FlowerUpload />
      </div>
      <div className="flower-2">
        <BackgroundFlower />
      </div>
      <Footer />
    </div>
  );
};

export default FlowerRecognition;
