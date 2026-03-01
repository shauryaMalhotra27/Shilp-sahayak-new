import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support - Shilp Sahayak',
  description: 'Find FAQs and support options for Shilp Sahayak products.'
};

export default function SupportLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
