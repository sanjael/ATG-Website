import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        
        {/* Restored the previous logo image structure */}
        <a href="#home" className="logo-link" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', background: '#0a0a0a', border: '1px solid rgba(200, 160, 74, 0.3)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img 
              src="/logo.png" 
              alt="ATG Techz Logo" 
              style={{ width: '120%', height: '120%', objectFit: 'cover', objectPosition: 'center 15%' }} 
            />
          </div>
          <span className="logo-text" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', letterSpacing: '1px' }}>
            ATG <span style={{ color: '#c8a04a' }}>Techz</span>
          </span>
        </a>
        
        <button 
          className="menu-icon" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          style={{ background: 'transparent', border: 'none', padding: 0, outline: 'none' }}
        >
          {isOpen ? <X size={28} color="var(--accent-primary)" /> : <Menu size={28} color="var(--accent-primary)" />}
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item"><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li className="nav-item"><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
          <li className="nav-item"><a href="#process" onClick={() => setIsOpen(false)}>Process</a></li>
          <li className="nav-item"><a href="#tools" onClick={() => setIsOpen(false)}>Tech Stack</a></li>
          <li className="nav-item"><a href="#team" onClick={() => setIsOpen(false)}>Team</a></li>
          <li className="nav-item"><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
