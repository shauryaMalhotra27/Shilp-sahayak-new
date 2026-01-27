import React from 'react';
import { ShoppingBag, Truck, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';
export function BuySection() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg sticky top-24">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Micro Bot</h1>
        <p className="text-slate-500">Edition 1 • Matte Black</p>
      </div>

      <div className="flex items-baseline gap-2 mb-6">
        <span className="text-4xl font-bold text-slate-900">₹2,999</span>
        <span className="text-lg text-slate-400 line-through">₹3,999</span>
        <span className="text-sm font-semibold text-teal-600 bg-teal-50 px-2 py-1 rounded">
          25% OFF
        </span>
      </div>

      <div className="space-y-4 mb-8">
        <div className="flex items-center gap-3 text-sm text-slate-600">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="font-medium text-green-700">
            In Stock - Ships within 24 hours
          </span>
        </div>

        <div className="flex items-center gap-3 text-sm text-slate-600">
          <Truck className="w-4 h-4" />
          <span>Free shipping across India</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-slate-600">
          <ShieldCheck className="w-4 h-4" />
          <span>1 Year Replacement Warranty</span>
        </div>
      </div>

      <div className="space-y-3">
        <Button
          size="lg"
          className="w-full"
          rightIcon={<ShoppingBag className="w-4 h-4" />}>

          Buy Now
        </Button>
        <p className="text-xs text-center text-slate-400">
          Secure payment via UPI, Card, or Netbanking
        </p>
      </div>
    </div>);

}