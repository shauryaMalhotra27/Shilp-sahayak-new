import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
interface ShippingFormProps {
  onNext: (data: any) => void;
  onBack: () => void;
}
export function ShippingForm({ onNext, onBack }: ShippingFormProps) {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.addresses[0]?.line1 || '',
    city: user?.addresses[0]?.city || '',
    state: user?.addresses[0]?.state || '',
    pincode: user?.addresses[0]?.pincode || ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
        <h2 className="text-lg font-bold text-slate-900 mb-4">
          Contact Information
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Full Name
            </label>
            <input
              required
              type="text"
              className="w-full rounded-lg border-slate-300 focus:ring-teal-500 focus:border-teal-500"
              value={formData.name}
              onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value
              })
              } />

          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              required
              type="email"
              className="w-full rounded-lg border-slate-300 focus:ring-teal-500 focus:border-teal-500"
              value={formData.email}
              onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value
              })
              } />

          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Phone Number
          </label>
          <input
            required
            type="tel"
            className="w-full rounded-lg border-slate-300 focus:ring-teal-500 focus:border-teal-500"
            value={formData.phone}
            onChange={(e) =>
            setFormData({
              ...formData,
              phone: e.target.value
            })
            } />

        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
        <h2 className="text-lg font-bold text-slate-900 mb-4">
          Shipping Address
        </h2>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Address
          </label>
          <input
            required
            type="text"
            className="w-full rounded-lg border-slate-300 focus:ring-teal-500 focus:border-teal-500"
            value={formData.address}
            onChange={(e) =>
            setFormData({
              ...formData,
              address: e.target.value
            })
            } />

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              City
            </label>
            <input
              required
              type="text"
              className="w-full rounded-lg border-slate-300 focus:ring-teal-500 focus:border-teal-500"
              value={formData.city}
              onChange={(e) =>
              setFormData({
                ...formData,
                city: e.target.value
              })
              } />

          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              State
            </label>
            <input
              required
              type="text"
              className="w-full rounded-lg border-slate-300 focus:ring-teal-500 focus:border-teal-500"
              value={formData.state}
              onChange={(e) =>
              setFormData({
                ...formData,
                state: e.target.value
              })
              } />

          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Pincode
            </label>
            <input
              required
              type="text"
              className="w-full rounded-lg border-slate-300 focus:ring-teal-500 focus:border-teal-500"
              value={formData.pincode}
              onChange={(e) =>
              setFormData({
                ...formData,
                pincode: e.target.value
              })
              } />

          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-sm text-blue-800">
        <p>
          <strong>Privacy Promise:</strong> We store your address only to
          fulfill this order. We do not share your data with advertisers.
        </p>
      </div>

      <div className="flex gap-4">
        <Button
          variant="outline"
          onClick={onBack}
          className="flex-1"
          leftIcon={<ArrowLeft className="w-4 h-4" />}>

          Back to Cart
        </Button>
        <Button
          type="submit"
          className="flex-1"
          rightIcon={<ArrowRight className="w-4 h-4" />}>

          Continue to Payment
        </Button>
      </div>
    </form>);

}