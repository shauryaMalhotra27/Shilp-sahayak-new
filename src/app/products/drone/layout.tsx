import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shilp Drone - Shilp Sahayak',
  description:
    'Preview the upcoming Shilp Drone with local-first controls and privacy-focused design.'
};

export default function DroneLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
