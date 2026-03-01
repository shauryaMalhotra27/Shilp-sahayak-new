import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - Shilp Sahayak',
  description: 'Sign in to manage your account, orders, and checkout faster.'
};

export default function LoginLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
