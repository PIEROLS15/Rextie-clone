import React, { useState } from 'react';

const images = [
    { src: '/images/forbes.jpg', alt: 'forbes', description: '“Citi ha realizado una inversión estratégica en Rextie. Se trata de la primera inversión del banco en tecnología financiera en América Latina. Con este capital, la fintech espera acumular 7.000 millones de dólares transaccionados en la plataforma hacia el 2024”.', link: 'https://forbes.pe/negocios/2023-08-24/citi-compra-una-participacion-en-la-fintech-peruana-de-cambio-de-divisas-rextie' },
    { src: '/images/gestion.png', alt: 'gestion', description: '“Nuestro CEO, Mateu Batle, comparte sus conocimientos sobre los desafíos y oportunidades en el mercado de las fintech en Perú. Desde regulaciones hasta obstáculos operativos, este artículo arroja luz sobre el panorama financiero actual”.', link: 'https://forbes.pe/negocios/2023-08-24/citi-compra-una-participacion-en-la-fintech-peruana-de-cambio-de-divisas-rextie' },
    { src: '/images/nasdag.jpg', alt: 'nasdag', description: 'La inversión y la integración de la tecnología FX de vanguardia de Citi, CitiFX Pulse e Instant Payments, impulsarán la expansión de Rextie, al tiempo que brindarán a sus clientes un servicio más rápido y tipos de cambio de divisas más competitivos.', link: 'https://forbes.pe/negocios/2023-08-24/citi-compra-una-participacion-en-la-fintech-peruana-de-cambio-de-divisas-rextie' },
    // Puedes añadir más imágenes aquí si es necesario
];

const CarrouselSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }
    };

    return (
        <div className="relative flex flex-col justify-center px-[40px] items-center gap-[5px]">
            <button
                onClick={handlePrev}
                className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 px-[15px] rounded-full z-10 ${currentIndex === 0 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                disabled={currentIndex === 0}
                style={{ width: '46px', height: '48px' }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8.707 1.707A1 1 0 1 0 7.293.293l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L3.414 9H15a1 1 0 1 0 0-2H3.414l5.293-5.293z" fill="#0032ff"></path>
                </svg>
            </button>


            <div className="w-full flex justify-center items-start overflow-hidden">
                <div className="flex h-[20%] py-[15px] cursor-pointer touch-pan-y">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`w-[73.33px] sm:w-[136.667px] mr-[30px] h-full ${index === currentIndex ? 'opacity-100' : 'opacity-30'}`}
                        >
                            <img src={image.src} alt={image.alt} className="block w-full h-full object-cover max-w-full" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex h-[80%] w-[95%] items-start">
                <div className="w-[447px] flex items-start flex-col">
                    <p className="font-sans text-[11.2px] sm:text-[14px]">{images[currentIndex].description}</p>
                    <a href={images[currentIndex].link} className="text-primary text-[11.2px] sm:text-[14px]">
                        Ver noticia
                    </a>
                </div>
            </div>

            <button
                onClick={handleNext}
                className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 px-[15px] rounded-full z-10 ${currentIndex === images.length - 1 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                disabled={currentIndex === images.length - 1}
                style={{ width: '46px', height: '48px' }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.293 1.707A1 1 0 1 1 8.707.293l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414L12.586 9H1a1 1 0 0 1-1-1 1 1 0 0 1 1-1h11.586L7.293 1.707z" fill="#0032ff"></path>
                </svg>
            </button>

        </div>
    );
};

export default CarrouselSection;
