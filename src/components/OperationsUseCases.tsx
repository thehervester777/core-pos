import React, { useState } from 'react';
import { Package, Droplet, Box, Award, Zap, Layers, Check } from 'lucide-react';

export default function OperationsUseCases() {
  const [activeTab, setActiveTab] = useState<'retail' | 'pharmacy' | 'restaurant' | 'wholesale'>('retail');

  // Restaurant seating state for interactive demo
  const [tables, setTables] = useState([
    { id: 'T1', occupied: true },
    { id: 'T2', occupied: false },
    { id: 'T3', occupied: true },
    { id: 'T4', occupied: false },
    { id: 'T5', occupied: false },
    { id: 'T6', occupied: false },
  ]);

  const toggleTable = (id: string) => {
    setTables((prev) =>
      prev.map((t) => (t.id === id ? { ...t, occupied: !t.occupied } : t))
    );
  };

  const occupiedCount = tables.filter((t) => t.occupied).length;

  return (
    <section
      id="use-cases"
      className="w-full bg-[#050505] text-white py-20 md:py-32 border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16">
          <span className="text-[11px] sm:text-xs font-mono text-white/40 uppercase tracking-widest mb-3">
            Operations Use Cases
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif tracking-tight text-white mb-4">
            Engineered for Your Business Profile
          </h2>
          <p className="text-white/50 font-sans max-w-xl text-sm sm:text-base leading-relaxed">
            Explore how core Agency POS handles the day-to-day operational challenges of your specific growth stage.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 mb-8 md:mb-12">
          {[
            { key: 'retail', label: 'Retail & Grocery' },
            { key: 'pharmacy', label: 'Pharmacy & Health' },
            { key: 'restaurant', label: 'Cafe & Dining' },
            { key: 'wholesale', label: 'Wholesale & Depot' },
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key as any)}
              className={`px-3 sm:px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 cursor-pointer text-center ${
                activeTab === tab.key
                  ? 'bg-white text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.15)]'
                  : 'bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Box */}
        <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12">
          {/* Retail & Grocery */}
          {activeTab === 'retail' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 flex flex-col gap-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/60 w-fit">
                  <Package className="w-3.5 h-3.5 text-[#3B82F6]" />
                  Grocery Use Case
                </span>
                <h3 className="text-xl sm:text-2xl md:text-4xl font-serif text-white">
                  Preventing Retail Stock Leakage
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  Corner stores and grocery superstores leak an average of 4.5% of revenue from unrecorded inventory sales and cash register discrepancies. core Agency POS provides real-time stock alerts and barcode scans to lock inventory securely.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 font-sans pt-2">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                    Auto-triggers warnings when inventory thresholds dip.
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                    Compiles daily ledger reconciliations against cash drawer counts.
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                    Uploads bulk inventory items via CSV templates.
                  </li>
                </ul>
              </div>

              {/* Visual Card */}
              <div className="lg:col-span-5 bg-black/60 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <div className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">
                  Live Terminal Inventory Alerts
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs">
                    <span className="flex items-center gap-2 font-medium text-white/90">
                      <Package className="w-4 h-4 text-red-400" />
                      Miniket Rice 5kg
                    </span>
                    <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-300 font-mono text-[11px] font-semibold">
                      Low Stock: 2 left
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs">
                    <span className="flex items-center gap-2 font-medium text-white/90">
                      <Droplet className="w-4 h-4 text-[#3B82F6]" />
                      Soyabean Oil 2L
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[11px] font-semibold">
                      Stock: 48 left
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs">
                    <span className="flex items-center gap-2 font-medium text-white/90">
                      <Box className="w-4 h-4 text-red-400" />
                      Powder Milk 500g
                    </span>
                    <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-300 font-mono text-[11px] font-semibold">
                      Low Stock: 1 left
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Pharmacy */}
          {activeTab === 'pharmacy' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 flex flex-col gap-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/60 w-fit">
                  <Award className="w-3.5 h-3.5 text-[#3B82F6]" />
                  Pharmacy Use Case
                </span>
                <h3 className="text-xl sm:text-2xl md:text-4xl font-serif text-white">
                  Drug Expiry & Batch Compliance
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  Selling expired medicine or violating NBR VAT templates risks store closure. core Agency pre-loads 20,000+ local drug indices, maps shelves coordinates, and warns cashiers weeks before drugs expire.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 font-sans pt-2">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                    Flags expiring medicine batches during scanner checkout.
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                    Details drug generics cross-indexes in search registers.
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                    Automatically adds batch BIN codes onto invoices.
                  </li>
                </ul>
              </div>

              {/* Visual Card */}
              <div className="lg:col-span-5 bg-black/60 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <div className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">
                  Automated Expiry Monitor
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs">
                    <div>
                      <div className="font-semibold text-white">Napa Extend (Batch A)</div>
                      <div className="text-[11px] font-mono text-white/40">Exp: Sep 2026</div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-red-500/20 text-red-300 font-mono text-[11px] font-semibold border border-red-500/30">
                      Critical: 30 Days
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs">
                    <div>
                      <div className="font-semibold text-white">Sergel 20mg (Batch C)</div>
                      <div className="text-[11px] font-mono text-white/40">Exp: Dec 2026</div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 font-mono text-[11px] font-semibold border border-amber-500/30">
                      Warning: 120 Days
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Restaurant */}
          {activeTab === 'restaurant' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 flex flex-col gap-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/60 w-fit">
                  <Zap className="w-3.5 h-3.5 text-[#3B82F6]" />
                  Dine-In Use Case
                </span>
                <h3 className="text-xl sm:text-2xl md:text-4xl font-serif text-white">
                  Kitchen Ticket & Table Dispatch
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  Mismanaged dine-in tables lead to long delays and cold food. Our interactive tablet seating grid enables waiters to map tables, dispatch print tickets directly to different kitchen stations, and split final checks.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 font-sans pt-2">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                    Real-time dining table occupancy tracking.
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                    Splits billing split check calculations.
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                    Automates raw ingredient conversions per recipe sale.
                  </li>
                </ul>
              </div>

              {/* Visual Card */}
              <div className="lg:col-span-5 bg-black/60 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <div className="flex justify-between items-center text-xs font-mono mb-4">
                  <span className="text-white/40 uppercase tracking-widest">Floor Seating Layout</span>
                  <span className="text-white/70">
                    Occupied: <strong className="text-red-400">{occupiedCount}</strong>/6
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  {tables.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => toggleTable(t.id)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        t.occupied
                          ? 'bg-red-500/10 border-red-500/30 text-red-300'
                          : 'bg-white/[0.02] border-white/10 text-white/60 hover:border-white/30'
                      }`}
                    >
                      <div className="font-mono font-bold text-sm">{t.id}</div>
                      <div className="text-[10px] font-sans mt-0.5">
                        {t.occupied ? 'Occupied' : 'Available'}
                      </div>
                    </button>
                  ))}
                </div>
                <span className="text-[11px] font-mono text-white/30 block mt-3 text-center">
                  *Click tables to toggle simulated occupancy status
                </span>
              </div>
            </div>
          )}

          {/* Wholesale */}
          {activeTab === 'wholesale' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 flex flex-col gap-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/60 w-fit">
                  <Layers className="w-3.5 h-3.5 text-[#3B82F6]" />
                  Wholesale Use Case
                </span>
                <h3 className="text-xl sm:text-2xl md:text-4xl font-serif text-white">
                  Inter-Branch Stock Distribution
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  Operating multiple warehouse hubs without synchronization causes massive transit delays and inventory dead-weight. core Agency tracks items in transit, checks credit limit records for wholesale dealers, and manages delivery trucks.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 font-sans pt-2">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                    Coordinates truck routing transfer logs.
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                    Adjusts credit balance limits for wholesale dealers.
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                    Logs supplier purchase ledger timelines.
                  </li>
                </ul>
              </div>

              {/* Visual Card */}
              <div className="lg:col-span-5 bg-black/60 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <div className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">
                  Warehouse Transit Logs
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-white/80">Dhaka HQ ➔ Sylhet Depot</span>
                      <span className="text-[#3B82F6] font-semibold">40%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full bg-[#3B82F6] rounded-full" style={{ width: '40%' }} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-white/80">Dhaka HQ ➔ Ctg Central</span>
                      <span className="text-emerald-400 font-semibold">85%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full bg-emerald-400 rounded-full" style={{ width: '85%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
