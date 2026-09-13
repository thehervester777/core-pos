import React from 'react';
import Logo from './Logo';

interface FooterProps {
  onNavigate?: (id: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleLinkClick = (
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

  return (
    <footer
      id="contact"
      className="w-full bg-[#050505] text-white pt-20 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-white/10 relative overflow-hidden"
    >
      {/* Subtle bottom ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#3B82F6] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col justify-between h-full relative z-10">
        {/* Massive Call to Action */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12 pb-16 md:pb-24 border-b border-white/10">
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif tracking-tight leading-[0.95] md:leading-[0.9] max-w-4xl">
            Ready to scale
            <br />
            <span className="italic text-white/40">operations?</span>
          </h2>
          <a
            id="footer-lets-talk-btn"
            href="mailto:hello@coreagency.com.bd"
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full border border-white/20 flex items-center justify-center relative overflow-hidden group hover:border-transparent transition-colors duration-500 shrink-0 self-start md:self-auto cursor-pointer text-center px-4"
          >
            <div className="absolute inset-0 bg-[#3B82F6] transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full ease-out" />
            <span className="text-base sm:text-lg md:text-xl font-medium font-sans relative z-10 text-white group-hover:text-white transition-colors duration-300">
              Book Demo
            </span>
          </a>
        </div>

        {/* 4 Columns Information Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 py-12 md:py-16 border-b border-white/10">
          {/* Col 1: Brand identity */}
          <div>
            <Logo id="footer-logo" />
            <p className="text-white/40 text-sm font-sans max-w-sm mt-5 sm:mt-6 leading-relaxed">
              We craft intelligent retail ecosystems. core Agency POS is built to digitize Bangladesh's SME and enterprise sectors, helping businesses manage operations smoothly.
            </p>
          </div>

          {/* Col 2: Solutions */}
          <div id="contact-details">
            <span className="text-xs font-mono text-white/30 uppercase tracking-widest block mb-4 sm:mb-6">
              Solutions
            </span>
            <ul className="flex flex-col space-y-2.5 sm:space-y-3 font-sans text-sm text-white/60">
              <li>
                <a
                  href="#industries"
                  onClick={(e) => handleLinkClick(e, '#industries')}
                  className="hover:text-white transition-colors"
                >
                  Superstore POS
                </a>
              </li>
              <li>
                <a
                  href="#industries"
                  onClick={(e) => handleLinkClick(e, '#industries')}
                  className="hover:text-white transition-colors"
                >
                  Pharmacy Management
                </a>
              </li>
              <li>
                <a
                  href="#industries"
                  onClick={(e) => handleLinkClick(e, '#industries')}
                  className="hover:text-white transition-colors"
                >
                  Restaurant Register
                </a>
              </li>
              <li>
                <a
                  href="#use-cases"
                  onClick={(e) => handleLinkClick(e, '#use-cases')}
                  className="hover:text-white transition-colors"
                >
                  Operations Use Cases
                </a>
              </li>
              <li>
                <a
                  href="#roi-calculator"
                  onClick={(e) => handleLinkClick(e, '#roi-calculator')}
                  className="hover:text-white transition-colors"
                >
                  ROI Estimator
                </a>
              </li>
              <li>
                <a
                  href="#receipt-studio"
                  onClick={(e) => handleLinkClick(e, '#receipt-studio')}
                  className="hover:text-white transition-colors"
                >
                  Receipt Studio
                </a>
              </li>
              <li>
                <a
                  href="#cloud-sync"
                  onClick={(e) => handleLinkClick(e, '#cloud-sync')}
                  className="hover:text-white transition-colors"
                >
                  Centralized Cloud Sync
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <span className="text-xs font-mono text-white/30 uppercase tracking-widest block mb-4 sm:mb-6">
              Company
            </span>
            <ul className="flex flex-col space-y-2.5 sm:space-y-3 font-sans text-sm text-white/60">
              <li>
                <a
                  href="#agency"
                  onClick={(e) => handleLinkClick(e, '#agency')}
                  className="hover:text-white transition-colors"
                >
                  Our Vision
                </a>
              </li>
              <li>
                <a
                  href="#terminal"
                  onClick={(e) => handleLinkClick(e, '#terminal')}
                  className="hover:text-white transition-colors"
                >
                  Terminal Demo
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  onClick={(e) => handleLinkClick(e, '#features')}
                  className="hover:text-white transition-colors"
                >
                  Engine Modules
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleLinkClick(e, '#faq')}
                  className="hover:text-white transition-colors"
                >
                  Support & FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact details */}
          <div>
            <span className="text-xs font-mono text-white/30 uppercase tracking-widest block mb-4 sm:mb-6">
              Headquarters
            </span>
            <p className="text-white/60 text-sm font-sans max-w-sm leading-relaxed mb-3">
              Level 8, Tower 3, Gulshan Avenue<br />
              Dhaka 1212, Bangladesh
            </p>
            <p className="text-white/40 text-xs font-mono mb-2">
              Tel: <a href="tel:+8801700998877" className="text-white/70 hover:text-[#3B82F6]">+880 1700-998877</a>
            </p>
            <a
              id="footer-email-link"
              href="mailto:hello@coreagency.com.bd"
              className="font-mono text-sm text-[#3B82F6] hover:underline"
            >
              hello@coreagency.com.bd
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 sm:pt-12 text-center sm:text-left">
          <p className="text-xs font-mono text-white/40">
            &copy; 2026 core Agency Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 sm:gap-8 text-xs font-mono text-white/40">
            <span className="cursor-default">
              Privacy Policy
            </span>
            <span className="cursor-default">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
