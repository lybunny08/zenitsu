import React from 'react';
import HomePage from './view/Homepage';
import './App.css';
import Navbar from './components/Navbar';
import Zenitsu from './view/Zenitsu';
import moon from './assets/videos/moon.gif';
import ThunderBreathing from './view/Thunder_breathing';
import Relations from './view/Relations';

function App() {
  return (
    <div>
      <Navbar />
      <div id='homepage'>
       <HomePage />
      </div>
      <div id='zenitsu' className='lg:mb-[100px]'>
        <Zenitsu />
      </div>
      <div id='thunderbreathing'>
        <ThunderBreathing />
      </div>
      <div id='relations'>
        <Relations />
      </div>
    </div>
  );
}

export default App;