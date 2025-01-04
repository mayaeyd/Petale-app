import React from "react";
import "./style.css";
import UserNavbar from "../../../components/common/UserNavbar";
import Footer from "../../../components/common/Footer";
import FlowerUpload from "../../../components/common/FlowerUpload";
import BackgroundFlower from "../../../assets/images/BackgroundFlower";
import { useSelector } from "react-redux";

const FlowerRecognition = () => {
  const { prediction } = useSelector((state) => state.flower);

  return (
    <div className="flower-recoganition-div">
      <UserNavbar />
      <div className="upload-section">
        <div className="flower-1">
          <BackgroundFlower />
        </div>
        <div className="file-upload-container">
          <FlowerUpload />
        </div>
        <div className="flower-2">
          <BackgroundFlower />
        </div>
      </div>
      {prediction ? (
        <div className="predicted-flower-details">
          <h1>{prediction}</h1>
        </div>
      ) : (
        ""
      )}
      <Footer />
    </div>
  );
};

export default FlowerRecognition;
