import React from 'react';
import HomePage from './view/Homepage';
import './App.css';
import Navbar from './components/Navbar';
import Zenitsu from './view/Zenitsu';
import bg_zenitsu from './assets/bg-zenitsu.jfif';
import moon from './assets/videos/moon.gif';
import ThunderBreathing from './view/Thunder_breathing';
import Footer from './view/Footer';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <div id="home" className='relative flex flex-col'>
        <HomePage />
        <img 
          src={bg_zenitsu} 
          alt="Zenitsu Pose" 
          className="w-full h-[1100px] absolute top-[280px] md:top-[580px] lg:top-[600px] left-0 opacity-10 z-10 object-cover"
        />
        <div id='zenitsu' className='absolute flex flex-col top-[350px] md:top-[680px] lg:top-[550px] left-0 w-full z-20'>
          <Zenitsu />
          <div id='thunderbreathing' className="relative lg:top-[100px] ">
            <img src={moon} alt="Moon" className='w-full h-screen lg:h-[700px] '/>
            <div className="absolute top-0 left-0 w-full h-full z-30">
              <ThunderBreathing />
            </div>
            {/* <Footer /> */}
          </div>
        </div>
          
      </div>
    </div>
  );
}

export default App;