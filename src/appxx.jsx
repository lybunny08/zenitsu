import React from 'react';
import HomePage from './view/Homepage';
import './App.css';
import Navbar from './components/Navbar';
import Zenitsu from './view/Zenitsu';
import bg_zenitsu from './assets/bg-zenitsu.jfif';
import moon from './assets/videos/moon.gif';
import ThunderBreathing from './view/Thunder_breathing';
import Footer from './view/Footer';
import Relations from './view/Relations';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <div id="home" className='relative flex flex-col'>
        <HomePage />
        <img 
          src={bg_zenitsu} 
          alt="Zenitsu Pose" 
          className="w-full h-[1100px] absolute top-[280px] md:top-[580px] lg:top-[580px] left-0 opacity-10 z-10 object-cover"
        />
      </div>

      <div id='zenitsu' className='absolute flex flex-col top-[350px] md:top-[650px] lg:top-[550px] left-0 w-full z-20'>
        <Zenitsu />
            {/* <div className="absolute top-0 left-0 w-full h-full z-30">
              <ThunderBreathing />
            </div> */}
            {/* <div id="relations">
              <Relations />
            </div> */}
            {/* <Footer /> */}
      </div>
          
    </div>
  );
}

export default App;