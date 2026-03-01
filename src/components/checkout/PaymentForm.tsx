import { useState } from 'react';
import { Button } from '../ui/Button';
import { ArrowLeft, CreditCard, Smartphone, Building } from 'lucide-react';
interface PaymentFormProps {
  onNext: () => void;
  onBack: () => void;
  total: number;
}
export function PaymentForm({ onNext, onBack, total }: PaymentFormProps) {
  const [method, setMethod] = useState('upi');
  return (
    <div className="space-y-6">
      <div className="bg-card p-6 rounded-xl border border-border">
        <h2 className="text-lg font-bold text-foreground mb-6">
          Select Payment Method
        </h2>

        <div className="space-y-3">
          <label
            className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-all ${method === 'upi' ? 'border-primary bg-primary/10 ring-1 ring-primary' : 'border-border hover:border-primary/40'}`}>

            <input
              type="radio"
              name="payment"
              value="upi"
              checked={method === 'upi'}
              onChange={() => setMethod('upi')}
              className="text-primary focus:ring-primary" />

            <div className="w-10 h-10 bg-card rounded-full flex items-center justify-center text-muted-foreground shadow-sm">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium text-foreground">UPI / QR Code</p>
              <p className="text-sm text-muted-foreground">
                Google Pay, PhonePe, Paytm
              </p>
            </div>
          </label>

          <label
            className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-all ${method === 'card' ? 'border-primary bg-primary/10 ring-1 ring-primary' : 'border-border hover:border-primary/40'}`}>

            <input
              type="radio"
              name="payment"
              value="card"
              checked={method === 'card'}
              onChange={() => setMethod('card')}
              className="text-primary focus:ring-primary" />

            <div className="w-10 h-10 bg-card rounded-full flex items-center justify-center text-muted-foreground shadow-sm">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium text-foreground">Credit / Debit Card</p>
              <p className="text-sm text-muted-foreground">Visa, Mastercard, RuPay</p>
            </div>
          </label>

          <label
            className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-all ${method === 'netbanking' ? 'border-primary bg-primary/10 ring-1 ring-primary' : 'border-border hover:border-primary/40'}`}>

            <input
              type="radio"
              name="payment"
              value="netbanking"
              checked={method === 'netbanking'}
              onChange={() => setMethod('netbanking')}
              className="text-primary focus:ring-primary" />

            <div className="w-10 h-10 bg-card rounded-full flex items-center justify-center text-muted-foreground shadow-sm">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium text-foreground">Netbanking</p>
              <p className="text-sm text-muted-foreground">All major Indian banks</p>
            </div>
          </label>
        </div>
      </div>

      <div className="bg-muted p-6 rounded-xl border border-border">
        <div className="flex justify-between items-center mb-4">
          <span className="text-muted-foreground">Total Amount</span>
          <span className="text-2xl font-bold text-foreground">
            ₹{total.toLocaleString()}
          </span>
        </div>
        <p className="text-xs text-muted-foreground text-center">
          By clicking "Pay Now", you agree to our Terms of Service. Your payment
          information is encrypted and secure.
        </p>
      </div>

      <div className="flex gap-4">
        <Button
          variant="outline"
          onClick={onBack}
          className="flex-1"
          leftIcon={<ArrowLeft className="w-4 h-4" />}>

          Back
        </Button>
        <Button onClick={onNext} className="flex-1">
          Pay Now
        </Button>
      </div>
    </div>);

}
