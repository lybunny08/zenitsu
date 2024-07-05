import React from 'react';
import pose from '../assets/pose as partisant.webp';
import bg_zenitsu from '../assets/zenitsu.png';
import zenitsu_group from '../assets/zenitsu_group.jpg';

function Zenitsu() {
  return (
    <div className="relative flex flex-col h-screen">
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-left bg-no-repeat bottom-[-900px] opacity-20"
        style={{ backgroundImage: `url(${bg_zenitsu})` }}
      ></div>

      {/* Contenu au-dessus de l'image de fond */}
      <div className="relative flex flex-col text-center pt-20">
        <span className="font-elektronik  text-[80px] mb-4">Zenitsu Agatsuma</span>
        <div className="text-[15px] max-w-lg text-left pl-4">
          <p>Zenitsu Agatsuma (我あが妻つま 善ぜん逸いつ Agatsuma Zen'itsu)</p>
          <p>is one of the main characters of Demon Slayer: Kimetsu no Yaiba</p>
          <p>and along with Inosuke Hashibira, a travelling companion of Tanjiro Kamado and Nezuko Kamado.
            He is also a Demon Slayer in the Demon Slayer Corps.</p>
            <img src={zenitsu_group} alt="" className='w-[500px] h-[300px] pt-4 ' />
        </div>
        {/* Image Zenitsu Pose positionnée en bas à gauche */}
        <img src={pose} alt="Zenitsu Pose" className="absolute  right-0 h-[700px] object-cover" />
      </div>
    </div>
  );
}

export default Zenitsu;
