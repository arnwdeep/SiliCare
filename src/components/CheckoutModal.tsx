'use client';

import React, { useState } from 'react';
import { CartItem } from './CartDrawer';
import { X, CheckCircle2, ShieldCheck, CreditCard, HeartPulse, Truck, Lock, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onClearCart: () => void;
}

export default function CheckoutModal({ isOpen, onClose, items, onClearCart }: CheckoutModalProps) {
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [formData, setFormData] = useState({
    fullName: 'Arnadeep Modak',
    email: 'modakarnadeep@gmail.com',
    address: '42 Medical Center Way, Suite 300',
    city: 'Boston',
    state: 'MA',
    zip: '02115',
    paymentMethod: 'hsa_fsa',
    cardNumber: '•••• •••• •••• 4242',
  });
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shipping = subtotal >= 150 ? 0 : 12.50;
  const total = subtotal + shipping;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setStep('success');
      onClearCart();

      // Trigger Confetti Celebration!
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
        });
      } catch (err) {
        console.error(err);
      }
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-md animate-fadeIn">
      <div
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-scaleUp text-slate-900 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'details' ? (
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                <HeartPulse className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                SiliCare Express Medical Checkout
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-950 tracking-tight">
              Order Dispatch & Payment
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              256-Bit SSL Encrypted • Cold-Chain Logistics Guarantee
            </p>

            <form onSubmit={handleSubmitOrder} className="space-y-6">
              
              {/* Shipping Address */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-blue-600" />
                  <span>1. Express Medical Shipping Address</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Full Patient / Recipient Name</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Medical Email Notifications</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Delivery Street Address</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">City</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">State</label>
                      <input
                        type="text"
                        required
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">ZIP Code</label>
                      <input
                        type="text"
                        required
                        value={formData.zip}
                        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4 text-blue-600" />
                  <span>2. Payment Option (HSA / FSA / Card)</span>
                </h4>
                <div className="grid grid-cols-3 gap-3 mb-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'hsa_fsa' })}
                    className={`p-3 rounded-2xl border text-xs font-semibold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                      formData.paymentMethod === 'hsa_fsa'
                        ? 'border-blue-600 bg-blue-50/70 text-blue-900 shadow-xs'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    <span>HSA / FSA Card</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'credit' })}
                    className={`p-3 rounded-2xl border text-xs font-semibold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                      formData.paymentMethod === 'credit'
                        ? 'border-blue-600 bg-blue-50/70 text-blue-900 shadow-xs'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-slate-700" />
                    <span>Credit Card</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'apple' })}
                    className={`p-3 rounded-2xl border text-xs font-semibold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                      formData.paymentMethod === 'apple'
                        ? 'border-blue-600 bg-blue-50/70 text-blue-900 shadow-xs'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Lock className="w-4 h-4 text-slate-700" />
                    <span>Apple Pay</span>
                  </button>
                </div>
              </div>

              {/* Order Summary & Confirm Action */}
              <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Medical Items ({items.length})</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Cold-Chain Express Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-white pt-2 border-t border-slate-800">
                  <span>Total Amount</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isProcessing ? (
                  <span>Processing Encrypted Medical Payment...</span>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Place Medical Order (${total.toFixed(2)})</span>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          /* Order Confirmation Screen */
          <div className="text-center py-8 space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Medical Order Verified & Dispatched</span>
            </div>

            <h3 className="text-3xl font-extrabold text-slate-950 tracking-tight">
              Thank You for Your Order!
            </h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto">
              Order tracking number <span className="font-mono font-bold text-slate-900">#SIL-{Math.floor(100000 + Math.random() * 900000)}</span> has been dispatched via cold-chain courier to <span className="font-semibold text-slate-900">{formData.email}</span>.
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-left max-w-md mx-auto space-y-1 text-slate-700">
              <div className="font-bold text-slate-950 mb-1">Dispatch Details:</div>
              <div>• Courier: SiliCare Cold-Chain Express</div>
              <div>• Expected Delivery: 24 - 48 Hours</div>
              <div>• Encrypted Clinical Portal Link sent to email</div>
            </div>

            <button
              onClick={onClose}
              className="mt-6 px-8 py-3.5 rounded-full bg-slate-950 text-white font-semibold text-xs hover:bg-blue-600 transition-colors shadow-md"
            >
              Return to SiliCare Store
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
