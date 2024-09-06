import React from 'react';

interface ButtonSecondaryProps {
    label: string;
    alternate?: boolean;
    className?: string;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({ label, alternate, className }) => {
    return (
        <button
            className={`font-sans min-w-28 h-10 px-1h rounded-md text-sm font-bold ng-star-inserted ${alternate
                ? 'bg-stratos-accent text-white'
                : 'bg-white text-primary'
                } ${className}`}
        >
            {label}
        </button>
    );
};

export default ButtonSecondary;
