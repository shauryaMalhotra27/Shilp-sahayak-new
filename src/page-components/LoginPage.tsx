import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '../components/ui/Button';
import { useAuth } from '../hooks/useAuth';
export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email);
    router.push('/account');
  };
  return (
    <div className="min-h-screen bg-muted flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-card p-8 rounded-2xl border border-border shadow-sm">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">Welcome Back</h2>
          <p className="mt-2 text-muted-foreground">
            Sign in to manage your orders and account
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1">
                Email address
              </label>
              <input
                type="email"
                required
                className="w-full h-12 px-4 text-base rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1">
                Password
              </label>
              <input
                type="password"
                required
                className="w-full h-12 px-4 text-base rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />

            </div>
          </div>

          <Button type="submit" className="w-full">
            Sign In
          </Button>

          <div className="text-center text-sm">
            <span className="text-muted-foreground">Don't have an account? </span>
            <Link
              href="/signup"
              className="font-medium text-primary hover:text-primary-dark">

              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>);

}
export default LoginPage;
