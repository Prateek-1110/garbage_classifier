import { useState } from "react";
import axios from "axios";
import ResultCard from "./resultcard";

function UploadCard() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const handleFile = (file) => {
    if (!file || !file.type.startsWith("image/")) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
    setResult(null);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const handleUpload = async () => {
    if (!image) return;
    const formData = new FormData();
    formData.append("image", image);
    try {
      setLoading(true);
      setResult(null);
      const res = await axios.post("http://127.0.0.1:8000/api/predict/", formData);
      setResult(res.data);
    } catch (error) {
      console.error(error);
      alert("Prediction failed. Please try again.");
    }
    setLoading(false);
  };

  const clearImage = () => {
    setImage(null);
    setPreview(null);
    setResult(null);
  };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

      <div className="upload-card">
        <div className="upload-card-header">
          <h2 className="upload-title">Analyze Waste</h2>
          <p className="upload-sub">Drop an image — AI does the rest</p>
        </div>

        <div
          className={`drop-zone ${dragOver ? "drop-zone--active" : ""} ${preview ? "drop-zone--filled" : ""}`}
          onClick={() => !preview && document.getElementById("file-input").click()}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
        >
          <input
            id="file-input"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => handleFile(e.target.files[0])}
          />

          {preview ? (
            <div className="preview-wrapper">
              <img src={preview} alt="preview" className="preview-img" />
              <button className="clear-btn" onClick={(e) => { e.stopPropagation(); clearImage(); }}>✕</button>
            </div>
          ) : (
            <div className="drop-placeholder">
              <div className="drop-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="17 8 12 3 7 8"/>
                  <line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
              </div>
              <p className="drop-text">Drag & drop or <span>browse</span></p>
              <p className="drop-hint">PNG, JPG, WEBP supported</p>
            </div>
          )}
        </div>

        <button
          onClick={handleUpload}
          disabled={!image || loading}
          className={`predict-btn ${(!image || loading) ? "predict-btn--disabled" : ""}`}
        >
          {loading ? (
            <span className="btn-loading">
              <span className="btn-spinner" />
              Analyzing...
            </span>
          ) : (
            <span>
              Run AI Detection →
            </span>
          )}
        </button>

        {result && <ResultCard result={result} />}
      </div>

      <style>{`
        .upload-card {
          background: #111;
          border: 1px solid #222;
          border-radius: 24px;
          padding: 36px;
          width: 440px;
          box-shadow: 0 40px 80px rgba(0,0,0,0.6);
        }
        .upload-card-header {
          margin-bottom: 24px;
        }
        .upload-title {
          font-family: 'Space Mono', monospace;
          font-size: 24px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 6px 0;
          letter-spacing: -0.02em;
        }
        .upload-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: #555;
          margin: 0;
        }
        .drop-zone {
          border: 2px dashed #2a2a2a;
          border-radius: 16px;
          padding: 40px 20px;
          cursor: pointer;
          transition: all 0.2s ease;
          min-height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          position: relative;
        }
        .drop-zone:hover {
          border-color: #4ade80;
          background: rgba(74, 222, 128, 0.03);
        }
        .drop-zone--active {
          border-color: #4ade80;
          background: rgba(74, 222, 128, 0.06);
        }
        .drop-zone--filled {
          padding: 0;
          cursor: default;
          border-color: #333;
        }
        .preview-wrapper {
          position: relative;
          width: 100%;
          border-radius: 14px;
          overflow: hidden;
        }
        .preview-img {
          width: 100%;
          max-height: 260px;
          object-fit: cover;
          display: block;
          border-radius: 14px;
        }
        .clear-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(0,0,0,0.7);
          color: #fff;
          border: none;
          border-radius: 50%;
          width: 28px;
          height: 28px;
          cursor: pointer;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(8px);
          transition: background 0.2s;
        }
        .clear-btn:hover {
          background: rgba(248,113,113,0.8);
        }
        .drop-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .drop-icon {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: #1a1a1a;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #555;
          margin-bottom: 4px;
        }
        .drop-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          color: #666;
          margin: 0;
        }
        .drop-text span {
          color: #4ade80;
          font-weight: 600;
        }
        .drop-hint {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: #333;
          margin: 0;
        }
        .predict-btn {
          width: 100%;
          padding: 15px;
          background: #4ade80;
          color: #0a0a0a;
          border: none;
          border-radius: 12px;
          font-family: 'Space Mono', monospace;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          letter-spacing: 0.02em;
        }
        .predict-btn:hover:not(.predict-btn--disabled) {
          background: #86efac;
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(74, 222, 128, 0.3);
        }
        .predict-btn--disabled {
          background: #1a1a1a;
          color: #444;
          cursor: not-allowed;
        }
        .btn-loading {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .btn-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid #333;
          border-top-color: #4ade80;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}

export default UploadCard;