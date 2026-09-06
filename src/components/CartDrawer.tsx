'use client';

import React from 'react';
import { MedicalProduct } from '../data/medicalProducts';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, FileText, ShoppingBag } from 'lucide-react';

export interface CartItem {
  product: MedicalProduct;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onOpenCheckout: () => void;
  onOpenRxUpload: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onOpenCheckout,
  onOpenRxUpload,
}: CartDrawerProps) {
  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const rxRequiredInCart = items.some((item) => item.product.rxRequired);
  const freeShippingThreshold = 150;
  const isFreeShipping = subtotal >= freeShippingThreshold;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity animate-fadeIn"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-slate-200 animate-slideLeft text-slate-900">
          
          {/* Cart Header */}
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-bold text-slate-950">Medical Order Cart</h2>
              <span className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full font-semibold">
                {items.length} items
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            
            {/* Free Shipping Progress Indicator */}
            <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100">
              <div className="flex justify-between text-xs text-blue-900 font-medium mb-1.5">
                <span>
                  {isFreeShipping
                    ? '🎉 Free Temperature-Controlled Express Shipping Unlocked!'
                    : `Add $${(freeShippingThreshold - subtotal).toFixed(2)} more for Free Express Medical Shipping`}
                </span>
              </div>
              <div className="w-full bg-blue-200 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-blue-600 h-full transition-all duration-500 rounded-full"
                  style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
                />
              </div>
            </div>

            {/* 100% Direct OTC Guarantee Badge */}
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs text-emerald-900">
                <div className="font-bold mb-0.5">100% Direct Consumer Order (No Doctor Required)</div>
                All items in your cart are over-the-counter medical supplies. Instant home checkout enabled.
              </div>
            </div>

            {items.length === 0 ? (
              <div className="text-center py-16 text-slate-400">
                <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-30" />
                <p className="text-sm font-medium text-slate-700">Your medical cart is empty</p>
                <p className="text-xs text-slate-400 mt-1">Explore our clinical store to add products.</p>
              </div>
            ) : (
              items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white transition-colors"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded-xl object-cover border border-slate-200 shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="text-xs font-bold text-slate-900 line-clamp-1">
                          {product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(product.id)}
                          className="text-slate-400 hover:text-rose-500 transition-colors p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium">
                        ${product.price.toFixed(2)} each
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-2 py-0.5 shadow-2xs">
                        <button
                          onClick={() => onUpdateQuantity(product.id, -1)}
                          className="text-slate-600 hover:text-slate-950 p-0.5"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-slate-900 w-4 text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(product.id, 1)}
                          className="text-slate-600 hover:text-slate-950 p-0.5"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-xs font-bold text-slate-950">
                        ${(product.price * quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}

          </div>

          {/* Footer Checkout Summary */}
          {items.length > 0 && (
            <div className="p-6 border-t border-slate-100 bg-slate-50 space-y-3">
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Medical Logistics & Shipping</span>
                  <span className="font-semibold text-slate-900">
                    {isFreeShipping ? 'FREE' : '$12.50'}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-200 text-sm font-bold text-slate-950">
                  <span>Estimated Total</span>
                  <span>${(subtotal + (isFreeShipping ? 0 : 12.50)).toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={onOpenCheckout}
                className="w-full py-3.5 rounded-2xl bg-slate-950 text-white font-semibold text-xs hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-slate-950/10 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed to Medical Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>256-Bit HIPAA Encrypted & FSA/HSA Eligible Checkout</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
