import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`w-full py-4 px-6 text-white font-bold text-lg rounded-full shadow-lg transform transition-transform hover:scale-105 active:scale-95 bg-gradient-to-r from-red-500 via-pink-600 to-purple-700 uppercase ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;