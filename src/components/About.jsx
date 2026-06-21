import React from 'react';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header center fade-up">
          <p className="eyebrow">Our Mission</p>
          <h2>About <span className="text-gradient">ATG Techz</span></h2>
          <p className="section-subtitle">
            We are a dynamic technology agency focused on delivering high-performance digital products and services.
          </p>
        </div>

        <div className="features-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <div className="card fade-up" style={{ transitionDelay: '0.1s', textAlign: 'center' }}>
            <div className="feature-icon-box" style={{ margin: '0 auto 24px' }}>
              <Target size={24} />
            </div>
            <h3>Our Mission</h3>
            <p>To empower businesses through innovative technology solutions that drive growth, efficiency, and exceptional user experiences.</p>
          </div>

          <div className="card fade-up" style={{ transitionDelay: '0.2s', textAlign: 'center' }}>
            <div className="feature-icon-box" style={{ margin: '0 auto 24px' }}>
              <Lightbulb size={24} />
            </div>
            <h3>Our Vision</h3>
            <p>To be the leading catalyst for digital transformation, setting new standards in web development and artificial intelligence.</p>
          </div>

          <div className="card fade-up" style={{ transitionDelay: '0.3s', textAlign: 'center' }}>
            <div className="feature-icon-box" style={{ margin: '0 auto 24px' }}>
              <TrendingUp size={24} />
            </div>
            <h3>Our Value</h3>
            <p>We blend creativity with technical excellence, ensuring every project we undertake is scalable, secure, and visually stunning.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
