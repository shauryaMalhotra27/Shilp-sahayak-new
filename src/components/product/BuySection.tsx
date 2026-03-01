import { useState } from 'react';
import { ShoppingBag, Truck, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';
import { useCart } from '../../hooks/useCart';
interface BuySectionProps {
  productId?: string;
  name?: string;
  price?: number;
  image?: string;
  status?: 'Available' | 'Pre-Order' | 'Coming Soon';
}
export function BuySection({
  productId = 'micro-bot',
  name = 'Micro Bot',
  price = 2999,
  image,
  status = 'Available'
}: BuySectionProps) {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const handleAddToCart = () => {
    addItem({
      productId,
      name,
      price,
      quantity: 1,
      image
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };
  const isComingSoon = status === 'Coming Soon';
  return (
    <div className="bg-card p-6 rounded-2xl border border-border shadow-lg sticky top-24">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2">{name}</h1>
        <p className="text-muted-foreground">Edition 1 • Matte Black</p>
      </div>

      <div className="flex items-baseline gap-2 mb-6">
        <span className="text-4xl font-bold text-foreground">
          ₹{price.toLocaleString()}
        </span>
        {status === 'Available' &&
        <span className="text-sm font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
            In Stock
          </span>
        }
        {status === 'Pre-Order' &&
        <span className="text-sm font-semibold text-info bg-info/10 px-2 py-1 rounded">
            Pre-Order
          </span>
        }
      </div>

      <div className="space-y-4 mb-8">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Truck className="w-4 h-4" />
          <span>Free shipping across India</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <ShieldCheck className="w-4 h-4" />
          <span>1 Year Replacement Warranty</span>
        </div>
      </div>

      <div className="space-y-3">
        <Button
          size="lg"
          className="w-full"
          rightIcon={!isComingSoon && <ShoppingBag className="w-4 h-4" />}
          onClick={handleAddToCart}
          disabled={isComingSoon}>

          {isComingSoon ?
          'Coming Soon' :
          isAdded ?
          'Added to Cart!' :
          'Add to Cart'}
        </Button>
        <p className="text-xs text-center text-muted-foreground">
          Secure payment via UPI, Card, or Netbanking
        </p>
      </div>
    </div>);

}
