import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      style={{
        padding: 'var(--space-lg) 0',
        backgroundColor: 'var(--background-primary)',
        borderTop: '1px solid var(--border-primary)',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
      }}
    >
      <div 
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
        }}
      >
        {/* Top half */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
          }}
          className="footer-top-row"
        >
          {/* Logo and positioning */}
          <div style={{ textAlign: 'center' }}>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.35rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                margin: '0 0 4px',
                letterSpacing: '1.5px'
              }}
            >
              MANI
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', margin: '0 0 8px', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 600 }}>
              Full Stack Developer & AI/ML Engineer
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, maxWidth: '400px', fontWeight: 300 }}>
              Building intelligent systems, custom transformers, and scalable MERN applications.
            </p>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="footer-link-hover">Home</a>
              <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="footer-link-hover">About</a>
              <a href="#work" onClick={(e) => handleLinkClick(e, 'work')} className="footer-link-hover">Work</a>
              <a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')} className="footer-link-hover">Skills</a>
              <a href="#journey" onClick={(e) => handleLinkClick(e, 'journey')} className="footer-link-hover">Journey</a>
              <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="footer-link-hover">Contact</a>
            </div>
            <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap', justifyContent: 'center', fontSize: '0.85rem' }}>
              <a href="tel:+917989882191" className="footer-link-hover">📞 +91 7989882191</a>
              <a href="https://wa.me/917989882191" target="_blank" rel="noopener noreferrer" style={{ color: '#4ade80' }} className="footer-link-hover">💬 WhatsApp</a>
              <a href="https://github.com/Manindra-babu" target="_blank" rel="noopener noreferrer" className="footer-link-hover">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/manindra-chowdhary-198747333/" target="_blank" rel="noopener noreferrer" className="footer-link-hover">LinkedIn ↗</a>
              <a href="https://leetcode.com/u/Mani_359/" target="_blank" rel="noopener noreferrer" className="footer-link-hover">LeetCode ↗</a>
              <a href="/manindra_resume.pdf" download="Chappidi_Manindra_Babu_Resume.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-secondary)' }} className="footer-link-hover">Resume (PDF) 📄</a>
            </div>
          </div>
        </div>

        {/* Bottom half */}
        <div
          style={{
            borderTop: '1px solid rgba(0, 217, 255, 0.08)',
            paddingTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
            fontSize: '0.8rem',
            color: 'var(--text-muted)'
          }}
          className="footer-bottom-row"
        >
          <div>
            &copy; {currentYear} Mani (Chappidi Venkata Manindra Babu). All rights reserved.
          </div>
          <div>
            Designed with intention. Engineered for intelligence & performance.
          </div>
        </div>

      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-top-row {
            flex-direction: row !important;
            text-align: left !important;
          }
          .footer-top-row > div {
            text-align: left !important;
          }
          .footer-bottom-row {
            flex-direction: row !important;
          }
        }
        .footer-link-hover:hover {
          color: var(--accent-primary) !important;
        }
      `}</style>
    </footer>
  );
}
