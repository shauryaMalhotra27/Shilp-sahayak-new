'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  Package,
  Globe,
  Receipt,
  LogOut
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useAdminAuth } from '../../hooks/useAdminAuth';
import { cn } from '../../lib/utils';
import { AdminEditorProvider, useAdminEditorContext } from '../../contexts/AdminEditorContext';

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/pages', label: 'Pages', icon: FileText },
  { href: '/admin/products', label: 'Products', icon: Package },
  { href: '/admin/global', label: 'Global', icon: Globe },
  { href: '/admin/orders', label: 'Users/Orders', icon: Receipt }
];

function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { isAdmin, adminUser, logoutAdmin } = useAdminAuth();
  const { autosave, setAutosave, hasUnsavedChanges } = useAdminEditorContext();

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-muted flex items-center justify-center">
        <p className="text-muted-foreground">Checking admin session...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted">
      <div className="lg:grid lg:grid-cols-[260px_1fr]">
        <aside className="hidden lg:flex lg:flex-col border-r border-border bg-card min-h-screen sticky top-0">
          <div className="px-6 py-5 border-b border-border">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Admin Panel</p>
            <h1 className="text-lg font-bold text-foreground mt-1">Shilp Sahayak</h1>
          </div>
          <nav className="p-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors',
                    isActive
                      ? 'bg-primary/10 text-primary border border-primary/20'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto p-4 border-t border-border">
            <p className="text-xs text-muted-foreground mb-3">
              Signed in as <span className="text-foreground">{adminUser?.username}</span>
            </p>
            <div className="mb-3 flex items-center justify-between">
              <span
                className={cn(
                  'text-[11px] px-2 py-1 rounded-full border',
                  hasUnsavedChanges
                    ? 'text-warning border-warning/30 bg-warning/10'
                    : 'text-success border-success/30 bg-success/10'
                )}
              >
                {hasUnsavedChanges ? 'Unsaved changes' : 'All changes saved'}
              </span>
            </div>
            <label className="mb-3 inline-flex items-center gap-2 text-xs text-muted-foreground">
              <input
                type="checkbox"
                checked={autosave}
                onChange={(e) => setAutosave(e.target.checked)}
              />
              Autosave
            </label>
            <Button
              variant="outline"
              className="w-full"
              leftIcon={<LogOut className="w-4 h-4" />}
              onClick={() => {
                logoutAdmin();
                router.replace('/adminlogin');
              }}
            >
              Logout
            </Button>
          </div>
        </aside>

        <main className="min-h-screen">
          <header className="lg:hidden bg-card border-b border-border px-4 py-3 sticky top-0 z-20">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-foreground">Admin Panel</p>
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    'text-[11px] px-2 py-1 rounded-full border',
                    hasUnsavedChanges
                      ? 'text-warning border-warning/30 bg-warning/10'
                      : 'text-success border-success/30 bg-success/10'
                  )}
                >
                  {hasUnsavedChanges ? 'Unsaved' : 'Saved'}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    logoutAdmin();
                    router.replace('/adminlogin');
                  }}
                >
                  Logout
                </Button>
              </div>
            </div>
            <div className="mt-2">
              <label className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                <input
                  type="checkbox"
                  checked={autosave}
                  onChange={(e) => setAutosave(e.target.checked)}
                />
                Autosave
              </label>
            </div>
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'text-xs px-3 py-1.5 rounded-full whitespace-nowrap border',
                      isActive
                        ? 'bg-primary/10 text-primary border-primary/20'
                        : 'bg-card text-muted-foreground border-border'
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </header>
          <div className="p-4 sm:p-6 lg:p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminEditorProvider>
      <AdminShell>{children}</AdminShell>
    </AdminEditorProvider>
  );
}
