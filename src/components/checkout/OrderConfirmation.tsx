import React from 'react';
import { CheckCircle, Package, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
interface OrderConfirmationProps {
  orderId: string;
}
export function OrderConfirmation({ orderId }: OrderConfirmationProps) {
  return (
    <div className="text-center space-y-8 py-8">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Order Confirmed!
        </h1>
        <p className="text-slate-600">
          Thank you for your purchase. Your order{' '}
          <span className="font-mono font-bold text-slate-900">#{orderId}</span>{' '}
          has been placed.
        </p>
      </div>

      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 max-w-md mx-auto text-left">
        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Package className="w-5 h-5 text-teal-600" />
          What happens next?
        </h3>
        <ul className="space-y-3 text-sm text-slate-600">
          <li className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 font-bold text-xs">
              1
            </div>
            <span>You will receive an order confirmation email shortly.</span>
          </li>
          <li className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 font-bold text-xs">
              2
            </div>
            <span>
              We will pack your order with care at our Patiala facility.
            </span>
          </li>
          <li className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 font-bold text-xs">
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
        <Link to="/products">
          <Button variant="outline">Continue Shopping</Button>
        </Link>
        <Link to="/account">
          <Button rightIcon={<ArrowRight className="w-4 h-4" />}>
            View Order in Account
          </Button>
        </Link>
      </div>
    </div>);

}