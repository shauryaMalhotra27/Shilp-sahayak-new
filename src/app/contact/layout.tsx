import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Shilp Sahayak',
  description: 'Contact the Shilp Sahayak team for support, partnerships, and inquiries.'
};

export default function ContactLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
