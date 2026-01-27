import React from 'react';
import { ProductCard } from '../shared/ProductCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export function FeaturedProduct() {
  const products = [
  {
    name: 'Micro Bot',
    description: 'Your offline desk companion for focus and well-being.',
    price: '₹2,999',
    status: 'Available' as const,
    imageColor: 'bg-slate-900',
    accentColor: 'bg-cyan-500',
    link: '/products/micro-bot'
  },
  {
    name: 'Pomodoro Device',
    description: 'Dedicated offline focus timer with physical controls.',
    price: '₹1,499',
    status: 'Pre-Order' as const,
    imageColor: 'bg-slate-800',
    accentColor: 'bg-orange-500',
    link: '/products/pomodoro'
  },
  {
    name: 'Shilp Drone',
    description: 'Consumer/educational drone with local controller.',
    price: '₹12,999',
    status: 'Coming Soon' as const,
    imageColor: 'bg-slate-700',
    accentColor: 'bg-teal-500',
    link: '/products/drone'
  }];

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Product Line
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Tools designed for focus, learning, and privacy. Built to work
              offline.
            </p>
          </div>
          <Link
            to="/products"
            className="hidden md:flex items-center text-teal-600 font-medium hover:text-teal-700">

            View All Products <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) =>
          <ProductCard key={product.name} {...product} />
          )}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/products"
            className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700">

            View All Products <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>);

}