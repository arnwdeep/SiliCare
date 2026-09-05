'use client';

import React, { useState } from 'react';
import { MedicalProduct } from '../data/medicalProducts';
import { X, Star, ShoppingBag, ShieldCheck, CheckCircle2, FileText, Activity } from 'lucide-react';

interface ProductModalProps {
  product: MedicalProduct | null;
  onClose: () => void;
  onAddToCart: (product: MedicalProduct, quantity: number) => void;
  onOpenRxUpload: () => void;
}

export default function ProductModal({ product, onClose, onAddToCart, onOpenRxUpload }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [addedSuccess, setAddedSuccess] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-md animate-fadeIn">
      <div
        className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-scaleUp text-slate-900 flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Column */}
        <div className="md:w-1/2 bg-slate-100 p-8 flex items-center justify-center relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-h-80 object-cover rounded-2xl shadow-md border border-slate-200/80"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-slate-950 text-white text-[10px] font-semibold uppercase tracking-wider">
              {product.badge}
            </span>
          </div>
        </div>

        {/* Product Information Column */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
              <span className="font-semibold text-blue-600">{product.category}</span>
              <span>•</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>{product.rating}</span>
                <span className="text-slate-400 font-normal">({product.reviewsCount} reviews)</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-950 tracking-tight leading-snug">
              {product.name}
            </h2>
            <div className="text-xs text-slate-500 font-medium mt-0.5 mb-3">
              {product.subtitle}
            </div>

            <div className="text-2xl font-black text-slate-950 mb-4">
              ${product.price.toFixed(2)}
              {product.originalPrice && (
                <span className="text-sm font-normal text-slate-400 line-through ml-2">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              {product.description}
            </p>

            {/* Key Clinical Features */}
            <div className="mb-4 space-y-1.5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                Clinical Highlights
              </div>
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Technical Specifications Table */}
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-[11px] space-y-1 mb-4">
              {Object.entries(product.specifications).map(([key, val]) => (
                <div key={key} className="flex justify-between text-slate-600">
                  <span className="font-semibold text-slate-700">{key}:</span>
                  <span>{val}</span>
                </div>
              ))}
            </div>

            {/* Rx Required Alert */}
            {product.rxRequired && (
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-600" />
                  <span className="font-medium">Prescription Required</span>
                </div>
                <button
                  onClick={onOpenRxUpload}
                  className="text-[11px] font-bold text-amber-900 underline hover:text-amber-700"
                >
                  Upload Rx
                </button>
              </div>
            )}
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-100 flex items-center gap-4">
            <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 p-1">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-7 h-7 flex items-center justify-center font-bold text-slate-700 hover:bg-slate-200 rounded-lg"
              >
                -
              </button>
              <span className="w-8 text-center text-xs font-bold text-slate-900">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-7 h-7 flex items-center justify-center font-bold text-slate-700 hover:bg-slate-200 rounded-lg"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAdd}
              disabled={addedSuccess}
              className={`flex-1 py-3 rounded-2xl text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                addedSuccess
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-950 text-white hover:bg-blue-600 shadow-slate-950/10'
              }`}
            >
              {addedSuccess ? (
                <span>Added to Medical Cart!</span>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Order (${(product.price * quantity).toFixed(2)})</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
