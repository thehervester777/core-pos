import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const brands = [
  'Lazz Pharma',
  'Daily Shopping',
  'Kabab Factory',
  'Miniso BD',
  'Gentle Park',
  'Shwapno Express',
  'Aarong Partner',
  'Meena Bazar',
  'Lazz Pharma',
  'Daily Shopping',
  'Kabab Factory',
  'Miniso BD',
  'Gentle Park',
  'Shwapno Express',
  'Aarong Partner',
  'Meena Bazar',
];

export default function Brands() {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rowRef.current) return;

    const anim = gsap.to(rowRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 25,
      ease: 'none',
    });

    return () => {
      anim.kill();
    };
  }, []);

  return (
    <section
      id="brands-section"
      className="w-full bg-[#F0F7FF] py-12 md:py-20 overflow-hidden flex flex-col items-center justify-center border-t border-blue-200/50 relative"
    >
      {/* Soft fading edges */}
      <div className="absolute inset-y-0 left-0 w-12 sm:w-24 md:w-80 bg-gradient-to-r from-[#F0F7FF] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 sm:w-24 md:w-80 bg-gradient-to-l from-[#F0F7FF] to-transparent z-10 pointer-events-none" />

      <p className="text-[11px] sm:text-xs font-mono text-blue-900/60 font-medium uppercase tracking-widest mb-8 md:mb-10 text-center relative z-20 px-4">
        Trusted by Bangladesh's leading retail & healthcare networks
      </p>

      {/* Endless Marquee Wrapper */}
      <div className="flex overflow-hidden w-full relative z-0">
        <div
          ref={rowRef}
          className="flex whitespace-nowrap will-change-transform w-fit"
        >
          <div className="flex gap-10 sm:gap-16 md:gap-32 px-4 md:px-16 items-center">
            {brands.map((brand, i) => (
              <div
                key={i}
                className="text-xl sm:text-2xl md:text-4xl font-serif text-slate-400 hover:text-blue-600 transition-colors duration-500 cursor-pointer select-none font-normal"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
