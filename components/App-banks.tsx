const AppBanks = () => {
    return (
        <section>
            <h2 className="font-extrabold text-secondary text-[32px] text-center px-11 leading-[48px] max-[480px]:text-xl max-[480px]:px-6 max-[480px]:mt-12 mt-1 mb-3 min-[480px]:mb-6">
                Cambia al instante con todos los bancos en Perú
            </h2>
            <div className="grid grid-cols-1 min-[769px]:grid-cols-2 gap-3 min-[413px]:gap-6 font-[Poppins] mb-[60px] max-w-[320px] min-[413px]:max-w-[546px] min-[769px]:max-w-[960px] m-auto">
                <div className="order-2 min-[769px]:order-1 flex flex-col items-center justify-center border border-quinary-gray border-solid rounded-3xl h-[162px] sm:h-52 p-6 min-[769px]:mt-[24.8px]">
                    <div className="flex flex-col-reverse mb-6 sm:mb-0 sm:flex-col items-center">
                        <span className="hidden min-[480px]:block font-normal text-xs leading-4 text-secondary font-sans min-[480px]:mb-6">Transferencias inmediatas </span>
                        <span className="block min-[480px]:hidden font-normal text-xs leading-4 text-secondary font-sans min-[480px]:mb-6">Transferencias Inmediatas a todo el Perú. </span>
                        <span className="font-extrabold text-2xl max-[480px]:text-base leading-8 text-secondary font-sans">15 min. </span>
                    </div>
                    <span className="hidden min-[480px]:block font-normal text-xs leading-4 text-secondary font-sans mb-6">Todo el Perú </span>
                    <div className="flex flex-col sm:flex-row items-center sm:justify-center sm:gap-8 sm:mb-[30px]">
                        <div className="flex items-center gap-4 sm:gap-8 mb-4 sm:mb-0">
                            <img src="/images/bcp.svg" alt="rextie-logo" className="h-4 sm:h-auto" />
                            <img src="/images/interbank.svg" alt="rextie-logo" className="h-4 sm:h-auto" />
                        </div>
                        <div className="flex items-center gap-4 sm:gap-8">
                            <img src="/images/banco-pichincha.svg" alt="rextie-logo" className="h-4 sm:h-auto" />
                            <img src="/images/banbif.svg" alt="rextie-logo" className="h-4 sm:h-auto" />
                        </div>
                    </div>
                </div>

                <div className="order-1 min-[769px]:order-2">
                    <div className="flex justify-center gap-1 bg-secondary px-2 py-1 rounded-t-3xl rounded-b-none border-b">
                        <img src="/images/star.svg" alt="rextie-logo" />
                        <span className="text-white text-xs max-[480px]:text-[10px] font-normal font-sans">Nuevo beneficio</span>
                    </div>
                    <div className="flex flex-col items-center justify-center border border-quinary-gray border-solid rounded-b-3xl rounded-t-none sm:h-52 h-[278px] p-6">
                        <span className="font-normal text-xs leading-4 text-secondary font-sans mb-6 max-[480px]:mb-2">Transferencias interbancarias</span>
                        <div className="flex flex-col sm:flex-row sm:gap-6 mb-6">
                            <div className="flex flex-col items-center">
                                <span className="font-extrabold text-2xl max-[480px]:text-base leading-8 text-secondary font-sans">30 min.</span>
                                <span className="font-normal text-xs leading-4 text-secondary font-sans">Lima</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="font-extrabold text-2xl max-[480px]:text-base leading-8 text-secondary font-sans">24 horas</span>
                                <span className="font-normal text-xs leading-4 text-secondary font-sans">Provincias</span>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center sm:justify-center sm:gap-8 mb-6 sm:mb-0">
                            <div className="flex items-center gap-4 sm:gap-8 mb-4 sm:mb-0">
                                <img src="/images/bbva.svg" alt="rextie-logo" className="h-4 sm:h-auto" />
                                <img src="/images/scotiabank.svg" alt="rextie-logo" className="h-4 sm:h-auto" />
                            </div>
                            <div className="flex items-center gap-4 sm:gap-8 mb-4 sm:mb-0">
                                <img src="/images/banco-de-comercio-logo.svg" alt="rextie-logo" className="h-4 sm:h-auto" />
                                <img src="/images/mibanco-logo.svg" alt="rextie-logo" className="h-4 sm:h-auto" />
                            </div>
                        </div>
                        <button className="p-0">
                            <span style={{ color: '#0031F7' }} className="text-xs font-sans font-bold underline">Ver bancos disponibles</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AppBanks;