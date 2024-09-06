import { useState } from 'react';

const Accordion = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full">
            <div
                className="flex justify-between items-center cursor-pointer w-full py-3 px-5"
                onClick={toggleAccordion}
            >
                <span className='text-stratos-text font-sans font-medium'>
                    <a href="#">Servicios</a>
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#F97316"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                >
                    <path d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            {isOpen && (
                <div className="w-full">
                    <ul>
                        <li className='bg-stratos-muted text-stratos-text font-sans w-full font-medium py-3 px-7 border-t  border-gray-300'>
                            Tipo de cambio
                        </li>
                        <li className='bg-stratos-muted text-stratos-text font-sans w-full font-medium py-3 px-7 border-t  border-gray-300'>
                            Rextie Factoring
                        </li>
                        <li className='bg-stratos-muted text-stratos-text font-sans w-full font-medium py-3 px-7 border-t  border-gray-300'>
                            Confirming
                        </li>
                        <li className='bg-stratos-muted text-stratos-text font-sans w-full font-medium py-3 px-7 border-t  border-gray-300'>
                            Rextie Business
                        </li>
                        <li className='bg-stratos-muted text-stratos-text font-sans w-full font-medium py-3 px-7 border-t  border-gray-300'>
                            Visa
                            <span className='p-1 ml-1.5 bg-stratos-orange text-white text-xs rounded-md'>
                                Nuevo
                            </span>

                        </li>
                    </ul>

                </div>
            )}
        </div>
    );
};

export default Accordion;
