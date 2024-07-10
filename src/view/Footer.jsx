import React from 'react';
import '../App.css';
import profile from '../assets/profile.jpg';

function Footer() {
  // Fonction pour générer les triangles aléatoires
  const generateRandomTriangles = () => {
    const triangles = [];
    const numTriangles = 120; // Nombre de triangles à générer

    for (let i = 0; i < numTriangles; i++) {
      const size = Math.random() * 30 + 5; // Taille aléatoire entre 5 et 35px
      const top = Math.random() * Math.random() * 50; // Position verticale plus aléatoire
      const left = Math.random() * 100; // Position horizontale aléatoire
      const rotation = Math.random() * 360; // Rotation aléatoire
      const opacity = Math.random() * 0.15 + 0.05; // Opacité aléatoire entre 0.05 et 0.2

      triangles.push(
        <div
          key={i}
          style={{
            position: 'absolute',
            top: `${top}%`,
            left: `${left}%`,
            width: '0',
            height: '0',
            borderLeft: `${size / 2}px solid transparent`,
            borderRight: `${size / 2}px solid transparent`,
            borderBottom: `${size}px solid rgba(255, 255, 255, ${opacity})`,
            transform: `rotate(${rotation}deg)`,
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
      );
    }

    return triangles;
  };

  return (
    <div className="bg-[#FFA500] min-h-screen flex flex-col justify-end p-10 relative overflow-hidden">
      {/* Arrière-plan avec triangles aléatoires */}
      <div className='absolute inset-0 overflow-hidden'>
        {generateRandomTriangles()}
      </div>

      {/* Contenu principal */}
      <div className='relative z-10'>
        <div className='text-right'>
          <p>This web is created on Reactjs and GSAP for the animation;</p>
          <p>and there is my contact if you wanna build a website</p>
        </div>
        <div className='flex flex-row justify-between items-end mb-2'>
          <div className='flex items-end'>
            <img src={profile} alt="profile" className='border border-white rounded-full w-[200px] h-[200px]' />
            <div className='flex flex-col text-left text-4xl ml-4'>
              <p>Mamitiana</p>
              <p>HAJANIAINA</p>
            </div>
          </div>
          <div className='flex justify-end space-x-4 text-2xl'>
            <a href="https://www.linkedin.com/in/mamitiana-hajaniaina-b0b425270/" target="_blank" rel="noopener noreferrer" className="text-inherit no-underline">LinkedIn</a>
            <a href="https://www.facebook.com/mamtiana.lydien/" target="_blank" rel="noopener noreferrer" className="text-inherit no-underline">Facebook</a>
          </div>
        </div>
        <div className='text-6xl lg:text-[210px] text-center'>@mamitiana</div>
      </div>
    </div>
  );
}

export default Footer;