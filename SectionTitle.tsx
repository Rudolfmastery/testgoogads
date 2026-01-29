import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, subtitle, className = '' }) => {
  return (
    <div className={`text-center mb-10 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 leading-tight">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-2 text-lg text-slate-600 font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;