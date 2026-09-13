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
      className="w-full bg-[#050505] text-white py-20 md:py-32 border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/60 mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-[#3B82F6]" />
            Market Leader
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif tracking-tight text-white mb-3 sm:mb-4">
            How We Redefine POS Management
          </h2>
          <p className="text-white/50 font-sans max-w-xl text-sm sm:text-base leading-relaxed">
            See why major pharmacies, superstores, and expanding restaurants in Bangladesh are ditching traditional registers for core Agency.
          </p>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="sm:hidden text-center text-[11px] font-mono text-white/40 mb-3 flex items-center justify-center gap-1.5">
          <span>← Scroll horizontally to compare features →</span>
        </div>

        {/* Comparison Matrix Table */}
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="min-w-[620px] sm:min-w-[720px] bg-[#0A0A0A] border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-[11px] sm:text-xs font-mono text-white/50 uppercase tracking-wider">
                  <th className="p-4 sm:p-6">Management Capability</th>
                  <th className="p-4 sm:p-6 bg-white/[0.04] text-[#3B82F6] font-bold border-x border-white/10">
                    core Agency Cloud POS
                  </th>
                  <th className="p-4 sm:p-6">Legacy Desktop POS</th>
                  <th className="p-4 sm:p-6">Manual Bookkeeping</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                {comparisonRows.map((row) => (
                  <tr key={row.capability} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 sm:p-6 font-medium text-white/90">
                      {row.capability}
                    </td>

                    {/* core Agency POS (Highlighted) */}
                    <td className="p-4 sm:p-6 bg-white/[0.04] border-x border-white/10 text-white font-medium">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span>{row.coreAgency.text}</span>
                      </div>
                    </td>

                    {/* Legacy Desktop */}
                    <td className="p-4 sm:p-6 text-white/60">
                      <div className="flex items-center gap-2">
                        {row.legacy.supported ? (
                          <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                            <Check className="w-3.5 h-3.5" />
                          </span>
                        ) : (
                          <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                            <X className="w-3.5 h-3.5" />
                          </span>
                        )}
                        <span>{row.legacy.text}</span>
                      </div>
                    </td>

                    {/* Manual */}
                    <td className="p-4 sm:p-6 text-white/40">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                          <X className="w-3.5 h-3.5" />
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
