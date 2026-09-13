import React from 'react';
import { Layers, Truck, MessageSquare, BarChart2, CreditCard, ArrowRight } from 'lucide-react';

export default function EcosystemIntegrations() {
  return (
    <section
      id="ecosystem"
      className="w-full bg-[#050505] text-white py-20 md:py-32 border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Orbit Visual (5 cols) */}
          <div className="lg:col-span-5 flex items-center justify-center py-4 sm:py-0 overflow-visible">
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full border border-white/10 flex items-center justify-center shrink-0">
              {/* Pulsing Central Hub */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white text-black font-serif font-bold text-sm sm:text-base flex flex-col items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.3)] z-10 text-center px-2">
                <span>core POS</span>
                <span className="text-[9px] font-mono font-normal uppercase tracking-wider text-black/60">Hub</span>
              </div>

              {/* Orbit Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-white/15 animate-[spin_60s_linear_infinite]" />

              {/* Satellite Node 1: Courier (Top) */}
              <div className="absolute -top-3.5 sm:-top-4 left-1/2 -translate-x-1/2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#0A0A0A] border border-white/20 text-[11px] sm:text-xs font-mono text-white/90 flex items-center gap-1.5 shadow-lg whitespace-nowrap">
                <Truck className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>Courier</span>
              </div>

              {/* Satellite Node 2: SMS (Right) */}
              <div className="absolute top-1/2 -right-2 sm:-right-4 -translate-y-1/2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#0A0A0A] border border-white/20 text-[11px] sm:text-xs font-mono text-white/90 flex items-center gap-1.5 shadow-lg whitespace-nowrap">
                <MessageSquare className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>SMS</span>
              </div>

              {/* Satellite Node 3: Ledger (Bottom) */}
              <div className="absolute -bottom-3.5 sm:-bottom-4 left-1/2 -translate-x-1/2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#0A0A0A] border border-white/20 text-[11px] sm:text-xs font-mono text-white/90 flex items-center gap-1.5 shadow-lg whitespace-nowrap">
                <BarChart2 className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>Ledger</span>
              </div>

              {/* Satellite Node 4: Banks & MFS (Left) */}
              <div className="absolute top-1/2 -left-2 sm:-left-6 -translate-y-1/2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#0A0A0A] border border-white/20 text-[11px] sm:text-xs font-mono text-white/90 flex items-center gap-1.5 shadow-lg whitespace-nowrap">
                <CreditCard className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>Banks & MFS</span>
              </div>
            </div>
          </div>

          {/* Right: Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/60 w-fit">
              <Layers className="w-3.5 h-3.5 text-[#3B82F6]" />
              Ecosystem Integrations
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif tracking-tight text-white">
              Seamlessly Synced with{' '}
              <span className="italic text-white/40">Local Services.</span>
            </h2>
            <p className="text-white/70 font-sans text-sm sm:text-base leading-relaxed">
              We connect your POS counter terminal to the critical applications driving business in Bangladesh. No custom development required.
            </p>
            <p className="text-white/45 font-sans text-xs sm:text-sm leading-relaxed">
              Automatically dispatch courier pickup orders (Pathao, Steadfast, RedX) when items sell out, reconcile bKash/Nagad transactions instantly in your bookkeeping charts, and broadcast digital e-receipt SMS messages through local telco gateways.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="font-semibold text-xs text-white">Couriers</div>
                <div className="text-[10px] sm:text-[11px] font-mono text-white/40 mt-1">Pathao, RedX, Steadfast</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="font-semibold text-xs text-white">SMS Gateways</div>
                <div className="text-[10px] sm:text-[11px] font-mono text-white/40 mt-1">GP, Robi, Banglalink</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="font-semibold text-xs text-white">Ledger / Accounting</div>
                <div className="text-[10px] sm:text-[11px] font-mono text-white/40 mt-1">Tally, QuickBooks, Excel</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="font-semibold text-xs text-white">Mobile Wallets</div>
                <div className="text-[10px] sm:text-[11px] font-mono text-white/40 mt-1">bKash, Nagad, Rocket</div>
              </div>
            </div>

            <div className="pt-2 sm:pt-4">
              <a
                href="#terminal"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white text-black font-sans font-medium text-sm hover:bg-[#3B82F6] hover:text-white transition-all cursor-pointer text-center"
              >
                Test Ecosystem in Terminal
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
