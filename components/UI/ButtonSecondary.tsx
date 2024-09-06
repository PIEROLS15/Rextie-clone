import React from 'react';

interface ButtonSecondaryProps {
    label: string;
    alternate?: boolean;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({ label, alternate }) => {
    return (
        <button
            className={`font-sans min-w-28 h-10 px-1h rounded-md text-sm font-bold ng-star-inserted ${alternate
                ? 'bg-stratos-accent text-white'
                : 'bg-white text-primary'
                }`}
        >
            {label}
        </button>
    );
};

export default ButtonSecondary;
