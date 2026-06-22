import React from 'react';
import { Link } from 'react-router-dom';
import useTypewriter from '../hooks/useTypewriter';
import { ArrowRight } from 'lucide-react';

const TypewriterText = () => {
  const phrases = [
    "building the future of web tech.",
    "shipping cosmic digital products.",
    "powering AI-driven solutions."
  ];
  const typeText = useTypewriter(phrases, 50, 28, 1700);
  return (
    <>
      {typeText}
      <span className="typewriter-cursor"></span>
    </>
  );
};

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* Drifting Glow Orbs */}
      <div className="hero-glow-orbs">
        <div className="glow-orb orb-blue"></div>
        <div className="glow-orb orb-purple"></div>
        <div className="glow-orb orb-teal"></div>
      </div>

      <div className="container">
        {/* Pulsing Logo Mark */}
        <div className="hero-logo-pulse">
          <div className="pulse-ring-outer">
            <div className="pulse-dot"></div>
          </div>
          <div className="pulse-ring-inner" style={{ overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#0a0a0a' }}>
            <img 
              src="/logo.png" 
              alt="ATG Techz Logo" 
              style={{ width: '120%', height: '120%', objectFit: 'cover', objectPosition: 'center 15%' }} 
            />
          </div>
        </div>

        {/* Eyebrow */}
        <p className="hero-eyebrow eyebrow">ATG // Software Technology</p>

        {/* Typewriter Headline */}
        <h1 className="hero-title">
          We are <br/>
          <TypewriterText />
        </h1>

        <p className="hero-subtitle">
          ATG Techz delivers cutting-edge web development, AI architectures, and scalable digital platforms engineered for the next era of tech.
        </p>

        <div className="hero-cta">
          <Link to="/services" className="btn btn-primary">
            Explore Services <ArrowRight size={18} />
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Let's Talk
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
