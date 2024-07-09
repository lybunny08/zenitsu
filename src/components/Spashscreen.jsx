import React from 'react';
import move from '../assets/zenitsu-move.png';

function SplashScreen() {
    return (
        <div className='min-h-screen bg-white flex items-center justify-center'>
            <img src={move} alt="" className='w-auto h-[150px] lg:w-auto lg:h-[250px]' />
        </div>
    )
}

export default SplashScreen;
