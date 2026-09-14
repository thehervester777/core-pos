import React from 'react';

interface LogoProps {
  className?: string;
  id?: string;
  variant?: 'light' | 'dark';
}

export default function Logo({ className = '', id, variant = 'light' }: LogoProps) {
  const isDark = variant === 'dark';

  return (
    <div id={id} className={`flex items-center gap-1.5 select-none ${className}`}>
      <div className="flex items-baseline tracking-tight">
        <span className={`font-sans font-semibold text-base ${isDark ? 'text-white' : 'text-slate-900'}`}>
          core
        </span>
        <span className={`font-sans text-base ml-0.5 ${isDark ? 'text-white/60 font-light' : 'text-blue-600 font-medium'}`}>
          Agency
        </span>
      </div>
    </div>
  );
}
