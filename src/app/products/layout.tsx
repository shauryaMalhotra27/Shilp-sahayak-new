import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products - Shilp Sahayak',
  description: 'Explore privacy-first offline electronics by Shilp Sahayak.'
};

export default function ProductsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
