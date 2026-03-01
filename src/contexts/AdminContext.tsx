'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';

export interface AdminUser {
  id: string;
  name: string;
  username: string;
  token: string;
}

interface AdminContextType {
  adminUser: AdminUser | null;
  isAdmin: boolean;
  loginAdmin: (username: string, password: string) => { ok: boolean; error?: string };
  logoutAdmin: () => void;
}

const ADMIN_STORAGE_KEY = 'adminUser';
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin123';

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [adminUser, setAdminUser] = useState<AdminUser | null>(() => {
    if (typeof window === 'undefined') return null;
    const saved = window.localStorage.getItem(ADMIN_STORAGE_KEY);
    return saved ? (JSON.parse(saved) as AdminUser) : null;
  });

  useEffect(() => {
    if (adminUser) {
      window.localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(adminUser));
    } else {
      window.localStorage.removeItem(ADMIN_STORAGE_KEY);
    }
  }, [adminUser]);

  const loginAdmin = useCallback((username: string, password: string) => {
    if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
      return { ok: false, error: 'Invalid admin credentials' };
    }

    const user: AdminUser = {
      id: 'admin-1',
      name: 'Admin',
      username,
      token: `mock-admin-token-${Date.now()}`
    };
    setAdminUser(user);
    return { ok: true };
  }, []);

  const logoutAdmin = useCallback(() => {
    setAdminUser(null);
  }, []);

  const value = useMemo(
    () => ({
      adminUser,
      isAdmin: !!adminUser,
      loginAdmin,
      logoutAdmin
    }),
    [adminUser, loginAdmin, logoutAdmin]
  );

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
}

export function useAdminContext() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdminContext must be used within an AdminProvider');
  }
  return context;
}

