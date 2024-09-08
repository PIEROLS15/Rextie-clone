const PressRextie = () => {
    return (
        <section className="max-w[1100px] m-auto pb-[30px]">
            <h2 className="text-[34px] text-stratos-accent font-sans font-bold px-[10px] text-center my-[22px]">Rextie en los medios</h2>
            <p className="px-[10px] text-center my-[17px]">Encuentra artículos y noticias en medios que hablan de nuestra casa de cambio online.</p>

            <div className="flex flex-row gap-[30px]">

                {/* Contenedor del video */}
                <div className="w-full max-w[1024px]">
                    <div className="cursor-pointer rounded-[10px] relative block w-full overflow-hidden">
                        {/* diseño del video */}
                        <div className=" z-[99] w-full h-full bg-center bg-cover flex items-center justify-center flex-col bg" style={{ backgroundImage: "url('/images/rextie-team.jpg')" }}>
                            <img src="/images/play.svg" alt="play" />
                            <span className="font-bold font-sans">Ver vídeo</span>
                            <span className="bottom-[5px] absolute left-[10px] underline font-bold">Rextie en RPP TV</span>
                        </div>
                        <iframe src="https://www.youtube.com/embed/j3s5nfNl12Q" className="absolute w-full h-full block align-middle"></iframe>
                    </div>
                </div>

                <div className="w-[50%]">
                    <div className="flex justify-center px-[40px] items-start gap-[5px]">
                        <div className="w-full">
                            <div className="h-[20%] py-[15px] cursor-pointer touch-pan-y">
                                <div className="w-[136.667px] mr-[30px] opacity-[1] h-full">
                                    <img src="/images/forbes.jpg" alt="play" className="block w-full h-full object-cover max-w-full" />
                                </div>
                            </div>

                            <div className="h-[80%] w-[95%]">
                                <div className="w-[447px] mr-[10px] flex items-start flex-col">
                                    <p className="font-sans text-[14px]"> “Citi ha realizado una inversión estratégica en Rextie. Se trata de la primera inversión del banco
                                        en tecnología financiera en América Latina. Con este capital, la fintech espera acumular 7.000 millones de dólares
                                        transaccionados en la plataforma hacia el 2024”. </p>
                                    <a href="https://forbes.pe/negocios/2023-08-24/citi-compra-una-participacion-en-la-fintech-peruana-de-cambio-de-divisas-rextie"
                                        className="text-primary">
                                        Ver noticia
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PressRextie;