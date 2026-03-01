# Phase 6 Performance Checklist

## What was optimized
- Admin editor save hook now supports debounced save (`persistDebounced`).
- Admin pages search uses `useDeferredValue` to avoid input jank.
- Save feedback improved with `isSaving` and error states.

## Measurement Steps
1. Open Chrome DevTools Performance tab.
2. Record typing in `/admin/pages` search field.
3. Confirm low scripting spikes and responsive keystrokes.
4. Record editing large forms in `/admin/products`.
5. Confirm no blocking long tasks during field edits.

## React Profiler Steps
1. Open React DevTools Profiler.
2. Profile `/admin/products`.
3. Edit one product field repeatedly.
4. Confirm only relevant editor subtree re-renders.

## Target Guidance
- Keystroke-to-paint: under 50ms on typical laptop.
- No frequent long tasks above 100ms while typing.
- Save action should complete instantly (localStorage write).

