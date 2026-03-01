'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAdminContext } from '../contexts/AdminContext';

interface UseAdminAuthOptions {
  redirectTo?: string;
}

export function useAdminAuth(options: UseAdminAuthOptions = {}) {
  const { redirectTo = '/adminlogin' } = options;
  const { adminUser, isAdmin, logoutAdmin } = useAdminContext();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname?.startsWith('/admin')) return;
    if (pathname.startsWith('/adminlogin')) return;
    if (!isAdmin) {
      router.replace(redirectTo);
    }
  }, [isAdmin, pathname, redirectTo, router]);

  return { adminUser, isAdmin, logoutAdmin };
}

