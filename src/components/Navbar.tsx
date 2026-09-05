'use client';

import React, { useState } from 'react';
import { ShoppingBag, Search, FileText, Dna, Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenRxUpload: () => void;
  onSearchChange: (query: string) => void;
  searchQuery: string;
  onNavigateCatalog: () => void;
}

export default function Navbar({
  cartCount,
  onOpenCart,
  onOpenRxUpload,
  onSearchChange,
  searchQuery,
  onNavigateCatalog,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full glass-header transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-950 text-white flex items-center justify-center shadow-md group-hover:bg-blue-600 transition-colors">
                <Dna className="w-6 h-6 text-white animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-950 tracking-tight leading-none">
                  GeneMed <span className="text-blue-600 font-extrabold">SiliCare</span>
                </span>
                <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase mt-0.5">
                  Medical & Diagnostics
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-600">
              <button
                onClick={onNavigateCatalog}
                className="hover:text-slate-950 transition-colors py-1 cursor-pointer"
              >
                Medical Catalog
              </button>
              <button
                onClick={onNavigateCatalog}
                className="hover:text-slate-950 transition-colors py-1 cursor-pointer"
              >
                Diagnostic Tech
              </button>
              <button
                onClick={onNavigateCatalog}
                className="hover:text-slate-950 transition-colors py-1 cursor-pointer"
              >
                Genomics
              </button>
              <a
                href="#about"
                className="hover:text-slate-950 transition-colors py-1"
              >
                Clinical Quality
              </a>
            </nav>
          </div>

          {/* Right Action Icons & Buttons */}
          <div className="flex items-center gap-3">
            
            {/* Search Input Bar */}
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search medical items, SKU, Rx..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-48 lg:w-64 pl-9 pr-4 py-2 text-xs rounded-full bg-white/90 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:w-72 transition-all placeholder:text-slate-400 text-slate-900 shadow-xs"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>

            {/* Prescription Upload Action */}
            <button
              onClick={onOpenRxUpload}
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-medium hover:bg-slate-100 transition-colors shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-blue-600" />
              <span>Rx Upload</span>
            </button>

            {/* Shopping Cart Drawer Trigger */}
            <button
              onClick={onOpenCart}
              aria-label="Shopping Cart"
              className="relative p-2.5 rounded-full bg-slate-950 text-white hover:bg-blue-600 transition-colors shadow-md flex items-center justify-center cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white animate-scaleUp">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-full bg-white border border-slate-200 text-slate-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200/80 animate-fadeIn">
            <div className="mb-3 px-2">
              <input
                type="text"
                placeholder="Search medical items..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none text-slate-900"
              />
            </div>
            <div className="flex flex-col gap-2 text-xs font-medium text-slate-800">
              <button
                onClick={() => {
                  onNavigateCatalog();
                  setMobileMenuOpen(false);
                }}
                className="text-left px-3 py-2 rounded-lg hover:bg-slate-100"
              >
                Medical Catalog
              </button>
              <button
                onClick={() => {
                  onOpenRxUpload();
                  setMobileMenuOpen(false);
                }}
                className="text-left px-3 py-2 rounded-lg hover:bg-slate-100 flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-blue-600" />
                <span>Upload Doctor Prescription (Rx)</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
