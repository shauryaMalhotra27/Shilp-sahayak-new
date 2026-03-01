'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { AdminData, defaultStaticData, loadAdminData, saveAdminData } from '../lib/admin-data';
import { AdminSectionKey, firstValidationMessage, validateAdminSection } from '../lib/admin-validation';
import { useAdminEditorContext } from '../contexts/AdminEditorContext';

interface UseAdminEditorOptions {
  section: AdminSectionKey;
}

export function useAdminEditor(options: UseAdminEditorOptions) {
  const { section } = options;
  const [data, setData] = useState<AdminData>(defaultStaticData);
  const [ready, setReady] = useState(false);
  const [savedAt, setSavedAt] = useState<string>('');
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');
  const saveTimeoutRef = useRef<number | null>(null);
  const savedSnapshotRef = useRef<string>('');
  const { autosave, hasUnsavedChanges, setHasUnsavedChanges } = useAdminEditorContext();

  useEffect(() => {
    const loaded = loadAdminData();
    setData(loaded);
    savedSnapshotRef.current = JSON.stringify(loaded);
    setHasUnsavedChanges(false);
    setReady(true);
  }, [setHasUnsavedChanges]);

  useEffect(() => {
    if (!ready) return;
    const currentSnapshot = JSON.stringify(data);
    const dirty = currentSnapshot !== savedSnapshotRef.current;
    setHasUnsavedChanges(dirty);
  }, [data, ready, setHasUnsavedChanges]);

  const updateData = (updater: (prev: AdminData) => AdminData) => {
    setData((prev) => updater(prev));
  };

  const persist = useCallback((
    nextData?: AdminData,
    options?: { validate?: (payload: AdminData) => string | null }
  ) => {
    const payload = nextData ?? data;
    const validationError =
      options?.validate?.(payload) ??
      firstValidationMessage(validateAdminSection(section, payload));
    if (validationError) {
      setError(validationError);
      return false;
    }
    try {
      setIsSaving(true);
      saveAdminData(payload);
      savedSnapshotRef.current = JSON.stringify(payload);
      setHasUnsavedChanges(false);
      setSavedAt(new Date().toLocaleTimeString());
      setError('');
      return true;
    } catch {
      setError('Failed to save changes. Please try again.');
      return false;
    } finally {
      setIsSaving(false);
    }
  }, [data, section, setHasUnsavedChanges]);

  const persistDebounced = useCallback(
    (nextData?: AdminData, delayMs = 350) => {
      if (saveTimeoutRef.current) {
        window.clearTimeout(saveTimeoutRef.current);
      }
      saveTimeoutRef.current = window.setTimeout(() => {
        persist(nextData);
        saveTimeoutRef.current = null;
      }, delayMs);
    },
    [persist]
  );

  const cancelDebouncedPersist = useCallback(() => {
    if (saveTimeoutRef.current) {
      window.clearTimeout(saveTimeoutRef.current);
      saveTimeoutRef.current = null;
    }
  }, []);

  useEffect(() => cancelDebouncedPersist, [cancelDebouncedPersist]);

  useEffect(() => {
    if (!ready || !autosave || !hasUnsavedChanges) return;
    persistDebounced(data, 500);
  }, [autosave, data, hasUnsavedChanges, persistDebounced, ready]);

  return {
    data,
    setData,
    updateData,
    persist,
    persistDebounced,
    cancelDebouncedPersist,
    ready,
    savedAt,
    isSaving,
    error
  };
}
