'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { AdminData, defaultStaticData, loadAdminData, saveAdminData } from '../lib/admin-data';
import { AdminSectionKey, firstValidationMessage, validateAdminSection } from '../lib/admin-validation';
import { useAdminEditorContext } from '../contexts/AdminEditorContext';
import { fetchRemoteContentSection, sectionDataByKey, upsertRemoteContentSection } from '../lib/admin-api';

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
    let active = true;
    const hydrate = async () => {
      const loaded = loadAdminData();
      const remoteSection = await fetchRemoteContentSection<unknown>(section);
      if (!active) return;
      const hydrated =
        remoteSection
          ? ({
              ...loaded,
              [section]: remoteSection,
            } as AdminData)
          : loaded;
      setData(hydrated);
      savedSnapshotRef.current = JSON.stringify(hydrated);
      setHasUnsavedChanges(false);
      setReady(true);
    };
    hydrate();
    return () => {
      active = false;
    };
  }, [section, setHasUnsavedChanges]);

  useEffect(() => {
    if (!ready) return;
    const currentSnapshot = JSON.stringify(data);
    const dirty = currentSnapshot !== savedSnapshotRef.current;
    setHasUnsavedChanges(dirty);
  }, [data, ready, setHasUnsavedChanges]);

  const updateData = (updater: (prev: AdminData) => AdminData) => {
    setData((prev) => updater(prev));
  };

  const persist = useCallback(async (
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
      if (section !== 'products') {
        const remote = await upsertRemoteContentSection(
          section,
          sectionDataByKey(payload, section)
        );
        if (!remote.ok) {
          setError(remote.error || 'Remote sync failed');
          return false;
        }
      }
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
        void persist(nextData);
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
