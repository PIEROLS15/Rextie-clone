import React, { useState } from 'react';

const FxRates: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');

    return (
        <div className="w-full bg-white pt-1 pr-6 pl-6 pb-6 rounded-[22px]">
            <div className="flex flex-col my-6 rounded-[12.156px] text-center" style={{ backgroundColor: 'rgba(0, 36, 179, 0.102)' }}>
                <div className="flex flex-row m-1 mb-[3px] justify-center items-center text-center">
                    <div
                        className={`price buy m-1 flex-grow flex-shrink basis-full max-w-[50%] h-[45px] flex items-center justify-center cursor-pointer ${activeTab === 'buy' ? 'bg-white rounded-[12.156px]' : 'hover:bg-white hover:rounded-[12.156px]'}`}
                        onClick={() => setActiveTab('buy')}
                    >
                        <div className="amount font-sans font-semibold text-secondary text-[14px]">
                            <span>Compra</span>
                            <span> S/</span>3.7790
                        </div>
                    </div>

                    <div
                        className={`price sell m-1 flex-grow flex-shrink basis-full max-w-[50%] h-[45px] flex items-center justify-center cursor-pointer ${activeTab === 'sell' ? 'bg-white rounded-[12.156px]' : 'hover:bg-white hover:rounded-[12.156px]'}`}
                        onClick={() => setActiveTab('sell')}
                    >
                        <div className="amount font-sans font-semibold text-secondary text-[14px]">
                            <span>Compra</span>
                            <span> S/</span>3.7815
                        </div>
                    </div>
                </div>

                {/* Contenedor para el contenido de las pestañas */}
                <div className="p-4 bg-red-800 rounded-b-[12.156px]">
                    {/* Contenido de la pestaña activa */}
                    {activeTab === 'buy' && (
                        <div>
                            {/* Contenido para la pestaña "Compra" */}
                            <p>Contenido de la pestaña Compra</p>
                        </div>
                    )}
                    {activeTab === 'sell' && (
                        <div>
                            {/* Contenido para la pestaña "Venta" */}
                            <p>Contenido de la pestaña Venta</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FxRates;
