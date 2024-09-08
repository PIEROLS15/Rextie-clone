'use client';

import { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

const AcordionFooter = () => {
    const [isOpenServicios, setIsOpenServicios] = useState(false);
    const [isOpenRecursos, setIsOpenRecursos] = useState(false);
    const [isOpenSoporte, setIsOpenSoporte] = useState(false);

    const toggleServicios = () => setIsOpenServicios(!isOpenServicios);
    const toggleRecursos = () => setIsOpenRecursos(!isOpenRecursos);
    const toggleSoporte = () => setIsOpenSoporte(!isOpenSoporte);

    return (
        <article className="flex flex-col md:flex-row gap-[2rem] md:gap-[5rem]">
            <div className="flex flex-col items-stretch relative">

                {/* Diseño mobile servicios */}
                <h4 className="mb-[26px] text-[16px] font-bold font-sans md:hidden px-[30px] flex items-center justify-between">
                    Servicios
                    <div
                        className="ml-2 cursor-pointer"
                        onClick={toggleServicios}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="8"
                            fill="none"
                            viewBox="0 0 14 8"
                            className={`transform transition-transform ${isOpenServicios ? 'rotate-180' : ''}`}
                        >
                            <g clipPath="url(#A)">
                                <path
                                    d="M1 1l6 6 6-6"
                                    stroke="#000096"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </g>
                            <defs>
                                <clipPath id="A">
                                    <path fill="#fff" d="M0 0h14v8H0z"></path>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </h4>

                <div className={`md:block ${isOpenServicios ? 'block' : 'hidden'} md:hidden px-[30px]`}>
                    <ul className="block mb-[26px]">
                        <li className="mb-[6px] text-[12px] font-sans text-stratos-info">
                            <a href="#"> Rextie Business </a>
                        </li>
                        <li className="mb-[6px] text-[12px] font-sans text-stratos-info">
                            <a href="#"> Rextie Factoring </a>
                        </li>
                        <li className="mb-[6px] text-[12px] font-sans text-stratos-info">
                            <a href="#"> Confirming </a>
                        </li>
                        <li className="mb-[6px] text-[12px] font-sans text-stratos-info">
                            <a href="#"> Visa </a>
                            <span className="p-1 ml-1.5 bg-stratos-orange text-white text-[10px] rounded-[4px]">Nuevo</span>
                        </li>
                    </ul>
                </div>
                <hr className="border-gray-300 w-[90%] mx-auto mb-[26px] block md:hidden" />

                {/* Diseño desktop servicios */}
                <div className="hidden md:block">
                    <h4 className="mb-[26px] text-[16px] font-bold font-sans">Servicios</h4>
                    <ul className="block mb-[26px]">
                        <li className="mb-[6px] text-[12px] font-sans text-stratos-info">
                            <a href="#"> Rextie Business </a>
                        </li>
                        <li className="mb-[6px] text-[12px] font-sans text-stratos-info">
                            <a href="#"> Rextie Factoring </a>
                        </li>
                        <li className="mb-[6px] text-[12px] font-sans text-stratos-info">
                            <a href="#"> Confirming </a>
                        </li>
                        <li className="mb-[6px] text-[12px] font-sans text-stratos-info">
                            <a href="#"> Visa </a>
                            <span className="p-1 ml-1.5 bg-stratos-orange text-white text-[10px] rounded-[4px]">Nuevo</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Diseño mobile recursos */}
            <div className="flex flex-col items-stretch relative">
                <h4 className="mb-[26px] text-[16px] font-bold font-sans md:hidden px-[30px] flex items-center justify-between">
                    Recursos
                    <div
                        className="ml-2 cursor-pointer"
                        onClick={toggleRecursos}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="8"
                            fill="none"
                            viewBox="0 0 14 8"
                            className={`transform transition-transform ${isOpenServicios ? 'rotate-180' : ''}`}
                        >
                            <g clipPath="url(#A)">
                                <path
                                    d="M1 1l6 6 6-6"
                                    stroke="#000096"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </g>
                            <defs>
                                <clipPath id="A">
                                    <path fill="#fff" d="M0 0h14v8H0z"></path>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </h4>

                <div className={`md:block ${isOpenRecursos ? 'block' : 'hidden'} md:hidden px-[30px]`}>
                    <ul className="block mb-[26px]">
                        <li className="mb-[6px] text-[12px] font-sans text-stratos-info">
                            <a href="#"> Blog </a>
                        </li>
                        <li className="mb-[6px] text-[12px] font-sans text-stratos-info">
                            <a href="#"> Tipo de cambio </a>
                        </li>
                        <li className="mb-[6px] text-[12px] font-sans text-stratos-info">
                            <a href="#"> App para cambiar dolares </a>
                        </li>
                        <li className="mb-[6px] text-[12px] font-sans text-stratos-info">
                            <a href="#"> Cambio de Dólar a Soles </a>
                        </li>
                        <li className="mb-[6px] text-[12px] font-sans text-stratos-info">
                            <a href="#"> Precio del Dólar </a>
                        </li>
                        <li className="mb-[6px] text-[12px] font-sans text-stratos-info">
                            <a href="#"> Dólar </a>
                        </li>
                    </ul>
                </div>
                <hr className="border-gray-300 w-[90%] mx-auto mb-[26px] block md:hidden" />

                {/* Diseño desktop recursos */}
                <div className="hidden md:block">
                    <h4 className="mb-[26px] text-[16px] font-bold font-sans">Recursos</h4>
                    <ul className="block mb-[26px]">
                        <li className="mb-[6px] text-[12px] font-sans text-stratos-info">
                            <a href="#"> Blog </a>
                        </li>
                        <li className="mb-[6px] text-[12px] font-sans text-stratos-info">
                            <a href="#"> Tipo de cambio </a>
                        </li>
                        <li className="mb-[6px] text-[12px] font-sans text-stratos-info">
                            <a href="#"> App para cambiar dolares </a>
                        </li>
                        <li className="mb-[6px] text-[12px] font-sans text-stratos-info">
                            <a href="#"> Cambio de Dólar a Soles </a>
                        </li>
                        <li className="mb-[6px] text-[12px] font-sans text-stratos-info">
                            <a href="#"> Precio del Dólar </a>
                        </li>
                        <li className="mb-[6px] text-[12px] font-sans text-stratos-info">
                            <a href="#"> Dólar </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Diseño mobile soporte */}
            <div className="flex flex-col items-stretch relative">
                <h4 className="mb-[26px] text-[16px] font-bold font-sans md:hidden px-[30px] flex items-center justify-between">
                    Soporte
                    <div
                        className="ml-2 cursor-pointer"
                        onClick={toggleSoporte}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="8"
                            fill="none"
                            viewBox="0 0 14 8"
                            className={`transform transition-transform ${isOpenServicios ? 'rotate-180' : ''}`}
                        >
                            <g clipPath="url(#A)">
                                <path
                                    d="M1 1l6 6 6-6"
                                    stroke="#000096"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </g>
                            <defs>
                                <clipPath id="A">
                                    <path fill="#fff" d="M0 0h14v8H0z"></path>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </h4>
                <div className={`md:block ${isOpenSoporte ? 'block' : 'hidden'} md:hidden px-[30px]`}>
                    <ul className="block mb-[26px]">
                        <li className="mb-[6px] text-[12px] font-sans text-stratos-info">
                            <a href="#"> Preguntas frecuentes </a>
                        </li>
                        <li className="mb-[6px] text-[12px] font-sans text-stratos-info">
                            <a href="#"> Cómo cambiar dolares con REXTIE </a>
                        </li>
                        <li className="mb-[6px] text-[12px] font-sans text-stratos-info">
                            <a href="#"> Términos y Condiciones </a>
                        </li>
                        <li className="mb-[6px] text-[12px] font-sans text-stratos-info">
                            <a href="#"> Política de Cookies </a>
                        </li>
                        <li className="mb-[6px] text-[12px] font-sans text-stratos-info">
                            <a href="#"> Política de Privacidad </a>
                        </li>
                        <li className="mb-[6px] text-[12px] font-sans text-stratos-info">
                            <a href="#"> Mapa del sitio </a>
                        </li>
                    </ul>
                </div>
                <hr className="border-gray-300 w-[90%] mx-auto mb-[26px] block md:hidden" />


                {/* Diseño desktop soporte */}
                <div className="hidden md:block">
                    <h4 className="mb-[26px] text-[16px] font-bold font-sans">Soporte</h4>
                    <ul className="block mb-[26px]">
                        <li className="mb-[6px] text-[12px] font-sans text-stratos-info">
                            <a href="#"> Preguntas frecuentes </a>
                        </li>
                        <li className="mb-[6px] text-[12px] font-sans text-stratos-info">
                            <a href="#"> Cómo cambiar dolares con REXTIE </a>
                        </li>
                        <li className="mb-[6px] text-[12px] font-sans text-stratos-info">
                            <a href="#"> Términos y Condiciones </a>
                        </li>
                        <li className="mb-[6px] text-[12px] font-sans text-stratos-info">
                            <a href="#"> Política de Cookies </a>
                        </li>
                        <li className="mb-[6px] text-[12px] font-sans text-stratos-info">
                            <a href="#"> Política de Privacidad </a>
                        </li>
                        <li className="mb-[6px] text-[12px] font-sans text-stratos-info">
                            <a href="#"> Mapa del sitio </a>
                        </li>
                    </ul>
                </div>
            </div>
        </article>
    );
};

export default AcordionFooter;
