import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../types/cart';
import { useCart } from '../../hooks/useCart';
interface CartItemProps {
  item: CartItemType;
}
export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  return (
    <div className="flex gap-4 py-4 border-b border-slate-100 last:border-0">
      <div className="w-20 h-20 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
        {/* Placeholder for product image */}
        <div className="w-10 h-10 bg-slate-200 rounded-full" />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-medium text-slate-900">{item.name}</h4>
            <p className="text-sm text-slate-500">
              ₹{item.price.toLocaleString()}
            </p>
          </div>
          <button
            onClick={() => removeItem(item.id)}
            className="text-slate-400 hover:text-red-500 transition-colors"
            aria-label="Remove item">

            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center border border-slate-200 rounded-lg">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="p-1 hover:bg-slate-50 text-slate-600 disabled:opacity-50"
              disabled={item.quantity <= 1}>

              <Minus className="w-3 h-3" />
            </button>
            <span className="w-8 text-center text-sm font-medium">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="p-1 hover:bg-slate-50 text-slate-600">

              <Plus className="w-3 h-3" />
            </button>
          </div>
          <p className="text-sm font-medium text-slate-900 ml-auto">
            ₹{(item.price * item.quantity).toLocaleString()}
          </p>
        </div>
      </div>
    </div>);

}