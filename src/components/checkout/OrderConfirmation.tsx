import { CheckCircle, Package, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';
import Link from 'next/link';
interface OrderConfirmationProps {
  orderId: string;
}
export function OrderConfirmation({ orderId }: OrderConfirmationProps) {
  return (
    <div className="text-center space-y-8 py-8">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-success/10 text-success rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Order Confirmed!
        </h1>
        <p className="text-muted-foreground">
          Thank you for your purchase. Your order{' '}
          <span className="font-mono font-bold text-foreground">#{orderId}</span>{' '}
          has been placed.
        </p>
      </div>

      <div className="bg-muted p-6 rounded-xl border border-border max-w-md mx-auto text-left">
        <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
          <Package className="w-5 h-5 text-primary" />
          What happens next?
        </h3>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-card border border-border flex items-center justify-center shrink-0 font-bold text-xs">
              1
            </div>
            <span>You will receive an order confirmation email shortly.</span>
          </li>
          <li className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-card border border-border flex items-center justify-center shrink-0 font-bold text-xs">
              2
            </div>
            <span>
              We will pack your order with care at our Patiala facility.
            </span>
          </li>
          <li className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-card border border-border flex items-center justify-center shrink-0 font-bold text-xs">
              3
            </div>
            <span>
              You'll get a tracking link once your package is shipped (usually
              within 24h).
            </span>
          </li>
        </ul>
      </div>

      <div className="flex justify-center gap-4">
        <Link href="/products">
          <Button variant="outline">Continue Shopping</Button>
        </Link>
        <Link href="/account">
          <Button rightIcon={<ChevronRight className="w-4 h-4" />}>
            View Order in Account
          </Button>
        </Link>
      </div>
    </div>);

}
