import React from 'react';

const teamMembers = [
  {
    initials: 'SR',
    name: 'Sanjael Raja M',
    role: 'Founder & Full-Stack Developer'
  },
];

const Team = () => {
  return (
    <section id="team" className="section">
      <div className="container">
        <div className="section-header center fade-up">
          <p className="eyebrow">The People</p>
          <h2>Meet Our Founder</h2>
          <p className="section-subtitle">A collective of engineers, designers, and strategists passionate about technology.</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="card team-card fade-up" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="team-avatar">{member.initials}</div>
              <h3 style={{ marginBottom: '8px' }}>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              
              <a 
                href="https://sanjael.github.io/Portfolio/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn"
                style={{ 
                  marginTop: '25px', 
                  padding: '8px 24px', 
                  fontSize: '0.85rem', 
                  border: '1px solid rgba(212, 163, 75, 0.4)', 
                  color: 'var(--accent-primary)',
                  background: 'transparent'
                }}
              >
                View Portfolio &rarr;
              </a>
            </div>
          ))}
        </div>

        {/* CTA Banner integrated near the bottom as per prompt */}
        <div className="cta-banner fade-up" style={{ transitionDelay: '0.3s' }}>
          <h2>Ready to launch your next big idea?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 30px' }}>
            Let's discuss how we can partner to build scalable, high-performance digital solutions for your business.
          </p>
          <a href="#contact" className="btn btn-primary">
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
