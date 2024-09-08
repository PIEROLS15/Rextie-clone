'use client';

import React, { useState } from 'react';
import ButtonPrimary from '@/components/UI/ButtonPrimary';
import { linkClasses } from '@/components/UI/Style-text-header';
import { GiHamburgerMenu } from "react-icons/gi";
import HeaderMobile from '@/components/Shared/Header-mobile';

const Header: React.FC = () => {
    const [activeTab, setActiveTab] = useState('personas');
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para abrir/cerrar el menú móvil

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <section>
            {/* Menú para pantallas grandes */}
            <div className="hidden md:block">
                <ul className='max-w-7xl max-[1919px]:max-w-[75rem] mx-auto px-2.5 py-1.5 flex gap-[30px] list-none ng-star-inserted'>
                    <li
                        onClick={() => setActiveTab('personas')}
                        className={`font-sans text-white text-base cursor-pointer ${activeTab === 'personas' ? 'font-bold border-b-2 border-orange-500' : 'font-medium'}`}
                    >
                        Personas
                    </li>
                    <li
                        onClick={() => setActiveTab('empresas')}
                        className={`font-sans text-white text-base cursor-pointer ${activeTab === 'empresas' ? 'font-bold border-b-2 border-orange-500' : 'font-medium'}`}
                    >
                        Empresas
                    </li>
                </ul>
            </div>


            {/* Header para pantallas pequeñas y grandes */}
            <header className='font-size-14 z-[100] h-82 w-full left-0 top-0 md:top-10 ng-star-inserted'>
                <nav className='max-w-7xl max-[1919px]:max-w-[75rem] mx-auto flex items-center justify-between h-[82px] px-2.5 ng-star-inserted'>
                    <a href="" className='flex items-center border-none'>
                        <img src="/images/rextie-icon-redesign.svg" alt="rextie-logo" className="hidden md:block" />
                        <img src="/images/isotipo-rextie.svg" alt="rextie-logo-mobile" className="block md:hidden" />
                    </a>

                    {/* Menú para pantallas grandes */}
                    <ul className='line-menu grow-[3] flex-wrap pl-5 justify-end hidden min-[1025px]:flex ng-star-inserted'>
                        <li>
                            <a href="#"
                                className={`${linkClasses.base} ${linkClasses.after} ${linkClasses.hover}`}>
                                Nosotros
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                className={`${linkClasses.base} ${linkClasses.after} ${linkClasses.hover}`}>
                                Blog
                            </a>
                        </li>
                        <li className='mx-1h relative inline-block group'>
                            <button className='flex items-center w-full h-6 mx-3 text-white text-sm font-bold gap-2 border-none cursor-pointer p-0'>
                                Servicios
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1.25 1.12506L5 4.87506L8.75 1.12506" stroke="#FF6E00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </button>
                            <ul className="absolute left-0 w-full bg-white shadow-lg transition-all duration-100 ease-in-out max-h-0 overflow-hidden group-hover:max-h-48 flex flex-col items-center">
                                <li className="text-sm text-primary p-2">Factoring</li>
                                <li className="text-sm text-primary p-2">Visa</li>
                                <li className="text-sm text-primary p-2">Empresas</li>
                            </ul>
                        </li>
                    </ul>

                    <span
                        className="w-10 items-center justify-center hidden min-[1025px]:flex ng-star-inserted"
                        style={{ color: 'rgb(112, 126, 155)' }}
                    >
                        |
                    </span>

                    {/* Botones de "Iniciar Sesión" y "Regístrate" */}
                    <div className='flex items-center max-[599px]:grow ng-star-inserted'>
                        <section className='flex-grow flex items-center justify-end'>
                            <button className='text-secondary font-sans min-[480px]:text-white min-w-28 h-10 px-1h rounded-xl hover:bg-gray-hover-effect text-sm font-extrabold mr-5 ng-star-inserted'>
                                Iniciar Sesión
                            </button>

                            <ButtonPrimary label='Regístrate' alternate={true} />

                            {/* Icono de hamburguesa para pantallas móviles */}
                            <button
                                className="text-primary block md:hidden ml-2"
                                onClick={toggleMenu}
                            >
                                <GiHamburgerMenu size={24} />
                            </button>
                        </section>
                    </div>

                    {/* Menú móvil */}
                    <HeaderMobile
                        isMenuOpen={isMenuOpen}
                        onClose={() => setIsMenuOpen(false)}
                        activeTab={activeTab}
                        onTabChange={setActiveTab}
                    />
                </nav>
            </header>
        </section>
    );
}

export default Header;
