import React from 'react';
import { ProductCard } from '../components/shared/ProductCard';
import { TrustBadge } from '../components/shared/TrustBadge';
export function ProductsPage() {
  const products = [
  {
    name: 'Micro Bot',
    description:
    'Your offline desk companion for focus and well-being. Features expressive OLED face and mood tracking.',
    price: '₹2,999',
    status: 'Available' as const,
    imageColor: 'bg-slate-900',
    accentColor: 'bg-cyan-500',
    link: '/products/micro-bot'
  },
  {
    name: 'Pomodoro Device',
    description:
    'Dedicated offline focus timer with physical controls. No app needed, just pure productivity.',
    price: '₹1,499',
    status: 'Pre-Order' as const,
    imageColor: 'bg-slate-800',
    accentColor: 'bg-orange-500',
    link: '/products/pomodoro'
  },
  {
    name: 'Shilp Drone',
    description:
    'Consumer/educational drone with local controller. Learn to fly with safety and privacy.',
    price: '₹12,999',
    status: 'Coming Soon' as const,
    imageColor: 'bg-slate-700',
    accentColor: 'bg-teal-500',
    link: '/products/drone'
  }];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
          <div className="flex justify-center gap-3 mb-6">
            <TrustBadge type="privacy-first" />
            <TrustBadge type="offline-only" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Privacy-first electronics for every need
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From desk companions to educational tools, all our products are
            built with the same philosophy: Local processing, no data
            collection, and engineering excellence.
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) =>
          <ProductCard key={product.name} {...product} />
          )}
        </div>
      </div>
    </div>);

}