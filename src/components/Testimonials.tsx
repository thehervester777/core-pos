import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { TestimonialItem } from '../types';

const feedbacks: TestimonialItem[] = [
  {
    name: 'Head of Operations',
    role: 'Major Healthcare & Pharmacy Chain, Dhaka',
    text: 'The dual-mode offline checkout ensures zero counter halts during network outages, while drug expiry batch warnings saved us lakhs in preventable medicine losses.',
  },
  {
    name: 'Retail Operations Director',
    role: 'Superstore & Grocery Network, Chittagong',
    text: 'Reconciling bKash and card settlements across 16 branches used to require days of manual bookwork. With core Agency, daily audit and NBR VAT reports are instantaneous.',
  },
  {
    name: 'Managing Partner',
    role: 'Casual Dining & Restaurant Group, Gulshan',
    text: 'Kitchen display ticketing (KOT) and table seat mapping cut down our dinner rush order turnaround time by 40% while preventing kitchen miscommunications.',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const quoteRef = useRef<HTMLHeadingElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);
  const timerRef = useRef<number | null>(null);

  const goToQuote = (index: number) => {
    if (index === currentIndex || isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    const targets = [quoteRef.current, nameRef.current].filter(Boolean);

    gsap.to(targets, {
      autoAlpha: 0,
      y: 10,
      duration: 0.5,
      ease: 'power2.inOut',
      onComplete: () => {
        setCurrentIndex(index);
        gsap.fromTo(
          targets,
          { autoAlpha: 0, y: -10 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            onComplete: () => {
              isAnimatingRef.current = false;
              timerRef.current = window.setInterval(() => {
                nextQuote();
              }, 6000);
            },
          },
        );
      },
    });
  };

  const nextQuote = () => {
    if (isAnimatingRef.current) return;
    setCurrentIndex((prev) => {
      const nextIndex = (prev + 1) % feedbacks.length;
      goToQuote(nextIndex);
      return prev;
    });
  };

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % feedbacks.length;
        if (!isAnimatingRef.current) {
          isAnimatingRef.current = true;
          const targets = [quoteRef.current, nameRef.current].filter(Boolean);
          gsap.to(targets, {
            autoAlpha: 0,
            y: 10,
            duration: 0.5,
            ease: 'power2.inOut',
            onComplete: () => {
              setCurrentIndex(next);
              gsap.fromTo(
                targets,
                { autoAlpha: 0, y: -10 },
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.8,
                  stagger: 0.15,
                  ease: 'power2.out',
                  onComplete: () => {
                    isAnimatingRef.current = false;
                  },
                },
              );
            },
          });
        }
        return prev;
      });
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <section
      id="testimonials"
      className="w-full bg-[#F0F7FF] text-slate-900 py-20 sm:py-32 md:py-48 flex items-center justify-center relative overflow-hidden border-t border-blue-200/50"
    >
      {/* Soft blue glossy background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-blue-400/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <span className="text-xs font-mono text-blue-600 font-semibold uppercase tracking-widest mb-8 sm:mb-12 md:mb-16">
          Client Voices
        </span>

        <h3
          ref={quoteRef}
          className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-serif text-slate-800 leading-[1.4] md:leading-[1.2] tracking-tight mb-8 sm:mb-12 md:mb-16 flex items-center justify-center will-change-transform min-h-[140px] sm:min-h-[180px] md:min-h-auto"
        >
          "{feedbacks[currentIndex].text}"
        </h3>

        <div
          ref={nameRef}
          className="flex flex-col items-center gap-2 sm:gap-3 will-change-transform"
        >
          <h4 className="text-slate-900 font-semibold text-xs sm:text-sm md:text-base uppercase tracking-widest">
            {feedbacks[currentIndex].name}
          </h4>
          <span className="text-xs sm:text-sm font-sans text-slate-500 max-w-md font-medium">
            {feedbacks[currentIndex].role}
          </span>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center gap-2 sm:gap-3 mt-8 sm:mt-12 md:mt-16">
          {feedbacks.map((_, i) => (
            <button
              key={i}
              id={`testimonial-dot-${i + 1}`}
              className="p-1 cursor-pointer focus:outline-none"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goToQuote(i)}
            >
              <span
                className={`block h-2 rounded-full transition-all duration-500 ease-out ${
                  currentIndex === i
                    ? 'w-8 bg-blue-600 shadow-[0_2px_8px_rgba(37,99,235,0.35)]'
                    : 'w-2 bg-blue-200/80 hover:bg-blue-400/80'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
