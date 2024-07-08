import React, { useState, useRef, useEffect } from 'react';
import clapping from '../assets/zenitsu_thunder_clapping.gif';
import vsspider from '../assets/videos/Zenitsu vs Spider demon.mp4';
import move from '../assets/zenitsu-move.png';
import imageToAnimate from '../assets/1.png';
import '../App.css';

function ThunderBreathing() {
    // Déclaration des états pour stocker la position de défilement et le statut de l'animation
    const [scrollPosition, setScrollPosition] = useState(0);
    const [startAnimation, setStartAnimation] = useState(false);
    const sectionRef = useRef(null); // Référence pour la section

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset; // Obtenir la position de défilement verticale
            setScrollPosition(position); // Mettre à jour la position de défilement dans l'état

            // Vérifier si l'utilisateur a atteint la section ThunderBreathing
            if (sectionRef.current) {
                const sectionRect = sectionRef.current.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                if (sectionRect.top <= viewportHeight) {
                    setStartAnimation(true); // Démarrer l'animation si la section est visible
                }
            }
        };

        // Ajouter l'écouteur d'événements de défilement
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            // Supprimer l'écouteur d'événements lors du nettoyage
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Fonction pour calculer la position de l'image
    const calculateImagePosition = () => {
        if (!sectionRef.current || !startAnimation) return 0; // Retourner 0 si la section n'est pas référencée ou l'animation n'a pas commencé

        const sectionRect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Calculer le pourcentage visible de la section
        const visiblePercentage = Math.max(0, Math.min(100, 
            ((viewportHeight - sectionRect.top) / (viewportHeight + sectionRect.height)) * 100
        ));

        // Transformer ce pourcentage en une position de 0 à 100 pour le déplacement horizontal
        return visiblePercentage;
    };

    const imagePosition = calculateImagePosition(); // Obtenir la position calculée de l'image

    return (
        <div className='flex flex-row relative overflow-hidden' ref={sectionRef}>
            <div className='absolute flex flex-row w-full justify-between text-white font-bold opacity-40 text-[70px] px-4 pt-[30px]'>
                <div className='flex flex-col'>
                    <p>我</p>
                    <p>あ</p>
                    <p>が</p>
                    <p>妻</p>
                    <p>つ</p>
                    <p>ま</p>
                </div>
                <div className='flex flex-col'>
                    <p>善</p>
                    <p>ぜ</p>
                    <p>ん</p>
                    <p>逸</p>
                    <p>い</p>
                    <p>つ</p>
                </div>
            </div>
            <div className='ml-[100px]'>
                <h1 className='font-elektronik text-white text-[25px] lg:text-[80px] pt-[60px] z-10 relative'>Lightning breath style</h1>
                <p className='text-left text-white lg:max-w-lg pt-[50px]'>Zenitsu uses the Lightning Breath as his fighting technique. 
                He only knows how to make the first move, but manages to outmaneuver his enemies.
                </p>
                <div className='flex flex-row space-x-4'>
                    <video 
                        src={vsspider} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className='w-[270px] border border-white max-w-[560px] h-auto mt-4'
                    ></video>
                    <img 
                        src={clapping} 
                        className='w-[270px] border border-white max-w-[560px] h-auto mt-4'
                    />
                </div>
            </div>
            <img src={move} alt="zenitsu pose as partisans" />
            <img 
                src={imageToAnimate} 
                alt="Animated on scroll" 
                style={{
                    position: 'absolute', 
                    bottom: 0, 
                    right:0,
                    left: `${100 - imagePosition}%`, // Déplacer l'image de droite à gauche
                    transform: 'translateX(0%)', 
                    transition: 'left 0.001s ease-out', 
                }}
                className="w-[800px] h-auto z-20"
            />
        </div>
    );
}

export default ThunderBreathing;
