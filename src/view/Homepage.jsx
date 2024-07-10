// HomePage.jsx
import React, { useRef, useEffect } from 'react';
import zenitsu_bg from '../assets/zenitsu-bg.png';
import logo from '../assets/logo-demon-slayer.png';
import '../App.css';
import gsap from 'gsap';

function HomePage() {
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(['#z','#e','#n','#i','#t', '#s', "#u"], {
        opacity: 0,
        y: "+=10",
        delay:0.2,
        stagger: 0.1,
      });
    }, comp);

    return () => ctx.revert();
  }, []); 

  return (
    <div className="homepage relative flex min-h-screen" ref={comp}>
      <img 
        src={logo} 
        alt="Logo" 
        className="absolute m-2 w-[50px] h-[50px] sm:w-[90px] sm:h-[90px] z-10" 
      />

      <div className="flex-1 bg-black flex lg:pt-[80px] min-h-[50vh] min-h-screen">
        <div id='zen' className="flex flex-row font-electrical text-yellow-400 text-5xl pl-4 md:text-6xl lg:text-[120px]">
          <p id='z'>Z</p>
          <p id='e'>E</p>
          <p id='n'>N</p>
        </div>
      </div>

      <img 
        src={zenitsu_bg} 
        alt="Zenitsu Background" 
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
      />

      <div className="flex-1 bg-yellow-400 flex justify-center lg:pt-[80px] lg:justify-end min-h-screen">
        <div className="flex flex-row font-electrical text-black text-5xl pl-8 lg:pr-4 md:text-6xl lg:text-[120px]">
          <p id='i'>I</p>
          <p id='t'>T</p>
          <p id='s'>S</p>
          <p id='u'>U</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
