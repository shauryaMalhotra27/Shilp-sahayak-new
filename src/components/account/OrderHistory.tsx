import React from 'react';
import { Package, ChevronRight } from 'lucide-react';
import { Order } from '../../types/user';
interface OrderHistoryProps {
  orders: Order[];
}
export function OrderHistory({ orders }: OrderHistoryProps) {
  if (orders.length === 0) {
    return (
      <div className="text-center py-12 bg-slate-50 rounded-xl border border-slate-200 border-dashed">
        <Package className="w-12 h-12 text-slate-300 mx-auto mb-4" />
        <h3 className="font-medium text-slate-900">No orders yet</h3>
        <p className="text-sm text-slate-500">
          Your order history will appear here.
        </p>
      </div>);

  }
  return (
    <div className="space-y-4">
      {orders.map((order) =>
      <div
        key={order.id}
        className="bg-white border border-slate-200 rounded-lg p-4 hover:border-teal-200 transition-colors cursor-pointer">

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="font-mono font-bold text-slate-900">
                  #{order.id}
                </span>
                <span
                className={`text-xs px-2 py-0.5 rounded-full font-medium ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' : order.status === 'Processing' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-700'}`}>

                  {order.status}
                </span>
              </div>
              <p className="text-sm text-slate-500">
                {new Date(order.date).toLocaleDateString()}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-bold text-slate-900">
                ₹{order.total.toLocaleString()}
              </span>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100 text-sm text-slate-600">
            {order.items.map((item) => item.name).join(', ')}
          </div>
        </div>
      )}
    </div>);

}