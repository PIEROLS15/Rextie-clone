'use client'
import { useState } from 'react';

const testimonios = [
    {
        id: 1,
        texto: "“Mi experiencia al usar la aplicación fue estupenda. Es sencilla, transparente en las tasas de cambio, y me permitió ahorrar tiempo. Es la mejor app que he usado”.",
        nombre: "Chanel Ramos",
    },
    {
        id: 2,
        texto: "“La mejor casa de cambio online, siempre se preocupan porque sea un servicio bueno y honesto. Me llaman incluso cuando pasó algún error y lo solucionan rápido”.",
        nombre: "Grecia Retamozo",
    },
    {
        id: 3,
        texto: "“Hasta el momento estoy muy contento con el servicio brindado por Rextie. Nunca tuve problemas con la app, es de mucha ayuda. La recomiendo”.",
        nombre: "Jorge Suarez",
    },
    {
        id: 4,
        texto: "“Rextie tiene una muy buena app, sencilla de usar y con muy buenos precios de venta y compra del dólar. Es la mejor casa de cambio online”.",
        nombre: "Reni Ravina",
    },
];

const WhatDoYouDink = () => {
    const [indiceActual, setIndiceActual] = useState(0);

    const avanzar = () => {
        if (indiceActual < testimonios.length - 1) {
            setIndiceActual(indiceActual + 1);
        }
    };

    const retroceder = () => {
        if (indiceActual > 0) {
            setIndiceActual(indiceActual - 1);
        }
    };

    return (
        <section className="flex flex-col max-w-[1100px] m-auto py-[30px] md:py-[60px]">
            <h2 className="text-stratos-accent text-[27.2px] sm:text-[34px] font-sans font-bold px-[10px] items-center text-center my-[22px]">
                Descubre lo que dicen nuestros clientes
            </h2>

            <p className="text-[11.2px] sm:text-[14px] px-[10px] my-[17px] font-sans items-center text-center">
                Conoce de primera mano lo que es cambiar dinero con Rextie.
            </p>

            <section className="max-w-full m-auto">
                {/* Diseño en mobile */}
                <div className="flex items-center justify-center gap-[20px] h-[314px] md:hidden">
                    <button
                        onClick={retroceder}
                        disabled={indiceActual === 0}
                        className={`w-[46px] h-[48px] rounded-full flex justify-center items-center ${indiceActual === 0 ? 'bg-[#aeaeae] cursor-not-allowed' : 'bg-stratos-accent'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFFFFF">
                            <path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z" />
                        </svg>
                    </button>

                    <div className="mx-auto relative overflow-hidden z-[1] block">
                        <div className="flex flex-col text-center justify-start items-center rounded-[6.4px] max-w-[205px]">
                            <article className="w-[198px] h-[312px]">
                                <div className="relative w-full h-full items-center rounded-[8px] border-[0.2px] border-stratos-link bg-stratos-muted">
                                    <div className="absolute w-full h-full flex flex-col justify-between rounded-[8px]">
                                        <h3 className="text-[16px] my-4"></h3>
                                        <p className="text-[12.8px] my-[16px] mx-[20px] font-sans text-center">
                                            {testimonios[indiceActual].texto}
                                        </p>
                                        <p className="text-[12.8px] my-[16px] mx-[20px]">
                                            <span className="font-bold block font-sans text-center">
                                                {testimonios[indiceActual].nombre}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>

                    <button
                        onClick={avanzar}
                        disabled={indiceActual === testimonios.length - 1}
                        className={`w-[46px] h-[48px] rounded-full flex justify-center items-center ${indiceActual === testimonios.length - 1
                            ? 'bg-[#aeaeae] cursor-not-allowed'
                            : 'bg-stratos-accent'
                            }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                            <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" fill="#FFFFFF" />
                        </svg>

                    </button>
                </div>

                {/* Diseño en desktop */}
                <div className="hidden md:flex flex-row items-center gap-[20px]">
                    <article className="w-[260px] h-[391px]">
                        <div className="relative w-full h-full items-center rounded-[8px] border-[0.2px] border-stratos-link bg-stratos-muted">
                            <div className="absolute w-full h-full flex flex-col justify-between rounded-[8px]">
                                <h3 className="text-[16px] my-4"></h3>
                                <p className="text-[16px] my-[16px] mx-[40px] font-sans text-center">
                                    “Mi experiencia al usar la aplicación fue estupenda. Es sencilla, transparente en las tasas de cambio, y me permitió ahorrar tiempo. Es la mejor app que he usado”.
                                </p>
                                <p className="text-[16px] my-[16px] mx-[40px]">
                                    <span className="font-bold block font-sans text-center">Chanel Ramos</span>
                                </p>
                            </div>
                        </div>
                    </article>

                    <article className="w-[260px] h-[391px]">
                        <div className="relative w-full h-full items-center rounded-[8px] border-[0.2px] border-stratos-link bg-stratos-muted">
                            <div className="absolute w-full h-full flex flex-col justify-between rounded-[8px]">
                                <h3 className="text-[16px] my-4"></h3>
                                <p className="text-[16px] my-[16px] mx-[40px] font-sans text-center">
                                    “La mejor casa de cambio online, siempre se preocupan porque sea un servicio bueno y honesto. Me llaman incluso cuando pasó algún error y lo solucionan rápido”.
                                </p>
                                <p className="text-[16px] my-[16px] mx-[40px]">
                                    <span className="font-bold block font-sans text-center">Grecia Retamozo</span>
                                </p>
                            </div>
                        </div>
                    </article>

                    <article className="w-[260px] h-[391px]">
                        <div className="relative w-full h-full items-center rounded-[8px] border-[0.2px] border-stratos-link bg-stratos-muted">
                            <div className="absolute w-full h-full flex flex-col justify-between rounded-[8px]">
                                <h3 className="text-[16px] my-4"></h3>
                                <p className="text-[16px] my-[16px] mx-[40px] font-sans text-center">
                                    “Hasta el momento estoy muy contento con el servicio brindado por Rextie. Nunca tuve problemas con la app, es de mucha ayuda. La recomiendo”.
                                </p>
                                <p className="text-[16px] my-[16px] mx-[40px]">
                                    <span className="font-bold block font-sans text-center">Jorge Suarez</span>
                                </p>
                            </div>
                        </div>
                    </article>

                    <article className="w-[260px] h-[391px]">
                        <div className="relative w-full h-full items-center rounded-[8px] border-[0.2px] border-stratos-link bg-stratos-muted">
                            <div className="absolute w-full h-full flex flex-col justify-between rounded-[8px]">
                                <h3 className="text-[16px] my-4"></h3>
                                <p className="text-[16px] my-[16px] mx-[40px] font-sans text-center">
                                    “Rextie tiene una muy buena app, sencilla de usar y con muy buenos precios de venta y compra del dólar. Es la mejor casa de cambio online”.
                                </p>
                                <p className="text-[16px] my-[16px] mx-[40px]">
                                    <span className="font-bold block font-sans text-center">Reni Ravina</span>
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </section>
    );
};

export default WhatDoYouDink;
