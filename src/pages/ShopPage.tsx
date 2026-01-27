import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
export function ShopPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">
          Shop All Products
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Micro Bot Card */}
          <Card
            noPadding
            className="flex flex-col h-full hover:shadow-lg transition-shadow">

            <div className="aspect-video bg-slate-900 relative flex items-center justify-center p-8">
              <div className="w-32 h-32 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center">
                <div className="w-20 h-8 bg-cyan-500/20 rounded-full blur-md" />
              </div>
              <div className="absolute top-4 right-4 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded">
                BESTSELLER
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Micro Bot
              </h3>
              <p className="text-slate-600 text-sm mb-4 flex-1">
                The offline desktop companion for focus and productivity.
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-bold text-slate-900">₹2,999</span>
                <Link to="/product">
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </Card>

          {/* Coming Soon Card */}
          <Card noPadding className="flex flex-col h-full opacity-75 grayscale">
            <div className="aspect-video bg-slate-100 relative flex items-center justify-center p-8">
              <div className="text-slate-400 font-bold text-4xl">?</div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Smart Plug (Offline)
              </h3>
              <p className="text-slate-600 text-sm mb-4 flex-1">
                Control appliances without cloud servers.
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-bold text-slate-900">
                  Coming Soon
                </span>
                <Button size="sm" disabled>
                  Waitlist
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>);

}