# Backend Migration Path (Admin Data)

## Goal
Replace localStorage-based admin content with a real backend while preserving current admin UI.

## Step 1: API Contract
- Create typed endpoints:
  - `GET /api/admin/content`
  - `PUT /api/admin/content`
- Use the existing `AdminData` shape as v1 schema.

## Step 2: Auth
- Replace mock admin login with backend login endpoint.
- Store auth in secure cookies.
- Validate admin role on every write endpoint.

## Step 3: Data Layer
- Persist `AdminData` in DB (single JSON document for v1 is acceptable).
- Add version + updatedAt metadata.

## Step 4: Frontend Bridge
- In `loadAdminData`, fetch from API first, fallback to localStorage only in development.
- In `saveAdminData`, call API and only keep local cache for draft support.

## Step 5: Reliability
- Add optimistic UI + retry/toast on failure.
- Add schema validation (zod/json schema) on client and server.
- Add change history and rollback support.

