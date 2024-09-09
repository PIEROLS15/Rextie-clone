import React, { useState } from 'react';
import ButtonPrimary from './ButtonPrimary';

const FxRates: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');
    const [isAnimating, setIsAnimating] = React.useState(false);

    const handleTabChange = (tab: 'buy' | 'sell') => {
        if (activeTab !== tab) {
            setIsAnimating(true);
            setTimeout(() => {
                setActiveTab(tab);
                setIsAnimating(false);
            }, 300); // Duración de la animación
        }
    };

    return (
        <div className="w-full bg-white pt-1 pr-6 pl-6 pb-6 rounded-[22px]">
            <div className="flex flex-col mt-6 rounded-[12.156px] text-center" style={{ backgroundColor: 'rgba(0, 36, 179, 0.102)' }}>
                <div className="flex flex-row m-1 justify-center items-center text-center">
                    <div
                        className={`price buy m-1 flex-grow flex-shrink basis-full max-w-[50%] h-[45px] flex items-center justify-center cursor-pointer ${activeTab === 'buy' ? 'bg-white rounded-[12.156px]' : 'hover:bg-white hover:rounded-[12.156px]'}`}
                        onClick={() => handleTabChange('buy')}
                    >
                        <div className="amount font-sans font-semibold text-secondary text-[12px] sm:text-[14px]">
                            <span>Compra</span>
                            <span> S/</span>3.7790
                        </div>
                    </div>

                    <div
                        className={`price sell m-1 flex-grow flex-shrink basis-full max-w-[50%] h-[45px] flex items-center justify-center cursor-pointer ${activeTab === 'sell' ? 'bg-white rounded-[12.156px]' : 'hover:bg-white hover:rounded-[12.156px]'}`}
                        onClick={() => handleTabChange('sell')}
                    >
                        <div className="amount font-sans font-semibold text-secondary text-[12px] sm:text-[14px]">
                            <span>Venta</span>
                            <span> S/</span>3.7815
                        </div>
                    </div>
                </div>


                {/* Contenedor para el contenido de las pestañas */}
                <div className="relative bg-white rounded-b-[12.156px]">
                    {/* Contenido de la pestaña activa */}
                    {activeTab === 'buy' && (
                        <div className="flex flex-col mt-6 items-center relative">
                            <div className="w-full border-[1px] border-[rgb(0,0,151,0.6)] p-[10px_14px] h-[72px] mb-[8px] rounded-[12px] flex items-center">
                                <div className="flex flex-col items-start w-full">
                                    <div className="text-secondary font-medium mb-1 font-sans text-xs">Envía</div>
                                    <div className="flex items-center w-full">
                                        <div className="flex items-center">
                                            <img src="/images/estados-unidos.png" alt="Flag of Peru" className="w-[18px] h-[14px] mr-2" />
                                            <span className="text-[16px] sm:text-[20px] text-secondary font-sans font-bold">USD</span>
                                        </div>
                                        <span className="ml-auto text-[16px] sm:text-[20px] text-secondary font-sans font-bold">$1,000.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center relative">
                                <div className={`absolute top-[-20px] w-[40px] h-[40px] rounded-full flex items-center justify-center bg-primary transition-transform duration-300 ${isAnimating ? 'animate-spin' : ''}`}>
                                    <img
                                        src="/images/loop-svgrepo-com.svg"
                                        alt="loop-arrow"
                                        className="w-[16px] h-[20px] text-white"
                                        style={{ filter: 'invert(100%)', transform: 'rotate(90deg)' }}
                                    />
                                </div>
                            </div>
                            <div className="w-full border-[1px] border-[rgb(0,0,151,0.6)] p-[10px_14px] h-[72px] rounded-[12px] flex items-center">
                                <div className="flex flex-col items-start w-full">
                                    <div className="text-secondary font-medium mb-1 font-sans text-xs">Envía</div>
                                    <div className="flex items-center w-full">
                                        <div className="flex items-center">
                                            <img src="/images/flag-for-flag-peru-svgrepo-com.svg" alt="Flag of Peru" className="w-[24px] h-[16px] mr-2" />
                                            <span className="text-[16px] sm:text-[20px] text-secondary font-sans font-bold">PEN</span>
                                        </div>
                                        <span className="ml-auto text-[16px] sm:text-[20px] text-secondary font-sans font-bold">S/ 3,772.50</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === 'sell' && (
                        <div className="flex flex-col mt-6 items-center relative">
                            <div className="w-full border-[1px] border-[rgb(0,0,151,0.6)] p-[10px_14px] h-[72px] mb-[8px] rounded-[12px] flex items-center">
                                <div className="flex flex-col items-start w-full">
                                    <div className="text-secondary font-medium mb-1 font-sans text-xs">Envía</div>
                                    <div className="flex items-center w-full">
                                        <div className="flex items-center">
                                            <img src="/images/flag-for-flag-peru-svgrepo-com.svg" alt="Flag of Peru" className="w-[24px] h-[16px] mr-2" />
                                            <span className="text-[16px] sm:text-[20px] text-secondary font-sans font-bold">PEN</span>
                                        </div>
                                        <span className="ml-auto text-[16px] sm:text-[20px] text-secondary font-sans font-bold">S/ 1,000.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center relative">
                                <div className={`absolute top-[-20px] w-[40px] h-[40px] rounded-full flex items-center justify-center bg-primary transition-transform duration-300 ${isAnimating ? 'animate-spin' : ''}`}>
                                    <img
                                        src="/images/loop-svgrepo-com.svg"
                                        alt="loop-arrow"
                                        className="w-[16px] h-[20px] text-white"
                                        style={{ filter: 'invert(100%)', transform: 'rotate(90deg)' }}
                                    />
                                </div>
                            </div>
                            <div className="w-full border-[1px] border-[rgb(0,0,151,0.6)] p-[10px_14px] h-[72px] rounded-[12px] flex items-center">
                                <div className="flex flex-col items-start w-full">
                                    <div className="text-secondary font-medium mb-1 font-sans text-xs">Envía</div>
                                    <div className="flex items-center w-full">
                                        <div className="flex items-center">
                                            <img src="/images/estados-unidos.png" alt="Flag of Peru" className="w-[18px] h-[14px] mr-2" />
                                            <span className="text-[16px] sm:text-[20px] text-secondary font-sans font-bold">USD</span>
                                        </div>
                                        <span className="ml-auto text-[16px] sm:text-[20px] text-secondary font-sans font-bold">$262.85</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <button className='flex items-center w-full font-sans text-xs mt-4 mb-6 justify-center gap-[5px] font-extrabold '
                style={{
                    color: '#0094b3',
                }}
            >
                Usar un cupón o código
            </button>
            <div className='flex flex-row justify-center items-center mb-[3px] pb-[9px] gap-[5px]'>
                <strong className='font-[600] text-sm text-secondary font-sans text-[12px] sm:text-[14px]'>Ahorro promedio* </strong>
                <img src="/images/save-money-blue-icon-copy.svg" alt="Flag of Peru" className="w-[24px] h-[19px] mr-[3px]" />
                <strong className='font-[600] text-sm text-secondary font-sans'>S/ 110.00</strong>
            </div>
            <div className='w-full'>
                <ButtonPrimary label='Ingresa a Rextie' alternate={true} className="w-full h-[56px] text-[15px] font-extrabold" />
            </div>


        </div>
    );
}

export default FxRates;
