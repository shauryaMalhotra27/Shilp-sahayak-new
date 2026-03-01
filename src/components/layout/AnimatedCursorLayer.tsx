'use client';

import { useEffect, useState } from 'react';
import AnimatedCursor from 'react-animated-cursor';

export function AnimatedCursorLayer() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const enableCursor = () => {
      const finePointer = window.matchMedia('(pointer: fine)').matches;
      const reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      const largeScreen = window.innerWidth >= 1024;
      setEnabled(finePointer && !reducedMotion && largeScreen);
    };

    // Defer cursor initialization until idle to avoid hydration-time DOM mutations.
    let idleId: number | null = null;
    let timeoutId: number | null = null;
    const win = window as Window & {
      requestIdleCallback?: (cb: IdleRequestCallback) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (typeof win.requestIdleCallback === 'function') {
      idleId = win.requestIdleCallback(() => enableCursor());
    } else {
      timeoutId = window.setTimeout(enableCursor, 600);
    }

    return () => {
      if (idleId !== null && typeof win.cancelIdleCallback === 'function') {
        win.cancelIdleCallback(idleId);
      }
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  if (!enabled) return null;

  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={32}
      color="20, 184, 166"
      outerAlpha={0.2}
      innerScale={0.8}
      outerScale={2}
      showSystemCursor
      clickables={[
        'a',
        'button',
        'input',
        'select',
        'textarea',
        '[role="button"]',
        '.cursor-pointer'
      ]}
    />
  );
}
