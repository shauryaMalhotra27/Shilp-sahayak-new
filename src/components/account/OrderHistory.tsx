import { Package, ChevronRight } from 'lucide-react';
import { Order } from '../../types/user';
interface OrderHistoryProps {
  orders: Order[];
}
export function OrderHistory({ orders }: OrderHistoryProps) {
  if (orders.length === 0) {
    return (
      <div className="text-center py-12 bg-muted rounded-xl border border-border border-dashed">
        <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="font-medium text-foreground">No orders yet</h3>
        <p className="text-sm text-muted-foreground">
          Your order history will appear here.
        </p>
      </div>);

  }
  return (
    <div className="space-y-4">
      {orders.map((order) =>
      <div
        key={order.id}
        className="bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors cursor-pointer">

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="font-mono font-bold text-foreground">
                  #{order.id}
                </span>
                <span
                className={`text-xs px-2 py-0.5 rounded-full font-medium ${order.status === 'Delivered' ? 'bg-success/15 text-success' : order.status === 'Processing' ? 'bg-info/15 text-info' : 'bg-muted text-muted-foreground'}`}>

                  {order.status}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {new Date(order.date).toLocaleDateString()}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-bold text-foreground">
                ₹{order.total.toLocaleString()}
              </span>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-border text-sm text-muted-foreground">
            {order.items.map((item) => item.name).join(', ')}
          </div>
        </div>
      )}
    </div>);

}
