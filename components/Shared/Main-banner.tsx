import FxRates from "@/components/UI/Fx-rates";

const MainBanner = () => {
    return (
        <section>
            <div className="flex justify-center">
                <div className="w-full max-w-7xl max-[1919px]:max-w-[75rem] mx-auto z-10">
                    <div className="flex flex-col items-center min-[1281px]:flex-row min-[1281px]:items-start gap-x-48 px-2.5 pb-6 pt-0 min-[1281px]:pt-12">
                        <section className="flex flex-col items-start max-[1281px]:items-center min-[480px]:mt-6">
                            <h1 className="text-secondary font-sans font-bold min-[480px]:text-white text-[32px] min-[480px]:text-[48px] leading-[48px] min-[480px]:leading-[56px] max-[945px]:text-center mb-3 min-[1281px]:mb-6 mx-4 min-[1281px]:mx-0">
                                La casa de cambio online líder del Perú
                            </h1>
                            <span className="text-secondary font-sans font-semibold min-[480px]:text-white text-[12px] min-[413px]:text-[14px] min-[1281px]:text-[16px] max-[945px]:text-center mx-[10px] min-[480px]:mx-0 min-[1281px]:mr-3">
                                Celebramos un nuevo récord: 6 mil millones de dólares cambiados para nuestros clientes
                            </span>
                            <div className="flex flex-row-reverse min-[480px]:flex-row my-6 min-[1281px]:mt-12 max-[560px]:items-end gap-6 min-[480px]:gap-4">
                                <div className="flex flex-row items-center justify-start gap-2 min-[480px]:gap-4 max-[560px]:text-center max-[560px]:flex-col">
                                    <img src="/images/visa-white-yellow-logo.svg" alt="rextie-logo" className="hidden min-[480px]:block max-[560px]:mb-[5px]" />
                                    <img src="/images/visa-home.svg" alt="rextie-logo" className="w-20 block min-[480px]:hidden" />
                                    <span className="mt-1 min-[480px]:mt-0 text-secondary font-sans font-semibold min-[480px]:text-white w-[95px] max-[560px]:w-[100%] text-[10px] sm:text-[12px] text-[400]">
                                        Aliado Estratégico
                                    </span>
                                </div>
                                <div className="flex flex-row items-center justify-start max-[560px]:justify-center gap-2 min-[480px]:gap-4 max-[560px]:flex-col">
                                    <div className="flex flex-row items-center min-[480px]:gap-4">
                                        <img src="/images/citi-white.svg" alt="rextie-logo" className="hidden min-[480px]:block" />
                                        <img src="/images/citi-mobile.png" alt="rextie-logo" className="block min-[480px]:hidden" />
                                        <img src="/images/rpp-home.svg" alt="rextie-logo" className="w-8 min-[480px]:w-12" />
                                    </div>
                                    <span className="text-secondary font-sans font-semibold min-[480px]:text-white w-[95px] max-[560px]:w-[100%] max-[560px]:text-center text-[10px] sm:text-[12px] text-[400]">
                                        Inversionistas estratégicos
                                    </span>
                                </div>
                            </div>
                            <div className="hidden min-[1281px]:flex flex-row mt-6 items-center justify-start text-white">
                                <img src="/images/iso-white.png" alt="rextie-logo" className="hidden min-[480px]:block" />
                                <span className="font-[400] text-[12px]">Certificados con ISO 27001</span>
                            </div>
                        </section>
                        <div className="flex flex-col items-center justify-center">
                            <div className="bg-secondary min-[768px]:bg-secondary/80 min-[1023px]:bg-secondary/70 min-[1365px]:bg-secondary/60 backdrop-blur-md pt-3 p-2 min-[768px]:p-4 rounded-3xl min-w-[344px] min-[768px]:w-[546px] min-[1023px]:w-[556px] min-[1365px]:w-[468px]">
                                <div className="flex flex-row items-center justify-center mb-3 gap-3">
                                    <img src="/images/trophy-white.png" alt="rextie-logo" />
                                    <span className="text-[10px] min-[480px]:text-[12px] text-white font-extrabold font-sans">
                                        Cambia al instante con todos los bancos en Perú
                                    </span>
                                </div>
                                <FxRates />
                            </div>

                            <span className=" text-secondary font-sans font-semibold text-[10px] mt-2 mx-3 text-center">(*)Cálculo respecto al tipo de cambio publicado por entidades bancarias.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainBanner; 