import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const paragraph =
  'We believe retail management should not be constrained by broken connections or complex spreadsheets. We architect uncompromised cloud POS ecosystems that empower Bangladeshi merchants, merging bulletproof offline speed with real-time financial intelligence.';

const words = paragraph.split(' ');

export default function Manifesto() {
  const manifestoRef = useRef<HTMLParagraphElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!manifestoRef.current) return;

    const spans = manifestoRef.current.querySelectorAll('.word');
    if (spans.length === 0) return;

    gsap.set(spans, {
      color: 'rgba(148, 163, 184, 0.45)',
      filter: 'blur(2.5px)',
      y: 4,
      autoAlpha: 0.4,
    });

    const anim = gsap.to(spans, {
      color: 'rgba(15, 23, 42, 1)',
      filter: 'blur(0px)',
      y: 0,
      autoAlpha: 1,
      stagger: 0.08,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: manifestoRef.current,
        start: 'top 82%',
        end: 'bottom 48%',
        scrub: 0.7,
      },
    });

    return () => {
      anim.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === manifestoRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="manifesto"
      className="w-full bg-[#F0F7FF] text-slate-900 py-20 md:py-40 px-4 sm:px-6 md:px-24 flex flex-col items-center justify-center border-t border-blue-200/50 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-300/15 blur-[130px] rounded-full pointer-events-none" />

      <span className="text-[11px] sm:text-xs font-mono text-blue-900/60 font-semibold uppercase tracking-widest mb-10 md:mb-16 text-center z-10">
        Core Philosophy
      </span>
      <p
        ref={manifestoRef}
        className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif text-center max-w-5xl w-full flex flex-wrap justify-center gap-x-2 sm:gap-x-3 gap-y-1.5 sm:gap-y-2 md:gap-y-4 relative z-10"
      >
        {words.map((word, i) => (
          <span
            key={i}
            className="word text-slate-300 transition-colors duration-300 pointer-events-none"
          >
            {word}
          </span>
        ))}
      </p>
    </section>
  );
}
