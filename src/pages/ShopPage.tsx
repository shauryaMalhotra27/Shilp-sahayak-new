import React, { useState } from 'react';
import { ProductCard } from '../components/shared/ProductCard';
import { Filter } from 'lucide-react';
export function ShopPage() {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const products = [
  {
    name: 'Micro Bot',
    description: 'Your offline desk companion for focus and well-being.',
    price: '₹2,999',
    status: 'Available' as const,
    category: 'Focus Tools',
    imageColor: 'bg-slate-900',
    accentColor: 'bg-cyan-500',
    link: '/products/micro-bot'
  },
  {
    name: 'Pomodoro Device',
    description: 'Dedicated offline focus timer with physical controls.',
    price: '₹1,499',
    status: 'Pre-Order' as const,
    category: 'Focus Tools',
    imageColor: 'bg-slate-800',
    accentColor: 'bg-orange-500',
    link: '/products/pomodoro'
  },
  {
    name: 'Shilp Drone',
    description: 'Consumer/educational drone with local controller.',
    price: '₹12,999',
    status: 'Coming Soon' as const,
    category: 'Drones',
    imageColor: 'bg-slate-700',
    accentColor: 'bg-teal-500',
    link: '/products/drone'
  }];

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
    categoryFilter === 'All' || product.category === categoryFilter;
    const statusMatch =
    statusFilter === 'All' || product.status === statusFilter;
    return categoryMatch && statusMatch;
  });
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">
          Shop All Products
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-xl border border-slate-200 sticky top-24">
              <div className="flex items-center gap-2 mb-6 text-slate-900 font-bold">
                <Filter className="w-4 h-4" />
                Filters
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-3">
                    Category
                  </h3>
                  <div className="space-y-2">
                    {['All', 'Focus Tools', 'Drones'].map((cat) =>
                    <label
                      key={cat}
                      className="flex items-center gap-2 cursor-pointer">

                        <input
                        type="radio"
                        name="category"
                        checked={categoryFilter === cat}
                        onChange={() => setCategoryFilter(cat)}
                        className="text-teal-600 focus:ring-teal-500" />

                        <span className="text-sm text-slate-600">{cat}</span>
                      </label>
                    )}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <h3 className="text-sm font-semibold text-slate-900 mb-3">
                    Availability
                  </h3>
                  <div className="space-y-2">
                    {['All', 'Available', 'Pre-Order', 'Coming Soon'].map(
                      (status) =>
                      <label
                        key={status}
                        className="flex items-center gap-2 cursor-pointer">

                          <input
                          type="radio"
                          name="status"
                          checked={statusFilter === status}
                          onChange={() => setStatusFilter(status)}
                          className="text-teal-600 focus:ring-teal-500" />

                          <span className="text-sm text-slate-600">
                            {status}
                          </span>
                        </label>

                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid md:grid-cols-2 gap-6">
              {filteredProducts.map((product) =>
              <ProductCard key={product.name} {...product} />
              )}
            </div>

            {filteredProducts.length === 0 &&
            <div className="text-center py-12 bg-white rounded-xl border border-slate-200 border-dashed">
                <p className="text-slate-500">
                  No products match your filters.
                </p>
                <button
                onClick={() => {
                  setCategoryFilter('All');
                  setStatusFilter('All');
                }}
                className="text-teal-600 font-medium mt-2 hover:underline">

                  Clear all filters
                </button>
              </div>
            }
          </div>
        </div>
      </div>
    </div>);

}