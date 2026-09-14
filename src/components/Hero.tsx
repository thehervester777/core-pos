import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import AgencyCloudDashboard from './AgencyCloudDashboard';

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
      className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden text-center pt-28 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-[#F0F7FF] via-[#EAF3FE] to-[#F0F7FF]"
    >
      {/* Cinematic Glossy Backing */}
      <div
        ref={bgRef}
        className="absolute -inset-12 z-0 pointer-events-none will-change-transform hero-field"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-blue-400/25 via-sky-300/30 to-blue-600/15 blur-[120px] rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-cyan-300/20 blur-[90px] rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F7FF]/20 via-transparent to-[#F0F7FF]" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 max-w-7xl mx-auto my-auto">
        <h1 className="text-4xl sm:text-6xl md:text-[7.2vw] font-serif leading-[1.08] md:leading-[0.92] tracking-tight text-slate-900 max-w-[95vw] md:max-w-7xl mx-auto flex flex-col items-center mb-4">
          <div className="overflow-hidden pb-2 md:pb-4 -mb-2 md:-mb-4">
            <div
              ref={word1Ref}
              className="flex items-center justify-center pt-2 will-change-transform text-center text-slate-900"
            >
              Next-Gen Retail Engine
            </div>
          </div>
          <div className="overflow-hidden pb-4 md:pb-6 -mb-4 md:-mb-6">
            <div
              ref={word2Ref}
              className="hero-second-line flex items-center justify-center gap-2 sm:gap-4 md:gap-6 will-change-transform pt-2"
            >
              <span className="italic text-blue-600 font-serif">
                for smart
              </span>{' '}
              <span className="text-slate-900">commerce.</span>
            </div>
          </div>
        </h1>

        <p
          ref={descRef}
          className="text-sm sm:text-base md:text-xl text-slate-600 max-w-3xl mt-4 sm:mt-6 font-sans font-normal leading-relaxed px-2 sm:px-4"
        >
          core Agency offers powerful, industry-specific software designed to simplify business operations—whether you're running a retail shop, apparel store, chain restaurant, pharmacy, or distribution network. Manage your entire business from anywhere with our cloud-based solutions.
        </p>

        {/* Industry Pills */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-2xl px-2">
          {['Retail POS', 'Pharmacy POS', 'Restaurant POS', 'NBR VAT', 'Ecommerce Sync', 'Distribution ERP'].map((tag) => (
            <span
              key={tag}
              className="text-[10px] sm:text-[11px] md:text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-blue-200/70 text-blue-800 shadow-[0_2px_8px_rgba(37,99,235,0.06)] font-medium"
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
            className="w-full sm:w-auto text-center px-8 py-3.5 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-sans font-medium hover:from-blue-700 hover:to-blue-600 transition-all duration-300 cursor-pointer shadow-[0_8px_25px_rgba(37,99,235,0.32)] hover:shadow-[0_12px_32px_rgba(37,99,235,0.45)] inline-block"
          >
            Launch Live Terminal
          </a>
          <a
            id="hero-cta-features"
            href="#features"
            onClick={(e) => handleCtaClick(e, '#features')}
            className="w-full sm:w-auto text-center px-8 py-3.5 sm:py-4 bg-white/80 backdrop-blur-md text-slate-800 border border-blue-200/80 rounded-full font-sans font-medium hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-all duration-300 cursor-pointer shadow-[0_4px_16px_rgba(37,99,235,0.08)] inline-block"
          >
            Explore Features Map
          </a>
        </div>

        {/* Hero Real-time Stats (from Netlify Original) */}
        <div className="mt-12 sm:mt-16 w-full max-w-3xl mx-auto grid grid-cols-3 gap-3 sm:gap-6 pt-8 border-t border-blue-200/60 text-center">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-serif tracking-tight">
              10,000+
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-500 font-sans font-medium mt-1">
              Active Outlets
            </p>
          </div>
          <div className="flex flex-col items-center border-x border-blue-200/60 px-2 sm:px-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-600 font-serif tracking-tight">
              ৳50 Billion+
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-500 font-sans font-medium mt-1">
              Sales Processed
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-serif tracking-tight">
              99.99%
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-500 font-sans font-medium mt-1">
              Replication Uptime
            </p>
          </div>
        </div>

        {/* macOS-Style core Agency Cloud Dashboard Mockup */}
        <div className="w-full mt-10 sm:mt-14 relative z-20">
          <AgencyCloudDashboard />
        </div>

        {/* Interactive Demo Scroll Indicator */}
        <div className="mt-8 flex flex-col items-center gap-2 text-slate-400 select-none pb-2">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase font-semibold text-slate-500">
            Interactive Cloud Demo &bull; Click Tabs To Explore
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-slate-300 flex items-start justify-center p-1">
            <div className="w-1.5 h-2 rounded-full bg-blue-500 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
