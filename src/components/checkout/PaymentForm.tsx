import React, { useState } from 'react';
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
      <div className="bg-white p-6 rounded-xl border border-slate-200">
        <h2 className="text-lg font-bold text-slate-900 mb-6">
          Select Payment Method
        </h2>

        <div className="space-y-3">
          <label
            className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-all ${method === 'upi' ? 'border-teal-500 bg-teal-50 ring-1 ring-teal-500' : 'border-slate-200 hover:border-slate-300'}`}>

            <input
              type="radio"
              name="payment"
              value="upi"
              checked={method === 'upi'}
              onChange={() => setMethod('upi')}
              className="text-teal-600 focus:ring-teal-500" />

            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-600 shadow-sm">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium text-slate-900">UPI / QR Code</p>
              <p className="text-sm text-slate-500">
                Google Pay, PhonePe, Paytm
              </p>
            </div>
          </label>

          <label
            className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-all ${method === 'card' ? 'border-teal-500 bg-teal-50 ring-1 ring-teal-500' : 'border-slate-200 hover:border-slate-300'}`}>

            <input
              type="radio"
              name="payment"
              value="card"
              checked={method === 'card'}
              onChange={() => setMethod('card')}
              className="text-teal-600 focus:ring-teal-500" />

            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-600 shadow-sm">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium text-slate-900">Credit / Debit Card</p>
              <p className="text-sm text-slate-500">Visa, Mastercard, RuPay</p>
            </div>
          </label>

          <label
            className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-all ${method === 'netbanking' ? 'border-teal-500 bg-teal-50 ring-1 ring-teal-500' : 'border-slate-200 hover:border-slate-300'}`}>

            <input
              type="radio"
              name="payment"
              value="netbanking"
              checked={method === 'netbanking'}
              onChange={() => setMethod('netbanking')}
              className="text-teal-600 focus:ring-teal-500" />

            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-600 shadow-sm">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium text-slate-900">Netbanking</p>
              <p className="text-sm text-slate-500">All major Indian banks</p>
            </div>
          </label>
        </div>
      </div>

      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <div className="flex justify-between items-center mb-4">
          <span className="text-slate-600">Total Amount</span>
          <span className="text-2xl font-bold text-slate-900">
            ₹{total.toLocaleString()}
          </span>
        </div>
        <p className="text-xs text-slate-500 text-center">
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