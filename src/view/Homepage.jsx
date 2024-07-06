// HomePage.jsx
import React from 'react';
import zenitsu_bg from '../assets/zenitsu-bg.png';
import logo from '../assets/logo-demon-slayer.png';
import '../App.css';


function HomePage() {
  return (
    
    <div className="homepage relative 2xl:xl:lg:sm:md:flex-row h-screen w-full">
      {/* Bandeau de texte en haut */}
      <img src={logo} alt="Logo" className='absolute m-2 w-[90px] h-[90px] z-10' />

      {/* Partie gauche */}
      <div className="flex-1 bg-black flex pt-[80px] min-h-[50vh] md:min-h-screen">
        <h1 className="font-electrical text-yellow-400 text-4xl pl-4 md:text-6xl lg:text-[120px]">ZEN</h1>
      </div>

      {/* Image bg Zenitsu */}
      <img 
        src={zenitsu_bg} 
        alt="Zenitsu Background" 
        className="parallax-bg absolute top-0 left-0 w-full h-full object-cover z-10"
      />

      {/* Partie droite */}
      <div className="flex-1 bg-yellow-400 flex pt-[80px] justify-end min-h-[50vh] md:min-h-screen">
        <h1 className="font-electrical text-black text-4xl pr-4 md:text-6xl lg:text-[120px]">ITSU</h1>
      </div>
      {/* <Zentsu /> */}
    </div>
    
  );
}

export default HomePage;
