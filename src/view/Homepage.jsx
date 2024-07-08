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
      tl.from(['#zen', "#itsu"], {
        opacity: 0,
        y: "+=10",
        delay:0.5,
        stagger: 0.8,
      });
    }, comp);

    return () => ctx.revert();
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="homepage relative flex-row h-screen w-full" ref={comp}>
      <img 
        src={logo} 
        alt="Logo" 
        className="absolute m-2 w-[50px] h-[50px] sm:w-[90px] sm:h-[90px] z-10" 
      />

      <div className="flex-1 bg-black flex pt-[80px] min-h-[50vh] md:min-h-screen">
        <h1 id='zen' className="font-electrical text-yellow-400 text-4xl pl-4 md:text-6xl lg:text-[120px]">ZEN</h1>
      </div>

      <img 
        src={zenitsu_bg} 
        alt="Zenitsu Background" 
        className="parallax-bg absolute top-0 left-0 w-full h-full object-cover z-10"
      />

      <div className="flex-1 bg-yellow-400 flex pt-[80px] justify-end min-h-[50vh] md:min-h-screen">
        <h1 id='itsu' className="font-electrical text-black text-4xl pr-4 md:text-6xl lg:text-[120px]">ITSU</h1>
      </div>
    </div>
  );
}

export default HomePage;