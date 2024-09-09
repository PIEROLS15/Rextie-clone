'use client'
import CarrouselSection from "./UI/Carrousel-section";
import VideoSection from "./UI/Video-section";

const PressRextie = () => {
    return (
        <section className="max-w-[1100px] mx-auto pb-[30px]">
            <h2 className="text-[27.2px] sm:text-[34px] text-stratos-accent font-sans font-bold px-[10px] text-center my-[22px]">Rextie en los medios</h2>
            <p className="px-[10px] text-center my-[17px] font-sans text-[11.2px] sm:text-[14px]">Encuentra artículos y noticias en medios que hablan de nuestra casa de cambio online.</p>

            <div className="flex flex-col md:flex-row gap-[30px] px-[15px] sm:px-[0px]">

                {/* Contenedor del video */}
                <div className="w-full md:w-[50%]">
                    <VideoSection />
                </div>

                <div className="w-full md:w-[50%]">
                    <CarrouselSection />
                </div>
            </div>
        </section>
    );
}

export default PressRextie;
