import { useEffect, useState } from "react";
import axios from "axios";
import { isLoggedIn, loginWithGoogle } from "../utils/auth";

function History() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const logged = isLoggedIn();

  useEffect(() => {
    if (!logged) { setLoading(false); return; }
    axios
      .get("http://127.0.0.1:8000/api/history/")
      .then((res) => { setData(res.data); setLoading(false); })
      .catch((err) => { console.log(err); setLoading(false); });
  }, [logged]);

  if (!logged) {
    return (
      <>
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
        <div className="gated-page">
          <div className="gated-icon">🔒</div>
          <h1 className="gated-title">Login Required</h1>
          <p className="gated-desc">Sign in with Google to view your full detection history.</p>
          <button onClick={loginWithGoogle} className="gated-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          <style>{`
            .gated-page {
              background: #080808;
              min-height: 100vh;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: 16px;
              padding-top: 80px;
            }
            .gated-icon { font-size: 48px; }
            .gated-title {
              font-family: 'Space Mono', monospace;
              font-size: 32px;
              font-weight: 700;
              color: #fff;
              margin: 0;
            }
            .gated-desc {
              font-family: 'DM Sans', sans-serif;
              font-size: 15px;
              color: #555;
              margin: 0 0 10px;
              text-align: center;
            }
            .gated-btn {
              display: flex;
              align-items: center;
              gap: 12px;
              font-family: 'DM Sans', sans-serif;
              font-size: 15px;
              font-weight: 600;
              color: #0a0a0a;
              background: #fff;
              border: none;
              padding: 14px 28px;
              border-radius: 12px;
              cursor: pointer;
              transition: all 0.2s ease;
            }
            .gated-btn:hover {
              background: #f0fdf4;
              transform: translateY(-2px);
              box-shadow: 0 10px 30px rgba(255,255,255,0.1);
            }
          `}</style>
        </div>
      </>
    );
  }

  if (loading) {
    return (
      <div className="loading-page">
        <div className="loading-spinner" />
        <style>{`
          .loading-page {
            background: #080808;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 80px;
          }
          .loading-spinner {
            width: 40px;
            height: 40px;
            border: 3px solid #1a1a1a;
            border-top-color: #4ade80;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
          }
          @keyframes spin { to { transform: rotate(360deg); } }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

      <div className="history-page">
        <div className="history-header">
          <h1 className="history-title">Detection History</h1>
          <p className="history-sub">{data.length} scan{data.length !== 1 ? "s" : ""} recorded</p>
        </div>

        {data.length === 0 ? (
          <div className="history-empty">
            <div className="empty-icon">🗂</div>
            <p>No predictions yet. Try the AI scanner!</p>
          </div>
        ) : (
          <div className="history-grid">
            {data.map((item, i) => (
              <div className="history-card" key={item.id} style={{ animationDelay: `${i * 60}ms` }}>
                <div className="history-img-wrap">
                  <img
                    src={`http://127.0.0.1:8000${item.image}`}
                    alt="prediction"
                    className="history-img"
                  />
                </div>
                <div className="history-card-body">
                  <h3 className="history-class">{item.class}</h3>
                  <div className="history-conf">
                    <div className="conf-bar-bg">
                      <div className="conf-bar-fill" style={{ width: `${item.confidence}%` }} />
                    </div>
                    <span className="conf-label">{item.confidence}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .history-page {
          background: #080808;
          min-height: 100vh;
          padding: 100px 80px 80px;
        }
        .history-header {
          margin-bottom: 48px;
        }
        .history-title {
          font-family: 'Space Mono', monospace;
          font-size: 40px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 8px;
          letter-spacing: -0.03em;
        }
        .history-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: #555;
          margin: 0;
        }
        .history-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 14px;
          padding: 100px 0;
        }
        .empty-icon { font-size: 48px; }
        .history-empty p {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          color: #555;
        }
        .history-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px;
        }
        .history-card {
          background: #111;
          border: 1px solid #1a1a1a;
          border-radius: 16px;
          overflow: hidden;
          transition: border-color 0.2s, transform 0.2s;
          animation: fadeIn 0.4s ease forwards;
          opacity: 0;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .history-card:hover {
          border-color: #2a2a2a;
          transform: translateY(-4px);
        }
        .history-img-wrap {
          width: 100%;
          height: 180px;
          overflow: hidden;
          background: #0a0a0a;
        }
        .history-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease;
        }
        .history-card:hover .history-img {
          transform: scale(1.04);
        }
        .history-card-body {
          padding: 16px;
        }
        .history-class {
          font-family: 'Space Mono', monospace;
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 12px;
          letter-spacing: -0.01em;
        }
        .history-conf {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .conf-bar-bg {
          flex: 1;
          height: 4px;
          background: #1e1e1e;
          border-radius: 2px;
          overflow: hidden;
        }
        .conf-bar-fill {
          height: 100%;
          background: #4ade80;
          border-radius: 2px;
        }
        .conf-label {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          color: #4ade80;
          white-space: nowrap;
        }

        @media (max-width: 700px) {
          .history-page { padding: 100px 24px 60px; }
        }
      `}</style>
    </>
  );
}

export default History;