import React, { useState, useRef } from "react";
import { Upload, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { predictFlower } from "../../../redux/slices/flowerRecognitionSlice";
import "./style.css";

const FlowerUpload = () => {
  const [preview, setPreview] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);

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
                  <X size={16} />
                </button>
              </div>
            ) : (
              <>
                <Upload size={48} className="upload-icon" />
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
                <p>Confidence: {(confidence * 100).toFixed(1)}%</p>
              </div>
              <Upload size={32} className="result-icon" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlowerUpload;
