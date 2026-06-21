import React, { useState, useEffect, useRef } from 'react';

const StatCounter = ({ end, duration, label }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // easeOutCubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [end, duration, hasAnimated]);

  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-number">{count}{label.includes('%') || label.includes('+') ? label.replace(/[^%+]/g, '') : ''}</span>
      <span className="stat-label">{label.replace(/[%+]/g, '')}</span>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          <StatCounter end={99} duration={1600} label="Retention %" />
          <StatCounter end={120} duration={1600} label="Projects Shipped +" />
          <StatCounter end={24} duration={1600} label="Support Hours/7" />
          <StatCounter end={30} duration={1600} label="Days to Launch" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
