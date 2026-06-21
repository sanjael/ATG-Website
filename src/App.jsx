import React, { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import CosmicCanvas from './components/CosmicCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Tools from './components/Tools';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollReveal from './hooks/useScrollReveal';
import './App.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  
  // Call the scroll reveal hook, passing showSplash so it waits for the splash screen to finish
  useScrollReveal(showSplash);

  const handleSplashFinish = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      </AnimatePresence>

      {!showSplash && (
        <div className="App">
          <CosmicCanvas />
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Process />
          <Tools />
          <Team />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
