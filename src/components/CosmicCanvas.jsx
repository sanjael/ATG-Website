import React, { useEffect, useRef } from 'react';

const CosmicCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let stars = [];
    let meteors = [];

    // Setup Canvas with max DPR of 1.5 for performance
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let isMobile = window.innerWidth < 768;

    const resizeCanvas = () => {
      isMobile = window.innerWidth < 768;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      init();
    };

    // Configuration
    const baseDensity = 8500; 
    const colors = ['#d4a34b', '#e8bd6d', '#FFFFFF'];

    class Star {
      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 1.5;
        this.baseAlpha = Math.random() * 0.5 + 0.1;
        this.blinkSpeed = Math.random() * 0.02 + 0.005;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.angle = Math.random() * Math.PI * 2;
      }

      draw() {
        // Twinkling effect
        this.angle += this.blinkSpeed;
        const alpha = this.baseAlpha + Math.sin(this.angle) * 0.3;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = Math.max(0, alpha);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    class Meteor {
      constructor() {
        this.reset();
        this.delay = Math.random() * 200;
      }

      reset() {
        this.x = Math.random() * window.innerWidth * 1.5;
        this.y = -50;
        this.size = Math.random() * 2 + 1;
        this.speed = Math.random() * 15 + 10;
        this.angle = (Math.PI / 4) + (Math.random() * 0.2 - 0.1); // ~45 degrees downward
        this.length = Math.random() * 100 + 50;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.delay = Math.random() * (isMobile ? 800 : 300) + 100; // Less frequent on mobile
      }

      update() {
        if (this.delay > 0) {
          this.delay--;
          return;
        }

        this.x -= Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        if (this.x < -100 || this.y > window.innerHeight + 100) {
          this.reset();
        }
      }

      draw() {
        if (this.delay > 0) return;

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(
          this.x + Math.cos(this.angle) * this.length,
          this.y - Math.sin(this.angle) * this.length
        );
        
        const gradient = ctx.createLinearGradient(
          this.x, this.y,
          this.x + Math.cos(this.angle) * this.length,
          this.y - Math.sin(this.angle) * this.length
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'transparent');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = this.size;
        ctx.lineCap = 'round';
        ctx.stroke();
        ctx.restore();
      }
    }

    const init = () => {
      stars.length = 0;
      meteors.length = 0;

      const area = window.innerWidth * window.innerHeight;
      const effectiveDensity = isMobile ? baseDensity * 1.5 : baseDensity; // Fewer stars on mobile
      const numStars = Math.floor(area / effectiveDensity);

      for (let i = 0; i < numStars; i++) {
        stars.push(new Star());
      }

      const numMeteors = isMobile ? 1 : 3;
      for (let i = 0; i < numMeteors; i++) {
        meteors.push(new Meteor());
      }
    };

    let lastTime = 0;
    const render = (time) => {
      // Throttle to ~30fps for huge Lighthouse performance boost
      if (time - lastTime < 33) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }
      lastTime = time;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      stars.forEach(star => star.draw());
      
      meteors.forEach(meteor => {
        meteor.update();
        meteor.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="cosmic-canvas-container" />;
};

export default CosmicCanvas;
