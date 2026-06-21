import React from 'react';
import { MessageCircle, Mail, PhoneCall } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header center fade-up">
          <p className="eyebrow">Contact Us</p>
          <h2>Let's <span className="text-gradient">Talk Business</span></h2>
          <p className="section-subtitle">
            Whether you're a business owner, a startup founder, or a student — reach out and we'll respond fast with a clear plan and honest pricing.
          </p>
        </div>

        <div className="features-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {/* WhatsApp Card */}
          <div className="card fade-up" style={{ transitionDelay: '0.1s', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div className="feature-icon-box" style={{ margin: 0 }}>
                <MessageCircle size={24} />
              </div>
              <p className="eyebrow" style={{ margin: 0, fontSize: '0.75rem' }}>Preferred</p>
            </div>
            <h3 style={{ margin: '10px 0 5px' }}>WhatsApp</h3>
            <p style={{ flexGrow: 1 }}>Instant chat with our team for immediate project discussion and quotes.</p>
            <a href="https://wa.me/916369614976" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              Open WhatsApp &rarr;
            </a>
          </div>

          {/* Email Card */}
          <div className="card fade-up" style={{ transitionDelay: '0.2s', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div className="feature-icon-box" style={{ margin: 0 }}>
                <Mail size={24} />
              </div>
              <p className="eyebrow" style={{ margin: 0, fontSize: '0.75rem' }}>Official</p>
            </div>
            <h3 style={{ margin: '10px 0 5px' }}>Email</h3>
            <p style={{ flexGrow: 1 }}>Send your requirements and attachments for a formal quotation.</p>
            <a href="mailto:atgtechzofficial@gmail.com" style={{ fontWeight: 'bold' }}>
              atgtechzofficial@gmail.com
            </a>
          </div>

          {/* Call Us Card */}
          <div className="card fade-up" style={{ transitionDelay: '0.3s', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div className="feature-icon-box" style={{ margin: 0 }}>
                <PhoneCall size={24} />
              </div>
              <p className="eyebrow" style={{ margin: 0, fontSize: '0.75rem' }}>Direct</p>
            </div>
            <h3 style={{ margin: '10px 0 5px' }}>Call Us</h3>
            <p style={{ flexGrow: 1 }}>Speak directly for urgent timelines and immediate project planning.</p>
            <a href="tel:+916369614976" style={{ fontWeight: 'bold' }}>
              +91 63696 14976
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
