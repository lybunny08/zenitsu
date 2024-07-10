import React, { useState, useEffect } from 'react';
import HomePage from './view/Homepage';
import './App.css';
import Navbar from './components/Navbar';
import Zenitsu from './view/Zenitsu';
import ThunderBreathing from './view/Thunder_breathing';
import Facts from './view/Facts';
import Footer from './view/Footer';
import SplashScreen from './components/Spashscreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // 0.8 secondes

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <div>
      <Navbar />
      <div id='homepage'>
        <HomePage />
      </div>
      <div id='zenitsu'>
        <Zenitsu />
      </div>
      <div id='thunderbreathing'>
        <ThunderBreathing />
      </div>
      <div id='facts'>
        <Facts />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;