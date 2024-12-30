import React, { useState, useRef } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { setImages } from "../../../redux/slices/plantsSlice";

const MultipleImageUpload = () => {
  const [previews, setPreviews] = useState([]);
  const [files, setFiles] = useState([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const dispatch = useDispatch();
  const { images } = useSelector((state) => state.plants);

  const handleFile = async (files) => {
    if (previews.length >= 3) return;

    const validFiles = Array.from(files)
      .filter((file) => file.type.startsWith("image/"))
      .slice(0, 3 - previews.length);

    const newPreviews = validFiles.map((file) => ({
      url: URL.createObjectURL(file),
      file,
    }));

    setPreviews((prev) => [...prev, ...newPreviews]);
    dispatch(setImages([...images, ...validFiles]));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFile(e.dataTransfer?.files);
  };

  const handleChange = (e) => {
    handleFile(e.target.files);
  };

  return (
    <div className="upload-container">
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
            {previews.length > 0 ? (
              <div className="preview-container">
                {previews.map((preview, index) => (
                  <div key={index} className="preview-wrapper">
                    <img
                      src={preview.url}
                      alt={`Preview ${index}`}
                      className="preview-image"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        URL.revokeObjectURL(preview.url);
                        removeImage(index);
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
                ))}
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
                  className="lucide lucide-images upload-icon"
                >
                  <path d="M18 22H4a2 2 0 0 1-2-2V6" />
                  <path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18" />
                  <circle cx="12" cy="8" r="2" />
                  <rect width="16" height="16" x="6" y="2" rx="2" />
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
      </div>
    </div>
  );
};

export default MultipleImageUpload;
