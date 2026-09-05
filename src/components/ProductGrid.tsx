'use client';

import React, { useState } from 'react';
import { MedicalProduct, MEDICAL_PRODUCTS } from '../data/medicalProducts';
import { ShoppingBag, Eye, Star, ShieldCheck, Check, Filter, ArrowUpDown, Sparkles } from 'lucide-react';

interface ProductGridProps {
  onAddToCart: (product: MedicalProduct) => void;
  onQuickView: (product: MedicalProduct) => void;
  searchQuery: string;
}

export default function ProductGrid({ onAddToCart, onQuickView, searchQuery }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [addedIds, setAddedIds] = useState<{ [key: string]: boolean }>({});
  const [sortBy, setSortBy] = useState<'featured' | 'priceAsc' | 'priceDesc' | 'rating'>('featured');

  const categories = ['All', 'Genomics', 'Diagnostics', 'Clinical Devices', 'Protective Gear', 'Supplements', 'Emergency'];

  // Filter products by category & search query
  let filteredProducts = MEDICAL_PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort products
  if (sortBy === 'priceAsc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'priceDesc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  const handleAddClick = (product: MedicalProduct) => {
    onAddToCart(product);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  return (
    <section id="catalog" className="relative z-20 py-20 bg-slate-50/80 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Certified Medical Store</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Clinical Grade Products & Devices
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl font-light">
              Direct-from-manufacturer pricing on FDA cleared diagnostic tools, DNA sequencing kits, and hospital supplies.
            </p>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <ArrowUpDown className="w-4 h-4 text-slate-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-slate-200 text-slate-800 text-xs font-medium rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900 shadow-xs cursor-pointer"
            >
              <option value="featured">Featured Medical Items</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-950 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Empty Search Result State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 max-w-md mx-auto">
            <Filter className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-900">No medical items found</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              Try adjusting your search query or filter category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
              }}
              className="px-4 py-2 text-xs font-semibold text-blue-600 hover:underline"
            >
              Reset Category Filters
            </button>
          </div>
        )}

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const isAdded = addedIds[product.id];

            return (
              <div
                key={product.id}
                className="group bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden relative"
              >
                {/* Image Container with Hover Quick View */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 flex flex-col gap-1 items-start">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-semibold tracking-wider uppercase shadow-xs">
                      {product.badge}
                    </span>
                    {product.rxRequired && (
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-white text-[9px] font-bold tracking-wider uppercase">
                        Rx Required
                      </span>
                    )}
                  </div>

                  {/* Hover Quick View Button */}
                  <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button
                      onClick={() => onQuickView(product)}
                      className="px-4 py-2 rounded-full bg-white text-slate-900 text-xs font-semibold shadow-lg hover:bg-blue-600 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Quick Details</span>
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span>{product.category}</span>
                      <div className="flex items-center gap-1 text-amber-500 font-semibold text-[11px]">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span>{product.rating}</span>
                        <span className="text-slate-400 font-normal">({product.reviewsCount})</span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-slate-950 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Price & Action Row */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Price</div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-black text-slate-950">
                          ${product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-slate-400 line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => handleAddClick(product)}
                      className={`px-4 py-2.5 rounded-2xl text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                        isAdded
                          ? 'bg-emerald-600 text-white shadow-md scale-95'
                          : 'bg-slate-950 text-white hover:bg-blue-600 shadow-md shadow-slate-950/10'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
