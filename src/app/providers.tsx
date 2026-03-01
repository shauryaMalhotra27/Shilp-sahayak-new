'use client';

import { AuthProvider } from '../contexts/AuthContext';
import { CartProvider } from '../contexts/CartContext';
import { AdminProvider } from '../contexts/AdminContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AdminProvider>
      <AuthProvider>
        <CartProvider>{children}</CartProvider>
      </AuthProvider>
    </AdminProvider>
  );
}
