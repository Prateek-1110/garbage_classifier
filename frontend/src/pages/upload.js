// import UploadCard from "../components/uploadcard";
import UploadCard from "../ components/uploadcard";

function Upload() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

      <div className="upload-page">
        <div className="upload-page-bg" />
        <div className="upload-page-inner">
          <div className="upload-page-header">
            <h1 className="upload-page-title">Waste Scanner</h1>
            <p className="upload-page-sub">Upload a photo and let AI classify your waste instantly</p>
          </div>
          <UploadCard />
        </div>
      </div>

      <style>{`
        .upload-page {
          background: #080808;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 80px;
          position: relative;
        }
        .upload-page-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(74,222,128,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,222,128,0.025) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }
        .upload-page-inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
          padding: 40px 20px;
        }
        .upload-page-header {
          text-align: center;
        }
        .upload-page-title {
          font-family: 'Space Mono', monospace;
          font-size: 40px;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.03em;
          margin: 0 0 10px;
        }
        .upload-page-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          color: #555;
          margin: 0;
        }
      `}</style>
    </>
  );
}

export default Upload;