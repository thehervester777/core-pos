import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FaqItem } from '../types';

const faqs: FaqItem[] = [
  {
    q: 'How does the offline mode work when internet drops?',
    a: 'Our Dual Mode Offline engine ensures zero counter downtime. Cashiers continue barcode scanning, ringing up sales, and printing receipts locally. The second your internet reconnects, all offline tickets automatically upload and reconcile with your cloud dashboard.',
  },
  {
    q: 'Is core Agency POS certified for Bangladesh NBR VAT rules?',
    a: 'Yes. The built-in sales tax module is fully aligned with National Board of Revenue (NBR) standards. It prints verified tax receipts containing your store BIN, computes the standard 5% retail VAT rate, and exports audit-ready monthly tax schedules.',
  },
  {
    q: 'Can we accept bKash and Nagad payments directly at the counter?',
    a: 'Absolutely. core Agency has native API integrations with bKash Merchant and Nagad. The register displays dynamic QR codes on customer-facing screens, verifies transaction payments in real-time, and auto-reconciles balances into your bookkeeping ledger.',
  },
  {
    q: 'How does multi-branch and warehouse stock syncing operate?',
    a: 'All branch terminals in Dhaka, Chittagong, Sylhet, and nationwide communicate with your central cloud database. You can track inventory across outlets, dispatch inter-branch transfers, monitor cashier cash drawer floats, and review consolidated revenue remotely.',
  },
  {
    q: 'What hardware is compatible with core Agency POS?',
    a: 'The platform is completely hardware-agnostic. It seamlessly pairs with ESC/POS thermal receipt printers (58mm and 80mm), 1D/2D wireless barcode scanners, customer-facing secondary monitors, and digital weighing scales.',
  },
];

interface FaqProps {
  onNavigate?: (id: string) => void;
}

export default function Faq({ onNavigate }: FaqProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const handleStillQuestions = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('#contact');
    } else {
      const target = document.querySelector('#contact');
      if (target) {
        const top = (target as HTMLElement).offsetTop - 40;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="faq"
      className="w-full bg-[#F0F7FF] text-slate-900 py-20 md:py-32 border-t border-blue-200/50 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400 opacity-10 blur-[150px] rounded-full pointer-events-none" />

      <div className="px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-16 relative z-10">
        {/* Left Side: Title */}
        <div className="w-full md:w-1/3">
          <span className="text-xs sm:text-sm font-mono text-blue-600 font-semibold uppercase tracking-widest mb-4 sm:mb-6 block">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight text-slate-900">
            Frequently
            <br />
            <span className="italic text-blue-600">Asked</span>
          </h2>
          <p className="text-slate-600 mt-4 sm:mt-6 font-sans text-sm sm:text-base leading-relaxed">
            Answers to common questions regarding our cloud POS architecture, offline engine, NBR tax compliance, and local deployment across Bangladesh.
          </p>
          <a
            id="faq-contact-link"
            href="#contact"
            onClick={handleStillQuestions}
            className="inline-flex items-center gap-2 mt-6 sm:mt-8 text-xs sm:text-sm font-mono text-blue-600 font-semibold uppercase hover:text-blue-700 transition-colors group"
          >
            Still have questions?
            <span className="w-8 h-[1.5px] bg-blue-600 transform origin-left transition-transform duration-300 group-hover:scale-x-150" />
          </a>
        </div>

        {/* Right Side: Accordion */}
        <div className="w-full md:w-2/3 flex flex-col">
          {faqs.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <button
                key={index}
                id={`faq-item-${index + 1}`}
                type="button"
                className="w-full border-b border-blue-200/70 py-5 sm:py-8 text-left flex flex-col cursor-pointer group"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
              >
                <div className="w-full flex justify-between items-center gap-3">
                  <span className="text-base sm:text-xl md:text-2xl lg:text-3xl font-serif text-slate-800 group-hover:text-blue-600 transition-colors duration-300 leading-snug">
                    {item.q}
                  </span>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-50 border border-blue-200/80 flex items-center justify-center transform transition-transform duration-500 group-hover:bg-blue-100 shrink-0 text-blue-600 shadow-xs">
                    {isOpen ? (
                      <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    ) : (
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 sm:pt-6 text-sm sm:text-base md:text-lg text-slate-600 font-sans leading-relaxed max-w-2xl">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
