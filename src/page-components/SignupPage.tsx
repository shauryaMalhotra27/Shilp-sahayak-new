import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signup(formData.name, formData.email, formData.phone);
    router.push('/account');
  };
  return (
    <div className="min-h-screen bg-muted flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-card p-8 rounded-2xl border border-border shadow-sm">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">Create Account</h2>
          <p className="mt-2 text-muted-foreground">
            Join Shilp Sahayak for faster checkout
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                className="w-full h-12 px-4 text-base rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                value={formData.name}
                onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value
                })
                } />

            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1">
                Email address
              </label>
              <input
                type="email"
                required
                className="w-full h-12 px-4 text-base rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                value={formData.email}
                onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value
                })
                } />

            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                required
                className="w-full h-12 px-4 text-base rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                value={formData.phone}
                onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: e.target.value
                })
                } />

            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1">
                Password
              </label>
              <input
                type="password"
                required
                className="w-full h-12 px-4 text-base rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                value={formData.password}
                onChange={(e) =>
                setFormData({
                  ...formData,
                  password: e.target.value
                })
                } />

            </div>
          </div>

          <div className="bg-info/10 p-4 rounded-lg text-xs text-info">
            We store your information only to make future purchases easier and
            to fulfill your orders — nothing else.
          </div>

          <Button type="submit" className="w-full">
            Create Account
          </Button>

          <div className="text-center text-sm">
            <span className="text-muted-foreground">Already have an account? </span>
            <Link
              href="/login"
              className="font-medium text-primary hover:text-primary-dark">

              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>);

}
export default SignupPage;
