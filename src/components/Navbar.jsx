import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
        
        {/* Restored the previous logo image structure, now using Link */}
        <Link to="/" className="logo-link" style={{ display: 'flex', alignItems: 'center', gap: '15px' }} onClick={() => setIsOpen(false)}>
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
        </Link>
        
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
          <li className="nav-item"><NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink></li>
          <li className="nav-item"><NavLink to="/services" onClick={() => setIsOpen(false)}>Services</NavLink></li>
          <li className="nav-item"><NavLink to="/process" onClick={() => setIsOpen(false)}>Process</NavLink></li>
          <li className="nav-item"><NavLink to="/tech-stack" onClick={() => setIsOpen(false)}>Tech Stack</NavLink></li>
          <li className="nav-item"><NavLink to="/team" onClick={() => setIsOpen(false)}>Team</NavLink></li>
          <li className="nav-item"><NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
