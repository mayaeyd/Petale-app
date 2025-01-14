import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
import UserNavbar from "../../../components/common/UserNavbar";
import Footer from "../../../components/common/Footer";
import BackgroundFlower from "../../../assets/images/BackgroundFlower";
import FlowerUpload from "../../../components/common/FlowerUpload";

const FlowerRecognition = () => {
  const { prediction } = useSelector((state) => state.flower);

  return (
    <div className="flower-recognition-div">
      <UserNavbar />
      <div className="upload-section">
        <div className="background-flowers">
          <div className="flower-left">
            <BackgroundFlower />
          </div>
          <div className="flower-right">
            <BackgroundFlower />
          </div>
        </div>
        <div className="file-upload-container">
          <FlowerUpload />
        </div>
      </div>
      {prediction && (
        <div className="predicted-flower-details">
          <h1>{prediction}</h1>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default FlowerRecognition;
