import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface HeroProps {
  onNavigate?: (id: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const bgRef = useRef<HTMLDivElement>(null);
  const word1Ref = useRef<HTMLDivElement>(null);
  const word2Ref = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaContainerRef = useRef<HTMLDivElement>(null);

  const handleCtaClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(targetId);
    } else {
      const target = document.querySelector(targetId);
      if (target) {
        const top = (target as HTMLElement).offsetTop - 40;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    const words = [word1Ref.current, word2Ref.current].filter(Boolean);

    if (bgRef.current) {
      gsap.set(bgRef.current, { autoAlpha: 0, scale: 1.05 });
    }
    if (words.length > 0) {
      gsap.set(words, { yPercent: 120, rotateZ: 2 });
    }
    if (descRef.current && ctaContainerRef.current) {
      gsap.set([descRef.current, ctaContainerRef.current], {
        y: 20,
        autoAlpha: 0,
      });
    }

    if (bgRef.current) {
      tl.to(bgRef.current, {
        autoAlpha: 0.6,
        scale: 1,
        duration: 2.5,
        ease: 'power2.out',
      });
    }

    if (words.length > 0) {
      tl.to(
        words,
        {
          yPercent: 0,
          rotateZ: 0,
          duration: 1.4,
          stagger: 0.1,
          ease: 'expo.out',
        },
        '-=1.5',
      );
    }

    if (descRef.current) {
      tl.to(
        descRef.current,
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.2,
          ease: 'power3.out',
        },
        '-=1.0',
      );
    }

    if (ctaContainerRef.current) {
      tl.to(
        ctaContainerRef.current,
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.2,
          ease: 'power3.out',
        },
        '-=1.0',
      );
    }

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      if (bgRef.current) {
        gsap.to(bgRef.current, {
          x: x * -1,
          y: y * -1,
          duration: 2,
          ease: 'power2.out',
        });
      }

      if (words.length > 0) {
        gsap.to(words, {
          x: x,
          y: y,
          duration: 1.5,
          ease: 'power2.out',
          stagger: 0.01,
        });
      }
    };

    if (window.innerWidth > 768) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      tl.kill();
    };
  }, []);

  return (
    <section
      id="agency"
      className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden text-center pt-28 pb-16 md:pt-32 md:pb-20"
    >
      {/* Cinematic Backing */}
      <div
        ref={bgRef}
        className="absolute -inset-12 z-0 pointer-events-none will-change-transform hero-field"
      >
        <div className="absolute inset-0 bg-linear-to-b from-[#050505]/40 via-[#050505]/10 to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#050505_90%)]" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 max-w-7xl mx-auto my-auto">
        <h1 className="text-4xl sm:text-6xl md:text-[7.2vw] font-serif leading-[1.08] md:leading-[0.92] tracking-tight text-white max-w-[95vw] md:max-w-7xl mx-auto flex flex-col items-center mix-blend-difference mb-4">
          <div className="overflow-hidden pb-2 md:pb-4 -mb-2 md:-mb-4">
            <div
              ref={word1Ref}
              className="flex items-center justify-center pt-2 will-change-transform text-center"
            >
              Next-Gen Retail Engine
            </div>
          </div>
          <div className="overflow-hidden pb-4 md:pb-6 -mb-4 md:-mb-6">
            <div
              ref={word2Ref}
              className="hero-second-line flex items-center justify-center gap-2 sm:gap-4 md:gap-6 will-change-transform pt-2"
            >
              <span className="italic text-white/50 font-serif">
                for smart
              </span>{' '}
              commerce.
            </div>
          </div>
        </h1>

        <p
          ref={descRef}
          className="text-sm sm:text-base md:text-xl text-white/60 max-w-3xl mt-4 sm:mt-6 font-sans font-light leading-relaxed mix-blend-difference px-2 sm:px-4"
        >
          core Agency offers powerful, industry-specific software designed to simplify business operations—whether you're running a retail shop, apparel store, chain restaurant, pharmacy, or distribution network. Manage your entire business from anywhere with our cloud-based solutions.
        </p>

        {/* Industry Pills */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-2xl px-2">
          {['Retail POS', 'Pharmacy POS', 'Restaurant POS', 'NBR VAT', 'Ecommerce Sync', 'Distribution ERP'].map((tag) => (
            <span
              key={tag}
              className="text-[10px] sm:text-[11px] md:text-xs font-mono uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/60"
            >
              {tag}
            </span>
          ))}
        </div>

        <div ref={ctaContainerRef} className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 z-20 w-full sm:w-auto px-4 sm:px-0 justify-center items-center">
          <a
            id="hero-cta-terminal"
            href="#terminal"
            onClick={(e) => handleCtaClick(e, '#terminal')}
            className="w-full sm:w-auto text-center px-8 py-3.5 sm:py-4 bg-white text-black rounded-full font-sans font-medium hover:bg-[#3B82F6] hover:text-white transition-all duration-500 cursor-pointer shadow-[0_0_40px_rgba(255,255,255,0.15)] inline-block"
          >
            Launch Live Terminal
          </a>
          <a
            id="hero-cta-features"
            href="#features"
            onClick={(e) => handleCtaClick(e, '#features')}
            className="w-full sm:w-auto text-center px-8 py-3.5 sm:py-4 bg-transparent text-white border border-white/20 rounded-full font-sans font-medium hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-all duration-500 cursor-pointer inline-block"
          >
            Explore Features Map
          </a>
        </div>
      </div>
    </section>
  );
}
