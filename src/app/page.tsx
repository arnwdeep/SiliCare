'use client';

import React, { useState } from 'react';
import EditorialStore from '@/components/EditorialStore';
import CartDrawer, { CartItem } from '@/components/CartDrawer';
import ProductModal from '@/components/ProductModal';
import PrescriptionDrawer from '@/components/PrescriptionDrawer';
import CheckoutModal from '@/components/CheckoutModal';
import { MedicalProduct } from '@/data/medicalProducts';

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<MedicalProduct | null>(null);
  const [isRxUploadOpen, setIsRxUploadOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-[#f4f4f6]">
      
      {/* Editorial Vertical Grid Layout Store matching the reference image */}
      <EditorialStore
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenRxUpload={() => setIsRxUploadOpen(true)}
        onAddToCart={(product) => handleAddToCart(product, 1)}
        onQuickView={(product) => setQuickViewProduct(product)}
      />

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
