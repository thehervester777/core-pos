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

    const anim = gsap.to(spans, {
      color: 'rgba(255,255,255,1)',
      stagger: 0.1,
      ease: 'none',
      scrollTrigger: {
        trigger: manifestoRef.current,
        start: 'top 80%',
        end: 'bottom 50%',
        scrub: 1,
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
      className="w-full bg-[#050505] text-white py-20 md:py-48 px-4 sm:px-6 md:px-24 flex flex-col items-center justify-center border-t border-white/5 relative"
    >
      <span className="text-[11px] sm:text-xs font-mono text-white/30 uppercase tracking-widest mb-10 md:mb-16 text-center">
        Core Philosophy
      </span>
      <p
        ref={manifestoRef}
        className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif text-center max-w-5xl w-full flex flex-wrap justify-center gap-x-2 sm:gap-x-3 gap-y-1.5 sm:gap-y-2 md:gap-y-4"
      >
        {words.map((word, i) => (
          <span
            key={i}
            className="word text-white/10 transition-colors duration-300 pointer-events-none"
          >
            {word}
          </span>
        ))}
      </p>
    </section>
  );
}
