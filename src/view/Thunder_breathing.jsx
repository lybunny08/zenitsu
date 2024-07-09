import React, { useState, useRef, useEffect } from 'react';
import clapping from '../assets/zenitsu_thunder_clapping.gif';
import vsspider from '../assets/videos/Zenitsu vs Spider demon.mp4';
import move from '../assets/zenitsu-move.png';
import imageToAnimate from '../assets/1.png';
import moon from '../assets/videos/moon.gif';
import '../App.css';

function ThunderBreathing() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [startAnimation, setStartAnimation] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);

            if (sectionRef.current) {
                const sectionRect = sectionRef.current.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                if (sectionRect.top <= viewportHeight) {
                    setStartAnimation(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const calculateImagePosition = () => {
        if (!sectionRef.current || !startAnimation) return 0;

        const sectionRect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        const visiblePercentage = Math.max(0, Math.min(100, 
            ((viewportHeight - sectionRect.top) / (viewportHeight + sectionRect.height)) * 100
        ));

        return visiblePercentage;
    };

    const imagePosition = calculateImagePosition();

    return (
        <div 
            className="flex flex-col lg:flex-row relative overflow-hidden bg-cover bg-center min-h-screen"
            ref={sectionRef}
            style={{ 
                backgroundImage: `url(${moon})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className='absolute flex flex-row w-full justify-between text-white font-bold opacity-40 text-2xl sm:text-4xl lg:text-[70px] px-2 sm:px-4 pt-4 sm:pt-[30px]'>
                <div className='flex flex-col lg:space-y-20 lg:pt-14'>
                    <p>我</p><p>あ</p><p>が</p><p>妻</p><p>つ</p><p>ま</p>
                </div>
                <div className='flex flex-col lg:space-y-20 lg:pt-14'>
                    <p>善</p><p>ぜ</p><p>ん</p><p>逸</p><p>い</p><p>つ</p>
                </div>
            </div>
            <div className='px-4 lg:ml-[100px] lg:w-1/2 z-10'>
                <h1 className='font-elektronik text-white text-3xl sm:text-5xl lg:text-[80px] pt-[90px] relative'>Lightning breath style</h1>
                <p className='text-left text-white text-sm sm:text-base lg:text-lg pt-4 sm:pt-[50px]'>
                    Zenitsu uses the Lightning Breath as his fighting technique. 
                    He only knows how to make the first move, but manages to outmaneuver his enemies.
                </p>
                <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4'>
                    <video 
                        src={vsspider} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className='w-full sm:w-1/2 border border-white max-w-[560px] h-auto'
                    ></video>
                    <img 
                        src={clapping} 
                        className='w-full sm:w-1/2 border border-white max-w-[560px] h-auto'
                        alt="Thunder clapping"
                    />
                </div>
            </div>
            <img src={move} alt="zenitsu slay" className="hidden lg:block lg:w-1/2 object-contain" />
            <img 
                src={imageToAnimate} 
                alt="Animated on scroll" 
                style={{
                    position: 'absolute', 
                    bottom: 0, 
                    left: `${100 - imagePosition}%`,
                    transition: 'left 0.001s ease-out', 
                }}
                className="w-1/2 sm:w-1/3 lg:w-[800px] h-auto z-20"
            />
        </div>
    );
}

export default ThunderBreathing;