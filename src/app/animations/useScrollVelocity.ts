"use client";
import { useEffect, useRef } from "react";

/**
 * Tracks scroll velocity using requestAnimationFrame.
 * Returns a ref that always contains the current scroll velocity.
 * Positive = scrolling down, negative = scrolling up.
 */
export function useScrollVelocity() {
  const velocityRef = useRef(0);
  const lastScrollY = useRef(0);
  const lastTime = useRef(0);

  useEffect(() => {
    let rafId: number;

    const update = (time: number) => {
      if (lastTime.current) {
        const dt = time - lastTime.current;
        if (dt > 0) {
          const dy = window.scrollY - lastScrollY.current;
          velocityRef.current = (dy / dt) * 1000; // px/s
        }
      }
      lastScrollY.current = window.scrollY;
      lastTime.current = time;
      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return velocityRef;
}
