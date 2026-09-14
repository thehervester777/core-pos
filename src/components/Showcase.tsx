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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section
      id="features"
      className="w-full bg-[#F0F7FF] text-slate-900 py-20 md:py-48 border-t border-blue-200/50 relative z-10 overflow-hidden"
    >
      {/* Huge background glow for volume */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400 opacity-[0.08] blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-center relative z-10">
        <span className="text-[11px] sm:text-xs font-mono text-blue-600 font-semibold uppercase tracking-widest mb-3 text-center tracking-[0.25em] sm:tracking-[0.3em]">
          Engine Modules
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-slate-900 text-center mb-10 md:mb-16 tracking-tight">
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
              onMouseMove={handleMouseMove}
              className="service-grid-card group relative w-full min-h-[380px] sm:min-h-[420px] md:h-[65vh] lg:h-[75vh] rounded-2xl sm:rounded-3xl overflow-hidden border border-blue-200/70 bg-white/80 hover:bg-white/95 backdrop-blur-2xl transition-all duration-500 cursor-default flex flex-col justify-between p-6 sm:p-8 shadow-[0_12px_40px_-8px_rgba(37,99,235,0.12),0_1px_2px_rgba(255,255,255,0.95)_inset] hover:shadow-[0_20px_50px_-8px_rgba(37,99,235,0.2),0_1px_2px_rgba(255,255,255,1)_inset] hover:border-blue-400/80"
            >
              {/* Dynamic mouse-following specular shine */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
                style={{
                  background:
                    'radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.12), transparent 60%)',
                }}
              />

              {/* Sleek gradient base */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-50/80 via-transparent to-transparent z-10 pointer-events-none" />

              {/* Hover Glow internal to card */}
              <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400 opacity-[0.08] group-hover:opacity-[0.2] blur-[100px] rounded-full transition-opacity duration-700 pointer-events-none z-0" />

              {/* Top Row: Number & Icon */}
              <div className="relative z-20 flex justify-between items-start w-full">
                <div className="font-serif text-5xl sm:text-6xl text-blue-200/80 group-hover:text-blue-300 transition-colors duration-700 font-bold">
                  0{i + 1}
                </div>
                <div className="text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform group-hover:scale-110 p-2.5 rounded-xl bg-blue-50/80 border border-blue-200/80 shadow-xs">
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
                <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif text-slate-900 leading-tight tracking-tight">
                  {service.title}
                </h3>

                {/* Expanding visual separator */}
                <div className="w-full h-px bg-blue-200 scale-x-100 md:scale-x-0 md:group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out" />

                {/* Details revealed on mobile and on hover on desktop */}
                <p className="text-sm md:text-base text-slate-600 font-sans leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 ease-out">
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
