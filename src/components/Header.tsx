import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  onNavigate?: (id: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const iconsRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      const next = !prev;
      if (next) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      if (!mobileMenuRef.current) return next;

      if (next) {
        const tl = gsap.timeline();
        tl.to(mobileMenuRef.current, {
          autoAlpha: 1,
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 0.6,
          ease: 'power2.inOut',
        }).fromTo(
          mobileLinksRef.current.filter(Boolean),
          { y: 20, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.5,
            stagger: 0.06,
            ease: 'power2.out',
          },
          '-=0.3',
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          autoAlpha: 0,
          clipPath: 'inset(0% 100% 0% 0%)',
          duration: 0.4,
          ease: 'power2.inOut',
        });
      }
      return next;
    });
  };

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    if (isMenuOpen) {
      document.body.style.overflow = '';
      toggleMenu();
    }
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
    const mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: '(max-width: 767px)',
        isDesktop: '(min-width: 768px)',
      },
      (context) => {
        const { isMobile, isDesktop } = context.conditions as {
          isMobile: boolean;
          isDesktop: boolean;
        };

        if (!headerRef.current) return;

        const tl = gsap.timeline({ delay: 0.2 });

        gsap.set(headerRef.current, {
          width: '0px',
          opacity: 0,
          overflow: 'hidden',
        });
        if (logoRef.current) {
          gsap.set(logoRef.current, { autoAlpha: 0, y: 15, scale: 0.95 });
        }
        if (iconsRef.current) {
          gsap.set(iconsRef.current, { autoAlpha: 0, x: 10 });
        }
        if (mobileMenuRef.current) {
          gsap.set(mobileMenuRef.current, { clipPath: 'inset(0% 100% 0% 0%)' });
        }

        const validNavItems = navItemsRef.current.filter(Boolean);
        if (isDesktop && validNavItems.length > 0) {
          gsap.set(validNavItems, { autoAlpha: 0, y: 15 });
        }

        tl.to(headerRef.current, {
          width: isMobile ? 'calc(100% - 2rem)' : '100%',
          maxWidth: '896px',
          opacity: 1,
          duration: 1.2,
          ease: 'expo.inOut',
        });

        if (logoRef.current) {
          tl.to(
            logoRef.current,
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 1.2,
              ease: 'expo.out',
            },
            '-=0.2',
          );
        }

        if (isDesktop && validNavItems.length > 0) {
          tl.to(
            validNavItems,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.08,
              ease: 'power3.out',
            },
            '-=0.5',
          );
        }

        if (iconsRef.current) {
          tl.to(
            iconsRef.current,
            {
              autoAlpha: 1,
              x: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: 'power2.out',
            },
            '-=0.5',
          );
        }

        return () => {
          tl.kill();
        };
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <>
      <div
        ref={headerRef}
        id="header-bar"
        className="header opacity-0 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-4xl z-50 fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 bg-[#0A0A0A]/80 border border-white/10 h-[56px] sm:h-[60px] px-4 sm:pl-6 sm:pr-2 whitespace-nowrap flex justify-between items-center backdrop-blur-xl shadow-2xl"
        style={{ borderRadius: '100px' }}
      >
        <a
          id="logo"
          href="#agency"
          ref={logoRef}
          onClick={(e) => handleScroll(e, '#agency')}
          className="flex-shrink-0 flex items-center justify-center w-auto cursor-pointer mix-blend-difference"
        >
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <div id="nav" className="absolute left-1/2 -translate-x-1/2 hidden md:block">
          <ul className="flex space-x-8 text-sm font-medium text-white/70">
            <li ref={(el) => (navItemsRef.current[0] = el)}>
              <a
                href="#features"
                onClick={(e) => handleScroll(e, '#features')}
                className="hover:text-white transition-colors"
              >
                Features
              </a>
            </li>
            <li ref={(el) => (navItemsRef.current[1] = el)}>
              <a
                href="#industries"
                onClick={(e) => handleScroll(e, '#industries')}
                className="hover:text-white transition-colors"
              >
                Industries
              </a>
            </li>
            <li ref={(el) => (navItemsRef.current[2] = el)}>
              <a
                href="#terminal"
                onClick={(e) => handleScroll(e, '#terminal')}
                className="hover:text-white transition-colors"
              >
                Terminal
              </a>
            </li>
            <li ref={(el) => (navItemsRef.current[3] = el)}>
              <a
                href="#faq"
                onClick={(e) => handleScroll(e, '#faq')}
                className="hover:text-white transition-colors"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Right Controls */}
        <div
          ref={iconsRef}
          className="flex space-x-1 sm:space-x-3 items-center z-50"
        >
          <a
            id="nav-cta"
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="hidden md:flex items-center justify-center text-sm font-medium bg-white text-black hover:bg-white/80 transition-colors px-6 py-2 rounded-full"
          >
            Book Demo
          </a>
          <button
            id="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            className="cursor-pointer w-10 h-10 flex justify-center items-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors md:hidden"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Glassmorphism Mobile Menu Overlay */}
      <div
        ref={mobileMenuRef}
        id="mobile-menu-overlay"
        className="fixed inset-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-2xl flex flex-col justify-between invisible opacity-0 px-6 sm:px-10 pt-24 pb-8 overflow-y-auto"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#3B82F6] opacity-[0.08] blur-[100px] rounded-full pointer-events-none" />

        <ul className="flex flex-col space-y-5 text-left relative z-10 my-auto py-6">
          <li className="overflow-hidden">
            <a
              ref={(el) => (mobileLinksRef.current[0] = el)}
              href="#features"
              onClick={(e) => handleScroll(e, '#features')}
              className="block text-2xl sm:text-3xl font-sans font-light text-white/80 hover:text-white transition-colors will-change-transform py-1"
            >
              POS Features
            </a>
          </li>
          <li className="overflow-hidden">
            <a
              ref={(el) => (mobileLinksRef.current[1] = el)}
              href="#industries"
              onClick={(e) => handleScroll(e, '#industries')}
              className="block text-2xl sm:text-3xl font-sans font-light text-white/80 hover:text-white transition-colors will-change-transform py-1"
            >
              Industries We Serve
            </a>
          </li>
          <li className="overflow-hidden">
            <a
              ref={(el) => (mobileLinksRef.current[2] = el)}
              href="#terminal"
              onClick={(e) => handleScroll(e, '#terminal')}
              className="block text-2xl sm:text-3xl font-sans font-light text-white/80 hover:text-white transition-colors will-change-transform py-1"
            >
              Live Terminal Demo
            </a>
          </li>
          <li className="overflow-hidden">
            <a
              ref={(el) => (mobileLinksRef.current[3] = el)}
              href="#use-cases"
              onClick={(e) => handleScroll(e, '#use-cases')}
              className="block text-2xl sm:text-3xl font-sans font-light text-white/80 hover:text-white transition-colors will-change-transform py-1"
            >
              Use Cases & Operations
            </a>
          </li>
          <li className="overflow-hidden">
            <a
              ref={(el) => (mobileLinksRef.current[4] = el)}
              href="#roi-calculator"
              onClick={(e) => handleScroll(e, '#roi-calculator')}
              className="block text-2xl sm:text-3xl font-sans font-light text-white/80 hover:text-white transition-colors will-change-transform py-1"
            >
              ROI Estimator
            </a>
          </li>
          <li className="overflow-hidden">
            <a
              ref={(el) => (mobileLinksRef.current[5] = el)}
              href="#receipt-studio"
              onClick={(e) => handleScroll(e, '#receipt-studio')}
              className="block text-2xl sm:text-3xl font-sans font-light text-white/80 hover:text-white transition-colors will-change-transform py-1"
            >
              Receipt Studio
            </a>
          </li>
          <li className="overflow-hidden">
            <a
              ref={(el) => (mobileLinksRef.current[6] = el)}
              href="#cloud-sync"
              onClick={(e) => handleScroll(e, '#cloud-sync')}
              className="block text-2xl sm:text-3xl font-sans font-light text-white/80 hover:text-white transition-colors will-change-transform py-1"
            >
              Multi-Branch Cloud Sync
            </a>
          </li>
          <li className="overflow-hidden">
            <a
              ref={(el) => (mobileLinksRef.current[7] = el)}
              href="#faq"
              onClick={(e) => handleScroll(e, '#faq')}
              className="block text-2xl sm:text-3xl font-sans font-light text-white/80 hover:text-white transition-colors will-change-transform py-1"
            >
              FAQ
            </a>
          </li>
          <li className="overflow-hidden mt-4 pt-4 border-t border-white/10">
            <a
              ref={(el) => (mobileLinksRef.current[8] = el)}
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="inline-flex items-center gap-2 text-lg sm:text-xl font-sans text-white hover:text-white/80 transition-colors will-change-transform py-1"
            >
              Book a Live Demo &rarr;
            </a>
          </li>
        </ul>

        <div className="flex flex-col gap-1 text-[11px] font-mono text-white/40 uppercase tracking-widest relative z-10 shrink-0 sm:flex-row sm:gap-6 pt-4 border-t border-white/10">
          <span>Intelligent Cloud POS</span>
          <span>Bangladesh Nationwide</span>
        </div>
      </div>
    </>
  );
}
