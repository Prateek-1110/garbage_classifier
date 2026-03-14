function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-brand">Garbage AI</span>
        <span className="footer-divider">·</span>
        <span className="footer-copy">Using Deep Learning to make the planet cleaner © 2026</span>
      </div>

      <style>{`
        .footer {
          background: #0a0a0a;
          border-top: 1px solid #1e1e1e;
          padding: 24px 40px;
          margin-top: auto;
        }
        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
        }
        .footer-brand {
          color: #4ade80;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-size: 12px;
        }
        .footer-divider {
          color: #333;
        }
        .footer-copy {
          color: #555;
          font-size: 13px;
        }
      `}</style>
    </footer>
  );
}

export default Footer;