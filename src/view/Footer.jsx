import React from 'react';
import '../App.css';
import profile from '../assets/profile.jpg';

function Footer() {
  return (
    <div className="bg-[#DAA520] min-h-screen flex flex-col justify-end p-10">
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
  );
}

export default Footer;
