import React from 'react';

interface LogoProps {
  className?: string;
  id?: string;
  variant?: 'light' | 'dark';
}

export default function Logo({ className = '', id, variant = 'light' }: LogoProps) {
  const isDark = variant === 'dark';

  return (
    <div id={id} className={`flex items-center gap-2.5 select-none ${className}`}>
      <div className={`w-7 h-7 rounded-lg flex items-center justify-center relative overflow-hidden group transition-all duration-300 ${
        isDark
          ? 'bg-white/10 border border-white/20'
          : 'bg-gradient-to-br from-blue-600 to-blue-500 border border-blue-400/50 shadow-[0_2px_10px_rgba(37,99,235,0.35)]'
      }`}>
        <span className="font-mono text-sm font-bold text-white tracking-tighter z-10">c</span>
        <span className={`absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full ${
          isDark ? 'bg-[#3B82F6]' : 'bg-white/90 shadow-[0_0_4px_#fff]'
        }`} />
      </div>
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
