# Cloudflare Pages Deployment (Phase 5)

## 1) Prerequisites

- Cloudflare account
- Wrangler authenticated:
  - `npm run cf:login`
- D1 database created + migrations applied
- Worker API deployed (`src/worker.ts`)

## 2) Install dependencies

```bash
npm install
```

## 3) Build Next.js for Pages

```bash
npm run cf:pages:build
```

This generates Cloudflare-compatible output under `.vercel/output`.

## 4) Deploy to Cloudflare Pages (CLI)

Preview:

```bash
npm run cf:pages:deploy
```

Production (main branch):

```bash
npm run cf:pages:deploy:prod
```

## 5) Recommended Pages dashboard setup

If deploying via GitHub integration:

- Framework preset: `None` (using custom build)
- Build command: `npx @cloudflare/next-on-pages`
- Build output directory: `.vercel/output/static`

## 6) Environment variables (Pages project)

Set these in Pages project settings:

- `NEXT_PUBLIC_API_BASE_URL`
- `NEXT_PUBLIC_ADMIN_API_KEY` (if your worker requires it)

## 7) Bindings (for worker/API project)

In Worker project (not Pages static project), configure:

- D1 binding: `DB`
- Vars:
  - `JWT_SECRET`
  - `ADMIN_API_KEY` (optional)

## 8) Validate live behavior

1. Open Pages URL.
2. Verify storefront pages load.
3. Login to admin.
4. Edit product/content.
5. Confirm updates persist via Worker + D1.

## 9) Custom domain

In Pages project:

- Go to `Custom domains`
- Add domain/subdomain
- Complete DNS verification

