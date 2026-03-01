type Json = Record<string, unknown>;

interface D1Result<T = unknown> {
  success: boolean;
  results: T[];
}

interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  all<T = unknown>(): Promise<D1Result<T>>;
  first<T = unknown>(): Promise<T | null>;
  run(): Promise<{ success: boolean }>;
}

interface D1LikeDatabase {
  prepare(sql: string): D1PreparedStatement;
}

export interface Env {
  DB: D1LikeDatabase;
  JWT_SECRET?: string;
  ADMIN_API_KEY?: string;
}

interface JwtPayload {
  sub: string;
  email: string;
  role: 'user' | 'admin';
  exp: number;
}

const jsonHeaders = {
  'content-type': 'application/json',
  'access-control-allow-origin': '*',
  'access-control-allow-headers': 'content-type, authorization, x-admin-key',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
};

function response(status: number, body: Json) {
  return new Response(JSON.stringify(body), { status, headers: jsonHeaders });
}

function isObject(v: unknown): v is Record<string, unknown> {
  return !!v && typeof v === 'object' && !Array.isArray(v);
}

async function parseBody(req: Request): Promise<Record<string, unknown>> {
  try {
    const body = await req.json();
    if (isObject(body)) return body;
    return {};
  } catch {
    return {};
  }
}

function base64UrlEncode(bytes: Uint8Array): string {
  let binary = '';
  bytes.forEach((b) => {
    binary += String.fromCharCode(b);
  });
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function base64UrlDecode(input: string): Uint8Array {
  const b64 = input.replace(/-/g, '+').replace(/_/g, '/');
  const padded = b64 + '='.repeat((4 - (b64.length % 4)) % 4);
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function hmacSha256(secret: string, data: string): Promise<Uint8Array> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(data));
  return new Uint8Array(sig);
}

async function sha256Hex(input: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(input));
  return Array.from(new Uint8Array(digest))
    .map((v) => v.toString(16).padStart(2, '0'))
    .join('');
}

async function signJwt(payload: JwtPayload, secret: string): Promise<string> {
  const header = { alg: 'HS256', typ: 'JWT' };
  const encodedHeader = base64UrlEncode(new TextEncoder().encode(JSON.stringify(header)));
  const encodedPayload = base64UrlEncode(new TextEncoder().encode(JSON.stringify(payload)));
  const data = `${encodedHeader}.${encodedPayload}`;
  const signature = await hmacSha256(secret, data);
  return `${data}.${base64UrlEncode(signature)}`;
}

async function verifyJwt(token: string, secret: string): Promise<JwtPayload | null> {
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  const [header, payload, signature] = parts;
  const data = `${header}.${payload}`;
  const expectedSig = await hmacSha256(secret, data);
  const expectedSigB64 = base64UrlEncode(expectedSig);
  if (expectedSigB64 !== signature) return null;
  try {
    const parsed = JSON.parse(new TextDecoder().decode(base64UrlDecode(payload))) as JwtPayload;
    if (!parsed.exp || Date.now() >= parsed.exp * 1000) return null;
    return parsed;
  } catch {
    return null;
  }
}

async function getAuthPayload(req: Request, env: Env): Promise<JwtPayload | null> {
  const auth = req.headers.get('authorization') || '';
  if (!auth.startsWith('Bearer ')) return null;
  const token = auth.slice('Bearer '.length);
  const secret = env.JWT_SECRET || 'dev-jwt-secret';
  return verifyJwt(token, secret);
}

async function requireAdmin(req: Request, env: Env): Promise<boolean> {
  const adminKey = env.ADMIN_API_KEY;
  if (adminKey) {
    const provided = req.headers.get('x-admin-key');
    if (provided === adminKey) return true;
  }
  const payload = await getAuthPayload(req, env);
  return payload?.role === 'admin';
}

async function handleProducts(req: Request, env: Env, pathname: string) {
  if (req.method === 'GET' && pathname === '/api/products') {
    const rows = await env.DB.prepare(
      `SELECT id, name, description, price, status, image_url FROM products ORDER BY id DESC`
    ).all();
    return response(200, { ok: true, data: rows.results });
  }

  if (req.method === 'POST' && pathname === '/api/products') {
    if (!(await requireAdmin(req, env))) return response(401, { ok: false, error: 'Unauthorized' });
    const body = await parseBody(req);
    const name = String(body.name || '');
    const description = String(body.description || '');
    const price = Number(body.price || 0);
    const status = String(body.status || 'Coming Soon');
    const imageUrl = body.image_url ? String(body.image_url) : null;
    if (!name || !description) return response(400, { ok: false, error: 'Invalid payload' });
    await env.DB.prepare(
      `INSERT INTO products (name, description, price, status, image_url) VALUES (?, ?, ?, ?, ?)`
    )
      .bind(name, description, price, status, imageUrl)
      .run();
    return response(201, { ok: true });
  }

  if (req.method === 'PUT' && pathname.startsWith('/api/products/')) {
    if (!(await requireAdmin(req, env))) return response(401, { ok: false, error: 'Unauthorized' });
    const id = Number(pathname.split('/').pop());
    if (!id) return response(400, { ok: false, error: 'Invalid product id' });
    const body = await parseBody(req);
    const name = String(body.name || '');
    const description = String(body.description || '');
    const price = Number(body.price || 0);
    const status = String(body.status || 'Coming Soon');
    const imageUrl = body.image_url ? String(body.image_url) : null;
    await env.DB.prepare(
      `UPDATE products SET name = ?, description = ?, price = ?, status = ?, image_url = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`
    )
      .bind(name, description, price, status, imageUrl, id)
      .run();
    return response(200, { ok: true });
  }

  if (req.method === 'DELETE' && pathname.startsWith('/api/products/')) {
    if (!(await requireAdmin(req, env))) return response(401, { ok: false, error: 'Unauthorized' });
    const id = Number(pathname.split('/').pop());
    if (!id) return response(400, { ok: false, error: 'Invalid product id' });
    await env.DB.prepare(`DELETE FROM products WHERE id = ?`).bind(id).run();
    return response(200, { ok: true });
  }

  return null;
}

async function handleContent(req: Request, env: Env, url: URL) {
  if (req.method === 'GET' && url.pathname === '/api/content') {
    const section = url.searchParams.get('section');
    if (section) {
      const row = await env.DB.prepare(
        `SELECT id, section, content_json, updated_at FROM page_content WHERE section = ?`
      )
        .bind(section)
        .first();
      return response(200, { ok: true, data: row });
    }
    const rows = await env.DB.prepare(
      `SELECT id, section, content_json, updated_at FROM page_content ORDER BY section`
    ).all();
    return response(200, { ok: true, data: rows.results });
  }

  if (req.method === 'POST' && url.pathname === '/api/content') {
    if (!(await requireAdmin(req, env))) return response(401, { ok: false, error: 'Unauthorized' });
    const body = await parseBody(req);
    const section = String(body.section || '');
    const contentJson = JSON.stringify(body.content ?? {});
    if (!section) return response(400, { ok: false, error: 'section is required' });
    await env.DB.prepare(
      `INSERT INTO page_content (section, content_json) VALUES (?, ?)
       ON CONFLICT(section) DO UPDATE SET content_json = excluded.content_json, updated_at = CURRENT_TIMESTAMP`
    )
      .bind(section, contentJson)
      .run();
    return response(201, { ok: true });
  }

  if (req.method === 'PUT' && url.pathname === '/api/content') {
    if (!(await requireAdmin(req, env))) return response(401, { ok: false, error: 'Unauthorized' });
    const body = await parseBody(req);
    const section = String(body.section || '');
    const contentJson = JSON.stringify(body.content ?? {});
    if (!section) return response(400, { ok: false, error: 'section is required' });
    await env.DB.prepare(
      `UPDATE page_content SET content_json = ?, updated_at = CURRENT_TIMESTAMP WHERE section = ?`
    )
      .bind(contentJson, section)
      .run();
    return response(200, { ok: true });
  }

  if (req.method === 'DELETE' && url.pathname === '/api/content') {
    if (!(await requireAdmin(req, env))) return response(401, { ok: false, error: 'Unauthorized' });
    const section = url.searchParams.get('section');
    if (!section) return response(400, { ok: false, error: 'section is required' });
    await env.DB.prepare(`DELETE FROM page_content WHERE section = ?`).bind(section).run();
    return response(200, { ok: true });
  }

  return null;
}

async function handleAuth(req: Request, env: Env, pathname: string) {
  if (pathname === '/api/auth/signup' && req.method === 'POST') {
    const body = await parseBody(req);
    const email = String(body.email || '').trim().toLowerCase();
    const password = String(body.password || '');
    const name = String(body.name || '');
    const phone = body.phone ? String(body.phone) : null;
    if (!email || !password || !name) {
      return response(400, { ok: false, error: 'Missing required fields' });
    }
    const existing = await env.DB.prepare(`SELECT id FROM users WHERE email = ?`)
      .bind(email)
      .first();
    if (existing) return response(409, { ok: false, error: 'Email already exists' });
    const passwordHash = await sha256Hex(password);
    await env.DB.prepare(
      `INSERT INTO users (email, password_hash, name, phone) VALUES (?, ?, ?, ?)`
    )
      .bind(email, passwordHash, name, phone)
      .run();
    return response(201, { ok: true });
  }

  if (pathname === '/api/auth/login' && req.method === 'POST') {
    const body = await parseBody(req);
    const email = String(body.email || '').trim().toLowerCase();
    const password = String(body.password || '');
    if (!email || !password) return response(400, { ok: false, error: 'Missing credentials' });
    const user = await env.DB.prepare(
      `SELECT id, email, password_hash, name, phone FROM users WHERE email = ?`
    )
      .bind(email)
      .first<{ id: number; email: string; password_hash: string; name: string; phone: string | null }>();

    if (!user) return response(401, { ok: false, error: 'Invalid credentials' });
    const passwordHash = await sha256Hex(password);
    if (passwordHash !== user.password_hash) {
      return response(401, { ok: false, error: 'Invalid credentials' });
    }
    const payload: JwtPayload = {
      sub: String(user.id),
      email: user.email,
      role: 'user',
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
    };
    const secret = env.JWT_SECRET || 'dev-jwt-secret';
    const token = await signJwt(payload, secret);
    return response(200, {
      ok: true,
      data: {
        token,
        user: { id: user.id, email: user.email, name: user.name, phone: user.phone },
      },
    });
  }

  return null;
}

async function handleOrders(req: Request, env: Env, pathname: string) {
  if (pathname !== '/api/orders') return null;
  const auth = await getAuthPayload(req, env);
  if (!auth) return response(401, { ok: false, error: 'Unauthorized' });

  if (req.method === 'GET') {
    const rows = await env.DB.prepare(
      `SELECT id, user_id, total, status, items_json, date FROM orders WHERE user_id = ? ORDER BY id DESC`
    )
      .bind(Number(auth.sub))
      .all();
    return response(200, { ok: true, data: rows.results });
  }

  if (req.method === 'POST') {
    const body = await parseBody(req);
    const total = Number(body.total || 0);
    const status = String(body.status || 'Processing');
    const itemsJson = JSON.stringify(body.items ?? []);
    const date = String(body.date || new Date().toISOString());
    await env.DB.prepare(
      `INSERT INTO orders (user_id, total, status, items_json, date) VALUES (?, ?, ?, ?, ?)`
    )
      .bind(Number(auth.sub), total, status, itemsJson, date)
      .run();
    return response(201, { ok: true });
  }

  return response(405, { ok: false, error: 'Method not allowed' });
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    try {
      if (req.method === 'OPTIONS') return new Response(null, { headers: jsonHeaders });

      const url = new URL(req.url);
      const { pathname } = url;

      if (pathname === '/health' || pathname === '/api/health') {
        return response(200, { ok: true, service: 'shilp-sahayak-api' });
      }

      const productsResponse = await handleProducts(req, env, pathname);
      if (productsResponse) return productsResponse;

      const contentResponse = await handleContent(req, env, url);
      if (contentResponse) return contentResponse;

      const authResponse = await handleAuth(req, env, pathname);
      if (authResponse) return authResponse;

      const ordersResponse = await handleOrders(req, env, pathname);
      if (ordersResponse) return ordersResponse;

      return response(404, { ok: false, error: 'Not found' });
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown internal error';
      return response(500, { ok: false, error: 'Internal server error', detail: message });
    }
  },
};
