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
      className="w-full bg-[#F0F7FF] text-slate-900 py-20 md:py-32 border-t border-blue-200/50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 font-medium mb-3">
            <Printer className="w-3.5 h-3.5 text-blue-600" />
            Receipt Studio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif tracking-tight text-slate-900 mb-4">
            Dynamic Invoice Designer
          </h2>
          <p className="text-slate-600 font-sans max-w-xl text-sm sm:text-base leading-relaxed">
            Custom build layouts satisfying your specific business workflows. Toggle fields below to watch our live invoice template redraw instantly.
          </p>
        </div>

        {/* Customizer Layout: Controls on Left (7 cols), Receipt Preview on Right (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
          {/* Controls */}
          <div className="lg:col-span-7 bg-white/80 border border-blue-200/70 rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col gap-5 sm:gap-6 backdrop-blur-2xl shadow-[0_20px_50px_rgba(37,99,235,0.08),0_1px_2px_rgba(255,255,255,0.95)_inset]">
            {/* Header Elements */}
            <div>
              <h4 className="text-[11px] sm:text-xs font-mono text-slate-500 uppercase tracking-widest mb-3 font-semibold">
                Toggle Header Elements
              </h4>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setShowLogo(!showLogo)}
                  className={`p-3 sm:p-3.5 rounded-xl border text-xs font-medium flex items-center gap-2 sm:gap-2.5 transition-all cursor-pointer ${
                    showLogo
                      ? 'bg-blue-50/90 border-blue-300 text-blue-700 font-semibold shadow-xs'
                      : 'bg-white border-blue-100 text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Award className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="truncate">Store Logo</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowAddress(!showAddress)}
                  className={`p-3 sm:p-3.5 rounded-xl border text-xs font-medium flex items-center gap-2 sm:gap-2.5 transition-all cursor-pointer ${
                    showAddress
                      ? 'bg-blue-50/90 border-blue-300 text-blue-700 font-semibold shadow-xs'
                      : 'bg-white border-blue-100 text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="truncate">Outlet Address</span>
                </button>
              </div>
            </div>

            {/* Sales Elements */}
            <div>
              <h4 className="text-[11px] sm:text-xs font-mono text-slate-500 uppercase tracking-widest mb-3 font-semibold">
                Toggle Sales Elements
              </h4>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setShowVat(!showVat)}
                  className={`p-3 sm:p-3.5 rounded-xl border text-xs font-medium flex items-center gap-2 sm:gap-2.5 transition-all cursor-pointer ${
                    showVat
                      ? 'bg-blue-50/90 border-blue-300 text-blue-700 font-semibold shadow-xs'
                      : 'bg-white border-blue-100 text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <FileText className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="truncate">NBR VAT (5%)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowDiscount(!showDiscount)}
                  className={`p-3 sm:p-3.5 rounded-xl border text-xs font-medium flex items-center gap-2 sm:gap-2.5 transition-all cursor-pointer ${
                    showDiscount
                      ? 'bg-blue-50/90 border-blue-300 text-blue-700 font-semibold shadow-xs'
                      : 'bg-white border-blue-100 text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="truncate">Discount Line</span>
                </button>
              </div>
            </div>

            {/* Footer Elements */}
            <div>
              <h4 className="text-[11px] sm:text-xs font-mono text-slate-500 uppercase tracking-widest mb-3 font-semibold">
                Toggle Footer Elements
              </h4>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setShowBarcode(!showBarcode)}
                  className={`p-3 sm:p-3.5 rounded-xl border text-xs font-medium flex items-center gap-2 sm:gap-2.5 transition-all cursor-pointer ${
                    showBarcode
                      ? 'bg-blue-50/90 border-blue-300 text-blue-700 font-semibold shadow-xs'
                      : 'bg-white border-blue-100 text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Layers className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="truncate">Barcode Tag</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowGreetings(!showGreetings)}
                  className={`p-3 sm:p-3.5 rounded-xl border text-xs font-medium flex items-center gap-2 sm:gap-2.5 transition-all cursor-pointer ${
                    showGreetings
                      ? 'bg-blue-50/90 border-blue-300 text-blue-700 font-semibold shadow-xs'
                      : 'bg-white border-blue-100 text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Bell className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="truncate">Greetings Note</span>
                </button>
              </div>
            </div>
          </div>

          {/* Live Receipt Paper Preview */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="bg-white/95 border border-blue-200/80 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 w-full max-w-sm font-mono text-xs shadow-[0_20px_50px_-10px_rgba(37,99,235,0.14),0_0_0_1px_rgba(255,255,255,0.8)_inset] backdrop-blur-xl relative text-slate-800">
              {/* Header */}
              <div className="text-center pb-4 border-b border-dashed border-blue-200">
                {showLogo && (
                  <div className="text-base font-bold text-blue-600 tracking-widest mb-1 transition-all">
                    core Agency POS
                  </div>
                )}
                <div className="text-slate-900 font-sans font-bold text-sm">SMART RETAIL DEMO LTD.</div>
                {showAddress && (
                  <div className="text-slate-500 text-[11px] mt-0.5 transition-all">
                    Sector 11, Uttara, Dhaka-1230
                  </div>
                )}
                <div className="text-slate-400 text-[11px] mt-0.5 font-medium">BIN: 002345678-0101</div>
              </div>

              {/* Invoice Meta */}
              <div className="py-3 border-b border-dashed border-blue-200 flex justify-between text-[11px] text-slate-500">
                <div>
                  <div>Invoice: <span className="text-slate-900 font-semibold">#INV-90487</span></div>
                  <div>Cashier: <span className="text-slate-800">Rahim</span></div>
                </div>
                <div className="text-right">
                  <div>Date: <span className="text-slate-800">08/03/2026</span></div>
                  <div>Status: <span className="text-emerald-600 font-bold">Paid</span></div>
                </div>
              </div>

              {/* Items List */}
              <div className="py-3 border-b border-dashed border-blue-200 flex flex-col gap-2 text-slate-700">
                <div className="flex justify-between">
                  <span>Miniket Rice 5kg x1</span>
                  <span className="font-semibold text-slate-900">৳380.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Soyabean Oil 2L x1</span>
                  <span className="font-semibold text-slate-900">৳360.00</span>
                </div>
              </div>

              {/* Totals Matrix */}
              <div className="py-3 border-b border-dashed border-blue-200 flex flex-col gap-1.5 text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-medium text-slate-800">৳{subtotal.toFixed(2)}</span>
                </div>

                {showDiscount && (
                  <div className="flex justify-between text-emerald-600 font-semibold transition-all">
                    <span>Promo Discount:</span>
                    <span>-৳{discount.toFixed(2)}</span>
                  </div>
                )}

                {showVat && (
                  <div className="flex justify-between transition-all">
                    <span>NBR VAT (5%):</span>
                    <span className="font-medium text-slate-800">৳{vat.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-sm font-bold text-slate-900 pt-2 border-t border-blue-200">
                  <span>Net Total:</span>
                  <span className="text-blue-600">৳{netTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 text-center flex flex-col items-center gap-3">
                {showGreetings && (
                  <div className="transition-all">
                    <div className="font-sans font-semibold text-slate-800 text-[11px]">Thank You for Shopping!</div>
                    <div className="text-[10px] text-slate-500">Goods once sold cannot be returned.</div>
                  </div>
                )}

                {showBarcode && (
                  <div className="flex flex-col items-center transition-all pt-1">
                    <div className="w-36 h-7 bg-blue-50 border border-blue-100 flex items-center justify-center rounded">
                      <div className="flex items-center gap-1">
                        <div className="w-1 h-5 bg-slate-800" />
                        <div className="w-0.5 h-5 bg-slate-800" />
                        <div className="w-1.5 h-5 bg-slate-800" />
                        <div className="w-0.5 h-5 bg-slate-800" />
                        <div className="w-1 h-5 bg-slate-800" />
                        <div className="w-2 h-5 bg-slate-800" />
                        <div className="w-0.5 h-5 bg-slate-800" />
                        <div className="w-1 h-5 bg-slate-800" />
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 font-mono">*INV-90487*</span>
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
