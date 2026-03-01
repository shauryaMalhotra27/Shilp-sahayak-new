import { AdminData, EditableProduct, defaultStaticData } from './admin-data';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || '';
const ADMIN_API_KEY = process.env.NEXT_PUBLIC_ADMIN_API_KEY || '';

function hasApiBase() {
  return !!API_BASE;
}

function adminHeaders() {
  const headers: Record<string, string> = {
    'content-type': 'application/json',
  };
  if (ADMIN_API_KEY) headers['x-admin-key'] = ADMIN_API_KEY;
  return headers;
}

type ContentResponse = {
  ok?: boolean;
  data?: { id?: number; section?: string; content_json?: string } | null;
};

type ContentListResponse = {
  ok?: boolean;
  data?: Array<{ id?: number; section?: string; content_json?: string }> | null;
};

export async function fetchRemoteContentSection<T>(section: string): Promise<T | null> {
  if (!hasApiBase()) return null;
  try {
    const res = await fetch(
      `${API_BASE}/api/content?section=${encodeURIComponent(section)}`,
      { method: 'GET', headers: adminHeaders(), cache: 'no-store' }
    );
    if (!res.ok) return null;
    const payload = (await res.json()) as ContentResponse;
    const row = payload?.data;
    if (!row || !row.content_json) return null;
    return JSON.parse(row.content_json) as T;
  } catch {
    return null;
  }
}

export async function fetchRemoteAllContentSections(): Promise<Partial<AdminData> | null> {
  if (!hasApiBase()) return null;
  try {
    const res = await fetch(`${API_BASE}/api/content`, {
      method: 'GET',
      headers: adminHeaders(),
      cache: 'no-store',
    });
    if (!res.ok) return null;

    const payload = (await res.json()) as ContentListResponse;
    if (!payload.ok || !Array.isArray(payload.data)) return null;

    const out: Partial<AdminData> = {};
    payload.data.forEach((row) => {
      const section = row.section;
      const json = row.content_json;
      if (!section || !json) return;
      if (!(section in defaultStaticData)) return;
      try {
        (out as Record<string, unknown>)[section] = JSON.parse(json);
      } catch {
        // Ignore malformed content row and continue.
      }
    });
    return out;
  } catch {
    return null;
  }
}

export async function upsertRemoteContentSection(
  section: string,
  content: unknown
): Promise<{ ok: boolean; error?: string }> {
  if (!hasApiBase()) return { ok: true };
  try {
    const res = await fetch(`${API_BASE}/api/content`, {
      method: 'POST',
      headers: adminHeaders(),
      body: JSON.stringify({ section, content }),
    });
    if (!res.ok) {
      const text = await res.text();
      return { ok: false, error: text || `HTTP ${res.status}` };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: 'Network error while syncing content' };
  }
}

interface WorkerProductRow {
  id: number;
  name: string;
  description: string;
  price: number;
  status: EditableProduct['status'];
  image_url?: string | null;
}

function mapWorkerToEditable(row: WorkerProductRow): EditableProduct {
  const lowerName = row.name.toLowerCase();
  const link = lowerName.includes('micro-bot')
    ? '/products/micro-bot'
    : lowerName.includes('pomodoro')
      ? '/products/pomodoro'
      : lowerName.includes('drone')
        ? '/products/drone'
        : `/products/${row.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  return {
    name: row.name,
    description: row.description,
    price: `₹${Number(row.price || 0).toLocaleString()}`,
    status: row.status || 'Coming Soon',
    imageColor: 'bg-foreground',
    accentColor: row.status === 'Available' ? 'bg-info' : row.status === 'Pre-Order' ? 'bg-warning' : 'bg-primary',
    link,
  };
}

export async function fetchRemoteProducts():
Promise<Array<{ id: number; product: EditableProduct }> | null> {
  if (!hasApiBase()) return null;
  try {
    const res = await fetch(`${API_BASE}/api/products`, {
      method: 'GET',
      headers: adminHeaders(),
      cache: 'no-store',
    });
    if (!res.ok) return null;
    const payload = (await res.json()) as { ok?: boolean; data?: WorkerProductRow[] };
    if (!payload.ok || !Array.isArray(payload.data)) return null;
    return payload.data.map((row) => ({ id: row.id, product: mapWorkerToEditable(row) }));
  } catch {
    return null;
  }
}

function parsePrice(price: string): number {
  const clean = String(price || '').replace(/[^\d]/g, '');
  return Number(clean || 0);
}

function toWorkerProductBody(product: EditableProduct) {
  return {
    name: product.name,
    description: product.description,
    price: parsePrice(product.price),
    status: product.status,
    image_url: null,
  };
}

export async function syncProductsToRemote(
  current: EditableProduct[],
  ids: Array<number | null>
): Promise<{ ok: boolean; ids: Array<number | null>; error?: string }> {
  if (!hasApiBase()) return { ok: true, ids };
  const nextIds = [...ids];
  try {
    for (let i = 0; i < current.length; i += 1) {
      const product = current[i];
      const id = nextIds[i];
      if (id) {
        const res = await fetch(`${API_BASE}/api/products/${id}`, {
          method: 'PUT',
          headers: adminHeaders(),
          body: JSON.stringify(toWorkerProductBody(product)),
        });
        if (!res.ok) return { ok: false, ids: nextIds, error: `Failed to update product ${product.name}` };
      } else {
        const res = await fetch(`${API_BASE}/api/products`, {
          method: 'POST',
          headers: adminHeaders(),
          body: JSON.stringify(toWorkerProductBody(product)),
        });
        if (!res.ok) return { ok: false, ids: nextIds, error: `Failed to create product ${product.name}` };
      }
    }

    const fresh = await fetchRemoteProducts();
    if (fresh) {
      return { ok: true, ids: fresh.map((p) => p.id) };
    }
    return { ok: true, ids: nextIds };
  } catch {
    return { ok: false, ids: nextIds, error: 'Network error while syncing products' };
  }
}

export async function deleteRemoteProduct(id: number): Promise<boolean> {
  if (!hasApiBase()) return true;
  try {
    const res = await fetch(`${API_BASE}/api/products/${id}`, {
      method: 'DELETE',
      headers: adminHeaders(),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export function sectionDataByKey(data: AdminData, section: string): unknown {
  const key = section as keyof AdminData;
  return data[key];
}
