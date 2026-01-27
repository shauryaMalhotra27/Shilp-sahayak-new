import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useAuth } from '../hooks/useAuth';
export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email);
    navigate('/account');
  };
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">Welcome Back</h2>
          <p className="mt-2 text-slate-600">
            Sign in to manage your orders and account
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email address
              </label>
              <input
                type="email"
                required
                className="w-full rounded-lg border-slate-300 focus:ring-teal-500 focus:border-teal-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                className="w-full rounded-lg border-slate-300 focus:ring-teal-500 focus:border-teal-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />

            </div>
          </div>

          <Button type="submit" className="w-full">
            Sign In
          </Button>

          <div className="text-center text-sm">
            <span className="text-slate-600">Don't have an account? </span>
            <Link
              to="/signup"
              className="font-medium text-teal-600 hover:text-teal-500">

              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>);

}