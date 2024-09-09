const AmountsRextie = () => {
    return (
        <section className="flex flex-col md:flex-row-reverse max-w-[1100px] m-auto py-[10px] md:py-[60px] gap-x-[40px] gap-y-[40px]">
            <div className="hidden md:flex flex-row gap-x-[20px] gap-y-[20px]">
                <article className="flex flex-col items-center justify-center text-center bg-stratos-muted rounded-[13px] min-w-[150px] w-full py-[25px]">
                    <img src="/images/money-blue-icon.svg" alt="rextie-logo" className="block h-[43px] mb-5 max-w-full align-middle" />
                    <h3 className="text-stratos-accent text-[18px] text-sans font-bold">+ 6 mil millones</h3>
                    <p className="text-stratos-accent text-[18px] px-[35px] font-sans font-medium">de dólares negociados</p>
                </article>
                <article className="flex flex-col items-center justify-center text-center bg-stratos-muted rounded-[13px] min-w-[150px] w-full py-[25px]">
                    <img src="/images/user-blue-icon.svg" alt="rextie-logo" className="block h-[43px] mb-5 max-w-full align-middle" />
                    <h3 className="text-stratos-accent text-[18px] text-sans font-bold">+ 6 mil millones</h3>
                    <p className="text-stratos-accent text-[18px] px-[35px] font-sans font-medium">confían en nosotros</p>
                </article>
                <article className="flex flex-col items-center justify-center text-center bg-stratos-muted rounded-[13px] min-w-[150px] w-full py-[25px]">
                    <img src="/images/save-money-blue-icon.svg" alt="rextie-logo" className="block h-[43px] mb-5 max-w-full align-middle" />
                    <h3 className="text-stratos-accent text-[18px] text-sans font-bold">+ 282 millones</h3>
                    <p className="text-stratos-accent text-[18px] px-[35px] font-sans font-medium">de soles ahorrados</p>
                </article>
            </div>

            <div className="flex flex-col items-center text-center">
                <h2 className="text-stratos-accent text-[27.2px] md:text-[34px] my-[22px] font-bold font-sans text-center md:text-left">
                    Somos la casa de cambio online líder del Perú
                </h2>

                <div className="block md:hidden">
                    <div className="touch-pan-y flex flex-col items-center">
                        <div className="flex flex-col items-center justify-center gap-y-[15px]">
                            <div className="flex flex-col text-center items-center justify-center bg-stratos-muted rounded-[6.4px] w-[80%] md:w-[40%] h-[204px]">
                                <img src="/images/money-blue-icon.svg" alt="rextie-logo" className="block h-[43px] mb-5 max-w-full align-middle" />
                                <h3 className="text-stratos-accent text-[14.4px] text-sans font-bold">+ 6 mil millones</h3>
                                <p className="text-stratos-accent text-[14.4px] px-[30px] text-sans font-medium">de dólares negociados</p>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-[11.2px] md:text-[14px] font-sans px-[58px] md:px-0 mt-[17px] mb-[29px] font-medium text-center md:text-left">
                    ¡Tenemos el más alto volumen de dólares cambiados! Las personas consideran a Rextie como la casa de cambio online más confiable.
                </p>
            </div>
        </section>
    );
}

export default AmountsRextie;
