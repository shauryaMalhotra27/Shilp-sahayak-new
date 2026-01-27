import React, { useState } from 'react';
import { CheckoutSteps } from '../components/checkout/CheckoutSteps';
import { CartReview } from '../components/checkout/CartReview';
import { ShippingForm } from '../components/checkout/ShippingForm';
import { PaymentForm } from '../components/checkout/PaymentForm';
import { OrderConfirmation } from '../components/checkout/OrderConfirmation';
import { useCart } from '../hooks/useCart';
import { useAuth } from '../hooks/useAuth';
import { TrustBadge } from '../components/shared/TrustBadge';
export function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [shippingData, setShippingData] = useState<any>(null);
  const [orderId, setOrderId] = useState('');
  const { total, clearCart, items } = useCart();
  const { addOrder } = useAuth();
  const handleShippingSubmit = (data: any) => {
    setShippingData(data);
    setStep(3);
  };
  const handlePaymentSubmit = () => {
    // Mock order creation
    const newOrderId = Math.random().toString(36).substr(2, 9).toUpperCase();
    setOrderId(newOrderId);
    addOrder({
      id: newOrderId,
      date: new Date().toISOString(),
      items: [...items],
      total,
      status: 'Processing',
      shippingAddress: shippingData
    });
    clearCart();
    setStep(4);
  };
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Checkout</h1>
          <div className="mt-4 flex justify-center gap-4">
            <TrustBadge type="privacy-first" />
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-green-50 text-green-700 border-green-100">
              <span>Secure Checkout</span>
            </div>
          </div>
        </div>

        <CheckoutSteps currentStep={step} />

        <div className="mt-8">
          {step === 1 && <CartReview onNext={() => setStep(2)} />}
          {step === 2 &&
          <ShippingForm
            onNext={handleShippingSubmit}
            onBack={() => setStep(1)} />

          }
          {step === 3 &&
          <PaymentForm
            onNext={handlePaymentSubmit}
            onBack={() => setStep(2)}
            total={total} />

          }
          {step === 4 && <OrderConfirmation orderId={orderId} />}
        </div>
      </div>
    </div>);

}