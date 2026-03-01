import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Account - Shilp Sahayak',
  description: 'View profile details, saved addresses, and order history.'
};

export default function AccountLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
