# Admin Security Notes (Current Mock Setup)

## Current State
- Admin auth is client-side only.
- Credentials are hardcoded and checked in browser code.
- Session is stored in `localStorage` (`adminUser`).
- Content is stored in `localStorage` (`adminData`).

## Risks
- Not secure for production.
- Anyone with browser/devtools access can inspect or alter admin/session data.
- No server-side authorization.
- No audit logging, role control, rate limiting, or session invalidation.

## Production Requirements
1. Move auth to backend (JWT/session cookies with HttpOnly + Secure + SameSite).
2. Add server-side authorization guard for all `/admin/*` APIs/pages.
3. Store content in database (not localStorage).
4. Add input validation and sanitization on server.
5. Add audit trails for all content changes.
6. Add role-based permissions (admin/editor/viewer).

