import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vision - Shilp Sahayak',
  description: 'Read the offline-first manifesto and roadmap from Shilp Sahayak.'
};

export default function VisionLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
