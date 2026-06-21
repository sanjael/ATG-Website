import React from 'react';

const processSteps = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    description: 'We dive deep into your business goals, target audience, and technical requirements to define a solid roadmap.'
  },
  {
    num: '02',
    title: 'UX/UI Design',
    description: 'Crafting intuitive user journeys and premium visual designs that align with your brand identity.'
  },
  {
    num: '03',
    title: 'Architecture Setup',
    description: 'Selecting the right tech stack and designing scalable database and cloud infrastructure.'
  },
  {
    num: '04',
    title: 'Agile Development',
    description: 'Iterative coding with continuous integration, ensuring you see progress at every sprint.'
  },
  {
    num: '05',
    title: 'QA & Testing',
    description: 'Rigorous automated and manual testing to guarantee security, performance, and reliability.'
  },
  {
    num: '06',
    title: 'Deployment & Support',
    description: 'Smooth launch followed by ongoing maintenance, monitoring, and scaling as you grow.'
  }
];

const Process = () => {
  return (
    <section id="process" className="section">
      <div className="container">
        <div className="section-header center fade-up">
          <p className="eyebrow">Methodology</p>
          <h2>Development Process</h2>
          <p className="section-subtitle">A transparent, sequence-driven approach from concept to deployment.</p>
        </div>

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <div key={index} className="card fade-up" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="process-header">
                <span className="process-num">{step.num}</span>
                <h3>{step.title}</h3>
              </div>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
