"use client";
import { useEffect, useCallback, RefObject } from "react";
import gsap from "gsap";

/**
 * Applies a magnetic cursor tilt effect to child elements within a container.
 * Elements within the container tilt toward the mouse, like holographic cards.
 *
 * @param containerRef - Ref to the parent container
 * @param selector - CSS selector for the child elements to tilt
 * @param maxRotation - Maximum rotation in degrees (default: 4)
 */
export function useMagneticCursor(
  containerRef: RefObject<HTMLElement | null>,
  selector: string,
  maxRotation = 4
) {
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalized mouse position relative to center (-1 to 1)
      const nx = (e.clientX - centerX) / (rect.width / 2);
      const ny = (e.clientY - centerY) / (rect.height / 2);

      // Clamp to prevent extreme rotations when mouse is far away
      const clampedX = gsap.utils.clamp(-1, 1, nx);
      const clampedY = gsap.utils.clamp(-1, 1, ny);

      const elements = container.querySelectorAll(selector);
      elements.forEach((el, i) => {
        // Each element gets slightly different intensity for depth
        const depth = 1 + i * 0.15;
        gsap.to(el, {
          rotateY: clampedX * maxRotation * depth,
          rotateX: -clampedY * maxRotation * depth,
          duration: 0.6,
          ease: "power2.out",
          overwrite: "auto",
        });
      });
    },
    [containerRef, selector, maxRotation]
  );

  const handleMouseLeave = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(selector);
    elements.forEach((el) => {
      gsap.to(el, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.4)",
        overwrite: "auto",
      });
    });
  }, [containerRef, selector]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReduced.matches) return;

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave, containerRef]);
}
