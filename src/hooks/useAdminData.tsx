'use client';

import { useEffect, useState } from 'react';
import { AdminData, defaultStaticData, loadAdminData, saveAdminData } from '../lib/admin-data';
import { fetchRemoteAllContentSections } from '../lib/admin-api';

export function useAdminData() {
  const [data, setData] = useState<AdminData>(defaultStaticData);

  useEffect(() => {
    let active = true;

    const hydrate = async () => {
      const local = loadAdminData();
      if (!active) return;
      setData(local);

      const remote = await fetchRemoteAllContentSections();
      if (!active || !remote) return;

      const merged = { ...local, ...remote } as AdminData;
      setData(merged);
      saveAdminData(merged);
    };

    void hydrate();

    return () => {
      active = false;
    };
  }, []);

  return data;
}
