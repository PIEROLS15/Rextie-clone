'use client';

import React from 'react';
import { IoClose } from "react-icons/io5";
import ButtonSecondary from '@/components/UI/ButtonSecondary';
import Accordion from '@/components/UI/Acordion-header-mobile';

interface HeaderMobileProps {
    isMenuOpen: boolean;
    onClose: () => void;
    activeTab: string;
    onTabChange: (tab: string) => void;
}

const HeaderMobile: React.FC<HeaderMobileProps> = ({ isMenuOpen, onClose, activeTab, onTabChange }) => {
    return (
        <div
            className={`fixed inset-0 bg-white z-50 flex flex-col items-center justify-start transform transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
            {/* Botón de cierre (X) */}
            <section className="w-full px-5 h-[74px] flex items-center justify-between gap-[10px] relative">
                <button
                    className="text-black"
                    onClick={onClose}
                >
                    <IoClose size={24} />
                </button>
                <span>
                    <img src="/images/isotipo-rextie.svg" alt="rextie-logo-mobile" className="block md:hidden" />
                </span>
                <button className='text-black font-sans h-10 px-1 text-sm font-bold'>
                    Iniciar Sesión
                </button>
                <ButtonSecondary label='Regístrate' alternate={true} />
            </section>

            <ul className='flex justify-around py-3.5 w-full bg-stratos-muted'>
                <li
                    onClick={() => onTabChange('personas')}
                    className={`font-sans ${activeTab === 'personas' ? 'font-extrabold border-b-2 border-orange-500' : 'font-semibold'} text-stratos-text text-base cursor-pointer`}
                >
                    Personas
                </li>
                <li
                    onClick={() => onTabChange('empresas')}
                    className={`font-sans ${activeTab === 'empresas' ? 'font-extrabold border-b-2 border-orange-500' : 'font-semibold'} text-stratos-text text-base cursor-pointer`}
                >
                    Empresas
                </li>
            </ul>
            <span className='text-stratos-text font-sans w-full font-medium py-3 px-5'>
                <a href="#">Nosotros</a>
            </span>
            <hr className="w-full border-gray-300" />

            <span className='text-stratos-text font-sans w-full font-medium py-3 px-5'>
                <a href="#">Blog</a>
            </span>
            <hr className="w-full border-gray-300" />

            <div className='w-full'>
                <Accordion />
            </div>
            <hr className="w-full border-gray-300" />
        </div>
    );
}

export default HeaderMobile;
