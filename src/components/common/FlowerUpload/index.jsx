import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { predictFlower } from "../../../redux/slices/flowerRecognitionSlice";
import "./style.css";

const FlowerUpload = () => {
  const [preview, setPreview] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const dispatch = useDispatch();
  const { loading, prediction, confidence } = useSelector(
    (state) => state.flower
  );

  const handleFile = async (file) => {
    if (file && file.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(file));
      dispatch(predictFlower(file));
    }
  };

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

  const formatPlantName = (prediction) => {
    return prediction
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
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
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleChange}
            accept="image/*"
            className="file-input"
          />

          <div className="upload-content-inner">
            {preview ? (
              <div className="preview-container">
                <img src={preview} alt="Preview" className="preview-image" />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setPreview(null);
                  }}
                  className="clear-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-x"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-upload upload-icon"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" x2="12" y1="3" y2="15" />
                </svg>
                <div className="upload-text">
                  <p className="upload-title">
                    {isDragOver
                      ? "Drop your image here"
                      : "Drag & drop your flower image"}
                  </p>
                  <p className="upload-subtitle">or click to browse</p>
                </div>
              </>
            )}
          </div>
        </div>

        {loading && (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Analyzing your flower...</p>
          </div>
        )}

        {prediction && !loading && (
          <div className="result-container">
            <div className="result-content">
              <div>
                <h3>{formatPlantName(prediction)}</h3>
                <p>
                  Confidence: <span>{(confidence * 100).toFixed(1)}%</span>
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-upload upload-icon"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" x2="12" y1="3" y2="15" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlowerUpload;
