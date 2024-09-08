'use client';

import React, { useState } from 'react';

const VideoSection: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayClick = () => {
        setIsPlaying(true);
    };

    return (
        <div className="relative w-full h-48 flex items-center justify-center">
            <div
                className={`absolute inset-0 bg-cover bg-center rounded-lg ${isPlaying ? 'hidden' : ''}`}
                style={{ backgroundImage: "url('/images/rextie-team.jpg')" }} // Asegúrate de usar la ruta correcta
            ></div>
            {!isPlaying && (
                <>
                    {/* Capa oscura */}
                    <div className="absolute inset-0 bg-black opacity-50 z-10 rounded-lg"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-20 cursor-pointer" onClick={handlePlayClick}>
                        <img src="/images/play.svg" alt="Play button" className="mb-2 rounded-lg" />
                        <span className="text-white font-bold">Ver vídeo</span>
                        <span className="absolute bottom-2 left-2 text-white underline">Rextie en RPP</span>
                    </div>
                </>
            )}
            {isPlaying && (
                <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg"> {/* Ajusta el tamaño y border-radius */}
                    <iframe
                        src="https://www.youtube.com/embed/j3s5nfNl12Q?autoplay=1"
                        frameBorder="0"
                        className="w-full h-full rounded-lg"
                        allowFullScreen
                    ></iframe>
                </div>
            )}
        </div>
    );
};

export default VideoSection;
