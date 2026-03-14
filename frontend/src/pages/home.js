import { Link } from "react-router-dom";
import { isLoggedIn, loginWithGoogle } from "../utils/auth";

function Home() {
  const logged = isLoggedIn();

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <div className="home">
        {/* Hero */}
        <section className="hero">
          <div className="hero-bg-grid" />
          <div className="hero-glow" />

          <div className="hero-content">
            <div className="hero-tag">♻ AI-Powered Waste Detection</div>
            <h1 className="hero-headline">
              Smart Waste<br />
              <span className="hero-accent">Detection.</span>
            </h1>
            <p className="hero-quote">
              "The greatest threat to our planet is the belief that someone else will save it."
            </p>
            <p className="hero-desc">
              Upload a waste image — our deep learning model classifies it instantly and tells you exactly how to dispose of it responsibly.
            </p>

            <div className="hero-cta-group">
              <Link to="/upload" className="cta-primary">
                Try AI Demo — Free →
              </Link>
              {!logged && (
                <button onClick={loginWithGoogle} className="cta-secondary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Login with Google
                </button>
              )}
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card">
              <div className="visual-card-tag">AI Result</div>
              <div className="visual-class">Plastic Bottle</div>
              <div className="visual-conf">96.4% confidence</div>
              <div className="visual-bar">
                <div className="visual-bar-fill" style={{ width: "96%" }} />
              </div>
              <div className="visual-guide">
                ♻ Rinse and place in the blue recycling bin. Remove cap separately.
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="features">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Instant Detection</h3>
            <p>Deep learning model analyzes waste images and classifies them within seconds.</p>
          </div>
          <div className="feature-card feature-card--accent">
            <div className="feature-icon">🌍</div>
            <h3>Smart Disposal Advice</h3>
            <p>Learn how to dispose waste responsibly and reduce your environmental footprint.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>History Dashboard</h3>
            <p>Login with Google to track and review all your past waste detection scans.</p>
          </div>
        </section>

        <div className="stack-tag">Built with React · Django · Deep Learning</div>
      </div>

      <style>{`
        .home {
          background: #080808;
          min-height: 100vh;
          padding-top: 80px;
        }

        /* Hero */
        .hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 60px;
          padding: 80px 80px 100px;
          position: relative;
          overflow: hidden;
        }
        .hero-bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(74,222,128,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,222,128,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }
        .hero-glow {
          position: absolute;
          top: -200px;
          left: -200px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(74,222,128,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-content {
          position: relative;
          z-index: 1;
        }
        .hero-tag {
          display: inline-block;
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          font-weight: 700;
          color: #4ade80;
          background: rgba(74,222,128,0.08);
          border: 1px solid rgba(74,222,128,0.2);
          padding: 6px 14px;
          border-radius: 20px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 28px;
        }
        .hero-headline {
          font-family: 'Space Mono', monospace;
          font-size: 64px;
          font-weight: 700;
          color: #fff;
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin: 0 0 24px;
        }
        .hero-accent {
          color: #4ade80;
          position: relative;
        }
        .hero-quote {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: #555;
          font-style: italic;
          border-left: 2px solid #2a2a2a;
          padding-left: 16px;
          margin: 0 0 20px;
          line-height: 1.6;
        }
        .hero-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          color: #888;
          line-height: 1.7;
          max-width: 480px;
          margin: 0 0 36px;
        }
        .hero-cta-group {
          display: flex;
          gap: 14px;
          align-items: center;
          flex-wrap: wrap;
        }
        .cta-primary {
          font-family: 'Space Mono', monospace;
          font-size: 14px;
          font-weight: 700;
          background: #4ade80;
          color: #080808;
          text-decoration: none;
          padding: 14px 28px;
          border-radius: 12px;
          transition: all 0.2s ease;
          letter-spacing: 0.01em;
        }
        .cta-primary:hover {
          background: #86efac;
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(74,222,128,0.3);
        }
        .cta-secondary {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          background: #111;
          border: 1px solid #222;
          padding: 13px 22px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .cta-secondary:hover {
          background: #1a1a1a;
          border-color: #333;
          transform: translateY(-1px);
        }

        /* Hero Visual */
        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .visual-card {
          background: #111;
          border: 1px solid #222;
          border-radius: 20px;
          padding: 28px;
          width: 320px;
          box-shadow: 0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px #1a1a1a;
        }
        .visual-card-tag {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          color: #4ade80;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 14px;
          opacity: 0.7;
        }
        .visual-class {
          font-family: 'Space Mono', monospace;
          font-size: 28px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 4px;
          letter-spacing: -0.02em;
        }
        .visual-conf {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #4ade80;
          margin-bottom: 14px;
        }
        .visual-bar {
          height: 4px;
          background: #1e1e1e;
          border-radius: 2px;
          overflow: hidden;
          margin-bottom: 18px;
        }
        .visual-bar-fill {
          height: 100%;
          background: #4ade80;
          border-radius: 2px;
          animation: growBar 1.2s ease forwards;
        }
        @keyframes growBar {
          from { width: 0; }
        }
        .visual-guide {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #888;
          background: rgba(74,222,128,0.05);
          border: 1px solid rgba(74,222,128,0.1);
          border-radius: 10px;
          padding: 12px;
          line-height: 1.6;
        }

        /* Features */
        .features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          padding: 0 80px 80px;
        }
        .feature-card {
          background: #111;
          border: 1px solid #1a1a1a;
          border-radius: 20px;
          padding: 32px;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }
        .feature-card:hover {
          border-color: #333;
          transform: translateY(-4px);
        }
        .feature-card--accent {
          background: linear-gradient(135deg, #0d1f14, #111);
          border-color: rgba(74,222,128,0.15);
        }
        .feature-icon {
          font-size: 28px;
          margin-bottom: 16px;
        }
        .feature-card h3 {
          font-family: 'Space Mono', monospace;
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 10px;
          letter-spacing: -0.01em;
        }
        .feature-card p {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: #666;
          line-height: 1.7;
          margin: 0;
        }

        .stack-tag {
          text-align: center;
          padding-bottom: 40px;
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          color: #2a2a2a;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
            padding: 60px 32px 80px;
            gap: 40px;
          }
          .hero-headline { font-size: 44px; }
          .hero-visual { display: none; }
          .features {
            grid-template-columns: 1fr;
            padding: 0 32px 60px;
          }
        }
      `}</style>
    </>
  );
}

export default Home;