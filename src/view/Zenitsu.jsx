import React from 'react';
import pose from '../assets/pose as partisant.webp';
import video from '../assets/videos/how zenitsu hair turn into yellow.mp4'
import zenitsu_group from '../assets/zenitsu_group.jpg';
import world from '../assets/world.gif';
import '../App.css';

function Zenitsu() {

  return (
    <div className="relative flex flex-col h-screen lg:mt-[150px] ">

      {/* Contenu au-dessus de l'image de fond */}
      <div className="relative flex flex-col text-center">
        <span className="font-elektronik  text-[80px] mb-4">Zenitsu Agatsuma</span>
        <div className='flex flex-row space-x-7'>
            <div className="text-[15px] max-w-lg text-left pl-4">
                <p>Zenitsu Agatsuma (我あが妻つま 善ぜん逸いつ Agatsuma Zen'itsu)</p>
                <p>is one of the main characters of Demon Slayer: Kimetsu no Yaiba</p>
                <p>and along with Inosuke Hashibira, a travelling companion of Tanjiro Kamado and Nezuko Kamado.
                He is also a Demon Slayer in the Demon Slayer Corps.</p>
                <img src={zenitsu_group} alt="" className='2xl:xl:w-[500px] 2xl:xl:h-[300px] pt-4 ' />
                {/* <video 
                    src={video} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className='w-[497px] max-w-[560px] h-auto mt-4'
                ></video> */}
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
                    className='w-[400px] max-w-[560px] h-auto mt-4'
                ></video>
                {/* <img 
                    src={zenitsu_thunder_clapping} 
                    alt="Zenitsu using Thunderclap and Flash"
                    className="w-[400px] h-auto mt-4" 
                /> */}
                    <img 
                    src={world} 
                    alt="Zenitsu using Thunderclap and Flash"
                    className="w-[400px] h-auto mt-4 " 
                />
            </div>
            </div>

        </div>

        <div className='flex flex-row'>
            {/* <div className='flex flex-col'>
                <img src={jigoro} alt="" className='w-[300px] h-[300px] ' />
                <p className='font-elektronik text-[50px]'>Jigoro Kuwajima</p>
            </div> */}
            <div className='flex flex-col text-center pt-8'>
                {/* <p>Jigoro Kuwajima is the master of Zenitsu, he taught him to use the Thunder Breathing style</p> */}
                {/* <video 
                    src={video} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className=' pl-4 w-[510px] max-w-[560px] h-auto'
                ></video> */}
            </div>
        </div>
        {/* Image Zenitsu Pose positionnée en bas à gauche */}
        <img src={pose} alt="Zenitsu Pose" className="absolute  right-0 h-[600px] object-cover" />
      </div>
    </div>
  );
}

export default Zenitsu;
