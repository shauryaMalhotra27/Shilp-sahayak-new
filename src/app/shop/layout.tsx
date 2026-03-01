import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop - Shilp Sahayak',
  description: 'Browse and filter all Shilp Sahayak products.'
};

export default function ShopLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
