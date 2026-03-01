# Phase 6 Test Checklist

## Prerequisites
- Run `npm run dev`
- Admin login: `admin / admin123`

## Functional Smoke
1. Open `/adminlogin` and sign in.
2. Visit `/admin`, `/admin/pages`, `/admin/products`, `/admin/global`.
3. Edit content in:
- `/admin/pages/home`
- `/admin/products`
- `/admin/pages/about`
- `/admin/pages/vision`
- `/admin/pages/support`
- `/admin/pages/contact`
- `/admin/pages/footer`
4. Save each section and verify storefront reflects updates:
- `/`, `/products`, `/shop`, `/about`, `/vision`, `/support`, `/contact`, `/checkout`, `/account`.

## Persistence
1. Save changes from any admin editor.
2. Refresh browser.
3. Verify data still present (`localStorage.adminData`).
4. Logout admin and verify storefront still uses saved content.

## Access Control
1. Logout from admin panel.
2. Open `/admin` directly.
3. Verify redirect to `/adminlogin`.

## Regression
1. User auth (`/login`, `/signup`, `/account`) still works.
2. Cart and checkout flows still work end-to-end.
3. Product links and details still navigate correctly.

