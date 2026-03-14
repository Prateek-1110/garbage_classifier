import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { isLoggedIn, loginWithGoogle, logout } from "../utils/auth";

function Navbar() {
  const [logged, setLogged] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLogged(isLoggedIn());
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">♻</span>
          <span className="logo-text">Garbage<span className="logo-accent">AI</span></span>
        </Link>

        <div className="navbar-links">
          {logged ? (
            <>
              <Link to="/" className={`nav-link ${isActive("/") ? "nav-link--active" : ""}`}>Home</Link>
              <Link to="/history" className={`nav-link ${isActive("/history") ? "nav-link--active" : ""}`}>History</Link>
              <button onClick={logout} className="btn-logout">
                <span>Logout</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
              </button>
            </>
          ) : (
            <>
              <button 
  type="button" 
  onClick={(e) => {
    e.preventDefault();
    loginWithGoogle();
  }} 
  className="btn-google"
>
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
  Login with Google
</button>
            </>
          )}
        </div>
      </nav>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 48px;
          background: transparent;
          transition: all 0.3s ease;
        }
        .navbar--scrolled {
          background: rgba(8, 8, 8, 0.95);
          backdrop-filter: blur(20px);
          padding: 14px 48px;
          border-bottom: 1px solid #1a1a1a;
          box-shadow: 0 4px 30px rgba(0,0,0,0.5);
        }
        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          font-family: 'Space Mono', monospace;
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.02em;
        }
        .logo-icon {
          font-size: 22px;
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .logo-accent {
          color: #4ade80;
        }
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #888;
          text-decoration: none;
          padding: 8px 16px;
          border-radius: 8px;
          transition: all 0.2s ease;
          letter-spacing: 0.02em;
        }
        .nav-link:hover {
          color: #fff;
          background: rgba(255,255,255,0.06);
        }
        .nav-link--active {
          color: #4ade80;
          background: rgba(74, 222, 128, 0.08);
        }
        .btn-google {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #0a0a0a;
          background: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
          letter-spacing: 0.01em;
        }
        .btn-google:hover {
          background: #f0fdf4;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(255,255,255,0.15);
        }
        .btn-logout {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #f87171;
          background: rgba(248, 113, 113, 0.08);
          border: 1px solid rgba(248, 113, 113, 0.2);
          padding: 8px 16px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-logout:hover {
          background: rgba(248, 113, 113, 0.15);
          border-color: rgba(248, 113, 113, 0.4);
        }
      `}</style>
    </>
  );
}

export default Navbar;