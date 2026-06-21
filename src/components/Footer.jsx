import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="logo-link" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', background: '#0a0a0a', border: '1px solid rgba(212, 163, 75, 0.3)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/logo.png" alt="ATG Techz Logo" style={{ width: '120%', height: '120%', objectFit: 'cover', objectPosition: 'center 15%' }} />
              </div>
              <span className="logo-text" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#fff', letterSpacing: '1px' }}>
                ATG <span style={{ color: 'var(--accent-primary)' }}>Techz</span>
              </span>
            </a>
            <p style={{ marginBottom: '20px' }}>Building the future of web technology and AI architectures for forward-thinking enterprises.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="mailto:atgtechzofficial@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)' }}>
                <Mail size={18} color="var(--accent-primary)" />
                atgtechzofficial@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/atg-techz-10162b418/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                ATG Techz LinkedIn
              </a>
              <a href="https://www.instagram.com/atg_techz_?igsh=MTg3aHdmOG5xMGN1dQ==" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                ATG Techz Instagram
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#process">Development Process</a></li>
              <li><a href="#team">Meet the Team</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="footer-heading">Connect</h4>
            <ul className="footer-links">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ATG Techz Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
