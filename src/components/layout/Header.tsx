'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, User } from 'lucide-react';
import { Button } from '../ui/Button';
import { TrustBadge } from '../shared/TrustBadge';
import { CartIcon } from '../cart/CartIcon';
import { useAuth } from '../../hooks/useAuth';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname() ?? '/';
  const router = useRouter();
  const { isAuthenticated, user } = useAuth();
  const navigation = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Products',
    href: '/products'
  },
  {
    name: 'Vision',
    href: '/vision'
  },
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Support',
    href: '/support'
  }];
  const prefetchTargets = useMemo(() => {
    const base = ['/products', '/vision', '/about', '/support'];
    if (isAuthenticated) return [...base, '/account', '/checkout'];
    return [...base, '/login', '/signup'];
  }, [isAuthenticated]);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  useEffect(() => {
    // Close mobile menu after successful route change.
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    // In dev, aggressive prefetch adds compile pressure and slows route switches.
    if (process.env.NODE_ENV !== 'production') return;
    prefetchTargets.forEach((route) => router.prefetch(route));
  }, [prefetchTargets, router]);

  return (
    <header className="sticky top-0 z-50 w-full bg-card/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl text-foreground tracking-tight">
                Shilp Sahayak
              </span>
            </Link>
            <div className="hidden md:block">
              <TrustBadge type="made-in-india" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) =>
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive(item.href) ? 'text-primary' : 'text-muted-foreground'}`}>

                {item.name}
              </Link>
            )}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <CartIcon />

            {isAuthenticated ?
            <Link
              href="/account"
              className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-2">

                <User className="w-4 h-4" />
                {user?.name.split(' ')[0]}
              </Link> :

            <Link href="/login">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
            }
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <CartIcon />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground hover:text-foreground p-2">

              {isMenuOpen ?
              <X className="w-6 h-6" /> :

              <Menu className="w-6 h-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen &&
      <div className="md:hidden bg-card border-b border-border">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navigation.map((item) =>
          <Link
            key={item.name}
            href={item.href}
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(item.href) ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}`}
            >

                {item.name}
              </Link>
          )}
            <div className="pt-4 flex flex-col gap-3">
              {isAuthenticated ?
            <Link href="/account">
                  <Button variant="outline" className="w-full">
                    My Account
                  </Button>
                </Link> :

            <Link href="/login">
                  <Button variant="primary" className="w-full">
                    Sign In
                  </Button>
                </Link>
            }
            </div>
          </div>
        </div>
      }
    </header>);

}
