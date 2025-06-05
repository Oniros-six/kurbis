import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
    return (
        <button
        className={`py-1 px-4 rounded-full bg-gradient-to-r from-[#eb7628] via-[var(--color-pumpkin)] to-[#eb7628] text-white  ${className || ''}`}
        {...props}
        >
            {children}
        </button>
    );
};

export default Button;
