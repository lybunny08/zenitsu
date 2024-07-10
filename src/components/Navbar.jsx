// Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import playIcon from '../assets/play-icon.png';
import pauseIcon from '../assets/pause-icon.png';
import backgroundMusic from '../assets/background-music.mp3';
import katana from '../assets/katana.png';
import logo from '../assets/logo-demon-slayer.png';

function Navbar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const audioRef = useRef(new Audio(backgroundMusic));
  const audio = audioRef.current;

  useEffect(() => {
    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener('ended', handleEnded);

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
      audio.removeEventListener('ended', handleEnded);
    };
  }, [isPlaying, audio]);

  const handlePlayPause = () => {
    setIsPlaying(prevState => {
      if (prevState) {
        audio.pause();
      } else {
        audio.play();
      }
      return !prevState;
    });
  };

  const handleKatanaClick = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <div className='fixed top-0 left-0 right-0 m-6 flex items-center justify-end z-50'>
      {/* Afficher le bouton de lecture/pause seulement lorsque le menu est fermé */}
      {!isMenuOpen && (
        <div className='flex flex-row items-center pr-2'>
          <button 
            className='play-button flex items-center justify-center rounded-full bg-yellow-400 p-[0.1px]'
            onClick={handlePlayPause}
          >
            <img src={isPlaying ? pauseIcon : playIcon} alt={isPlaying ? "Pause" : "Play"} className='w-8 h-8' />
          </button>
        </div>
      )}
      {/* Afficher le bouton katana toujours, même lorsque le menu est ouvert */}
      <img src={katana} alt="katana" className='w-8 h-8 cursor-pointer z-50' onClick={handleKatanaClick} />

      {/* Menu ouvert avec effet de flou */}
      {isMenuOpen && (
        <div className="fixed inset-0 flex flex-col z-40 bg-white bg-opacity-75 backdrop-blur-md transition-transform duration-500 ease-in-out">
          <img src={logo} alt="" className='absolute m-2 w-[90px] h-[90px]' />
          <div className='flex flex-col items-end pr-8 text-[25px] pt-[100px] lg:pt-[150px] space-y-4'>
            <a href="#homepage" onClick={() => setIsMenuOpen(false)} className="text-black hover:text-yellow-500">Home</a>
            <a href="#zenitsu" onClick={() => setIsMenuOpen(false)} className="text-black hover:text-yellow-500">Zenitsu</a>
            <a href="#thunderbreathing" onClick={() => setIsMenuOpen(false)} className="text-black hover:text-yellow-500">Lightning Breath</a>
            <a href="#facts" onClick={() => setIsMenuOpen(false)} className="text-black hover:text-yellow-500">Interesting facts</a>
            {/* <a href="#arc4" onClick={() => setIsMenuOpen(false)} className="text-black hover:text-yellow-500">Hashira Training Arc</a>
            <a href="#infinite-castle" onClick={() => setIsMenuOpen(false)} className="text-black hover:text-yellow-500">Infinity Castle</a> */}
          </div>
          <div className='absolute bottom-8 text-[48px] lg:text-[95px] left-0 text-black text-lg'>
            <span>@mamitiana</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;