import React from 'react';
import { Cpu, Network, Layout, Smartphone, Layers, Cloud, BarChart, Terminal, Zap } from 'lucide-react';

const services = [
  {
    eyebrow: 'Intelligent Systems',
    icon: <Cpu size={24} />,
    title: 'AI Development',
    description: 'Production-ready AI solutions — computer vision, NLP, and autonomous agents built for real business outcomes.'
  },
  {
    eyebrow: 'Predictive Intelligence',
    icon: <Network size={24} />,
    title: 'Machine Learning',
    description: 'Custom ML models for prediction, classification, and anomaly detection. From data prep to model deployment.'
  },
  {
    eyebrow: 'Modern React UI',
    icon: <Layout size={24} />,
    title: 'Web Development',
    description: 'Fast, responsive web applications with React. Landing pages, dashboards, portals, and complex web apps.'
  },
  {
    eyebrow: 'Cross-Platform Apps',
    icon: <Smartphone size={24} />,
    title: 'Mobile App Development',
    description: 'Native-quality mobile apps for iOS and Android with seamless backend integration.'
  },
  {
    eyebrow: 'Scalable Products',
    icon: <Layers size={24} />,
    title: 'SaaS Development',
    description: 'End-to-end SaaS product development — multi-tenant architecture, subscriptions, and cloud-ready deployment.'
  },
  {
    eyebrow: 'AWS & Cloud Infra',
    icon: <Cloud size={24} />,
    title: 'Cloud Solutions',
    description: 'Deploy, scale and secure your applications. CI/CD pipelines, Docker containers, and cloud orchestration.'
  },
  {
    eyebrow: 'Insight-Driven Views',
    icon: <BarChart size={24} />,
    title: 'Data Analytics',
    description: 'Interactive dashboards and analytics platforms. Turn raw data into actionable business insights.'
  },
  {
    eyebrow: 'Tailored Solutions',
    icon: <Terminal size={24} />,
    title: 'Custom Software',
    description: 'Bespoke software for your workflow — ERP systems, inventory management, CRM, and automation tools.'
  },
  {
    eyebrow: 'Business Modernization',
    icon: <Zap size={24} />,
    title: 'Digital Transformation',
    description: 'Migrate legacy systems, automate processes, and integrate modern tech stacks to accelerate growth.'
  }
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header center fade-up">
          <p className="eyebrow">Services</p>
          <h2>What We <span className="text-gradient">Build For You</span></h2>
          <p className="section-subtitle">
            End-to-end technology services — from AI model development to cloud deployment. Every project delivered with quality, speed, and clarity.
          </p>
        </div>

        <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {services.map((service, index) => (
            <div key={index} className="card fade-up" style={{ transitionDelay: `${(index % 3) * 0.1}s`, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                <div className="feature-icon-box" style={{ margin: 0 }}>
                  {service.icon}
                </div>
                <p className="eyebrow" style={{ margin: 0, fontSize: '0.75rem' }}>{service.eyebrow}</p>
              </div>
              <h3 style={{ marginBottom: '10px' }}>{service.title}</h3>
              <p style={{ flexGrow: 1 }}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
