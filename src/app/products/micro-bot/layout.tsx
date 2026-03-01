import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Micro Bot - Shilp Sahayak',
  description:
    'Micro Bot is an offline desk companion focused on privacy and productivity.'
};

export default function MicroBotLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
