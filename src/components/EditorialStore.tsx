'use client';

import React, { useState } from 'react';
import { MedicalProduct, MEDICAL_PRODUCTS } from '../data/medicalProducts';
import { ShoppingBag, ArrowRight, Check, Eye, ShieldCheck, Truck, Package, HeartPulse } from 'lucide-react';
import SiliCareLogo from './SiliCareLogo';

interface EditorialStoreProps {
  cartCount: number;
  onOpenCart: () => void;
  onAddToCart: (product: MedicalProduct) => void;
  onQuickView: (product: MedicalProduct) => void;
}

export default function EditorialStore({
  cartCount,
  onOpenCart,
  onAddToCart,
  onQuickView,
}: EditorialStoreProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [addedIds, setAddedIds] = useState<{ [key: string]: boolean }>({});

  const categories = [
    'All',
    'Bandages & Dressings',
    'First Aid Kits',
    'Wound Care & Antiseptics',
    'Health Monitors',
    'Personal Care & Gloves',
    'Pain & Recovery',
  ];

  // Filter products by selected category
  const filteredProducts = MEDICAL_PRODUCTS.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory
  );

  const currentProduct = MEDICAL_PRODUCTS[selectedProductIndex] || MEDICAL_PRODUCTS[0];

  const handleAddClick = (product: MedicalProduct) => {
    onAddToCart(product);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#f4f4f6] text-slate-900 font-sans selection:bg-slate-950 selection:text-white">
      
      {/* 5-Column Vertical Grid Layout Container matching the reference screenshot */}
      <div className="max-w-[1440px] mx-auto min-h-screen relative grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-slate-300/60 border-x border-slate-300/60">
        
        {/* COLUMN 1: Brand & Category Menu & Big Title */}
        <div className="p-6 lg:p-10 flex flex-col justify-between border-b md:border-b-0 border-slate-300/60">
          <div>
            {/* Official SiliCare Logo Header */}
            <div className="mb-10">
              <SiliCareLogo size="md" />
            </div>

            {/* Category Navigation Menu */}
            <nav className="flex flex-col gap-3 text-xs font-semibold text-slate-500 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-left transition-colors cursor-pointer ${
                    activeCategory === cat ? 'text-slate-950 font-bold underline underline-offset-4' : 'hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </nav>

            {/* Big Editorial Hero Title matching reference screenshot */}
            <div className="mb-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-slate-950 leading-[0.95] font-sans">
                {currentProduct.name.split(' ')[0]}<br />
                <span className="font-bold">{currentProduct.name.split(' ').slice(1, 3).join(' ')}</span><br />
                {currentProduct.name.split(' ').slice(3).join(' ')}
              </h2>

              {/* Slider Pagination Dots */}
              <div className="flex items-center gap-2 mt-6">
                {MEDICAL_PRODUCTS.slice(0, 4).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedProductIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                      selectedProductIndex === idx ? 'bg-slate-950 scale-125' : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Column 1 Specification Footer */}
          <div className="pt-8 border-t border-slate-300/60 space-y-4 text-xs text-slate-600">
            <div>
              <div className="font-bold text-slate-950">Over-The-Counter Medical</div>
              <div className="text-[11px] text-slate-500 mt-1">100% No Doctor Prescription Required</div>
            </div>
            <div>
              <div className="text-[11px] text-slate-500">Shipping Guarantee</div>
              <div className="font-semibold text-slate-900">Ships Same Day to Your Door</div>
            </div>
            <div>
              <div className="text-[11px] text-slate-500">Quality Assurance</div>
              <div className="font-semibold text-slate-900">FDA Registered & Sterile Packaged</div>
            </div>
          </div>
        </div>

        {/* COLUMN 2: Specs & Secondary Details */}
        <div className="p-6 lg:p-10 flex flex-col justify-between hidden md:flex">
          <div className="pt-20">
            {/* Rotation Stamp 08 - 12 matching screenshot */}
            <div className="text-xs font-mono font-bold tracking-widest text-slate-400 transform -rotate-90 origin-left mb-12">
              08 — 12
            </div>
          </div>

          <div className="space-y-6 text-xs text-slate-600">
            <div>
              <div className="text-[11px] font-semibold text-slate-400">Order Standard:</div>
              <div className="text-slate-900 font-medium">{currentProduct.badge}</div>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-slate-400">Doctor Requirement:</div>
              <div className="text-emerald-700 font-bold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                <span>No Prescription Needed</span>
              </div>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-slate-400">Sterility Standard:</div>
              <div className="text-slate-900 font-medium">100% Sealed & Sterile Envelopes</div>
            </div>

            <div className="pt-6 border-t border-slate-300/60">
              <div className="text-[11px] text-slate-500">Material Composition:</div>
              <div className="font-semibold text-slate-900 mt-0.5">
                Medical Woven Fabric, Non-Stick Absorbent Pad, Latex-Free Adhesive
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 3: Featured Product Cutout Image & Description */}
        <div className="p-6 lg:p-10 md:col-span-2 flex flex-col justify-between bg-[#f2f2f4]">
          
          {/* Top Featured Product Cutout Image */}
          <div className="relative aspect-square max-w-md mx-auto flex items-center justify-center py-6">
            <img
              src={currentProduct.image}
              alt={currentProduct.name}
              className="w-full h-full object-contain rounded-2xl shadow-xl transition-all duration-500 hover:scale-105"
            />
          </div>

          {/* Editorial Quote & Dimensions block matching reference screenshot */}
          <div className="space-y-6 max-w-lg">
            <p className="text-sm sm:text-base font-normal text-slate-800 leading-relaxed font-sans">
              "{currentProduct.description}"
            </p>

            <div className="grid grid-cols-2 gap-4 text-xs text-slate-600 pt-4 border-t border-slate-300/60">
              <div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider">Specifications</div>
                <div className="font-mono font-medium text-slate-900 mt-0.5">
                  {Object.values(currentProduct.specifications)[0] || 'Sterile Pack'}
                </div>
              </div>
              <div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider">Direct Price</div>
                <div className="font-bold text-slate-950 text-sm mt-0.5">${currentProduct.price.toFixed(2)}</div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => onQuickView(currentProduct)}
                className="text-xs font-semibold text-slate-950 underline underline-offset-4 hover:text-blue-600 transition-colors"
              >
                View Full Product Details →
              </button>

              <button
                onClick={() => handleAddClick(currentProduct)}
                className={`px-6 py-3 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md ${
                  addedIds[currentProduct.id]
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-950 text-white hover:bg-blue-600'
                }`}
              >
                {addedIds[currentProduct.id] ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Order</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart (${currentProduct.price.toFixed(2)})</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

        {/* COLUMN 5: Navigation & Right Column Details */}
        <div className="p-6 lg:p-10 flex flex-col justify-between">
          
          {/* Right Top Header Navigation matching reference screenshot */}
          <div className="flex items-center justify-end gap-6 text-xs font-medium text-slate-600">
            <div className="hidden lg:flex items-center gap-1.5 text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Direct Consumer Store</span>
            </div>
            <a href="#about" className="hover:text-slate-950 transition-colors">
              Contact
            </a>
            <button
              onClick={onOpenCart}
              className="hover:text-slate-950 font-bold text-slate-950 flex items-center gap-1.5 cursor-pointer bg-white px-3 py-1.5 rounded-full border border-slate-300/80 shadow-2xs"
            >
              <span>Cart</span>
              <ShoppingBag className="w-3.5 h-3.5" />
              <span className="bg-slate-950 text-white w-4 h-4 rounded-full text-[10px] flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          </div>

          {/* Right Column Specs matching screenshot */}
          <div className="space-y-6 text-xs text-slate-600 mt-20 md:mt-0">
            <div className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">
              STORE HIGHLIGHTS
            </div>
            <div>
              <div className="text-[11px] text-slate-500">Order Method:</div>
              <div className="font-semibold text-slate-900">Direct Online Checkout</div>
            </div>
            <div>
              <div className="text-[11px] text-slate-500">Fast Delivery:</div>
              <div className="font-semibold text-slate-900">1 - 3 Business Days</div>
            </div>
            <div>
              <div className="text-[11px] text-slate-500">Guarantee:</div>
              <div className="font-semibold text-slate-900">30-Day Unused Money Back</div>
            </div>
          </div>

        </div>

      </div>

      {/* LOWER SECTION: Editorial Horizontal Product Gallery Grid matching bottom of screenshot */}
      <section className="border-t border-slate-300/60 py-16 bg-[#f4f4f6]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-300/60">
            <h3 className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              OTC MEDICAL & FIRST AID SUPPLIES ({filteredProducts.length} PRODUCTS)
            </h3>
            <span className="text-xs text-slate-500 font-mono">CLICK ITEM TO SPOTLIGHT →</span>
          </div>

          {/* Horizontal Product Grid aligned to vertical grid columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col justify-between cursor-pointer space-y-4"
                onClick={() => setSelectedProductIndex(MEDICAL_PRODUCTS.findIndex((p) => p.id === product.id))}
              >
                {/* Minimal Light-Grey Product Image Box */}
                <div className="aspect-4/3 bg-slate-200/60 rounded-xl overflow-hidden p-6 flex items-center justify-center relative group-hover:bg-slate-200 transition-colors">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-emerald-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                    No Rx Needed
                  </span>
                </div>

                {/* Product Metadata matching screenshot */}
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-950 line-clamp-1 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h4>
                  <div className="text-[11px] text-slate-500">
                    by SiliCare Medical Supplies
                  </div>
                  <div className="text-xs font-bold text-slate-900 font-mono pt-1">
                    ${product.price.toFixed(2)}
                    {product.originalPrice && (
                      <span className="text-[11px] text-slate-400 line-through font-normal ml-2">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description paragraph below product card matching screenshot */}
                <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-3 font-light pt-2 border-t border-slate-300/40">
                  {product.description}
                </p>

                {/* Quick Add Action Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddClick(product);
                  }}
                  className={`w-full py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    addedIds[product.id]
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-950 text-white hover:bg-blue-600'
                  }`}
                >
                  {addedIds[product.id] ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Added!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Footer Medical Quality Bar */}
      <footer className="border-t border-slate-300/60 py-8 bg-[#eeeeef] text-slate-500 text-xs">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <SiliCareLogo size="sm" showTagline={false} />
            <span className="text-slate-400">|</span>
            <span className="font-normal text-slate-500 text-xs">Everyday OTC First Aid & Medical Supplies</span>
          </div>
          <div>
            © {new Date().getFullYear()} SiliCare Medical Technologies, Inc. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
