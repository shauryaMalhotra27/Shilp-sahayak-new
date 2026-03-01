import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Signup - Shilp Sahayak',
  description: 'Create your Shilp Sahayak account for faster checkout and order tracking.'
};

export default function SignupLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
