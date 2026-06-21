import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = ({ onFinish }) => {
  const [phase, setPhase] = useState('intro'); // 'intro' -> 'door-open' -> 'exit'

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase('door-open'), 3000);
    const timer2 = setTimeout(() => onFinish(), 4500);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {phase !== 'exit' ? null : null}
      <motion.div
        className="splash-screen-container"
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 9999,
          display: phase === 'exit' ? 'none' : 'block',
          overflow: 'hidden'
        }}
      >
        {/* Left Door */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: phase === 'door-open' ? '-100%' : 0 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '50%', height: '100%',
            background: '#040404',
            borderRight: '1px solid rgba(200, 160, 74, 0.3)',
            zIndex: 1
          }}
        />

        {/* Right Door */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: phase === 'door-open' ? '100%' : 0 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: 'absolute',
            top: 0, right: 0,
            width: '50%', height: '100%',
            background: '#040404',
            borderLeft: '1px solid rgba(200, 160, 74, 0.3)',
            zIndex: 1
          }}
        />

        {/* Center Content (Logo) */}
        <motion.div
          initial={{ opacity: 1, scale: 0.8 }}
          animate={{
            scale: phase === 'door-open' ? 1.5 : 1,
            opacity: phase === 'door-open' ? 0 : 1
          }}
          transition={{ duration: phase === 'door-open' ? 0.8 : 2, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2,
            pointerEvents: 'none'
          }}
        >
          {/* Logo container with float effect */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: 'relative' }}
          >
            {/* Massive Glowing aura behind logo */}
            <motion.div
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [0.9, 1.1, 0.9]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%', height: '100%',
                background: 'radial-gradient(circle, rgba(200, 160, 74, 0.4) 0%, transparent 70%)',
                filter: 'blur(30px)',
                zIndex: -1
              }}
            />

            <img
              src="/splash.png"
              alt="ATG Techz Logo"
              style={{
                width: '100%',
                maxWidth: '500px',
                height: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0px 0px 15px rgba(0,0,0,0.8))'
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
