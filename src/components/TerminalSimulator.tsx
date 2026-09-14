import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, CheckCircle, Receipt, Trash2, Smartphone, CreditCard, Banknote } from 'lucide-react';
import { PosProduct, CartItem } from '../types';

const products: Record<'grocery' | 'pharmacy' | 'cafe', PosProduct[]> = {
  grocery: [
    { id: 'g1', name: 'Miniket Rice 5kg', price: 380, category: 'grocery', unit: '5kg' },
    { id: 'g2', name: 'Soyabean Oil 2L', price: 360, category: 'grocery', unit: '2L' },
    { id: 'g3', name: 'Pran Atta 2kg', price: 115, category: 'grocery', unit: '2kg' },
    { id: 'g4', name: 'Dano Powder Milk 500g', price: 430, category: 'grocery', unit: '500g' },
    { id: 'g5', name: 'Teer Sugar 1kg', price: 135, category: 'grocery', unit: '1kg' },
    { id: 'g6', name: 'Mirzapore Tea 400g', price: 210, category: 'grocery', unit: '400g' },
  ],
  pharmacy: [
    { id: 'p1', name: 'Napa Extend (10s)', price: 20, category: 'pharmacy', unit: 'Strip' },
    { id: 'p2', name: 'Sergel 20mg (14s)', price: 98, category: 'pharmacy', unit: 'Strip' },
    { id: 'p3', name: 'Fexo 120mg (10s)', price: 80, category: 'pharmacy', unit: 'Strip' },
    { id: 'p4', name: 'Seclo 20mg (10s)', price: 60, category: 'pharmacy', unit: 'Strip' },
    { id: 'p5', name: 'Savlon Antiseptic 250ml', price: 140, category: 'pharmacy', unit: 'Bottle' },
    { id: 'p6', name: 'Ace 500mg (10s)', price: 12, category: 'pharmacy', unit: 'Strip' },
  ],
  cafe: [
    { id: 'c1', name: 'Kacchi Biryani', price: 280, category: 'cafe', unit: 'Platter' },
    { id: 'c2', name: 'Grilled Chicken (1/4)', price: 140, category: 'cafe', unit: 'Plate' },
    { id: 'c3', name: 'Special Beef Kebab', price: 180, category: 'cafe', unit: 'Skewer' },
    { id: 'c4', name: 'Butter Naan', price: 40, category: 'cafe', unit: 'Piece' },
    { id: 'c5', name: 'Cold Coffee Premium', price: 150, category: 'cafe', unit: 'Glass' },
    { id: 'c6', name: 'Mineral Water 500ml', price: 20, category: 'cafe', unit: '500ml' },
  ],
};

export default function TerminalSimulator() {
  const [activeTab, setActiveTab] = useState<'grocery' | 'pharmacy' | 'cafe'>('grocery');
  const [cart, setCart] = useState<CartItem[]>([
    { id: 'g1', name: 'Miniket Rice 5kg', price: 380, category: 'grocery', unit: '5kg', qty: 1 },
    { id: 'g2', name: 'Soyabean Oil 2L', price: 360, category: 'grocery', unit: '2L', qty: 1 },
  ]);
  const [paymentMethod, setPaymentMethod] = useState<'Cash' | 'bKash' | 'Nagad' | 'Card'>('bKash');
  const [showReceipt, setShowReceipt] = useState(false);
  const [invoiceId] = useState(() => `#INV-${Math.floor(100000 + Math.random() * 900000)}`);

  const addToCart = (product: PosProduct) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => setCart([]);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const vat = Math.round(subtotal * 0.05);
  const netPayable = subtotal + vat;

  return (
    <section
      id="terminal"
      className="w-full bg-[#F0F7FF] text-slate-900 py-24 md:py-32 border-t border-blue-200/50 relative overflow-hidden"
    >
      {/* Background Accent Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-400/15 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16">
          <span className="text-[11px] sm:text-xs font-mono text-blue-600 font-semibold uppercase tracking-widest mb-3">
            Live Interaction
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif tracking-tight text-slate-900 mb-4">
            Experience Our Smart POS Terminal
          </h2>
          <p className="text-slate-600 font-sans max-w-xl text-sm sm:text-base leading-relaxed">
            No downloads needed. Test our industry-specific touch register interface below. Add local products, select payment gateways, and print digital receipts.
          </p>
        </div>

        {/* Terminal Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start bg-white/80 border border-blue-200/70 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(37,99,235,0.08),0_1px_2px_rgba(255,255,255,0.95)_inset] relative">
          
          {/* Left: Category Selector & Product Catalog (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">
            {/* Category Tabs */}
            <div className="grid grid-cols-3 sm:flex gap-1.5 sm:gap-2 p-1.5 bg-blue-50/80 border border-blue-200/60 rounded-xl sm:rounded-2xl w-full sm:w-fit">
              <button
                type="button"
                onClick={() => setActiveTab('grocery')}
                className={`px-3 sm:px-5 py-2 rounded-lg sm:rounded-xl text-[11px] sm:text-xs md:text-sm font-medium transition-all cursor-pointer text-center truncate ${
                  activeTab === 'grocery'
                    ? 'bg-blue-600 text-white font-semibold shadow-[0_2px_10px_rgba(37,99,235,0.3)]'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-white/60'
                }`}
              >
                Grocery
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('pharmacy')}
                className={`px-3 sm:px-5 py-2 rounded-lg sm:rounded-xl text-[11px] sm:text-xs md:text-sm font-medium transition-all cursor-pointer text-center truncate ${
                  activeTab === 'pharmacy'
                    ? 'bg-blue-600 text-white font-semibold shadow-[0_2px_10px_rgba(37,99,235,0.3)]'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-white/60'
                }`}
              >
                Pharmacy
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('cafe')}
                className={`px-3 sm:px-5 py-2 rounded-lg sm:rounded-xl text-[11px] sm:text-xs md:text-sm font-medium transition-all cursor-pointer text-center truncate ${
                  activeTab === 'cafe'
                    ? 'bg-blue-600 text-white font-semibold shadow-[0_2px_10px_rgba(37,99,235,0.3)]'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-white/60'
                }`}
              >
                Restaurant
              </button>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3.5">
              {products[activeTab].map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => addToCart(prod)}
                  className="group p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/70 border border-blue-100/80 hover:border-blue-400 hover:bg-white hover:shadow-[0_8px_24px_rgba(37,99,235,0.12)] transition-all duration-300 cursor-pointer flex flex-col justify-between h-28 sm:h-32 relative overflow-hidden active:scale-95 shadow-[0_2px_6px_rgba(37,99,235,0.04)]"
                >
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase">{prod.unit}</span>
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center transition-colors shrink-0">
                      <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600 group-hover:text-white" />
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-blue-700 transition-colors line-clamp-1">
                      {prod.name}
                    </h4>
                    <span className="text-xs sm:text-sm font-mono text-blue-600 font-bold">
                      ৳{prod.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Live Terminal Meta */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-blue-100 text-[11px] sm:text-xs text-slate-500 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Live: Dhaka Banani Hub
              </span>
              <span className="text-blue-600 font-medium">Sync: 87ms</span>
            </div>
          </div>

          {/* Right: Cart & Checkout (5 cols) */}
          <div className="lg:col-span-5 bg-blue-50/60 border border-blue-200/70 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 shadow-[0_4px_16px_rgba(37,99,235,0.04)]">
            <div className="flex items-center justify-between pb-3 border-b border-blue-200/60">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-4 h-4 text-blue-600" />
                <span className="font-sans font-semibold text-sm text-slate-900">Terminal Cart</span>
              </div>
              {cart.length > 0 && (
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-xs text-slate-400 hover:text-rose-500 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Clear
                </button>
              )}
            </div>

            {/* Items List */}
            <div className="flex flex-col gap-2.5 min-h-[140px] max-h-[220px] overflow-y-auto pr-1">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-36 text-center text-slate-400 text-xs">
                  <ShoppingCart className="w-8 h-8 mb-2 opacity-30 stroke-1" />
                  <p>Terminal cart is empty</p>
                  <span className="text-[11px] text-slate-400/80 mt-1">Tap products to register</span>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-white border border-blue-100 text-xs shadow-xs"
                  >
                    <div className="flex-1 pr-2 min-w-0">
                      <div className="font-medium text-slate-800 truncate">{item.name}</div>
                      <div className="text-slate-500 font-mono text-[10px] sm:text-[11px]">৳{item.price} each</div>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, -1)}
                        className="w-6 h-6 rounded-md bg-blue-50 hover:bg-blue-100 text-blue-600 flex items-center justify-center cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-4 text-center font-mono font-bold text-slate-900 text-xs">
                        {item.qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, 1)}
                        className="w-6 h-6 rounded-md bg-blue-50 hover:bg-blue-100 text-blue-600 flex items-center justify-center cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <span className="w-14 sm:w-16 text-right font-mono font-semibold text-slate-900 text-[11px] sm:text-xs">
                        ৳{(item.price * item.qty).toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Payment Method Selector */}
            <div className="flex flex-col gap-2 pt-2 border-t border-blue-200/60">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-medium">
                Payment Gateway
              </span>
              <div className="grid grid-cols-4 gap-1.5">
                {(['Cash', 'bKash', 'Nagad', 'Card'] as const).map((method) => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => setPaymentMethod(method)}
                    className={`py-2 px-1 text-center rounded-xl text-xs font-mono transition-all cursor-pointer flex flex-col items-center gap-1 ${
                      paymentMethod === method
                        ? 'bg-blue-600 text-white font-bold shadow-[0_3px_10px_rgba(37,99,235,0.3)]'
                        : 'bg-white text-slate-600 hover:text-blue-600 hover:bg-blue-50 border border-blue-100 shadow-xs'
                    }`}
                  >
                    {method === 'Cash' && <Banknote className="w-3.5 h-3.5" />}
                    {(method === 'bKash' || method === 'Nagad') && <Smartphone className="w-3.5 h-3.5" />}
                    {method === 'Card' && <CreditCard className="w-3.5 h-3.5" />}
                    <span className="text-[11px] sm:text-xs">{method}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Calculations & Total */}
            <div className="flex flex-col gap-1.5 pt-2 border-t border-blue-200/60 text-xs font-mono">
              <div className="flex justify-between text-slate-500">
                <span>Subtotal</span>
                <span className="text-slate-800">৳{subtotal.toLocaleString()}.00</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>NBR VAT (5%)</span>
                <span className="text-slate-800">৳{vat.toLocaleString()}.00</span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-slate-900 pt-2 border-t border-blue-200/60">
                <span>Net Payable</span>
                <span className="text-blue-600 font-bold">৳{netPayable.toLocaleString()}.00</span>
              </div>
            </div>

            {/* Generate Receipt CTA */}
            <button
              type="button"
              disabled={cart.length === 0}
              onClick={() => setShowReceipt(true)}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 transition-all font-sans font-medium text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shadow-[0_6px_20px_rgba(37,99,235,0.28)]"
            >
              <Receipt className="w-4 h-4" />
              Generate NBR Invoice
            </button>
          </div>
        </div>

        {/* Digital Receipt Modal */}
        {showReceipt && (
          <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-white border border-blue-200/80 rounded-2xl sm:rounded-3xl p-5 sm:p-8 max-w-md w-full relative shadow-[0_25px_70px_rgba(37,99,235,0.18)] font-mono text-xs max-h-[90vh] overflow-y-auto">
              
              {/* Receipt Header */}
              <div className="text-center pb-4 border-b border-dashed border-slate-300">
                <div className="text-base font-bold text-blue-600 tracking-wider mb-1">core Agency POS</div>
                <div className="text-slate-800 font-sans font-semibold text-sm">SMART RETAIL DEMO LTD.</div>
                <div className="text-slate-500 text-[11px] mt-0.5">Sector 11, Uttara, Dhaka-1230</div>
                <div className="text-slate-400 text-[11px]">BIN: 002345678-0101</div>
              </div>

              {/* Receipt Meta */}
              <div className="py-3 border-b border-dashed border-slate-300 flex justify-between text-[11px] text-slate-600">
                <div>
                  <div>Invoice: <span className="text-slate-900 font-bold">{invoiceId}</span></div>
                  <div>Cashier: <span className="text-slate-900 font-bold">Rahim</span></div>
                </div>
                <div className="text-right">
                  <div>Date: <span className="text-slate-900 font-bold">08/03/2026</span></div>
                  <div>Paid: <span className="text-blue-600 font-bold">{paymentMethod}</span></div>
                </div>
              </div>

              {/* Items List */}
              <div className="py-3 border-b border-dashed border-slate-300 flex flex-col gap-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-slate-800">
                    <span>{item.name} x{item.qty}</span>
                    <span className="font-semibold">৳{(item.price * item.qty).toLocaleString()}.00</span>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="py-3 border-b border-dashed border-slate-300 flex flex-col gap-1 text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>৳{subtotal.toLocaleString()}.00</span>
                </div>
                <div className="flex justify-between">
                  <span>NBR VAT (5%):</span>
                  <span>৳{vat.toLocaleString()}.00</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-slate-900 pt-1">
                  <span>Net Total:</span>
                  <span className="text-blue-600">৳{netPayable.toLocaleString()}.00</span>
                </div>
              </div>

              {/* Footer */}
              <div className="text-center pt-4 text-[11px] text-slate-500 flex flex-col items-center gap-1">
                <div className="flex items-center gap-1 text-emerald-600 font-sans font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Payment Verified via {paymentMethod} API
                </div>
                <p className="text-slate-600 font-medium">Thank You for Shopping!</p>
                <span className="text-[10px] text-slate-400">Software Powered by core Agency POS</span>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setShowReceipt(false)}
                className="mt-6 w-full py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-600 font-sans font-semibold text-xs transition-colors cursor-pointer border border-blue-200/60"
              >
                Close Receipt
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
