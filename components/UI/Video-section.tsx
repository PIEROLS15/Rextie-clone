import { useState } from 'react';

const VideoSection = () => {
    const [showVideo, setShowVideo] = useState(false);

    const handlePlayClick = () => {
        setShowVideo(true);
    };

    return (
        <div className="w-full max-w-[1280px]">
            <div className="relative block w-full overflow-hidden rounded-[10px] h-[202.5px] sm:h-[292.5px]">
                {/* Imagen de fondo y capa de opacidad */}
                {!showVideo && (
                    <div
                        className="relative w-full h-full bg-center bg-cover flex items-center justify-center"
                        style={{ backgroundImage: "url('/images/rextie-team.jpg')" }}
                    >
                        <div className="absolute inset-0 bg-black opacity-30 z-[98]"></div>
                        <div className="relative z-[99] flex flex-col items-center justify-center w-full h-full">
                            <img
                                src="/images/play.svg"
                                alt="play"
                                className="cursor-pointer"
                                onClick={handlePlayClick}
                            />
                            <span className="font-bold font-sans z-[99] text-white">Ver vídeo</span>
                            <span className="bottom-[5px] absolute left-[10px] underline font-bold z-[99] text-white">Rextie en RPP TV</span>
                        </div>
                    </div>
                )}

                {/* Video en iframe */}
                {showVideo && (
                    <iframe
                        src="https://www.youtube.com/embed/j3s5nfNl12Q?autoplay=1"
                        className="absolute inset-0 w-full h-full z-[97]"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )}
            </div>
        </div>
    );
}

export default VideoSection;
