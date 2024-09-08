import ButtonSecondary from "./UI/ButtonSecondary";

const SectionText = () => {
    return (
        <section className="bg-stratos-accent pt-0 pr-[10px] pb-[15px] pl-[10px] md:pt-0 md:pr-0 md:pb-0 md:pl-0">
            <div className="flex flex-col md:flex-row max-w-[1100px] justify-between items-center mx-auto w-full">
                <p className="text-[17px] md:text-[24px] font-sans my-[17px] text-white font-bold text-center md:text-left md:my-[17px] md:mr-4">
                    Cambia tu dinero rápido y seguro
                </p>
                <div className="flex items-center h-[48px] md:mt-0">
                    <ButtonSecondary label="Cambia aqui" className="font-bold h-[36px]" />
                </div>
            </div>
        </section>
    );
}

export default SectionText;
