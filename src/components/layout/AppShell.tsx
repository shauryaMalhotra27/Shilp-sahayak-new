'use client';

import { useEffect } from 'react';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { Header } from './Header';
import { Footer } from './Footer';
import { CartDrawer } from '../cart/CartDrawer';
const AnimatedCursorLayer = dynamic(
  () =>
  import('./AnimatedCursorLayer').then(
    (module) => module.AnimatedCursorLayer
  ),
  {
    ssr: false
  }
);

function ScrollToTopOnRouteChange() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const [cursorReady, setCursorReady] = useState(false);
  const pathname = usePathname();
  const isAdminRoute =
    pathname?.startsWith('/admin') || pathname?.startsWith('/adminlogin');

  useEffect(() => {
    // Delay cursor mount until after hydration to avoid DOM/style hydration mismatches.
    const id = window.setTimeout(() => setCursorReady(true), 300);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans text-foreground bg-background">
      <ScrollToTopOnRouteChange />
      {!isAdminRoute && cursorReady && <AnimatedCursorLayer />}
      {!isAdminRoute && <Header />}
      {!isAdminRoute && <CartDrawer />}
      <main className="flex-grow">{children}</main>
      {!isAdminRoute && <Footer />}
    </div>
  );
}
