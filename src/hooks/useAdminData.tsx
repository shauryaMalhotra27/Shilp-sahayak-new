'use client';

import { useEffect, useState } from 'react';
import { AdminData, defaultStaticData, loadAdminData } from '../lib/admin-data';

export function useAdminData() {
  const [data, setData] = useState<AdminData>(defaultStaticData);

  useEffect(() => {
    setData(loadAdminData());
  }, []);

  return data;
}

