const DowloandApp = () => {
    return (
        <section className="flex items-center justify-center py-[40px]">
            <div className="w-full max-w-[90%] md:w-[898px] h-auto md:h-[206px] bg-stratos-muted rounded-[8px] my-[60px] flex flex-col md:flex-row items-center justify-center gap-[40px]
                    px-[10px] py-[20px] md:px-0 md:py-0">
                <div className="font-sans text-center md:text-left">
                    <div className="justify-center flex gap-[10px] items-end sm:justify-start">
                        <img src="/images/rextie-logo.png" alt="rextie-logo" className="max-w-full h-auto block align-middle" />
                        <div>
                            <span className="font-bold text-[18px] flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" fill="none">
                                    <path d="M7.457.837a.72.72 0 0 1 1.324 0l1.586 3.721a.72.72 0 0 0 .598.435l4.029.358a.72.72 0 0 1 .409 1.26l-3.049 2.658a.72.72 0 0 0-.229.703l.904 3.942a.72.72 0 0 1-1.071.778l-3.47-2.078a.72.72 0 0 0-.74 0l-3.47 2.078a.72.72 0 0 1-1.071-.778l.904-3.942a.72.72 0 0 0-.229-.703L.835 6.61a.72.72 0 0 1 .409-1.259l4.029-.358a.72.72 0 0 0 .598-.435L7.457.837z" fill="#ffcc49"></path>
                                </svg>
                                4.8
                            </span>
                            <span className="text-[8.687px] flex font-sans">Rextie en App Store</span>
                        </div>
                    </div>

                    <div className="font-sans">
                        <h3 className="text-[16px] sm:text-[24px] my-[16px] font-bold text-center">¡Cambia dinero desde cualquier lugar!</h3>
                        <div className="flex items-center justify-center gap-[10px]">
                            <a href="#">
                                <img src="/images/app-store.png" alt="store" className="w-[99px] sm:w-auto max-w-full h-auto block align-middle" />
                            </a>
                            <a href="#">
                                <img src="/images/google-play.png" alt="play" className="w-[99px] sm:w-auto max-w-full h-auto block align-middle" />
                            </a>
                            <a href="#">
                                <img src="/images/app-gallery.png" alt="gallery" className="w-[99px] sm:w-auto max-w-full h-auto block align-middle" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Imagen visible en pantallas grandes y oculta en pantallas pequeñas */}
                <img src="/images/apps-rextie.png" alt="dowloand" className="max-w-full w-[184.13px] h-[316px] align-middle hidden md:block" />
            </div>
        </section>

    );
}

export default DowloandApp;
