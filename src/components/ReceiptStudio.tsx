import React, { useState } from 'react';
import { Printer, Award, MapPin, FileText, CreditCard, Layers, Bell } from 'lucide-react';

export default function ReceiptStudio() {
  const [showLogo, setShowLogo] = useState(true);
  const [showAddress, setShowAddress] = useState(true);
  const [showVat, setShowVat] = useState(true);
  const [showDiscount, setShowDiscount] = useState(true);
  const [showBarcode, setShowBarcode] = useState(true);
  const [showGreetings, setShowGreetings] = useState(true);

  const subtotal = 740;
  const discount = showDiscount ? 40 : 0;
  const vat = showVat ? 35 : 0;
  const netTotal = subtotal - discount + vat;

  return (
    <section
      id="receipt-studio"
      className="w-full bg-[#050505] text-white py-20 md:py-32 border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/60 mb-3">
            <Printer className="w-3.5 h-3.5 text-[#3B82F6]" />
            Receipt Studio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif tracking-tight text-white mb-4">
            Dynamic Invoice Designer
          </h2>
          <p className="text-white/50 font-sans max-w-xl text-sm sm:text-base leading-relaxed">
            Custom build layouts satisfying your specific business workflows. Toggle fields below to watch our live invoice template redraw instantly.
          </p>
        </div>

        {/* Customizer Layout: Controls on Left (7 cols), Receipt Preview on Right (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
          {/* Controls */}
          <div className="lg:col-span-7 bg-[#0A0A0A] border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col gap-5 sm:gap-6">
            {/* Header Elements */}
            <div>
              <h4 className="text-[11px] sm:text-xs font-mono text-white/40 uppercase tracking-widest mb-3">
                Toggle Header Elements
              </h4>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setShowLogo(!showLogo)}
                  className={`p-3 sm:p-3.5 rounded-xl border text-xs font-medium flex items-center gap-2 sm:gap-2.5 transition-all cursor-pointer ${
                    showLogo
                      ? 'bg-white/10 border-white/30 text-white'
                      : 'bg-white/[0.02] border-white/5 text-white/40 hover:text-white/70'
                  }`}
                >
                  <Award className="w-4 h-4 text-[#3B82F6] shrink-0" />
                  <span className="truncate">Store Logo</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowAddress(!showAddress)}
                  className={`p-3 sm:p-3.5 rounded-xl border text-xs font-medium flex items-center gap-2 sm:gap-2.5 transition-all cursor-pointer ${
                    showAddress
                      ? 'bg-white/10 border-white/30 text-white'
                      : 'bg-white/[0.02] border-white/5 text-white/40 hover:text-white/70'
                  }`}
                >
                  <MapPin className="w-4 h-4 text-[#3B82F6] shrink-0" />
                  <span className="truncate">Outlet Address</span>
                </button>
              </div>
            </div>

            {/* Sales Elements */}
            <div>
              <h4 className="text-[11px] sm:text-xs font-mono text-white/40 uppercase tracking-widest mb-3">
                Toggle Sales Elements
              </h4>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setShowVat(!showVat)}
                  className={`p-3 sm:p-3.5 rounded-xl border text-xs font-medium flex items-center gap-2 sm:gap-2.5 transition-all cursor-pointer ${
                    showVat
                      ? 'bg-white/10 border-white/30 text-white'
                      : 'bg-white/[0.02] border-white/5 text-white/40 hover:text-white/70'
                  }`}
                >
                  <FileText className="w-4 h-4 text-[#3B82F6] shrink-0" />
                  <span className="truncate">NBR VAT (5%)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowDiscount(!showDiscount)}
                  className={`p-3 sm:p-3.5 rounded-xl border text-xs font-medium flex items-center gap-2 sm:gap-2.5 transition-all cursor-pointer ${
                    showDiscount
                      ? 'bg-white/10 border-white/30 text-white'
                      : 'bg-white/[0.02] border-white/5 text-white/40 hover:text-white/70'
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-[#3B82F6] shrink-0" />
                  <span className="truncate">Discount Line</span>
                </button>
              </div>
            </div>

            {/* Footer Elements */}
            <div>
              <h4 className="text-[11px] sm:text-xs font-mono text-white/40 uppercase tracking-widest mb-3">
                Toggle Footer Elements
              </h4>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setShowBarcode(!showBarcode)}
                  className={`p-3 sm:p-3.5 rounded-xl border text-xs font-medium flex items-center gap-2 sm:gap-2.5 transition-all cursor-pointer ${
                    showBarcode
                      ? 'bg-white/10 border-white/30 text-white'
                      : 'bg-white/[0.02] border-white/5 text-white/40 hover:text-white/70'
                  }`}
                >
                  <Layers className="w-4 h-4 text-[#3B82F6] shrink-0" />
                  <span className="truncate">Barcode Tag</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowGreetings(!showGreetings)}
                  className={`p-3 sm:p-3.5 rounded-xl border text-xs font-medium flex items-center gap-2 sm:gap-2.5 transition-all cursor-pointer ${
                    showGreetings
                      ? 'bg-white/10 border-white/30 text-white'
                      : 'bg-white/[0.02] border-white/5 text-white/40 hover:text-white/70'
                  }`}
                >
                  <Bell className="w-4 h-4 text-[#3B82F6] shrink-0" />
                  <span className="truncate">Greetings Note</span>
                </button>
              </div>
            </div>
          </div>

          {/* Live Receipt Paper Preview */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="bg-[#121212] border border-white/20 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 w-full max-w-sm font-mono text-xs shadow-2xl relative">
              {/* Header */}
              <div className="text-center pb-4 border-b border-dashed border-white/20">
                {showLogo && (
                  <div className="text-base font-bold text-white tracking-widest mb-1 transition-all">
                    core Agency POS
                  </div>
                )}
                <div className="text-white font-sans font-semibold text-sm">SMART RETAIL DEMO LTD.</div>
                {showAddress && (
                  <div className="text-white/50 text-[11px] mt-0.5 transition-all">
                    Sector 11, Uttara, Dhaka-1230
                  </div>
                )}
                <div className="text-white/40 text-[11px] mt-0.5">BIN: 002345678-0101</div>
              </div>

              {/* Invoice Meta */}
              <div className="py-3 border-b border-dashed border-white/20 flex justify-between text-[11px] text-white/60">
                <div>
                  <div>Invoice: <span className="text-white font-semibold">#INV-90487</span></div>
                  <div>Cashier: <span className="text-white">Rahim</span></div>
                </div>
                <div className="text-right">
                  <div>Date: <span className="text-white">08/03/2026</span></div>
                  <div>Status: <span className="text-emerald-400">Paid</span></div>
                </div>
              </div>

              {/* Items List */}
              <div className="py-3 border-b border-dashed border-white/20 flex flex-col gap-2 text-white/80">
                <div className="flex justify-between">
                  <span>Miniket Rice 5kg x1</span>
                  <span>৳380.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Soyabean Oil 2L x1</span>
                  <span>৳360.00</span>
                </div>
              </div>

              {/* Totals Matrix */}
              <div className="py-3 border-b border-dashed border-white/20 flex flex-col gap-1.5 text-white/60">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>৳{subtotal.toFixed(2)}</span>
                </div>

                {showDiscount && (
                  <div className="flex justify-between text-emerald-400 transition-all">
                    <span>Promo Discount:</span>
                    <span>-৳{discount.toFixed(2)}</span>
                  </div>
                )}

                {showVat && (
                  <div className="flex justify-between transition-all">
                    <span>NBR VAT (5%):</span>
                    <span>৳{vat.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-white/10">
                  <span>Net Total:</span>
                  <span className="text-[#3B82F6]">৳{netTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 text-center flex flex-col items-center gap-3">
                {showGreetings && (
                  <div className="transition-all">
                    <div className="font-sans font-medium text-white/90 text-[11px]">Thank You for Shopping!</div>
                    <div className="text-[10px] text-white/40">Goods once sold cannot be returned.</div>
                  </div>
                )}

                {showBarcode && (
                  <div className="flex flex-col items-center transition-all pt-1">
                    <div className="w-36 h-7 bg-white/10 flex items-center justify-center rounded">
                      <div className="flex items-center gap-1">
                        <div className="w-1 h-5 bg-white/70" />
                        <div className="w-0.5 h-5 bg-white/70" />
                        <div className="w-1.5 h-5 bg-white/70" />
                        <div className="w-0.5 h-5 bg-white/70" />
                        <div className="w-1 h-5 bg-white/70" />
                        <div className="w-2 h-5 bg-white/70" />
                        <div className="w-0.5 h-5 bg-white/70" />
                        <div className="w-1 h-5 bg-white/70" />
                      </div>
                    </div>
                    <span className="text-[10px] text-white/30 mt-1 font-mono">*INV-90487*</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
