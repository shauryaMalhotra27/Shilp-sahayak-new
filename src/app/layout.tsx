import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import { AppShell } from '../components/layout/AppShell';

export const metadata: Metadata = {
  title: 'Shilp Sahayak',
  description: 'Privacy-first offline electronics'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
