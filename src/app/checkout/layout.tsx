import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Checkout - Shilp Sahayak',
  description: 'Complete your purchase securely with Shilp Sahayak checkout.'
};

export default function CheckoutLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
