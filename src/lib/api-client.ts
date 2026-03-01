import { EditableProduct } from './admin-data';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || '';
const TTL_MS = 60_000;

type CacheEntry<T> = {
  ts: number;
  data: T;
};

const cache = new Map<string, CacheEntry<unknown>>();

interface ApiProductRow {
  id: number;
  name: string;
  description: string;
  price: number;
  status: EditableProduct['status'];
  image_url?: string | null;
}

function getCached<T>(key: string): T | null {
  const hit = cache.get(key);
  if (!hit) return null;
  if (Date.now() - hit.ts > TTL_MS) {
    cache.delete(key);
    return null;
  }
  return hit.data as T;
}

function setCached<T>(key: string, value: T) {
  cache.set(key, { ts: Date.now(), data: value });
}

function statusToAccent(status: EditableProduct['status']) {
  if (status === 'Available') return 'bg-info';
  if (status === 'Pre-Order') return 'bg-warning';
  return 'bg-primary';
}

function deriveLink(name: string) {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  if (slug.includes('micro-bot')) return '/products/micro-bot';
  if (slug.includes('pomodoro')) return '/products/pomodoro';
  if (slug.includes('drone')) return '/products/drone';
  return `/products/${slug}`;
}

function mapProduct(row: ApiProductRow): EditableProduct {
  return {
    name: row.name,
    description: row.description,
    price: `₹${Number(row.price || 0).toLocaleString()}`,
    status: row.status || 'Coming Soon',
    imageColor: 'bg-foreground',
    accentColor: statusToAccent(row.status || 'Coming Soon'),
    link: deriveLink(row.name),
  };
}

export async function fetchProductsFromApi(
  fallback: EditableProduct[]
): Promise<EditableProduct[]> {
  const cacheKey = 'products';
  const cached = getCached<EditableProduct[]>(cacheKey);
  if (cached) return cached;

  if (!API_BASE) return fallback;

  try {
    const res = await fetch(`${API_BASE}/api/products`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
      cache: 'no-store',
    });
    if (!res.ok) return fallback;
    const payload = (await res.json()) as { ok?: boolean; data?: ApiProductRow[] };
    if (!payload.ok || !Array.isArray(payload.data)) return fallback;
    const mapped = payload.data.map(mapProduct);
    setCached(cacheKey, mapped);
    return mapped;
  } catch {
    return fallback;
  }
}

