'use client';

import React, { useState } from 'react';
import Dna3DCanvas from '@/components/Dna3DCanvas';
import GlassConceptCards from '@/components/GlassConceptCards';
import Navbar from '@/components/Navbar';
import ProductGrid from '@/components/ProductGrid';
import CartDrawer, { CartItem } from '@/components/CartDrawer';
import ProductModal from '@/components/ProductModal';
import PrescriptionDrawer from '@/components/PrescriptionDrawer';
import CheckoutModal from '@/components/CheckoutModal';
import { MedicalProduct } from '@/data/medicalProducts';
import { ShieldCheck, Truck, Clock, Award, HeartPulse, Dna, FileCheck, PhoneCall } from 'lucide-react';

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<MedicalProduct | null>(null);
  const [isRxUploadOpen, setIsRxUploadOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Cart operations
  const handleAddToCart = (product: MedicalProduct, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const scrollToCatalog = () => {
    const catalogEl = document.getElementById('catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#f7f9fc] text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* 3D DNA Double-Helix Background Canvas */}
      <Dna3DCanvas />

      {/* Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenRxUpload={() => setIsRxUploadOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onNavigateCatalog={scrollToCatalog}
      />

      {/* Hero Section with Floating Glass Cards matching reference image */}
      <main className="relative z-10">
        <GlassConceptCards
          onExploreClick={scrollToCatalog}
          onOpenRxUpload={() => setIsRxUploadOpen(true)}
        />

        {/* Feature Highlights Bar */}
        <section className="relative z-20 bg-white/90 backdrop-blur-md border-y border-slate-200/80 py-8 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-950">Cold-Chain Express</h4>
                <p className="text-[11px] text-slate-500">Same-day temperature controlled dispatch</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-950">FDA 510(k) Cleared</h4>
                <p className="text-[11px] text-slate-500">100% Certified medical grade hardware</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-950">HSA / FSA Eligible</h4>
                <p className="text-[11px] text-slate-500">Instant health savings account billing</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-950">24/7 Clinical Support</h4>
                <p className="text-[11px] text-slate-500">Board-certified doctor & nurse helpline</p>
              </div>
            </div>
          </div>
        </section>

        {/* E-Commerce Medical Catalog Section */}
        <ProductGrid
          onAddToCart={(product) => handleAddToCart(product, 1)}
          onQuickView={(product) => setQuickViewProduct(product)}
          searchQuery={searchQuery}
        />

        {/* Medical Trust & Quality Guarantee Banner */}
        <section id="about" className="relative z-20 py-20 bg-slate-950 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-500/30">
                <Award className="w-3.5 h-3.5" />
                <span>CLINICAL STANDARDS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Empowering Precision Medicine & Home Care
              </h2>
              <p className="text-sm text-slate-400 mt-4 leading-relaxed font-light">
                SiliCare combines high-throughput 3D biological modeling with direct-to-patient hospital hardware delivery. Every device is calibrated in ISO-13485 certified facilities and backed by our clinical satisfaction guarantee.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="text-2xl font-black text-white">CLIA & CAP</div>
                  <div className="text-xs text-slate-400 mt-0.5">Accredited Laboratory Operations</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="text-2xl font-black text-white">ISO 13485</div>
                  <div className="text-xs text-slate-400 mt-0.5">Certified Medical Device Quality</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Clinical Prescription Assistance
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Need a doctor's order for continuous glucose sensors, oxygen concentrators, or prescription medical equipment? SiliCare offers instant telehealth consultations with licensed physicians.
              </p>

              <button
                onClick={() => setIsRxUploadOpen(true)}
                className="w-full py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileCheck className="w-4 h-4" />
                <span>Upload Doctor Order or Request Consultation</span>
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-20 bg-slate-950 text-slate-400 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
              <Dna className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold text-white">GeneMed SiliCare Medical Tech</span>
          </div>

          <div className="text-xs text-slate-500 text-center md:text-right">
            © {new Date().getFullYear()} SiliCare Medical Technologies, Inc. All rights reserved. FDA Registered #3019842.
          </div>
        </div>
      </footer>

      {/* Drawers & Modals */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onOpenCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        onOpenRxUpload={() => {
          setIsCartOpen(false);
          setIsRxUploadOpen(true);
        }}
      />

      <ProductModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(product, qty) => handleAddToCart(product, qty)}
        onOpenRxUpload={() => {
          setQuickViewProduct(null);
          setIsRxUploadOpen(true);
        }}
      />

      <PrescriptionDrawer
        isOpen={isRxUploadOpen}
        onClose={() => setIsRxUploadOpen(false)}
        onRxUploaded={() => {}}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onClearCart={() => setCartItems([])}
      />

    </div>
  );
}
