# Shilp Sahayak (Next.js)

Privacy-first offline electronics storefront built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide.

## Tech Stack

- Next.js 16 (App Router, `src/app`)
- React 18 + TypeScript (strict)
- Tailwind CSS
- Framer Motion
- Lucide React
- LocalStorage-based mock auth/cart/orders/admin CMS data

## Scripts

- `npm run dev` - start Next.js dev server
- `npm run build` - production build
- `npm run start` - run production server
- `npm run lint` - run ESLint
- `npm run test:smoke` - build smoke test (`next build --webpack`)
- `npm run perf:check` - points to performance checklist doc

## Run Locally

1. Install dependencies:
   - `npm install`
2. Start dev server:
   - `npm run dev`
3. Open:
   - `http://localhost:3000`

## App Routes

Public/store routes include:

- `/`
- `/products`
- `/products/micro-bot`
- `/products/pomodoro`
- `/products/drone`
- `/shop`
- `/about`
- `/vision`
- `/support`
- `/contact`
- `/login`
- `/signup`
- `/checkout`
- `/account`

Admin routes:

- `/adminlogin`
- `/admin`
- `/admin/pages`
- `/admin/products`
- `/admin/global`
- `/admin/orders`

## Admin Panel (Current Behavior)

- Admin login is mock/local only:
  - username: `admin`
  - password: `admin123`
- Admin content is stored in localStorage key:
  - `adminData`
- Admin session is stored in localStorage key:
  - `adminUser`
- Autosave toggle is stored in:
  - `adminAutosave`

Editable areas currently include home, products/shop, about, vision, support, contact, footer, and global shared text.

## Project Structure

- `src/app` - Next.js routes/layouts
- `src/page-components` - page UI implementations
- `src/components` - shared UI/layout/feature components
- `src/contexts` - auth/cart/admin contexts
- `src/hooks` - custom hooks (admin editor/auth/data)
- `src/lib` - admin data model, validators, utilities
- `src/styles` - central theme tokens
- `docs` - testing/performance/security/migration docs

## Notes

- This project is fully frontend/localStorage based right now.
- For production-grade admin security and persistence, see:
  - `docs/ADMIN_SECURITY_NOTES.md`
  - `docs/BACKEND_MIGRATION_PATH.md`

## Cloudflare Deployment

Cloudflare stack support is scaffolded:

- Frontend hosting: Cloudflare Pages
- API: Cloudflare Workers (`src/worker.ts`)
- Database: Cloudflare D1

### Quick commands

- `npm run cf:login`
- `npm run cf:d1:create`
- `npm run cf:d1:migrate:local`
- `npm run cf:d1:migrate:remote`
- `npm run cf:pages:build`
- `npm run cf:pages:deploy`

For full deployment steps and dashboard configuration:

- `docs/CLOUDFLARE_PAGES_DEPLOY.md`

### Free-tier awareness

Keep request/query usage under free-tier limits by:

- enabling client-side caching and revalidation
- avoiding unnecessary polling
- batching admin writes when possible
