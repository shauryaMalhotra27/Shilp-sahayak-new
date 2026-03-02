'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

interface AdminEditorContextType {
  autosave: boolean;
  setAutosave: (value: boolean) => void;
  hasUnsavedChanges: boolean;
  setHasUnsavedChanges: (value: boolean) => void;
}

const AUTOSAVE_KEY = 'adminAutosave';

const AdminEditorContext = createContext<AdminEditorContextType | undefined>(undefined);

export function AdminEditorProvider({ children }: { children: React.ReactNode }) {
  const [autosave, setAutosaveState] = useState<boolean>(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  useEffect(() => {
    setAutosaveState(window.localStorage.getItem(AUTOSAVE_KEY) === '1');
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(AUTOSAVE_KEY, autosave ? '1' : '0');
  }, [autosave]);

  const value = useMemo(
    () => ({
      autosave,
      setAutosave: setAutosaveState,
      hasUnsavedChanges,
      setHasUnsavedChanges
    }),
    [autosave, hasUnsavedChanges]
  );

  return <AdminEditorContext.Provider value={value}>{children}</AdminEditorContext.Provider>;
}

export function useAdminEditorContext() {
  const ctx = useContext(AdminEditorContext);
  if (!ctx) {
    throw new Error('useAdminEditorContext must be used within AdminEditorProvider');
  }
  return ctx;
}
