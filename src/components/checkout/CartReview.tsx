import { useCart } from '../../hooks/useCart';
import { CartItem } from '../cart/CartItem';
import { Button } from '../ui/Button';
import { ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
interface CartReviewProps {
  onNext: () => void;
}
export function CartReview({ onNext }: CartReviewProps) {
  const router = useRouter();
  const { items, total } = useCart();
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">Your cart is empty.</p>
        <Button
          variant="outline"
          onClick={() => router.push('/products')}>

          Browse Products
        </Button>
      </div>);

  }
  return (
    <div className="space-y-6">
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="p-6 border-b border-border">
          <h2 className="text-lg font-bold text-foreground">Review Cart</h2>
        </div>
        <div className="divide-y divide-slate-100">
          {items.map((item) =>
          <div key={item.id} className="px-6">
              <CartItem item={item} />
            </div>
          )}
        </div>
      </div>

      <div className="bg-muted p-6 rounded-xl border border-border space-y-4">
        <div className="flex justify-between text-muted-foreground">
          <span>Subtotal</span>
          <span>₹{total.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-muted-foreground">
          <span>Shipping</span>
          <span className="text-success font-medium">Free</span>
        </div>
        <div className="flex justify-between text-xl font-bold text-foreground pt-4 border-t border-border">
          <span>Total</span>
          <span>₹{total.toLocaleString()}</span>
        </div>
      </div>

      <Button
        onClick={onNext}
        className="w-full"
        size="lg"
        rightIcon={<ChevronRight className="w-4 h-4" />}>

        Continue to Shipping
      </Button>
    </div>);

}
