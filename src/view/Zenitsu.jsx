import React from 'react';
import pose from '../assets/pose as partisant.webp';
import video from '../assets/videos/how zenitsu hair turn into yellow.mp4'
import zenitsu_group from '../assets/zenitsu_group.jpg';
import world from '../assets/world.gif';
import bg_zenitsu from '../assets/bg-zenitsu.jfif';
import '../App.css';


function Zenitsu() {

  return (
    <div className="relative flex flex-col h-screen lg:pt-[150px] "
    // style={{ backgroundImage: `url(${bg_zenitsu})`,
    //         backgroundSize: 'cover', // or 'contain' depending on your need
    //         backgroundPosition: 'center', // adjust as needed
    //         backgroundRepeat: 'no-repeat',
    //         opacity:0.8,
    //         height: '120vh', }}
             >

      {/* Contenu au-dessus de l'image de fond */}
      <div className="relative flex flex-col text-center">
        <span className="font-elektronik text-4xl lg:text-[80px] mb-4">Zenitsu Agatsuma</span>
        <div className='flex flex-row pt-10 space-x-7'>
            <div className="text-[15px] lg:max-w-lg text-left pl-4">
                <p>Zenitsu Agatsuma (我あが妻つま 善ぜん逸いつ Agatsuma Zen'itsu)</p>
                <p>is one of the main characters of Demon Slayer: Kimetsu no Yaiba</p>
                <p>and along with Inosuke Hashibira, a travelling companion of Tanjiro Kamado and Nezuko Kamado.
                He is also a Demon Slayer in the Demon Slayer Corps.</p>
                <img src={zenitsu_group} alt="" className='lg:w-[500px] lg:h-[300px] pt-4 ' />
            </div>
            <div className='flex flex-col pt-[120px] text-left max-w-lg'>
            <p>Some time recently he got to be a Evil presence Slayer, 
            Zenitsu`s hair was initially dark, but it turned the color it is as of now when 
            he was struck by lightning amid his preparing.</p>
            <div className='flex flex-row space-x-1 '>
                <video 
                    src={video} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className='w-[40px] lg:w-[400px] h-auto mt-4'
                ></video>
                    <img 
                    src={world} 
                    alt="Zenitsu using Thunderclap and Flash"
                    className="lg:w-[390px] h-auto mt-4 " 
                />
            </div>
            </div>

        </div>

        <div className='flex flex-row'>
            <div className='flex flex-col text-center pt-8'>
            </div>
        </div>
        {/* Image Zenitsu Pose positionnée en bas à gauche */}
        <img src={pose} alt="Zenitsu Pose" className="absolute right-0 lg:bottom-2 md:bottom-2  h-[200px] md:h-[500px] lg:h-[600px] lg:h-[570px] object-cover" />
      </div>
    </div>
  );
}

export default Zenitsu;
