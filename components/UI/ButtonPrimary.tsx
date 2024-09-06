import React from 'react';

interface ButtonPrimaryProps {
    label: string;
    alternate?: boolean;
    className?: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ label, alternate, className }) => {
    return (
        <button
            className={`font-sans min-w-28 h-10 px-1h rounded-xl text-sm font-bold ng-star-inserted ${alternate
                ? 'bg-primary text-white'
                : 'bg-white text-primary'
                } ${className}`}
        >
            {label}
        </button>
    );
};

export default ButtonPrimary;
