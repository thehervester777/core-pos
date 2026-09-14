import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Cursor from './components/Cursor';
import Header from './components/Header';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Brands from './components/Brands';
import Showcase from './components/Showcase';
import WorksList from './components/WorksList';
import TerminalSimulator from './components/TerminalSimulator';
import OperationsUseCases from './components/OperationsUseCases';
import RoiEstimator from './components/RoiEstimator';
import ReceiptStudio from './components/ReceiptStudio';
import EcosystemIntegrations from './components/EcosystemIntegrations';
import BranchMapSync from './components/BranchMapSync';
import ComparisonTable from './components/ComparisonTable';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Faq from './components/Faq';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Connect Lenis with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const rafTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(rafTicker);
    gsap.ticker.lagSmoothing(0);

    // If initial URL has hash (e.g., #contact-details), smooth scroll to it
    if (window.location.hash) {
      const hash = window.location.hash;
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          lenis.scrollTo(target as HTMLElement, { offset: -40, duration: 1.5 });
        }
      }, 500);
    }

    return () => {
      gsap.ticker.remove(rafTicker);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const handleNavigate = (targetId: string) => {
    const target = document.querySelector(targetId);
    if (target && lenisRef.current) {
      lenisRef.current.scrollTo(target as HTMLElement, {
        offset: -40,
        duration: 1.5,
      });
    } else if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-wrapper bg-[#F0F7FF] text-slate-900 min-h-screen selection:bg-blue-600 selection:text-white relative">
      {/* Custom Fluid Magnetic Cursor */}
      <Cursor />

      {/* Floating Pill Header */}
      <Header onNavigate={handleNavigate} />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10 w-full overflow-hidden">
        <Hero onNavigate={handleNavigate} />
        <Brands />
        <Manifesto />
        <TerminalSimulator />
        <WorksList />
        <OperationsUseCases />
        <Showcase />
        <RoiEstimator />
        <ReceiptStudio />
        <EcosystemIntegrations />
        <BranchMapSync />
        <ComparisonTable />
        <Testimonials />
        <Stats />
        <Faq onNavigate={handleNavigate} />
      </main>

      {/* Footer & Contact */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
