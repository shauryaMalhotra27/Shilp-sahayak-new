/**
 * Drizzle schema placeholder for Phase 1.
 *
 * NOTE:
 * - This file intentionally avoids runtime imports so the app can build
 *   in environments where npm registry/network access is restricted.
 * - Once `drizzle-orm` is installed locally, replace this with actual
 *   `sqliteTable(...)` definitions.
 */

export type ProductStatus = 'Available' | 'Pre-Order' | 'Coming Soon';

export interface ProductRow {
  id: number;
  name: string;
  description: string;
  price: number;
  status: ProductStatus;
  image_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface UserRow {
  id: number;
  email: string;
  password_hash: string;
  name: string;
  phone: string | null;
  created_at: string;
}

export interface OrderRow {
  id: number;
  user_id: number;
  total: number;
  status: string;
  items_json: string;
  date: string;
  created_at: string;
}

export interface PageContentRow {
  id: number;
  section: string;
  content_json: string;
  updated_at: string;
}

export interface FooterRow {
  id: number;
  links_json: string;
  socials_json: string;
  updated_at: string;
}
