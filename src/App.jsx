import React from 'react';
import HomePage from './view/Homepage';
import './App.css';
import Navbar from './components/Navbar';
import Zenitsu from './view/Zenitsu';
import ThunderBreathing from './view/Thunder_breathing';
import Facts from './view/Facts';
import Footer from './view/Footer';

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