import React, { useState } from 'react';
import { Globe, Radio, Server, ArrowRight } from 'lucide-react';

interface BranchNode {
  id: string;
  name: string;
  division: string;
  terminals: number;
  transactionsToday: number;
  latency: string;
  status: string;
  x: number; // percentage
  y: number; // percentage
}

const branches: BranchNode[] = [
  {
    id: 'dhaka',
    name: 'Dhaka Banani Hub',
    division: 'Dhaka',
    terminals: 6,
    transactionsToday: 3450,
    latency: '87ms',
    status: 'Synced & Active',
    x: 50,
    y: 48,
  },
  {
    id: 'chittagong',
    name: 'Chittagong Central',
    division: 'Chittagong',
    terminals: 4,
    transactionsToday: 2180,
    latency: '94ms',
    status: 'Synced & Active',
    x: 68,
    y: 72,
  },
  {
    id: 'sylhet',
    name: 'Sylhet Depot',
    division: 'Sylhet',
    terminals: 2,
    transactionsToday: 1140,
    latency: '102ms',
    status: 'Synced & Active',
    x: 68,
    y: 28,
  },
  {
    id: 'rajshahi',
    name: 'Rajshahi Division',
    division: 'Rajshahi',
    terminals: 3,
    transactionsToday: 1620,
    latency: '110ms',
    status: 'Synced & Active',
    x: 30,
    y: 38,
  },
];

export default function BranchMapSync() {
  const [selectedBranch, setSelectedBranch] = useState<BranchNode>(branches[0]);

  return (
    <section
      id="cloud-sync"
      className="w-full bg-[#050505] text-white py-20 md:py-32 border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Context & Overview (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/60 w-fit">
              <Globe className="w-3.5 h-3.5 text-[#3B82F6]" />
              Real-time Cloud Sync
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif tracking-tight text-white">
              Centralized Control Over{' '}
              <span className="italic text-white/40">All Branches.</span>
            </h2>
            <p className="text-white/70 font-sans text-sm sm:text-base leading-relaxed">
              Manage stock allocation, staff attendance registers, and pricing matrices across Dhaka, Chittagong, Sylhet, and Rajshahi instantly from our centralized web-hub.
            </p>
            <p className="text-white/45 font-sans text-xs sm:text-sm leading-relaxed">
              Hover over our main business nodes on the map to inspect live counter active statuses and daily transaction volumes synced securely under sub-second latency.
            </p>

            {/* Selected Branch Detail Box */}
            <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0A0A0A] border border-white/10 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <h4 className="font-semibold text-white text-sm sm:text-base">{selectedBranch.name}</h4>
                </div>
                <span className="text-[11px] sm:text-xs font-mono text-white/40">Ping: {selectedBranch.latency}</span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs font-mono pt-2 border-t border-white/5">
                <div>
                  <span className="text-white/40 block text-[11px]">Register Terminals:</span>
                  <span className="text-white font-bold text-xs sm:text-sm">{selectedBranch.terminals} Lanes Active</span>
                </div>
                <div>
                  <span className="text-white/40 block text-[11px]">Daily Transactions:</span>
                  <span className="text-[#3B82F6] font-bold text-xs sm:text-sm">
                    {selectedBranch.transactionsToday.toLocaleString()} orders
                  </span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="#terminal"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-white/20 text-white/90 font-sans font-medium text-sm hover:bg-white hover:text-black transition-all cursor-pointer text-center"
              >
                Explore Franchise Plan
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Map (6 cols) */}
          <div className="lg:col-span-6 bg-[#0A0A0A] border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 relative min-h-[340px] sm:min-h-[380px] flex flex-col justify-between overflow-hidden">
            {/* Background Grid Lines */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),rgba(255,255,255,0))] pointer-events-none" />
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            {/* Top Bar info */}
            <div className="flex justify-between items-center text-xs font-mono text-white/40 z-10">
              <span className="flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-[#3B82F6]" />
                Cluster Mesh Topology
              </span>
              <span>4 Geo-Zones</span>
            </div>

            {/* Interactive Node Canvas Area */}
            <div className="relative w-full h-64 sm:h-72 my-4 z-10 flex items-center justify-center">
              {/* Silhouette outline hint */}
              <div className="w-48 sm:w-56 h-56 sm:h-64 border border-dashed border-white/10 rounded-[40px] absolute transform rotate-6 pointer-events-none" />

              {/* Branch Markers */}
              {branches.map((branch) => {
                const isSelected = selectedBranch.id === branch.id;
                return (
                  <button
                    key={branch.id}
                    type="button"
                    onClick={() => setSelectedBranch(branch)}
                    onMouseEnter={() => setSelectedBranch(branch)}
                    style={{ left: `${branch.x}%`, top: `${branch.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none"
                  >
                    <div className="relative flex items-center justify-center">
                      <span
                        className={`absolute w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-all ${
                          isSelected
                            ? 'bg-[#3B82F6]/40 scale-150 animate-ping'
                            : 'bg-white/10 group-hover:bg-[#3B82F6]/30'
                        }`}
                      />
                      <span
                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 transition-all ${
                          isSelected
                            ? 'bg-[#3B82F6] border-white scale-125'
                            : 'bg-white/80 border-black/80 group-hover:bg-[#3B82F6]'
                        }`}
                      />
                    </div>
                    <span
                      className={`absolute top-4 sm:top-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-full transition-all ${
                        isSelected
                          ? 'bg-white text-black font-bold shadow-lg'
                          : 'bg-black/80 text-white/70 border border-white/10 group-hover:text-white'
                      }`}
                    >
                      {branch.division}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Bottom Status Ticker */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-[11px] font-mono text-white/40 pt-3 border-t border-white/5 z-10">
              <span className="flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-emerald-400" />
                Zero Counter Halt Guaranteed
              </span>
              <span>Replication: 99.99%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
