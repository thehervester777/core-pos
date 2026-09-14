import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  Settings,
  TrendingUp,
  CheckCircle2,
  Activity,
  Search,
  RefreshCw,
  ArrowUpRight,
  Maximize2,
  Minimize2,
  ShieldCheck,
  Building2,
  Smartphone,
  Layers,
  Sparkles,
  Check,
  AlertTriangle,
  Send,
  Cloud,
  Wifi,
} from 'lucide-react';

interface AgencyCloudDashboardProps {
  className?: string;
}

type TabType = 'overview' | 'sales' | 'inventory' | 'customers' | 'configs';

interface TransactionRecord {
  id: string;
  outlet: string;
  time: string;
  items: number;
  amount: number;
  payment: 'bKash' | 'Nagad' | 'Cash' | 'Card POS';
  status: 'Synced' | 'Pending';
  latency: number;
}

interface InventoryRecord {
  sku: string;
  name: string;
  category: string;
  dhaka: number;
  ctg: number;
  sylhet: number;
  minStock: number;
  status: 'Healthy' | 'Low Stock' | 'Reorder Sent';
}

interface CustomerRecord {
  id: string;
  name: string;
  phone: string;
  tier: 'Platinum VIP' | 'Gold' | 'Silver';
  points: number;
  spent: number;
  lastVisit: string;
}

export default function AgencyCloudDashboard({ className = '' }: AgencyCloudDashboardProps) {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [latency, setLatency] = useState(87);
  const [chartRange, setChartRange] = useState<'today' | '7d' | '30d'>('today');
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [transferToast, setTransferToast] = useState<string | null>(null);
  const [branchFilter, setBranchFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Dynamic realistic ping fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      // Natural fluctuation around 70ms - 94ms
      const pings = [74, 82, 87, 85, 91, 68, 87, 79, 93, 84];
      const randomPing = pings[Math.floor(Math.random() * pings.length)];
      setLatency(randomPing);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLatency(Math.floor(Math.random() * 20) + 65);
      setIsRefreshing(false);
    }, 700);
  };

  const handleTransferRequest = (itemName: string) => {
    setTransferToast(`Inter-branch stock transfer initiated for ${itemName} (Dhaka -> Sylhet)`);
    setTimeout(() => {
      setTransferToast(null);
    }, 4000);
  };

  const transactions: TransactionRecord[] = [
    {
      id: 'INV-2026-9814',
      outlet: 'Dhaka Flagship',
      time: 'Just now',
      items: 4,
      amount: 3450,
      payment: 'bKash',
      status: 'Synced',
      latency: 42,
    },
    {
      id: 'INV-2026-9813',
      outlet: 'Dhanmondi Superstore',
      time: '3 mins ago',
      items: 7,
      amount: 1890,
      payment: 'Cash',
      status: 'Synced',
      latency: 38,
    },
    {
      id: 'INV-2026-9812',
      outlet: 'Chattogram GEC Hub',
      time: '6 mins ago',
      items: 2,
      amount: 4600,
      payment: 'Card POS',
      status: 'Synced',
      latency: 51,
    },
    {
      id: 'INV-2026-9811',
      outlet: 'Sylhet Zindabazar',
      time: '11 mins ago',
      items: 1,
      amount: 980,
      payment: 'Nagad',
      status: 'Synced',
      latency: 45,
    },
    {
      id: 'INV-2026-9810',
      outlet: 'Banani Lifestyle Outlet',
      time: '16 mins ago',
      items: 3,
      amount: 8250,
      payment: 'bKash',
      status: 'Synced',
      latency: 40,
    },
    {
      id: 'INV-2026-9809',
      outlet: 'Rajshahi Station Road',
      time: '22 mins ago',
      items: 5,
      amount: 1320,
      payment: 'Cash',
      status: 'Synced',
      latency: 36,
    },
  ];

  const inventoryData: InventoryRecord[] = [
    {
      sku: 'SKU-GRC-402',
      name: 'Miniket Premium Rice (25kg)',
      category: 'Superstore',
      dhaka: 142,
      ctg: 88,
      sylhet: 34,
      minStock: 50,
      status: 'Healthy',
    },
    {
      sku: 'SKU-PHR-109',
      name: 'Napa Extra 500mg Strip',
      category: 'Pharmacy',
      dhaka: 42,
      ctg: 15,
      sylhet: 8,
      minStock: 30,
      status: 'Low Stock',
    },
    {
      sku: 'SKU-APP-881',
      name: 'Oxford Cotton Shirt (L)',
      category: 'Apparel',
      dhaka: 65,
      ctg: 31,
      sylhet: 19,
      minStock: 25,
      status: 'Healthy',
    },
    {
      sku: 'SKU-RST-330',
      name: 'Bogra Special Sweet Curd (1kg)',
      category: 'Restaurant',
      dhaka: 28,
      ctg: 5,
      sylhet: 0,
      minStock: 20,
      status: 'Reorder Sent',
    },
    {
      sku: 'SKU-BEV-512',
      name: 'Pran Frooto Mango 1L',
      category: 'Grocery',
      dhaka: 210,
      ctg: 130,
      sylhet: 75,
      minStock: 60,
      status: 'Healthy',
    },
  ];

  const customersData: CustomerRecord[] = [
    {
      id: 'CUST-801',
      name: 'Tanvir Ahmed',
      phone: '+880 1711-284920',
      tier: 'Platinum VIP',
      points: 4820,
      spent: 114500,
      lastVisit: 'Today, 2:15 PM',
    },
    {
      id: 'CUST-802',
      name: 'Farzana Yasmin',
      phone: '+880 1819-938211',
      tier: 'Gold',
      points: 2640,
      spent: 68200,
      lastVisit: 'Yesterday',
    },
    {
      id: 'CUST-803',
      name: 'Rafiqul Islam',
      phone: '+880 1912-402918',
      tier: 'Gold',
      points: 1980,
      spent: 49100,
      lastVisit: '3 days ago',
    },
    {
      id: 'CUST-804',
      name: 'Nusrat Jahan',
      phone: '+880 1610-184922',
      tier: 'Silver',
      points: 950,
      spent: 24500,
      lastVisit: '5 days ago',
    },
  ];

  const chartDataByRange: Record<
    'today' | '7d' | '30d',
    {
      summary: { total: string; diff: string; changePercent: string; periodLabel: string };
      points: Array<{ time: string; x: number; y: number; value: number; label: string; change: string; orders: number }>;
    }
  > = {
    today: {
      summary: { total: '৳1,48,250', diff: '+৳23,040', changePercent: '+18.4%', periodLabel: 'vs yesterday' },
      points: [
        { time: '09:00', x: 28, y: 106, value: 24500, label: '৳24,500', change: '+6.2%', orders: 142 },
        { time: '12:00', x: 92, y: 78, value: 58200, label: '৳58,200', change: '+11.8%', orders: 388 },
        { time: '15:00', x: 156, y: 84, value: 89400, label: '৳89,400', change: '+14.5%', orders: 615 },
        { time: '18:00', x: 220, y: 44, value: 122800, label: '৳1,22,800', change: '+16.7%', orders: 940 },
        { time: '21:00', x: 284, y: 18, value: 148250, label: '৳1,48,250', change: '+18.4%', orders: 1284 },
      ],
    },
    '7d': {
      summary: { total: '৳8,92,400', diff: '+৳1,14,200', changePercent: '+14.7%', periodLabel: 'vs last week' },
      points: [
        { time: 'Mon', x: 28, y: 98, value: 105000, label: '৳1,05,000', change: '+8.4%', orders: 850 },
        { time: 'Wed', x: 92, y: 74, value: 138000, label: '৳1,38,000', change: '+12.1%', orders: 1120 },
        { time: 'Fri', x: 156, y: 56, value: 162000, label: '৳1,62,000', change: '+15.4%', orders: 1390 },
        { time: 'Sat', x: 220, y: 38, value: 210000, label: '৳2,10,000', change: '+19.2%', orders: 1840 },
        { time: 'Sun', x: 284, y: 16, value: 277400, label: '৳2,77,400', change: '+22.5%', orders: 2410 },
      ],
    },
    '30d': {
      summary: { total: '৳38,60,000', diff: '+৳6,40,000', changePercent: '+19.8%', periodLabel: 'vs prior 30d' },
      points: [
        { time: 'Wk 1', x: 28, y: 102, value: 680000, label: '৳6.8L', change: '+10.2%', orders: 5400 },
        { time: 'Wk 2', x: 92, y: 80, value: 890000, label: '৳8.9L', change: '+13.5%', orders: 7100 },
        { time: 'Wk 3', x: 156, y: 62, value: 1020000, label: '৳10.2L', change: '+16.8%', orders: 8600 },
        { time: 'Wk 4', x: 220, y: 38, value: 1270000, label: '৳12.7L', change: '+19.1%', orders: 10500 },
        { time: 'Closing', x: 284, y: 14, value: 1450000, label: '৳14.5L', change: '+23.4%', orders: 12200 },
      ],
    },
  };

  const currentChartData = chartDataByRange[chartRange];
  const chartPoints = currentChartData.points;

  // Mathematical smooth cubic Bézier curve
  const generateSmoothPath = (pts: typeof chartPoints) => {
    if (!pts.length) return '';
    let d = `M ${pts[0].x},${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i];
      const p1 = pts[i + 1];
      const cx1 = p0.x + (p1.x - p0.x) * 0.45;
      const cy1 = p0.y;
      const cx2 = p0.x + (p1.x - p0.x) * 0.55;
      const cy2 = p1.y;
      d += ` C ${cx1},${cy1} ${cx2},${cy2} ${p1.x},${p1.y}`;
    }
    return d;
  };

  const linePathD = generateSmoothPath(chartPoints);
  const areaPathD = `${linePathD} L ${chartPoints[chartPoints.length - 1].x},125 L ${chartPoints[0].x},125 Z`;

  const filteredTransactions = transactions.filter((t) => {
    const matchesBranch = branchFilter === 'all' || t.outlet.toLowerCase().includes(branchFilter.toLowerCase());
    const matchesSearch =
      searchQuery === '' ||
      t.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.outlet.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.payment.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBranch && matchesSearch;
  });

  return (
    <div
      id="cloud-dashboard"
      className={`mac-window-container w-full max-w-5xl mx-auto px-2 sm:px-4 transition-all duration-300 ${
        isFullscreen ? 'fixed inset-4 z-50 max-w-none px-0' : ''
      } ${className}`}
    >
      {/* Toast Notification */}
      {transferToast && (
        <div className="fixed top-20 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl border border-blue-400/40 flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-medium">{transferToast}</span>
        </div>
      )}

      {/* macOS-Style Window Container */}
      <div className="bg-white/95 backdrop-blur-2xl border border-blue-200/90 rounded-2xl shadow-[0_25px_70px_-15px_rgba(37,99,235,0.18)] overflow-hidden text-left transition-all duration-300">
        {/* Mac Titlebar */}
        <div className="bg-slate-50/90 border-b border-blue-100/90 h-12 px-3 sm:px-5 flex items-center justify-between relative select-none">
          {/* Mac Traffic Light Dots */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('overview')}
              title="Close / Reset view"
              className="w-3 h-3 rounded-full bg-[#ff5f56] hover:brightness-90 transition-all cursor-pointer flex items-center justify-center group"
            >
              <span className="opacity-0 group-hover:opacity-100 text-[8px] text-slate-800 font-bold leading-none">&times;</span>
            </button>
            <button
              onClick={() => handleRefresh()}
              title="Refresh telemetry"
              className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:brightness-90 transition-all cursor-pointer flex items-center justify-center group"
            >
              <span className="opacity-0 group-hover:opacity-100 text-[8px] text-slate-800 font-bold leading-none">-</span>
            </button>
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              title={isFullscreen ? 'Exit fullscreen' : 'Maximize window'}
              className="w-3 h-3 rounded-full bg-[#27c93f] hover:brightness-90 transition-all cursor-pointer flex items-center justify-center group"
            >
              <span className="opacity-0 group-hover:opacity-100 text-[6px] text-slate-800 font-bold leading-none">&#x2922;</span>
            </button>
          </div>

          {/* Window Title */}
          <div className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2 pointer-events-none">
            <Cloud className="w-3.5 h-3.5 text-blue-600 hidden sm:inline" />
            <span className="text-xs sm:text-sm font-semibold text-slate-800 tracking-tight">
              core Agency Cloud Dashboard
            </span>
            <span className="hidden md:inline-block px-2 py-0.5 rounded-md bg-blue-100/80 text-[10px] font-mono font-medium text-blue-700">
              v4.18
            </span>
          </div>

          {/* Right Status Indicator: Live Sync with dynamic ping */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleRefresh}
              title="Trigger sync ping"
              className="p-1 rounded-md text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-blue-600' : ''}`} />
            </button>

            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] font-medium text-emerald-800">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="hidden sm:inline text-slate-500 font-normal">Live Sync:</span>
              <span className="font-mono font-semibold text-emerald-700">{latency}ms</span>
            </div>

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors hidden sm:block cursor-pointer"
              title="Toggle Fullscreen"
            >
              {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Content Layout: Sidebar + Main Area */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] min-h-[460px] bg-slate-50/50">
          {/* macOS Left Sidebar */}
          <div className="bg-slate-50/90 border-b md:border-b-0 md:border-r border-blue-100/90 p-3 sm:p-4 flex flex-col justify-between">
            <div>
              <div className="text-[10px] uppercase font-mono tracking-wider font-semibold text-slate-400 px-3 mb-2 hidden md:block">
                Workspace Nodes
              </div>

              {/* Horizontal scroll on mobile, vertical stack on desktop */}
              <div className="flex md:flex-col gap-1 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
                <button
                  id="tab-overview"
                  onClick={() => setActiveTab('overview')}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                    activeTab === 'overview'
                      ? 'bg-blue-600 text-white shadow-[0_4px_12px_rgba(37,99,235,0.25)]'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-blue-100/50'
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4 flex-shrink-0" />
                  <span>Overview</span>
                </button>

                <button
                  id="tab-sales"
                  onClick={() => setActiveTab('sales')}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                    activeTab === 'sales'
                      ? 'bg-blue-600 text-white shadow-[0_4px_12px_rgba(37,99,235,0.25)]'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-blue-100/50'
                  }`}
                >
                  <ShoppingCart className="w-4 h-4 flex-shrink-0" />
                  <span>Sales logs</span>
                  <span
                    className={`ml-auto text-[10px] px-1.5 py-0.2 rounded-full hidden md:inline-block ${
                      activeTab === 'sales' ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    6 live
                  </span>
                </button>

                <button
                  id="tab-inventory"
                  onClick={() => setActiveTab('inventory')}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                    activeTab === 'inventory'
                      ? 'bg-blue-600 text-white shadow-[0_4px_12px_rgba(37,99,235,0.25)]'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-blue-100/50'
                  }`}
                >
                  <Package className="w-4 h-4 flex-shrink-0" />
                  <span>Inventory</span>
                </button>

                <button
                  id="tab-customers"
                  onClick={() => setActiveTab('customers')}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                    activeTab === 'customers'
                      ? 'bg-blue-600 text-white shadow-[0_4px_12px_rgba(37,99,235,0.25)]'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-blue-100/50'
                  }`}
                >
                  <Users className="w-4 h-4 flex-shrink-0" />
                  <span>Customers</span>
                </button>

                <button
                  id="tab-configs"
                  onClick={() => setActiveTab('configs')}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                    activeTab === 'configs'
                      ? 'bg-blue-600 text-white shadow-[0_4px_12px_rgba(37,99,235,0.25)]'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-blue-100/50'
                  }`}
                >
                  <Settings className="w-4 h-4 flex-shrink-0" />
                  <span>Configs</span>
                </button>
              </div>
            </div>

            {/* Sidebar Bottom Node Status */}
            <div className="hidden md:block pt-4 border-t border-blue-100/80 mt-6">
              <div className="p-2.5 rounded-xl bg-blue-50/80 border border-blue-100">
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-700 mb-1">
                  <span className="flex items-center gap-1.5">
                    <Wifi className="w-3 h-3 text-emerald-600" />
                    4 Outlets Online
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="text-[10px] text-slate-500 font-sans leading-tight">
                  Replicating Dhaka, Ctg, Sylhet, Rajshahi in real-time.
                </div>
              </div>
            </div>
          </div>

          {/* Main Body Pane */}
          <div className="bg-white p-4 sm:p-6 overflow-y-auto max-h-[580px]">
            {/* 1. OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 items-start">
                  {/* Real-time Sales Margin Chart Pane */}
                  <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-[0_4px_24px_rgba(37,99,235,0.04)] relative overflow-hidden">
                    {/* Header: Title & Time Range Switcher */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2.5">
                          <span className="text-sm sm:text-base font-bold text-slate-900 tracking-tight font-sans">
                            Real-time Sales Margin
                          </span>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Live Mesh
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Aggregated real-time gross margins across 4 regional outlets
                        </p>
                      </div>

                      {/* Time Range Segmented Control */}
                      <div className="flex items-center gap-1 p-1 bg-slate-100/90 rounded-xl border border-slate-200/70 text-[11px] font-medium">
                        {(['today', '7d', '30d'] as const).map((r) => (
                          <button
                            key={r}
                            onClick={() => {
                              setChartRange(r);
                              setHoveredPoint(null);
                            }}
                            className={`px-3 py-1 rounded-lg capitalize transition-all cursor-pointer ${
                              chartRange === r
                                ? 'bg-white text-blue-600 shadow-xs font-semibold'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            {r === 'today' ? 'Today' : r === '7d' ? '7 Days' : '30 Days'}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Primary Metric Readout Banner */}
                    <div className="flex flex-wrap items-baseline gap-3 mb-2 pt-1 border-t border-slate-100">
                      <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif tracking-tight">
                        {currentChartData.summary.total}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-emerald-100/80 text-emerald-700 text-xs font-bold">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                          {currentChartData.summary.changePercent}
                        </span>
                        <span className="text-[11px] text-slate-500">
                          {currentChartData.summary.diff} {currentChartData.summary.periodLabel}
                        </span>
                      </div>
                    </div>

                    {/* Clean & Professional Area Chart SVG */}
                    <div className="relative w-full h-[190px] sm:h-[220px] mt-1 select-none">
                      <svg
                        viewBox="0 0 310 135"
                        preserveAspectRatio="none"
                        className="w-full h-full overflow-visible"
                      >
                        <defs>
                          <linearGradient id="proChartAreaGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.22" />
                            <stop offset="45%" stopColor="#38BDF8" stopOpacity="0.08" />
                            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.0" />
                          </linearGradient>
                          <linearGradient id="proChartLineGrad" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#3B82F6" />
                            <stop offset="60%" stopColor="#2563EB" />
                            <stop offset="100%" stopColor="#1D4ED8" />
                          </linearGradient>
                          <filter id="proGlow" x="-10%" y="-10%" width="120%" height="120%">
                            <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodColor="#2563EB" floodOpacity="0.25" />
                          </filter>
                        </defs>

                        {/* Y-Axis Value Labels & Subtle Grid Lines */}
                        <g opacity="0.65">
                          <line x1="24" y1="20" x2="300" y2="20" stroke="#E2E8F0" strokeDasharray="3 3" strokeWidth="0.75" />
                          <text x="2" y="23" fill="#94A3B8" fontSize="7.5" fontFamily="ui-monospace, monospace">150k</text>

                          <line x1="24" y1="52" x2="300" y2="52" stroke="#E2E8F0" strokeDasharray="3 3" strokeWidth="0.75" />
                          <text x="2" y="55" fill="#94A3B8" fontSize="7.5" fontFamily="ui-monospace, monospace">100k</text>

                          <line x1="24" y1="84" x2="300" y2="84" stroke="#E2E8F0" strokeDasharray="3 3" strokeWidth="0.75" />
                          <text x="2" y="87" fill="#94A3B8" fontSize="7.5" fontFamily="ui-monospace, monospace">50k</text>

                          <line x1="24" y1="116" x2="300" y2="116" stroke="#E2E8F0" strokeWidth="0.75" />
                          <text x="8" y="119" fill="#94A3B8" fontSize="7.5" fontFamily="ui-monospace, monospace">0</text>
                        </g>

                        {/* Interactive Guideline (Crosshair on hover) */}
                        {hoveredPoint !== null && (
                          <line
                            x1={chartPoints[hoveredPoint].x}
                            y1={chartPoints[hoveredPoint].y}
                            x2={chartPoints[hoveredPoint].x}
                            y2={116}
                            stroke="#3B82F6"
                            strokeWidth="1.2"
                            strokeDasharray="2 2"
                            opacity="0.75"
                          />
                        )}

                        {/* Filled Gradient Area */}
                        <path
                          d={areaPathD}
                          fill="url(#proChartAreaGrad)"
                        />

                        {/* Smooth Bézier Curve Stroke */}
                        <path
                          d={linePathD}
                          fill="none"
                          stroke="url(#proChartLineGrad)"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          filter="url(#proGlow)"
                        />

                        {/* Interactive Data Points */}
                        {chartPoints.map((pt, idx) => {
                          const isHovered = hoveredPoint === idx;
                          return (
                            <g
                              key={idx}
                              className="cursor-pointer group"
                              onMouseEnter={() => setHoveredPoint(idx)}
                              onMouseLeave={() => setHoveredPoint(null)}
                            >
                              {/* Extended transparent hit area */}
                              <circle cx={pt.x} cy={pt.y} r={14} fill="transparent" />

                              {/* Hover Halo Ring */}
                              {isHovered && (
                                <circle
                                  cx={pt.x}
                                  cy={pt.y}
                                  r={10}
                                  fill="#2563EB"
                                  opacity="0.16"
                                />
                              )}

                              {/* Core Point Dot */}
                              <circle
                                cx={pt.x}
                                cy={pt.y}
                                r={isHovered ? 5.5 : 3.5}
                                fill="#FFFFFF"
                                stroke="#2563EB"
                                strokeWidth={isHovered ? 2.5 : 2}
                                className="transition-all duration-150"
                              />
                            </g>
                          );
                        })}
                      </svg>

                      {/* Tooltip Overlay */}
                      {hoveredPoint !== null && (
                        <div
                          className="absolute pointer-events-none bg-slate-900/95 text-white px-3 py-2 rounded-xl shadow-2xl text-[11px] font-mono z-30 border border-slate-700/80 backdrop-blur-md transform -translate-x-1/2 transition-all duration-150"
                          style={{
                            left: `${(chartPoints[hoveredPoint].x / 310) * 100}%`,
                            top: `${Math.max(6, chartPoints[hoveredPoint].y - 48)}px`,
                          }}
                        >
                          <div className="flex items-center justify-between gap-3 text-[10px] text-slate-400 border-b border-slate-800 pb-1 mb-1">
                            <span>{chartPoints[hoveredPoint].time}</span>
                            <span className="text-blue-300 font-semibold">{chartPoints[hoveredPoint].orders} orders</span>
                          </div>
                          <div className="flex items-center justify-between gap-3">
                            <span className="font-bold text-white text-xs">{chartPoints[hoveredPoint].label}</span>
                            <span className="text-[10px] font-bold text-emerald-400">{chartPoints[hoveredPoint].change}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* X-Axis Time Labels */}
                    <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-2 px-6">
                      {chartPoints.map((pt, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setHoveredPoint(idx)}
                          className={`hover:text-blue-600 transition-colors cursor-pointer ${
                            hoveredPoint === idx ? 'text-blue-600 font-bold' : ''
                          }`}
                        >
                          {pt.time}
                        </button>
                      ))}
                    </div>

                    {/* Chart Footer Summary Strip */}
                    <div className="mt-4 pt-3.5 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-slate-600">
                      <div>
                        <span className="text-slate-400 text-[10px] block">Velocity</span>
                        <strong className="text-slate-900 font-mono">৳24,500/hr</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] block">Gross Margin</span>
                        <strong className="text-emerald-600 font-mono">38.7%</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] block">Avg Ticket</span>
                        <strong className="text-slate-900 font-mono">৳1,420</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] block">Terminals</span>
                        <strong className="text-blue-600 font-mono">4 Outlets (Live)</strong>
                      </div>
                    </div>
                  </div>

                  {/* Right Stats Pane (Matching Netlify 3-stat Card Layout) */}
                  <div className="flex flex-col gap-3.5">
                    {/* Stat Card 1: Sales Margin Today */}
                    <div className="bg-slate-50/90 hover:bg-blue-50/60 transition-colors border border-blue-100 rounded-2xl p-4 shadow-sm flex items-center justify-between group">
                      <div>
                        <div className="text-[11px] text-slate-500 font-medium tracking-wide">
                          Sales Margin Today
                        </div>
                        <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-serif tracking-tight mt-0.5">
                          ৳1,48,250
                        </div>
                        <div className="text-[10px] text-emerald-600 font-medium flex items-center gap-1 mt-1">
                          <ArrowUpRight className="w-3 h-3" />
                          +18.4% vs yesterday
                        </div>
                      </div>
                      <div className="w-11 h-11 rounded-xl bg-emerald-100/70 border border-emerald-200/80 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-transform">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Stat Card 2: Active Outlet Nodes */}
                    <div className="bg-slate-50/90 hover:bg-blue-50/60 transition-colors border border-blue-100 rounded-2xl p-4 shadow-sm flex items-center justify-between group">
                      <div>
                        <div className="text-[11px] text-slate-500 font-medium tracking-wide">
                          Active Outlet Nodes
                        </div>
                        <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-serif tracking-tight mt-0.5">
                          4 Synced
                        </div>
                        <div className="text-[10px] text-blue-600 font-mono mt-1">
                          Dhaka, Ctg, Sylhet, Rajshahi
                        </div>
                      </div>
                      <div className="w-11 h-11 rounded-xl bg-blue-100/70 border border-blue-200/80 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Stat Card 3: bKash Reconciled */}
                    <div className="bg-slate-50/90 hover:bg-blue-50/60 transition-colors border border-blue-100 rounded-2xl p-4 shadow-sm flex items-center justify-between group">
                      <div>
                        <div className="text-[11px] text-slate-500 font-medium tracking-wide">
                          bKash Reconciled
                        </div>
                        <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-serif tracking-tight mt-0.5">
                          ৳14,500
                        </div>
                        <div className="text-[10px] text-amber-600 font-medium mt-1">
                          100% automated MFS settlement
                        </div>
                      </div>
                      <div className="w-11 h-11 rounded-xl bg-amber-100/70 border border-amber-200/80 flex items-center justify-center text-amber-600 group-hover:scale-105 transition-transform">
                        <Activity className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. SALES LOGS TAB */}
            {activeTab === 'sales' && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 font-sans">
                      Real-time Sales & Payment Stream
                    </h3>
                    <p className="text-xs text-slate-500">
                      Live audit log across Dhaka, Chattogram, Sylhet, and Rajshahi registers
                    </p>
                  </div>

                  {/* Filter & Search */}
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search invoice or outlet..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-8 pr-3 py-1 text-xs bg-slate-100 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500 w-44 sm:w-56"
                      />
                    </div>
                    <select
                      value={branchFilter}
                      onChange={(e) => setBranchFilter(e.target.value)}
                      className="text-xs bg-slate-100 border border-slate-200 rounded-lg px-2.5 py-1 text-slate-700 focus:outline-none cursor-pointer"
                    >
                      <option value="all">All Outlets</option>
                      <option value="Dhaka">Dhaka Nodes</option>
                      <option value="Chattogram">Chattogram</option>
                      <option value="Sylhet">Sylhet</option>
                      <option value="Rajshahi">Rajshahi</option>
                    </select>
                  </div>
                </div>

                {/* Transactions Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-200/80 text-slate-400 font-mono text-[10px] uppercase">
                        <th className="py-2.5 px-3">Invoice ID</th>
                        <th className="py-2.5 px-3">Outlet Node</th>
                        <th className="py-2.5 px-3">Items</th>
                        <th className="py-2.5 px-3">Amount</th>
                        <th className="py-2.5 px-3">Gateway</th>
                        <th className="py-2.5 px-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-sans">
                      {filteredTransactions.map((tx) => (
                        <tr key={tx.id} className="hover:bg-blue-50/50 transition-colors">
                          <td className="py-3 px-3 font-mono font-medium text-blue-600">
                            {tx.id}
                            <div className="text-[10px] text-slate-400 font-normal">{tx.time}</div>
                          </td>
                          <td className="py-3 px-3 font-medium text-slate-800">
                            {tx.outlet}
                          </td>
                          <td className="py-3 px-3 text-slate-600">
                            {tx.items} items
                          </td>
                          <td className="py-3 px-3 font-bold text-slate-900 font-mono">
                            ৳{tx.amount.toLocaleString()}
                          </td>
                          <td className="py-3 px-3">
                            <span
                              className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium ${
                                tx.payment === 'bKash'
                                  ? 'bg-pink-100 text-pink-700'
                                  : tx.payment === 'Nagad'
                                  ? 'bg-orange-100 text-orange-700'
                                  : tx.payment === 'Card POS'
                                  ? 'bg-purple-100 text-purple-700'
                                  : 'bg-emerald-100 text-emerald-700'
                              }`}
                            >
                              {tx.payment}
                            </span>
                          </td>
                          <td className="py-3 px-3">
                            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600">
                              <Check className="w-3 h-3 text-emerald-600" />
                              Synced ({tx.latency}ms)
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-100 flex items-center justify-between text-xs text-blue-900">
                  <span className="flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    NBR Mushak-6.3 digital hash generated for all 6 transactions.
                  </span>
                  <span className="font-mono text-[11px] text-blue-700 font-semibold">
                    100% Validated
                  </span>
                </div>
              </div>
            )}

            {/* 3. INVENTORY TAB */}
            {activeTab === 'inventory' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 font-sans">
                      Multi-Branch Stock Synchronization
                    </h3>
                    <p className="text-xs text-slate-500">
                      Decentralized warehouse balances auto-reconciled every transaction
                    </p>
                  </div>
                  <div className="text-xs font-mono text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    Live Stock Mesh Active
                  </div>
                </div>

                {/* Inventory Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-200/80 text-slate-400 font-mono text-[10px] uppercase">
                        <th className="py-2.5 px-3">Product / SKU</th>
                        <th className="py-2.5 px-3">Dhaka Hub</th>
                        <th className="py-2.5 px-3">Ctg Port</th>
                        <th className="py-2.5 px-3">Sylhet</th>
                        <th className="py-2.5 px-3">Status</th>
                        <th className="py-2.5 px-3 text-right">Inter-Branch Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-sans">
                      {inventoryData.map((item) => (
                        <tr key={item.sku} className="hover:bg-blue-50/40 transition-colors">
                          <td className="py-3 px-3">
                            <div className="font-bold text-slate-900">{item.name}</div>
                            <div className="text-[10px] text-slate-400 font-mono">{item.sku} &bull; {item.category}</div>
                          </td>
                          <td className="py-3 px-3 font-mono font-semibold text-slate-800">
                            {item.dhaka} pcs
                          </td>
                          <td className="py-3 px-3 font-mono font-semibold text-slate-800">
                            {item.ctg} pcs
                          </td>
                          <td className="py-3 px-3 font-mono font-semibold text-slate-800">
                            {item.sylhet} pcs
                          </td>
                          <td className="py-3 px-3">
                            <span
                              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                                item.status === 'Healthy'
                                  ? 'bg-emerald-100 text-emerald-700'
                                  : item.status === 'Low Stock'
                                  ? 'bg-amber-100 text-amber-700'
                                  : 'bg-red-100 text-red-700'
                              }`}
                            >
                              {item.status === 'Healthy' ? (
                                <Check className="w-3 h-3" />
                              ) : (
                                <AlertTriangle className="w-3 h-3" />
                              )}
                              {item.status}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-right">
                            <button
                              onClick={() => handleTransferRequest(item.name)}
                              className="px-2.5 py-1 bg-white hover:bg-blue-600 hover:text-white border border-blue-200 rounded-lg text-[11px] font-medium text-blue-600 transition-all cursor-pointer shadow-sm"
                            >
                              Dispatch Rebalance
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 4. CUSTOMERS TAB */}
            {activeTab === 'customers' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 font-sans">
                      Omnichannel Customer Loyalty & CRM
                    </h3>
                    <p className="text-xs text-slate-500">
                      Instant WhatsApp/SMS e-receipt dispatch and tier progression
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    98.4% SMS Delivery
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {customersData.map((cust) => (
                    <div
                      key={cust.id}
                      className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/70 hover:bg-blue-50/40 transition-colors flex flex-col justify-between gap-3"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                            {cust.name}
                            <span
                              className={`text-[10px] px-2 py-0.2 rounded-full font-mono font-medium ${
                                cust.tier === 'Platinum VIP'
                                  ? 'bg-purple-100 text-purple-700 border border-purple-200'
                                  : cust.tier === 'Gold'
                                  ? 'bg-amber-100 text-amber-800 border border-amber-200'
                                  : 'bg-slate-200 text-slate-700'
                              }`}
                            >
                              {cust.tier}
                            </span>
                          </div>
                          <div className="text-xs font-mono text-slate-500 mt-0.5">{cust.phone}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-extrabold text-blue-600 font-mono">
                            {cust.points.toLocaleString()} pts
                          </div>
                          <div className="text-[10px] text-slate-400">Total Spend ৳{cust.spent.toLocaleString()}</div>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
                        <span>Last Visit: {cust.lastVisit}</span>
                        <button
                          onClick={() => {
                            setTransferToast(`SMS Promo voucher sent to ${cust.name}`);
                            setTimeout(() => setTransferToast(null), 3500);
                          }}
                          className="text-blue-600 hover:underline font-medium cursor-pointer flex items-center gap-1"
                        >
                          <Send className="w-3 h-3" />
                          Send Voucher
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. CONFIGS TAB */}
            {activeTab === 'configs' && (
              <div className="space-y-4">
                <div className="pb-3 border-b border-slate-100">
                  <h3 className="text-base font-bold text-slate-900 font-sans">
                    Cloud POS Topology & Replication Settings
                  </h3>
                  <p className="text-xs text-slate-500">
                    High-availability replication settings for Bangladesh enterprise network
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/30 space-y-2">
                    <div className="font-bold text-slate-900 flex items-center gap-2">
                      <Cloud className="w-4 h-4 text-blue-600" />
                      Cloud Cluster Routing
                    </div>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      Primary nodes hosted in Tier-3 Dhaka Data Center with automatic Singapore failover.
                    </p>
                    <div className="flex items-center justify-between pt-2 text-[11px]">
                      <span className="text-slate-500">Sync Interval:</span>
                      <span className="font-mono font-bold text-blue-700">Real-time Webhook (&lt;100ms)</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/30 space-y-2">
                    <div className="font-bold text-slate-900 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-blue-600" />
                      Offline Buffer Database
                    </div>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      Local SQLite cache safely retains up to 50,000 transactions when internet drops.
                    </p>
                    <div className="flex items-center justify-between pt-2 text-[11px]">
                      <span className="text-slate-500">Pending Outbox:</span>
                      <span className="font-mono font-bold text-emerald-600">0 Packets (All Synced)</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/30 space-y-2">
                    <div className="font-bold text-slate-900 flex items-center gap-2">
                      <Smartphone className="w-4 h-4 text-pink-600" />
                      bKash / Nagad Direct Webhook
                    </div>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      MFS payment references auto-matched without cash register discrepancy.
                    </p>
                    <div className="flex items-center justify-between pt-2 text-[11px]">
                      <span className="text-slate-500">Merchant Gateway:</span>
                      <span className="font-mono font-bold text-emerald-600">Connected &amp; Active</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/30 space-y-2">
                    <div className="font-bold text-slate-900 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      NBR Mushak-6.3 Compliance
                    </div>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      Compliant QR code and cryptographic signature appended to each digital invoice.
                    </p>
                    <div className="flex items-center justify-between pt-2 text-[11px]">
                      <span className="text-slate-500">VAT Hash Key:</span>
                      <span className="font-mono font-bold text-slate-800">NBR-BD-2026-SHA256</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
