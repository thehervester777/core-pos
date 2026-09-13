import React from 'react';
import { WorkItem } from '../types';

const works: WorkItem[] = [
  {
    id: '01',
    name: 'Supershop Software',
    category: 'Double register lanes, barcode scanners, digital scale sync',
    year: 'Retail',
  },
  {
    id: '02',
    name: 'Pharmacy Management',
    category: '20,000+ drug indices, batch expiry tracking & NBR BIN',
    year: 'Pharma',
  },
  {
    id: '03',
    name: 'Restaurant POS',
    category: 'Kitchen display tickets (KOT), table layout & check splits',
    year: 'Dining',
  },
  {
    id: '04',
    name: 'VAT & Tax Invoicing',
    category: 'NBR-compliant sales tax engine & auto monthly schedules',
    year: 'NBR Tax',
  },
  {
    id: '05',
    name: 'E-commerce Sync',
    category: 'Live inventory sync for WooCommerce, Shopify & outlets',
    year: 'Omni',
  },
  {
    id: '06',
    name: 'Apparel & Footwear',
    category: 'Color/size matrices, customer reward points & tags',
    year: 'Fashion',
  },
  {
    id: '07',
    name: 'Distribution ERP',
    category: 'Multi-warehouse logistics, truck delivery & dealer limits',
    year: 'Wholesale',
  },
];

export default function WorksList() {
  return (
    <section
      id="industries"
      className="w-full bg-[#050505] text-white py-20 md:py-32 border-t border-white/10 min-h-screen relative"
    >
      <div id="work" className="absolute -top-10 left-0 pointer-events-none" />
      <div className="px-4 sm:px-6 md:px-24 mb-12 md:mb-24 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-[11px] sm:text-xs font-mono text-white/40 uppercase tracking-widest block mb-3">
            Industry We Serve
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif tracking-tight">
            Selected
            <br />
            <span className="italic text-white/40">Solutions.</span>
          </h2>
        </div>
        <p className="text-white/50 font-sans max-w-md text-sm sm:text-base md:text-lg leading-relaxed pb-2">
          The best POS software & cloud solutions designed to streamline operations across retail, healthcare, hospitality, and distribution.
        </p>
      </div>

      <div className="px-4 sm:px-6 md:px-24 max-w-7xl mx-auto flex flex-col">
        {/* Table Header */}
        <div className="hidden sm:flex border-b border-white/20 pb-4 mb-4 text-xs font-mono text-white/40 uppercase tracking-widest px-4">
          <div className="w-12 sm:w-16">ID</div>
          <div className="flex-1">Sector Solution</div>
          <div className="hidden md:block w-1/3">Key Capabilities</div>
          <div className="w-20 md:w-24 text-right">Domain</div>
        </div>

        {/* Table Rows */}
        {works.map((work) => (
          <a
            key={work.id}
            id={`work-item-${work.id}`}
            href="#terminal"
            onClick={(e) => {
              e.preventDefault();
              const term = document.getElementById('terminal');
              if (term) term.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex items-center border-b border-white/10 py-5 sm:py-8 md:py-10 px-2 sm:px-4 hover:bg-white/5 transition-colors duration-500 cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-[#3B82F6]/0 via-[#3B82F6]/5 to-[#3B82F6]/0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 pointer-events-none" />
            <div className="w-8 sm:w-16 text-xs sm:text-sm font-mono text-white/30 group-hover:text-white/80 transition-colors z-10 shrink-0">
              {work.id}
            </div>
            <div className="flex-1 z-10 min-w-0 pr-2 sm:pr-4">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-xl sm:text-3xl md:text-5xl font-serif text-white/80 group-hover:text-white group-hover:translate-x-2 sm:group-hover:translate-x-3 transition-all duration-500 transform-gpu">
                  {work.name}
                </h3>
                <span className="sm:hidden text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/50 border border-white/5">
                  {work.year}
                </span>
              </div>
              <p className="text-xs text-white/40 mt-1 md:hidden line-clamp-2">
                {work.category}
              </p>
            </div>
            <div className="hidden md:block w-1/3 text-sm font-sans font-light text-white/40 group-hover:text-white/80 transition-colors z-10 pr-4">
              {work.category}
            </div>
            <div className="hidden sm:block w-20 md:w-24 text-right text-xs font-mono text-white/40 group-hover:text-[#3B82F6] transition-colors z-10 shrink-0">
              {work.year}
            </div>
          </a>
        ))}

        <div className="mt-12 sm:mt-16 flex justify-center w-full">
          <a
            id="view-archives-btn"
            href="#terminal"
            onClick={(e) => {
              e.preventDefault();
              const term = document.getElementById('terminal');
              if (term) term.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full border border-white/20 text-white/80 hover:bg-white hover:text-black transition-colors duration-500 font-sans cursor-pointer text-sm font-medium"
          >
            Try Terminal Simulator
          </a>
        </div>
      </div>
    </section>
  );
}
