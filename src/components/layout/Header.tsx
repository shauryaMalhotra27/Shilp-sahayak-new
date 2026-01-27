import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, User } from 'lucide-react';
import { Button } from '../ui/Button';
import { TrustBadge } from '../shared/TrustBadge';
import { CartIcon } from '../cart/CartIcon';
import { useAuth } from '../../hooks/useAuth';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
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

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl text-slate-900 tracking-tight">
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
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-teal-600 ${isActive(item.href) ? 'text-teal-600' : 'text-slate-600'}`}>

                {item.name}
              </Link>
            )}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <CartIcon />

            {isAuthenticated ?
            <Link
              to="/account"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 flex items-center gap-2">

                <User className="w-4 h-4" />
                {user?.name.split(' ')[0]}
              </Link> :

            <Link to="/login">
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
              className="text-slate-600 hover:text-slate-900 p-2">

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
      <div className="md:hidden bg-white border-b border-slate-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navigation.map((item) =>
          <Link
            key={item.name}
            to={item.href}
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(item.href) ? 'bg-teal-50 text-teal-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
            onClick={() => setIsMenuOpen(false)}>

                {item.name}
              </Link>
          )}
            <div className="pt-4 flex flex-col gap-3">
              {isAuthenticated ?
            <Link to="/account" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    My Account
                  </Button>
                </Link> :

            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
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