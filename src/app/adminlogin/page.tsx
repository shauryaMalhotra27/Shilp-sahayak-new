'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useAdminContext } from '../../contexts/AdminContext';

export default function AdminLoginPage() {
  const router = useRouter();
  const { isAdmin, loginAdmin } = useAdminContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [adminApiKey, setAdminApiKey] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAdmin) router.replace('/admin');
  }, [isAdmin, router]);

  useEffect(() => {
    const savedKey = window.localStorage.getItem('adminApiKey') || '';
    setAdminApiKey(savedKey);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (adminApiKey.trim()) {
      window.localStorage.setItem('adminApiKey', adminApiKey.trim());
    } else {
      window.localStorage.removeItem('adminApiKey');
    }
    const result = loginAdmin(username.trim(), password);
    if (!result.ok) {
      setError(result.error ?? 'Login failed');
      return;
    }
    router.replace('/admin');
  };

  return (
    <div className="min-h-screen bg-muted flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-card border border-border rounded-2xl p-8 shadow-sm">
        <div className="text-center mb-6">
          <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
            <Lock className="w-5 h-5" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Admin Login</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Access the content management panel
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              Username
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full h-12 px-4 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="admin"
              autoComplete="username"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 px-4 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="admin123"
              autoComplete="current-password"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              Admin API Key (for DB writes)
            </label>
            <input
              value={adminApiKey}
              onChange={(e) => setAdminApiKey(e.target.value)}
              className="w-full h-12 px-4 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Paste Worker ADMIN_API_KEY"
              autoComplete="off"
            />
          </div>

          {error && <p className="text-sm text-danger">{error}</p>}

          <Button type="submit" className="w-full">
            Sign In as Admin
          </Button>
        </form>
      </div>
    </div>
  );
}
