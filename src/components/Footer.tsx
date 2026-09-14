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
      className="w-full bg-[#EAF3FD] text-slate-900 pt-20 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-blue-200/50 relative overflow-hidden"
    >
      {/* Subtle bottom ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-400 opacity-20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col justify-between h-full relative z-10">
        {/* Massive Call to Action */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12 pb-16 md:pb-24 border-b border-blue-200/70">
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif tracking-tight leading-[0.95] md:leading-[0.9] max-w-4xl text-slate-900">
            Ready to scale
            <br />
            <span className="italic text-blue-600">operations?</span>
          </h2>
          <a
            id="footer-lets-talk-btn"
            href="mailto:hello@coreagency.com.bd"
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full border border-blue-300 bg-white/80 shadow-[0_12px_40px_rgba(37,99,235,0.15)] flex items-center justify-center relative overflow-hidden group hover:border-transparent transition-all duration-500 shrink-0 self-start md:self-auto cursor-pointer text-center px-4 backdrop-blur-md"
          >
            <div className="absolute inset-0 bg-blue-600 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full ease-out" />
            <span className="text-base sm:text-lg md:text-xl font-semibold font-sans relative z-10 text-blue-700 group-hover:text-white transition-colors duration-300">
              Book Demo
            </span>
          </a>
        </div>

        {/* 4 Columns Information Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 py-12 md:py-16 border-b border-blue-200/70">
          {/* Col 1: Brand identity */}
          <div>
            <Logo id="footer-logo" />
            <p className="text-slate-600 text-sm font-sans max-w-sm mt-5 sm:mt-6 leading-relaxed">
              We craft intelligent retail ecosystems. core Agency POS is built to digitize Bangladesh's SME and enterprise sectors, helping businesses manage operations smoothly.
            </p>
          </div>

          {/* Col 2: Solutions */}
          <div id="contact-details">
            <span className="text-xs font-mono text-blue-600 font-semibold uppercase tracking-widest block mb-4 sm:mb-6">
              Solutions
            </span>
            <ul className="flex flex-col space-y-2.5 sm:space-y-3 font-sans text-sm text-slate-600 font-medium">
              <li>
                <a
                  href="#industries"
                  onClick={(e) => handleLinkClick(e, '#industries')}
                  className="hover:text-blue-600 transition-colors"
                >
                  Superstore POS
                </a>
              </li>
              <li>
                <a
                  href="#industries"
                  onClick={(e) => handleLinkClick(e, '#industries')}
                  className="hover:text-blue-600 transition-colors"
                >
                  Pharmacy Management
                </a>
              </li>
              <li>
                <a
                  href="#industries"
                  onClick={(e) => handleLinkClick(e, '#industries')}
                  className="hover:text-blue-600 transition-colors"
                >
                  Restaurant Register
                </a>
              </li>
              <li>
                <a
                  href="#use-cases"
                  onClick={(e) => handleLinkClick(e, '#use-cases')}
                  className="hover:text-blue-600 transition-colors"
                >
                  Operations Use Cases
                </a>
              </li>
              <li>
                <a
                  href="#roi-calculator"
                  onClick={(e) => handleLinkClick(e, '#roi-calculator')}
                  className="hover:text-blue-600 transition-colors"
                >
                  ROI Estimator
                </a>
              </li>
              <li>
                <a
                  href="#receipt-studio"
                  onClick={(e) => handleLinkClick(e, '#receipt-studio')}
                  className="hover:text-blue-600 transition-colors"
                >
                  Receipt Studio
                </a>
              </li>
              <li>
                <a
                  href="#cloud-sync"
                  onClick={(e) => handleLinkClick(e, '#cloud-sync')}
                  className="hover:text-blue-600 transition-colors"
                >
                  Centralized Cloud Sync
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <span className="text-xs font-mono text-blue-600 font-semibold uppercase tracking-widest block mb-4 sm:mb-6">
              Company
            </span>
            <ul className="flex flex-col space-y-2.5 sm:space-y-3 font-sans text-sm text-slate-600 font-medium">
              <li>
                <a
                  href="#agency"
                  onClick={(e) => handleLinkClick(e, '#agency')}
                  className="hover:text-blue-600 transition-colors"
                >
                  Our Vision
                </a>
              </li>
              <li>
                <a
                  href="#terminal"
                  onClick={(e) => handleLinkClick(e, '#terminal')}
                  className="hover:text-blue-600 transition-colors"
                >
                  Terminal Demo
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  onClick={(e) => handleLinkClick(e, '#features')}
                  className="hover:text-blue-600 transition-colors"
                >
                  Engine Modules
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleLinkClick(e, '#faq')}
                  className="hover:text-blue-600 transition-colors"
                >
                  Support & FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact details */}
          <div>
            <span className="text-xs font-mono text-blue-600 font-semibold uppercase tracking-widest block mb-4 sm:mb-6">
              Headquarters
            </span>
            <p className="text-slate-600 text-sm font-sans max-w-sm leading-relaxed mb-3">
              Level 8, Tower 3, Gulshan Avenue<br />
              Dhaka 1212, Bangladesh
            </p>
            <p className="text-slate-500 text-xs font-mono mb-2">
              Tel: <a href="tel:+8801700998877" className="text-slate-700 font-semibold hover:text-blue-600">+880 1700-998877</a>
            </p>
            <a
              id="footer-email-link"
              href="mailto:hello@coreagency.com.bd"
              className="font-mono text-sm text-blue-600 font-semibold hover:underline"
            >
              hello@coreagency.com.bd
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 sm:pt-12 text-center sm:text-left">
          <p className="text-xs font-mono text-slate-500 font-medium">
            &copy; 2026 core Agency Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 sm:gap-8 text-xs font-mono text-slate-500 font-medium">
            <span className="cursor-default hover:text-blue-600 transition-colors">
              Privacy Policy
            </span>
            <span className="cursor-default hover:text-blue-600 transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
