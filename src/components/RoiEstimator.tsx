import React, { useState } from 'react';
import { Check, Calculator } from 'lucide-react';

export default function RoiEstimator() {
  const [sales, setSales] = useState(250000);

  // 4.5% shrinkage prevention
  const preventedLoss = Math.round(sales * 0.045);
  // Reclaimed hours calculation
  const hoursSaved = Math.min(80, Math.max(12, Math.round((sales / 250000) * 28)));
  // Capacity percentage calculation
  const capacityGain = Math.min(35, Math.max(8, Math.round((sales / 250000) * 12)));

  return (
    <section
      id="roi-calculator"
      className="w-full bg-[#050505] text-white py-20 md:py-32 border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/60 w-fit">
              <Calculator className="w-3.5 h-3.5 text-[#3B82F6]" />
              ROI Estimator
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif tracking-tight text-white">
              Calculate Your Store's{' '}
              <span className="italic text-white/40">Recovered Dividends.</span>
            </h2>
            <p className="text-white/60 font-sans text-sm sm:text-base leading-relaxed">
              Traditional manual billing and unrecorded stock checks leak revenue daily. Use our dynamic calculator to see how much cash loss core Agency POS stops for your shop size.
            </p>

            <ul className="space-y-2.5 sm:space-y-3 font-sans text-xs sm:text-sm text-white/80 pt-2">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </span>
                Eliminates inventory shrinkage from misplaced stock
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </span>
                Cuts cashier billing time and reduces customer wait-lines
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </span>
                Automates bookkeeping logs to prevent bookkeeping leakages
              </li>
            </ul>
          </div>

          {/* Right Column: Interactive Card (6 cols) */}
          <div className="lg:col-span-6 bg-[#0A0A0A] border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 backdrop-blur-xl flex flex-col gap-6 sm:gap-8">
            {/* Slider Group */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="font-sans text-white/70">Your Store's Monthly Sales</span>
                <span className="font-mono text-lg sm:text-xl font-bold text-[#3B82F6]">
                  ৳{sales.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={50000}
                max={2000000}
                step={10000}
                value={sales}
                onChange={(e) => setSales(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#3B82F6]"
                aria-label="Monthly sales range slider"
              />
              <div className="flex justify-between text-[10px] sm:text-[11px] font-mono text-white/30">
                <span>৳50,000</span>
                <span>৳10,00,000</span>
                <span>৳20,00,000</span>
              </div>
            </div>

            {/* Metric Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {/* Revenue Loss Prevented */}
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
                <span className="text-[11px] sm:text-xs font-mono text-white/40 uppercase leading-snug">
                  Est. Revenue Loss Prevented
                </span>
                <div className="my-2">
                  <div className="text-xl sm:text-2xl font-mono font-bold text-white">
                    ৳{preventedLoss.toLocaleString()}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono text-emerald-400 font-semibold block mt-1">
                    Per Month Saved
                  </span>
                </div>
              </div>

              {/* Circular Gauge / Capacity */}
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center text-center">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#3B82F6]/30 flex items-center justify-center">
                  <div className="text-sm sm:text-base font-mono font-bold text-white">
                    {capacityGain}%
                  </div>
                </div>
                <span className="text-[11px] sm:text-xs font-mono text-white/40 uppercase mt-2">
                  Capacity Gain
                </span>
              </div>

              {/* Operations Time */}
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
                <span className="text-[11px] sm:text-xs font-mono text-white/40 uppercase leading-snug">
                  Admin Operations Time
                </span>
                <div className="my-2">
                  <div className="text-xl sm:text-2xl font-mono font-bold text-white">
                    {hoursSaved} Hrs
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono text-emerald-400 font-semibold block mt-1">
                    Hours Reclaimed /mo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
