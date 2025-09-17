import React from 'react';

interface LogoProps {
  isScrolled?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ isScrolled = false }) => {
  return (
    <div className="relative group">
      <h1 className={`text-2xl md:text-3xl font-bold tracking-tight ${
        isScrolled ? 'text-primary-900' : 'text-primary-900'
      }`}>
        <span className="inline-block transform transition-transform duration-300 group-hover:scale-110">
          bin
        </span>
        <span className={`inline-block transform transition-all duration-300 ${
          isScrolled ? 'text-accent-600' : 'text-accent-600'
        } group-hover:translate-x-1 group-hover:scale-110`}>
          cot
        </span>
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-600 transition-all duration-300 group-hover:w-full"></span>
      </h1>
    </div>
  );
};