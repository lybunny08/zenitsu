import React, { useRef, useEffect, useState } from 'react';
import '../App.css';
import samorai from '../assets/samorai.png';
import zenitsujigoro from '../assets/zenitsujogoro.png';
import gsap from 'gsap';

function Facts() {
    const factsRef = useRef(null);
    const samouraiRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1
            }
        );

        if (factsRef.current) {
            observer.observe(factsRef.current);
        }

        return () => {
            if (factsRef.current) {
                observer.unobserve(factsRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            const ctx = gsap.context(() => {
                gsap.from(samouraiRef.current, {
                    opacity: 0,
                    x: "-100%",
                    duration: 1,
                    ease: "power3.out"
                });
            }, factsRef);

            return () => ctx.revert();
        }
    }, [isVisible]);

    // Fonction pour générer les triangles aléatoires
    const generateRandomTriangles = () => {
        const triangles = [];
        const numTriangles = 400; // Beaucoup plus de triangles

        for (let i = 0; i < numTriangles; i++) {
            const size = Math.random() * 30 + 5; // Taille aléatoire entre 5 et 35px
            const top = Math.random() * 100; // Position verticale aléatoire
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
                        pointerEvents: 'none', // Pour éviter d'interférer avec les interactions utilisateur
                    }}
                />
            );
        }

        return triangles;
    };

    return (
        <div className='relative min-h-screen bg-[#FFA500]' ref={factsRef}>
            {/* Arrière-plan avec triangles aléatoires */}
            <div className='absolute inset-0 overflow-hidden'>
                {generateRandomTriangles()}
            </div>
            
            {/* Contenu principal */}
            <div className='relative z-10 flex flex-col pt-[120px] lg:pt-[160px] px-10'>
                <h1 className='font-elektronik text-4xl lg:text-[80px] text-center lg:mb-10 text-white'>Interesting facts</h1>
                <h1 className='font-elektronik text-4xl lg:text-[80px] text-center mb-10 text-white'>about his shapes</h1>

                <div className="flex flex-col items-center justify-center">
                    <div className="text-[12px] lg:text-[15px] lg:text-left mb-8 text-white">
                        <p className="mb-2 sm:mb-0">
                            <span className="block sm:inline">This type of shape called "Uroko"</span>
                            <span className="block sm:inline"> and it was worn by samurai in real life.</span>
                        </p>
                        <p>
                            <span className="block sm:inline">They believed that these shapes</span>
                            <span className="block sm:inline"> would protect them from harm.</span>
                        </p>
                    </div>
                    <div className="relative ">
                        <div 
                            className='absolute top-1/2 -right-12 sm:bottom-20 sm:-right-[200px] z-10 rotating-triangle transform -translate-y-1/2 sm:translate-y-0'
                            style={{
                                width: '0',
                                height: '0',
                                transform: 'rotate(45deg)',
                                '--triangle-size': 'clamp(50px, 5vw, 100px)',
                                borderLeft: 'var(--triangle-size) solid transparent',
                                borderRight: 'var(--triangle-size) solid transparent',
                                borderBottom: 'calc(var(--triangle-size) * 1.73) solid white',
                            }}
                        />
                    </div>
                </div>

                <img 
                    ref={samouraiRef}
                    src={samorai} 
                    alt="Samorai" 
                    className='absolute left-0 bottom-[-40px] lg:bottom-[-300px] h-[400px] lg:h-[600px] w-auto object-contain'
                />
            </div>
        </div>
    )
}

export default Facts;