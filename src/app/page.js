'use client';

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import DailyDeals from './components/DailyDeals';
import Brands from './components/Brands';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import { navigationItems, categories, featuredProducts, dailyDeals, brands } from './data';

export default function Home() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (productId) => {
    const product = [...featuredProducts, ...dailyDeals].find(p => p.id === productId);
    if (!product) return;

    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productId);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });

    showNotification('Added to cart!');
  };

  const updateQuantity = (productId, action) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === productId) {
          const newQuantity = action === 'increase' ? item.quantity + 1 : item.quantity - 1;
          return { ...item, quantity: Math.max(0, newQuantity) };
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const showNotification = (message) => {
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50';
    notification.innerHTML = `<i class="fas fa-check-circle mr-2"></i> ${message}`;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        cart={cart} 
        onCartClick={() => setIsCartOpen(true)} 
        navigationItems={navigationItems}
      />
      
      <main className="container mx-auto px-4 py-6">
        <Hero />
        <Categories categories={categories} />
        <FeaturedProducts products={featuredProducts} onAddToCart={addToCart} />
        <DailyDeals deals={dailyDeals} onAddToCart={addToCart} />
        <Brands brands={brands} />
      </main>

      <Footer />

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />
    </div>
  );
}
