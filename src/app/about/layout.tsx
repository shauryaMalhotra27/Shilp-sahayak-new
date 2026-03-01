import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Shilp Sahayak',
  description: 'Learn about Shilp Sahayak and our privacy-first mission.'
};

export default function AboutLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
