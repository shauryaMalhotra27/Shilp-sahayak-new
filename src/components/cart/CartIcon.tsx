import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
export function CartIcon() {
  const { itemCount, toggleCart } = useCart();
  return (
    <button
      onClick={toggleCart}
      className="relative p-2 text-slate-600 hover:text-slate-900 transition-colors"
      aria-label="Open cart">

      <ShoppingBag className="w-5 h-5" />
      {itemCount > 0 &&
      <span className="absolute top-0 right-0 bg-teal-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">
          {itemCount}
        </span>
      }
    </button>);

}