import React, { useState, useRef } from "react";
import { Upload, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { predictFlower } from "../../../redux/slices/flowerRecognitionSlice";
import "./style.css";

const FlowerUpload = () => {
  const [isDragOver, setIsDragOver] = useState(false);

  const dispatch = useDispatch();
  const { loading, prediction, confidence } = useSelector(
    (state) => state.flower
  );

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer?.files[0];
    if (file) handleFile(file);
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) handleFile(file);
  };

  return (
    <div className="upload-container">
      <h1>Flower Recognition</h1>

      <div className="upload-content">
        <div
          className={`upload-area ${isDragOver ? "dragover" : ""}`}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragOver(true);
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            setIsDragOver(false);
          }}
          onDrop={handleDrop}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleChange}
            accept="image/*"
            className="file-input"
          />
        </div>
      </div>
    </div>
  );
};

export default FlowerUpload;
