"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useMagneticCursor } from "@/lib/hooks";

export default function HeroAnimations() {
  const heroRef = useRef<HTMLElement>(null);

  // Apply magnetic cursor effect to hero pieces
  useMagneticCursor(heroRef, ".hero-piece", 6);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    if (prefersReduced.matches) return;

    const hero = document.querySelector(".hero") as HTMLElement;
    if (hero) {
      heroRef.current = hero;
    }

    // Hero load timeline
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    const h1Spans = document.querySelectorAll(".hero h1 span");
    const p = document.querySelector(".hero-copy p:not(.eyebrow)");
    const buttons = document.querySelectorAll(".hero .button-row .button");
    const photo = document.querySelector(".hero-photo");
    const accountCard = document.querySelector(".hero-account-card");
    const activityCard = document.querySelector(".hero-activity-card");
    const glow = document.querySelector(".visual-glow");

    // Text animations
    if (h1Spans.length) {
      tl.from(
        h1Spans[0],
        {
          clipPath: "inset(0 100% 0 0)",
          filter: "blur(4px)",
          opacity: 0,
          duration: 1,
        },
        0.1
      );
      if (h1Spans[1]) {
        tl.from(
          h1Spans[1],
          {
            clipPath: "inset(0 0 0 100%)",
            filter: "blur(4px)",
            opacity: 0,
            duration: 1,
          },
          0.3
        );
      }
    }

    if (p) {
      tl.from(
        p,
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
        },
        0.5
      );
    }

    if (buttons.length) {
      tl.from(
        buttons,
        {
          scale: 0.9,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "back.out(1.5)",
        },
        0.7
      );
    }

    // Visual elements animations
    if (glow) {
      tl.from(
        glow,
        {
          scale: 0.3,
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
        },
        0
      );
    }

    if (photo) {
      tl.from(
        photo,
        {
          x: -80,
          y: 60,
          z: -200,
          rotateY: -8,
          opacity: 0,
          duration: 1.2,
        },
        0.2
      );
    }

    if (accountCard) {
      tl.from(
        accountCard,
        {
          x: 120,
          y: -40,
          z: -300,
          rotateY: 12,
          opacity: 0,
          duration: 1.2,
        },
        0.4
      );
    }

    if (activityCard) {
      tl.from(
        activityCard,
        {
          x: -60,
          y: 80,
          z: -250,
          rotateX: 8,
          opacity: 0,
          duration: 1.2,
        },
        0.6
      );
    }

    // Cleanup
    return () => {
      tl.kill();
    };
  }, []);

  return null;
}
