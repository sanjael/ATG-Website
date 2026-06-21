import React from 'react';
import { Layout, Server, Smartphone, BrainCircuit, Cloud, PenTool, Link2 } from 'lucide-react';

const techStack = [
  {
    category: 'Frontend',
    icon: <Layout size={24} color="#d4a34b" />,
    items: ['React', 'Vue.js', 'TypeScript', 'Tailwind', 'Next.js']
  },
  {
    category: 'Backend',
    icon: <Server size={24} color="#e8bd6d" />,
    items: ['Node.js', 'Python', 'PHP', 'Laravel', 'MongoDB', 'PostgreSQL', 'Redis']
  },
  {
    category: 'Mobile',
    icon: <Smartphone size={24} color="#d4a34b" />,
    items: ['Flutter', 'React Native', 'iOS', 'Android']
  },
  {
    category: 'AI/ML',
    icon: <BrainCircuit size={24} color="#e8bd6d" />,
    items: ['GPT APIs', 'TensorFlow', 'PyTorch', 'LangChain']
  },
  {
    category: 'Cloud Platforms',
    icon: <Cloud size={24} color="#d4a34b" />,
    items: ['AWS', 'Google Cloud', 'Azure', 'Digital Ocean']
  },
  {
    category: 'Development Tools',
    icon: <PenTool size={24} color="#e8bd6d" />,
    items: ['Docker', 'Kubernetes', 'CI/CD', 'Git']
  },
  {
    category: 'Third-party APIs',
    icon: <Link2 size={24} color="#d4a34b" />,
    items: ['Payment Gateways', 'Social Media', 'Maps', 'Analytics']
  }
];

const Tools = () => {
  return (
    <section id="tools" className="section">
      <div className="container">
        <div className="section-header center fade-up">
          <p className="eyebrow">Tech Stack</p>
          <h2>Powered by Tools That <span className="text-gradient">Power the Future</span></h2>
          <p className="section-subtitle" style={{ maxWidth: '700px', margin: '0 auto' }}>
            We build with the latest frameworks, languages, and hardware platforms to ensure fast, secure, and future-proof solutions.
          </p>
        </div>

        <div className="tech-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px' 
        }}>
          {techStack.map((stack, index) => (
            <div key={index} className="card fade-up" style={{ transitionDelay: `${(index % 3) * 0.1}s`, padding: '2.5rem 2rem' }}>
              <div style={{ 
                width: '50px', height: '50px', 
                background: 'rgba(212, 163, 75, 0.1)', 
                borderRadius: '12px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', 
                marginBottom: '20px',
                border: '1px solid rgba(212, 163, 75, 0.2)'
              }}>
                {stack.icon}
              </div>
              <h3 style={{ marginBottom: '20px', fontSize: '1.3rem' }}>{stack.category}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {stack.items.map((item, i) => (
                  <span key={i} style={{ 
                    padding: '6px 14px', 
                    fontSize: '0.85rem', 
                    border: '1px solid rgba(212, 163, 75, 0.3)', 
                    borderRadius: '8px', 
                    color: '#fff',
                    background: 'rgba(212, 163, 75, 0.05)',
                    fontWeight: '500'
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
