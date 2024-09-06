import ButtonSecondary from "./UI/ButtonSecondary";

const WhyUseRextie = () => {
    return (
        <section className="flex max-w-[1100px] py-[60px] mx-auto">
            <div className="flex items-center content-center gap-[20px]">
                <div className="mr-[25px]">
                    <p className="flex justify-start items-end gap-[10px] text-stratos-accent">
                        <span style={{ backgroundColor: '#00c8ff', borderRadius: '50%' }} className="block w-[15px] h-[15px] mb-1"></span>REXTIE BUSINESS
                    </p>
                    <h2>Tenemos un tipo de cambio exclusivo</h2>
                    <div className="flex w-full justify-center">
                        <div className="flex-col content-center max-w-[570px] h-full max-h-[500px] rounded-[8px] p-5"></div>
                    </div>
                    <p className="text-[14px]"> Cambia tus dólares a soles de forma segura, rápida y confiable con nuestra casa de cambio online. </p>
                    <ButtonSecondary label="Conocer más" alternate={true} />
                </div>
            </div>
        </section>
    );
}

export default WhyUseRextie;