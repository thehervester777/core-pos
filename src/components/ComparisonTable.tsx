import React from 'react';
import { TrendingUp, Check, X } from 'lucide-react';

interface ComparisonRow {
  capability: string;
  coreAgency: { text: string; supported: boolean };
  legacy: { text: string; supported: boolean };
  manual: { text: string; supported: boolean };
}

const comparisonRows: ComparisonRow[] = [
  {
    capability: 'Offline-to-Cloud Syncing',
    coreAgency: { text: 'Real-time (Auto-Resume)', supported: true },
    legacy: { text: 'Manual backup only', supported: false },
    manual: { text: 'None', supported: false },
  },
  {
    capability: 'Integrated Mobile Finance (bKash/Nagad)',
    coreAgency: { text: 'Dynamic API QR & Auto-confirm', supported: true },
    legacy: { text: 'Manual verification', supported: false },
    manual: { text: 'Manual ledger entry', supported: false },
  },
  {
    capability: 'Auto SMS Receipt & Alerts',
    coreAgency: { text: 'Standard (BD Gateways)', supported: true },
    legacy: { text: 'Add-on cost (Complex)', supported: false },
    manual: { text: 'None', supported: false },
  },
  {
    capability: 'NBR Compliant VAT Receipts',
    coreAgency: { text: 'Fully Configured', supported: true },
    legacy: { text: 'Configurable', supported: true },
    manual: { text: 'Highly prone to errors', supported: false },
  },
  {
    capability: 'Multi-Branch Warehouse Tracking',
    coreAgency: { text: 'Integrated Central Hub', supported: true },
    legacy: { text: 'Separate databases', supported: false },
    manual: { text: 'Impossible scale', supported: false },
  },
];

export default function ComparisonTable() {
  return (
    <section
      id="comparison"
      className="w-full bg-[#F0F7FF] text-slate-900 py-20 md:py-32 border-t border-blue-200/50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 font-medium mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
            Market Leader
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif tracking-tight text-slate-900 mb-3 sm:mb-4">
            How We Redefine POS Management
          </h2>
          <p className="text-slate-600 font-sans max-w-xl text-sm sm:text-base leading-relaxed">
            See why major pharmacies, superstores, and expanding restaurants in Bangladesh are ditching traditional registers for core Agency.
          </p>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="sm:hidden text-center text-[11px] font-mono text-slate-400 mb-3 flex items-center justify-center gap-1.5">
          <span>← Scroll horizontally to compare features →</span>
        </div>

        {/* Comparison Matrix Table */}
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="min-w-[620px] sm:min-w-[720px] bg-white/80 border border-blue-200/70 rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-2xl shadow-[0_20px_50px_rgba(37,99,235,0.08),0_1px_2px_rgba(255,255,255,0.95)_inset]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-blue-200/70 text-[11px] sm:text-xs font-mono text-slate-600 uppercase tracking-wider font-semibold bg-blue-50/50">
                  <th className="p-4 sm:p-6">Management Capability</th>
                  <th className="p-4 sm:p-6 bg-blue-100/40 text-blue-700 font-bold border-x border-blue-200/70">
                    core Agency Cloud POS
                  </th>
                  <th className="p-4 sm:p-6">Legacy Desktop POS</th>
                  <th className="p-4 sm:p-6">Manual Bookkeeping</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-100 text-xs sm:text-sm">
                {comparisonRows.map((row) => (
                  <tr key={row.capability} className="hover:bg-blue-50/40 transition-colors">
                    <td className="p-4 sm:p-6 font-semibold text-slate-800">
                      {row.capability}
                    </td>

                    {/* core Agency POS (Highlighted) */}
                    <td className="p-4 sm:p-6 bg-blue-50/40 border-x border-blue-200/50 text-slate-900 font-medium">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 shadow-xs">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </span>
                        <span className="font-semibold text-slate-900">{row.coreAgency.text}</span>
                      </div>
                    </td>

                    {/* Legacy Desktop */}
                    <td className="p-4 sm:p-6 text-slate-600">
                      <div className="flex items-center gap-2">
                        {row.legacy.supported ? (
                          <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                          </span>
                        ) : (
                          <span className="w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center shrink-0">
                            <X className="w-3.5 h-3.5 stroke-[2.5]" />
                          </span>
                        )}
                        <span>{row.legacy.text}</span>
                      </div>
                    </td>

                    {/* Manual */}
                    <td className="p-4 sm:p-6 text-slate-400">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center shrink-0">
                          <X className="w-3.5 h-3.5 stroke-[2.5]" />
                        </span>
                        <span>{row.manual.text}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
