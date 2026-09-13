import React from 'react';

interface LogoProps {
  className?: string;
  id?: string;
}

export default function Logo({ className = '', id }: LogoProps) {
  return (
    <div id={id} className={`flex items-center gap-2.5 select-none ${className}`}>
      <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-[#3B82F6] opacity-20" />
        <span className="font-mono text-sm font-bold text-white tracking-tighter">c</span>
        <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
      </div>
      <div className="flex items-baseline tracking-tight">
        <span className="text-white font-sans font-medium text-base">core</span>
        <span className="text-white/60 font-sans font-light text-base ml-0.5">Agency</span>
      </div>
    </div>
  );
}
