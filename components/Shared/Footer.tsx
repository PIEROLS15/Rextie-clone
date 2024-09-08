'use client'
import AcordionFooter from "../UI/Acordion-footer";
import ContactoFooter from "../UI/Contacto-footer";
import LogoFooter from "../UI/Logo-footer";

const Footer = () => {
    return (
        <section>
            <footer className="m-auto">
                {/* Contenedor principal del footer */}
                <div className="flex flex-col py-[40px] px-0 mx-0 md:flex-row md:py-[80px] md:px-[38px] md:mx-[26px] justify-center">

                    {/* En dispositivos móviles, el contenedor de LogoFooter está al final */}
                    <section className="flex flex-col md:flex-row w-full md:w-auto">
                        <div className="order-3 md:order-1">
                            <LogoFooter />
                        </div>
                        <div className="order-1 md:order-2">
                            <AcordionFooter />
                        </div>
                        <div className="order-2 md:order-3">
                            <ContactoFooter />
                        </div>
                    </section>
                </div>

                <div className="text-center text-[12px] bg-stratos-text py-[3px] font-sans">
                    <p className="text-white my-[12px] text-[12px]">
                        ©2024 Rextie: La casa de cambio online, Líder del Perú. Todos los derechos reservados.
                    </p>
                </div>
            </footer>
        </section>
    );
}

export default Footer;
