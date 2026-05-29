"use client";
import { useEffect } from 'react';

/**
 * Adds IntersectionObserver to all elements with the `.reveal` class.
 * When an element enters the viewport, the `.visible` class is added,
 * triggering the CSS transition defined in globals.css.
 * Elements will only animate once.
 */
export default function RevealObserver() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReduced.matches) return; // skip animations

    const elements = document.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
