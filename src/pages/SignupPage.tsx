import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useAuth } from '../hooks/useAuth';
export function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });
  const { signup } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signup(formData.name, formData.email, formData.phone);
    navigate('/account');
  };
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">Create Account</h2>
          <p className="mt-2 text-slate-600">
            Join Shilp Sahayak for faster checkout
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
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
                Email address
              </label>
              <input
                type="email"
                required
                className="w-full rounded-lg border-slate-300 focus:ring-teal-500 focus:border-teal-500"
                value={formData.email}
                onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value
                })
                } />

            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                required
                className="w-full rounded-lg border-slate-300 focus:ring-teal-500 focus:border-teal-500"
                value={formData.phone}
                onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: e.target.value
                })
                } />

            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                className="w-full rounded-lg border-slate-300 focus:ring-teal-500 focus:border-teal-500"
                value={formData.password}
                onChange={(e) =>
                setFormData({
                  ...formData,
                  password: e.target.value
                })
                } />

            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg text-xs text-blue-800">
            We store your information only to make future purchases easier and
            to fulfill your orders — nothing else.
          </div>

          <Button type="submit" className="w-full">
            Create Account
          </Button>

          <div className="text-center text-sm">
            <span className="text-slate-600">Already have an account? </span>
            <Link
              to="/login"
              className="font-medium text-teal-600 hover:text-teal-500">

              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>);

}