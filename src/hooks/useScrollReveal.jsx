import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollReveal = (dependency) => {
  const location = useLocation();

  useEffect(() => {
    // Only run if the dependency (e.g. showSplash) allows it
    if (dependency) return;

    // Small delay to ensure the DOM has painted all elements
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );

      const elements = document.querySelectorAll('.fade-up');
      elements.forEach(el => observer.observe(el));

      return () => {
        elements.forEach(el => observer.unobserve(el));
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [dependency, location.pathname]);
};

export default useScrollReveal;
