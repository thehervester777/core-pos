import React from 'react';
import { Layers, Truck, MessageSquare, BarChart2, CreditCard, ArrowRight } from 'lucide-react';

export default function EcosystemIntegrations() {
  return (
    <section
      id="ecosystem"
      className="w-full bg-[#F0F7FF] text-slate-900 py-20 md:py-32 border-t border-blue-200/50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Orbit Visual (5 cols) */}
          <div className="lg:col-span-5 flex items-center justify-center py-6 sm:py-0 overflow-visible">
            <div className="orbit-system relative w-64 h-64 sm:w-76 sm:h-76 md:w-80 md:h-80 rounded-full border border-blue-200/80 flex items-center justify-center shrink-0 bg-white/40 backdrop-blur-sm shadow-[0_10px_40px_rgba(37,99,235,0.06)]">
              {/* Concentric radar rings */}
              <div className="absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-blue-100/80 pointer-events-none" />
              <div className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-dashed border-blue-200/60 pointer-events-none animate-[spin_40s_linear_infinite_reverse]" />

              {/* Pulsing Central Hub */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white font-serif font-bold text-sm sm:text-base flex flex-col items-center justify-center shadow-[0_10px_35px_rgba(37,99,235,0.4)] z-20 text-center px-2 select-none group">
                <span className="relative z-10">core POS</span>
                <span className="relative z-10 text-[9px] font-mono font-normal uppercase tracking-wider text-blue-100">Hub</span>
                {/* Central radar ring */}
                <span className="absolute inset-0 rounded-full bg-blue-500/30 animate-radar-ring pointer-events-none" />
              </div>

              {/* Dashed Perimeter Orbit Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-blue-300/80 pointer-events-none" />

              {/* Orbiting Satellite Carrier (Continuous Round Orbit Animation) */}
              <div className="absolute inset-0 rounded-full animate-orbit-cw pointer-events-auto">
                {/* Satellite Node 1: Courier (Top) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="animate-orbit-ccw group cursor-pointer">
                    <div className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/95 border border-blue-200/90 text-[11px] sm:text-xs font-mono text-slate-800 flex items-center gap-1.5 shadow-[0_4px_18px_rgba(37,99,235,0.15)] whitespace-nowrap backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400 group-hover:shadow-[0_8px_25px_rgba(37,99,235,0.25)]">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <Truck className="w-3.5 h-3.5 text-blue-600 transition-transform group-hover:-translate-x-0.5" />
                      <span className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">Courier</span>
                    </div>
                  </div>
                </div>

                {/* Satellite Node 2: SMS (Right) */}
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                  <div className="animate-orbit-ccw group cursor-pointer">
                    <div className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/95 border border-blue-200/90 text-[11px] sm:text-xs font-mono text-slate-800 flex items-center gap-1.5 shadow-[0_4px_18px_rgba(37,99,235,0.15)] whitespace-nowrap backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400 group-hover:shadow-[0_8px_25px_rgba(37,99,235,0.25)]">
                      <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                      <MessageSquare className="w-3.5 h-3.5 text-blue-600 transition-transform group-hover:scale-110" />
                      <span className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">SMS</span>
                    </div>
                  </div>
                </div>

                {/* Satellite Node 3: Ledger (Bottom) */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <div className="animate-orbit-ccw group cursor-pointer">
                    <div className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/95 border border-blue-200/90 text-[11px] sm:text-xs font-mono text-slate-800 flex items-center gap-1.5 shadow-[0_4px_18px_rgba(37,99,235,0.15)] whitespace-nowrap backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400 group-hover:shadow-[0_8px_25px_rgba(37,99,235,0.25)]">
                      <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                      <BarChart2 className="w-3.5 h-3.5 text-blue-600 transition-transform group-hover:scale-110" />
                      <span className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">Ledger</span>
                    </div>
                  </div>
                </div>

                {/* Satellite Node 4: Banks & MFS (Left) */}
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                  <div className="animate-orbit-ccw group cursor-pointer">
                    <div className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/95 border border-blue-200/90 text-[11px] sm:text-xs font-mono text-slate-800 flex items-center gap-1.5 shadow-[0_4px_18px_rgba(37,99,235,0.15)] whitespace-nowrap backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400 group-hover:shadow-[0_8px_25px_rgba(37,99,235,0.25)]">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                      <CreditCard className="w-3.5 h-3.5 text-blue-600 transition-transform group-hover:scale-110" />
                      <span className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">Banks & MFS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 font-medium w-fit">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              Ecosystem Integrations
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif tracking-tight text-slate-900">
              Seamlessly Synced with{' '}
              <span className="italic text-blue-600">Local Services.</span>
            </h2>
            <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
              We connect your POS counter terminal to the critical applications driving business in Bangladesh. No custom development required.
            </p>
            <p className="text-slate-500 font-sans text-xs sm:text-sm leading-relaxed">
              Automatically dispatch courier pickup orders (Pathao, Steadfast, RedX) when items sell out, reconcile bKash/Nagad transactions instantly in your bookkeeping charts, and broadcast digital e-receipt SMS messages through local telco gateways.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white/80 border border-blue-200/70 shadow-xs backdrop-blur-md">
                <div className="font-semibold text-xs text-slate-900">Couriers</div>
                <div className="text-[10px] sm:text-[11px] font-mono text-slate-500 mt-1">Pathao, RedX, Steadfast</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/80 border border-blue-200/70 shadow-xs backdrop-blur-md">
                <div className="font-semibold text-xs text-slate-900">SMS Gateways</div>
                <div className="text-[10px] sm:text-[11px] font-mono text-slate-500 mt-1">GP, Robi, Banglalink</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/80 border border-blue-200/70 shadow-xs backdrop-blur-md">
                <div className="font-semibold text-xs text-slate-900">Ledger / Books</div>
                <div className="text-[10px] sm:text-[11px] font-mono text-slate-500 mt-1">Tally, QuickBooks, Excel</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/80 border border-blue-200/70 shadow-xs backdrop-blur-md">
                <div className="font-semibold text-xs text-slate-900">Mobile Wallets</div>
                <div className="text-[10px] sm:text-[11px] font-mono text-slate-500 mt-1">bKash, Nagad, Rocket</div>
              </div>
            </div>

            <div className="pt-2 sm:pt-4">
              <a
                href="#terminal"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-blue-600 text-white font-sans font-semibold text-sm hover:bg-blue-700 transition-all cursor-pointer text-center shadow-[0_4px_20px_rgba(37,99,235,0.3)]"
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
