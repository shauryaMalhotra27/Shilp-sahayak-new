'use client';

import { useEffect, useState } from 'react';
import { EditableProduct } from '../lib/admin-data';
import { fetchProductsFromApi } from '../lib/api-client';

export function useWorkerProducts(fallback: EditableProduct[]) {
  const [products, setProducts] = useState<EditableProduct[]>(fallback);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let active = true;
    setIsLoading(true);
    fetchProductsFromApi(fallback)
      .then((rows) => {
        if (!active) return;
        setProducts(rows.length ? rows : fallback);
      })
      .finally(() => {
        if (!active) return;
        setIsLoading(false);
      });
    return () => {
      active = false;
    };
  }, [fallback]);

  return { products, isLoading };
}

