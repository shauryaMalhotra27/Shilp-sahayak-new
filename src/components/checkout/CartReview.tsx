import React from 'react';
import { useCart } from '../../hooks/useCart';
import { CartItem } from '../cart/CartItem';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';
interface CartReviewProps {
  onNext: () => void;
}
export function CartReview({ onNext }: CartReviewProps) {
  const { items, total } = useCart();
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500 mb-4">Your cart is empty.</p>
        <Button
          variant="outline"
          onClick={() => window.location.href = '/products'}>

          Browse Products
        </Button>
      </div>);

  }
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-900">Review Cart</h2>
        </div>
        <div className="divide-y divide-slate-100">
          {items.map((item) =>
          <div key={item.id} className="px-6">
              <CartItem item={item} />
            </div>
          )}
        </div>
      </div>

      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
        <div className="flex justify-between text-slate-600">
          <span>Subtotal</span>
          <span>₹{total.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-slate-600">
          <span>Shipping</span>
          <span className="text-green-600 font-medium">Free</span>
        </div>
        <div className="flex justify-between text-xl font-bold text-slate-900 pt-4 border-t border-slate-200">
          <span>Total</span>
          <span>₹{total.toLocaleString()}</span>
        </div>
      </div>

      <Button
        onClick={onNext}
        className="w-full"
        size="lg"
        rightIcon={<ArrowRight className="w-4 h-4" />}>

        Continue to Shipping
      </Button>
    </div>);

}