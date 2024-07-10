import React from 'react'
import '../App.css'
import zenitsu_group from '../assets/zenitsu_group.jpg';
import world from '../assets/world.gif';
import video from '../assets/videos/how zenitsu hair turn into yellow.mp4';
import pose from '../assets/pose as partisant.webp';
import zenitsu from '../assets/zenitsu2.jfif'

function Zenitsu() {
  return (
    <div className='relative flex flex-col min-h-screen px-10 pb-10 overflow-hidden'>
      {/* Background image with low opacity */}
      <div 
        className='absolute inset-0 z-0'
        style={{ 
          backgroundImage: `url(${zenitsu})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.1, // Very low opacity for background
        }}
      ></div>

      {/* Content with full opacity */}
      <div className='relative z-10'>
        <h1 className='font-elektronik text-center items-center pt-[100px] justify-center lg:text-[80px] mb-4'>Zenitsu Agatsuma</h1>
        <div className='flex flex-col lg:flex-row lg:space-x-10'>
          <div className='flex flex-col mb-4'>
            <div className='text-left text-[12px] lg:text-[15px] lg:max-w-lg'>
              <p>Zenitsu Agatsuma (我あが妻つま 善ぜん逸いつ Agatsuma Zen'itsu)
                is one of the main characters of Demon Slayer: Kimetsu no Yaiba
                and along with Inosuke Hashibira, a travelling companion of Tanjiro Kamado and Nezuko Kamado.
                He is also a Demon Slayer in the Demon Slayer Corps.</p>
            </div>
            <img src={zenitsu_group} alt="" className='lg:w-[500px] h-auto pt-4' />
          </div>

          <div className='flex flex-col lg:justify-end'>
            <div className='text-left text-[12px] lg:text-[15px] lg:max-w-lg'>
              <p>Some time recently he got to be a Evil presence Slayer, 
              Zenitsu`s hair was initially dark, but it turned the color it is as of now when 
              he was struck by lightning amid his preparing.</p>
            </div>
            <div className='relative flex flex-row space-x-1'>
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className='w-[185px] lg:w-[370px] h-auto mt-4 border border-black'
              ></video>
              <img
                src={world}
                alt="Zenitsu using Thunderclap and Flash"
                className="w-[185px] lg:w-[370px] h-auto mt-4 border border-black"
              />
              {/* Image Zenitsu Pose positionnée à côté de world */}
              <img src={pose} alt="Zenitsu Pose" className="absolute -right-[80px] -bottom-10 lg:bottom-0 md:bottom-0 h-[300px] md:h-[500px] lg:h-[600px] lg:h-[570px] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Zenitsu;