import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: 'Dual Mode (Offline POS)',
    desc: 'Local internet down? No problem. Ring up sales, scan items, and print tickets fully offline. The system auto-syncs to the cloud the millisecond connection returns.',
    icon: 'M13 10V3L4 14h7v8l9-11h-7z',
  },
  {
    title: 'Local MFS Checkout',
    desc: 'Native integration with bKash Merchant API, Nagad, Rocket, and Visa/Mastercard. Auto-reconcile transactions and generate payment confirmation links instantly.',
    icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    title: 'Multi-Branch Syncing',
    desc: 'Real-time analytics across all your warehouses and outlets in Dhaka, Chittagong, Sylhet, and beyond. Monitor sales, transfers, and staff shifts remotely.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  },
];

export default function Showcase() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll('.service-grid-card');
    if (cards.length === 0) return;

    const anim = gsap.fromTo(
      cards,
      { y: 60, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        },
      },
    );

    return () => {
      anim.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === gridRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section
      id="features"
      className="w-full bg-[#050505] text-white py-20 md:py-48 border-t border-white/5 relative z-10 overflow-hidden"
    >
      {/* Huge background glow for volume */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3B82F6] opacity-[0.02] blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-center">
        <span className="text-[11px] sm:text-xs font-mono text-white/40 uppercase tracking-widest mb-3 text-center tracking-[0.25em] sm:tracking-[0.3em]">
          Engine Modules
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-white text-center mb-10 md:mb-16 tracking-tight">
          Powerful Modules for High Growth
        </h2>

        <div
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 w-full"
        >
          {services.map((service, i) => (
            <div
              key={i}
              id={`service-card-${i + 1}`}
              className="service-grid-card group relative w-full min-h-[380px] sm:min-h-[420px] md:h-[65vh] lg:h-[75vh] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0A] hover:bg-[#0A0A0A] transition-colors duration-700 cursor-default flex flex-col justify-between p-6 sm:p-8"
            >
              {/* Sleek gradient base */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent z-10 pointer-events-none" />

              {/* Hover Glow internal to card */}
              <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#3B82F6] opacity-[0.03] group-hover:opacity-[0.12] blur-[100px] rounded-full transition-opacity duration-700 pointer-events-none z-0" />

              {/* Top Row: Number & Icon */}
              <div className="relative z-20 flex justify-between items-start w-full">
                <div className="font-serif text-5xl sm:text-6xl text-white/10 group-hover:text-white/20 transition-colors duration-700">
                  0{i + 1}
                </div>
                <div className="text-white/40 group-hover:text-[#3B82F6] transition-colors duration-700 transform group-hover:scale-110 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d={service.icon}
                    />
                  </svg>
                </div>
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-20 flex flex-col gap-3 sm:gap-4 md:gap-6 transform-gpu transition-all duration-700 md:group-hover:-translate-y-2 mt-12 sm:mt-16">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif text-white leading-tight tracking-tight">
                  {service.title}
                </h3>

                {/* Expanding visual separator */}
                <div className="w-full h-px bg-white/20 scale-x-100 md:scale-x-0 md:group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out" />

                {/* Details revealed on mobile and on hover on desktop */}
                <p className="text-sm md:text-base text-white/60 font-sans leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 ease-out">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
