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
      className="w-full bg-[#050505] py-12 md:py-24 overflow-hidden flex flex-col items-center justify-center border-t border-white/5 relative"
    >
      {/* Extreme fading edges for soft integration */}
      <div className="absolute inset-y-0 left-0 w-12 sm:w-24 md:w-80 bg-linear-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 sm:w-24 md:w-80 bg-linear-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      <p className="text-[11px] sm:text-xs font-mono text-white/40 uppercase tracking-widest mb-8 md:mb-10 text-center relative z-20 px-4">
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
                className="text-xl sm:text-2xl md:text-4xl font-serif text-white/30 hover:text-white transition-colors duration-700 cursor-pointer select-none"
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
