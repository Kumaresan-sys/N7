"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    if (prefersReduced.matches) {
      // Show everything immediately for reduced-motion users
      document.querySelectorAll(".reveal").forEach((el) => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "none";
      });
      return;
    }

    // Small delay to ensure DOM is fully painted and Lenis is initialized
    const initTimer = setTimeout(() => {
      const ctx = gsap.context(() => {
        initScrollProgress();
        initHeaderMorph();
        initHeroParallax();
        initTrustedLogos();
        initSolutionsCascade();
        initCoreBanking();
        initCoreEfficiency();
        initCtaEmergence();
        initMarqueeReactive();
        initDigitalPhones();
        initInsightsFlip();
        initCaseStudies();
        initFinalCta();
        initFooterSignature();
        initBackgroundBreathing();
        initBatchRevealFallback();
      });

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(initTimer);
  }, []);

  return null;
}

/* ==========================================================================
   GLOBAL: Scroll Progress Bar
   ========================================================================== */
function initScrollProgress() {
  const bar = document.querySelector(".scroll-progress");
  if (!bar) return;

  gsap.to(bar, {
    scaleX: 1,
    ease: "none",
    scrollTrigger: {
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.3,
    },
  });
}

/* ==========================================================================
   GLOBAL: Header Morph on Scroll
   ========================================================================== */
function initHeaderMorph() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  ScrollTrigger.create({
    start: 280,
    onEnter: () => header.classList.add("scrolled"),
    onLeaveBack: () => header.classList.remove("scrolled"),
  });
}

/* ==========================================================================
   1. HERO: Parallax on scroll (load animation is in HeroAnimations.tsx)
   ========================================================================== */
function initHeroParallax() {
  const heroSection = document.querySelector(".hero");
  if (!heroSection) return;

  // Hero pieces at different parallax speeds
  const layers = [
    { sel: ".hero-photo", yPercent: -20 },
    { sel: ".hero-account-card", yPercent: 30 },
    { sel: ".hero-activity-card", yPercent: -15 },
    { sel: ".hero-copy", yPercent: -12 },
  ];

  layers.forEach(({ sel, yPercent }) => {
    const el = document.querySelector(sel);
    if (!el) return;
    gsap.to(el, {
      yPercent,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  // Visual glow fades out and expands
  const glow = document.querySelector(".visual-glow");
  if (glow) {
    gsap.to(glow, {
      opacity: 0,
      scale: 1.4,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "30% top",
        end: "bottom top",
        scrub: true,
      },
    });
  }
}

/* ==========================================================================
   2. TRUSTED LOGOS: Scan Line Reveal
   ========================================================================== */
function initTrustedLogos() {
  const trustRow = document.querySelector(".trust-row");
  if (!trustRow) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: trustRow,
      start: "top 88%",
      toggleActions: "play none none none",
    },
  });

  // "Trusted By:" label fades in
  tl.from(
    ".trust-row > span:first-child",
    {
      opacity: 0,
      x: -20,
      duration: 0.5,
      ease: "power2.out",
    },
    0
  );

  // Logos reveal via clip-path sweep (left to right)
  tl.from(
    ".trusted-logos",
    {
      clipPath: "inset(0 100% 0 0)",
      duration: 1.2,
      ease: "power2.inOut",
    },
    0.3
  );
}

/* ==========================================================================
   3. SOLUTIONS: Card Cascade Deal
   ========================================================================== */
function initSolutionsCascade() {
  const cards = document.querySelectorAll(".solution-card");
  if (!cards.length) return;

  // Section heading entrance
  const heading = document.querySelector(".solutions .section-heading");
  if (heading) {
    heading.classList.remove("reveal");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heading,
        start: "top 82%",
      },
    });

    tl.from(heading.querySelector("h2"), {
      clipPath: "inset(0 100% 0 0)",
      opacity: 0,
      duration: 0.9,
      ease: "power2.out",
    });

    tl.from(
      heading.querySelector(".button"),
      {
        opacity: 0,
        scale: 0.85,
        duration: 0.5,
        ease: "back.out(1.5)",
      },
      "-=0.3"
    );
  }

  // Cards cascade in from a "dealt" position
  cards.forEach((card) => card.classList.remove("reveal"));

  gsap.from(cards, {
    opacity: 0,
    y: 100,
    rotateZ: (_i: number, _t: Element, a: Element[]) => {
      const idx = Array.from(a).indexOf(_t);
      return (idx - 2) * 3;
    },
    scale: 0.88,
    stagger: 0.12,
    duration: 0.9,
    ease: "back.out(1.2)",
    scrollTrigger: {
      trigger: ".solution-cards",
      start: "top 80%",
    },
  });

  // Subtle parallax depth while scrolling through solutions
  cards.forEach((card, i) => {
    gsap.to(card, {
      yPercent: (i - 2) * 2,
      ease: "none",
      scrollTrigger: {
        trigger: ".solutions",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  // Glow behind cards breathes
  const glow = document.querySelector(".solution-cards::before");
  if (!glow) {
    // ::before can't be queried directly, animate parent property
    gsap.fromTo(
      ".solution-cards",
      { "--glow-scale": 0.6 },
      {
        "--glow-scale": 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: ".solution-cards",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }
}

/* ==========================================================================
   4. CORE BANKING: Dashboard Slide-In
   ========================================================================== */
function initCoreBanking() {
  const section = document.querySelector(".core");
  if (!section) return;

  // Title clip-path reveal
  const titleSpans = section.querySelectorAll(".core-title h2 span");
  const coreTitle = section.querySelector(".core-title");
  if (coreTitle) coreTitle.classList.remove("reveal");

  if (titleSpans.length) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".core-title",
        start: "top 75%",
      },
    });

    tl.from(titleSpans, {
      clipPath: "inset(0 100% 0 0)",
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out",
    });

    tl.from(
      ".core-title p",
      {
        opacity: 0,
        y: 15,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.3"
    );

    tl.from(
      ".core-title .button",
      {
        opacity: 0,
        scale: 0.9,
        duration: 0.4,
        ease: "back.out(1.5)",
      },
      "-=0.2"
    );

    tl.from(
      ".core-title .text-link",
      {
        opacity: 0,
        x: -10,
        duration: 0.4,
      },
      "-=0.2"
    );
  }

  // Dashboard slides in from right with 3D rotation
  const dashboard = section.querySelector(".core-dashboard-frame");
  if (dashboard) {
    dashboard.classList.remove("reveal");

    gsap.from(dashboard, {
      x: "35vw",
      rotateY: -12,
      opacity: 0,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".core",
        start: "top 60%",
      },
    });
  }
}

/* ==========================================================================
   5. CORE EFFICIENCY: Counter-Slide + Check-Mark Pop
   ========================================================================== */
function initCoreEfficiency() {
  const section = document.querySelector(".core-efficiency");
  if (!section) return;

  // Dashboard counter-slides from left
  const dashboard = section.querySelector(".efficiency-dashboard-frame");
  if (dashboard) {
    dashboard.classList.remove("reveal");

    gsap.from(dashboard, {
      x: "-25vw",
      rotateY: 10,
      opacity: 0,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 65%",
      },
    });
  }

  // Content heading — word-by-word blur reveal
  const content = section.querySelector(".efficiency-content");
  if (content) {
    content.classList.remove("reveal");

    const heading = content.querySelector("h2");
    if (heading) {
      gsap.from(heading, {
        opacity: 0,
        y: 20,
        filter: "blur(6px)",
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: content,
          start: "top 75%",
        },
      });
    }

    const h3 = content.querySelector("h3");
    if (h3) {
      gsap.from(h3, {
        opacity: 0,
        y: 12,
        duration: 0.5,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: content,
          start: "top 75%",
        },
      });
    }
  }

  // List items stagger in
  const items = section.querySelectorAll(".efficiency-column li");
  if (items.length) {
    gsap.from(items, {
      x: -30,
      opacity: 0,
      stagger: 0.07,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".efficiency-list",
        start: "top 78%",
      },
    });
  }

  // Check circles bounce in
  const checks = section.querySelectorAll(".efficiency-check");
  if (checks.length) {
    gsap.from(checks, {
      scale: 0,
      stagger: 0.07,
      duration: 0.45,
      ease: "back.out(2.5)",
      scrollTrigger: {
        trigger: ".efficiency-list",
        start: "top 78%",
      },
    });
  }

  // Check mark SVG stroke draw-on
  const checkSvgs = section.querySelectorAll(".efficiency-check svg");
  if (checkSvgs.length) {
    gsap.from(checkSvgs, {
      strokeDashoffset: 30,
      stagger: 0.07,
      duration: 0.4,
      delay: 0.25,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".efficiency-list",
        start: "top 78%",
      },
    });
  }
}

/* ==========================================================================
   6. CTA CARD: Depth Emergence
   ========================================================================== */
function initCtaEmergence() {
  const ctaSections = document.querySelectorAll(".cta-section");

  ctaSections.forEach((section) => {
    const card = section.querySelector(".cta-card");
    if (!card) return;
    card.classList.remove("reveal");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 72%",
      },
    });

    tl.from(card, {
      y: 60,
      scale: 0.95,
      opacity: 0,
      duration: 0.9,
      ease: "power2.out",
    });

    // Border glow intensifies
    tl.from(
      card,
      {
        borderColor: "rgba(44, 207, 255, 0)",
        duration: 0.6,
        ease: "power1.in",
      },
      "-=0.5"
    );

    // Buttons stagger after card lands
    const buttons = card.querySelectorAll(".button");
    if (buttons.length) {
      tl.from(
        buttons,
        {
          opacity: 0,
          y: 15,
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.2"
      );
    }
  });
}

/* ==========================================================================
   7. MARQUEE: Scroll-Speed Reactive
   ========================================================================== */
function initMarqueeReactive() {
  const strip = document.querySelector(".marquee-strip");
  const track = document.querySelector(".marquee-track") as HTMLElement;
  if (!strip || !track) return;

  // Take over from CSS animation
  strip.classList.add("gsap-active");

  // Create GSAP-driven marquee
  const marqueeAnim = gsap.to(track, {
    xPercent: -50,
    duration: 22,
    ease: "none",
    repeat: -1,
  });

  // Scroll velocity modulates marquee speed
  ScrollTrigger.create({
    onUpdate: (self) => {
      const v = Math.abs(self.getVelocity());
      const targetSpeed = gsap.utils.clamp(0.5, 3, 1 + v / 1200);
      gsap.to(marqueeAnim, {
        timeScale: targetSpeed,
        duration: 0.4,
        ease: "power2.out",
        overwrite: true,
      });
    },
  });

  // Stars rotate continuously
  gsap.to(".marquee-star", {
    rotate: 360,
    duration: 10,
    ease: "none",
    repeat: -1,
  });

  // Hand waves
  gsap.to(".marquee-hand", {
    rotateZ: 12,
    duration: 0.5,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut",
    transformOrigin: "bottom center",
  });

  // Strip unfurls into view
  gsap.from(strip, {
    scaleY: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: strip,
      start: "top 92%",
    },
  });
}

/* ==========================================================================
   8. DIGITAL BANKING: Phone Theater
   ========================================================================== */
function initDigitalPhones() {
  const grid = document.querySelector(".digital-grid");
  if (!grid) return;

  // Intro text
  const intro = grid.querySelector(".digital-intro");
  if (intro) {
    intro.classList.remove("reveal");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: intro,
        start: "top 78%",
      },
    });

    const headingSpans = intro.querySelectorAll("h2 span");
    if (headingSpans.length) {
      tl.from(headingSpans, {
        clipPath: "inset(0 100% 0 0)",
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power2.out",
      });
    }

    tl.from(
      intro.querySelector("p"),
      {
        opacity: 0,
        y: 15,
        duration: 0.5,
      },
      "-=0.3"
    );

    tl.from(
      intro.querySelector(".button"),
      {
        opacity: 0,
        scale: 0.9,
        duration: 0.4,
        ease: "back.out(1.5)",
      },
      "-=0.2"
    );
  }

  // Phone entrances — each from different directions
  const phoneConfigs = [
    { sel: ".phone-one", y: 120, rotateX: 12, scale: 0.85, delay: 0 },
    { sel: ".phone-two", x: 180, rotateY: -18, scale: 0.9, delay: 0.2 },
    { sel: ".phone-three", x: -180, rotateY: 18, scale: 0.9, delay: 0.4 },
  ];

  phoneConfigs.forEach(({ sel, x, y, rotateX, rotateY, scale, delay }) => {
    const phone = document.querySelector(sel);
    if (!phone) return;
    phone.classList.remove("reveal");

    gsap.from(phone, {
      x: x || 0,
      y: y || 0,
      rotateX: rotateX || 0,
      rotateY: rotateY || 0,
      scale,
      opacity: 0,
      duration: 1.1,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".digital-grid",
        start: "top 70%",
      },
    });
  });

  // Phone parallax depth on scroll
  [".phone-one", ".phone-two", ".phone-three"].forEach((sel, i) => {
    const el = document.querySelector(sel);
    if (!el) return;
    gsap.to(el, {
      yPercent: [8, -10, 14][i],
      ease: "none",
      scrollTrigger: {
        trigger: ".digital",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  // Feature blocks with check-mark draw
  const featureBlocks = document.querySelectorAll(".feature-block");
  featureBlocks.forEach((block) => {
    block.classList.remove("reveal");

    const blockTl = gsap.timeline({
      scrollTrigger: {
        trigger: block,
        start: "top 80%",
      },
    });

    blockTl.from(block.querySelector("h3"), {
      opacity: 0,
      y: 15,
      duration: 0.5,
      ease: "power2.out",
    });

    blockTl.from(
      block.querySelector("p"),
      {
        opacity: 0,
        y: 10,
        duration: 0.4,
      },
      "-=0.2"
    );

    const listItems = block.querySelectorAll("li");
    if (listItems.length) {
      blockTl.from(
        listItems,
        {
          x: -20,
          opacity: 0,
          stagger: 0.08,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.1"
      );
    }

    const featureChecks = block.querySelectorAll(".feature-check");
    if (featureChecks.length) {
      blockTl.from(
        featureChecks,
        {
          scale: 0,
          stagger: 0.08,
          duration: 0.35,
          ease: "back.out(2)",
        },
        "-=0.4"
      );
    }

    // SVG stroke draw for check marks
    const svgs = block.querySelectorAll(".feature-check svg");
    if (svgs.length) {
      blockTl.from(
        svgs,
        {
          strokeDashoffset: 30,
          stagger: 0.08,
          duration: 0.35,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }
  });
}

/* ==========================================================================
   9. INSIGHTS: Card Flip Reveal
   ========================================================================== */
function initInsightsFlip() {
  const section = document.querySelector(".insights");
  if (!section) return;

  // Left copy entrance
  const copy = section.querySelector(".insights-copy");
  if (copy) {
    copy.classList.remove("reveal");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: copy,
        start: "top 80%",
      },
    });

    tl.from(copy.querySelector("h2"), {
      x: -40,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
    });

    tl.from(
      copy.querySelector(".button"),
      {
        opacity: 0,
        scale: 0.85,
        duration: 0.5,
        ease: "back.out(1.6)",
      },
      "-=0.3"
    );
  }

  // Cards flip in
  const panel = section.querySelector(".insights-panel");
  if (panel) {
    panel.classList.remove("reveal");
  }

  const cards = section.querySelectorAll(".insight-card");
  if (cards.length) {
    gsap.from(cards, {
      rotateY: 90,
      opacity: 0,
      stagger: 0.15,
      duration: 0.85,
      ease: "power2.out",
      transformOrigin: "left center",
      scrollTrigger: {
        trigger: ".insight-cards",
        start: "top 78%",
      },
    });
  }

  // "Read all insights" arrow pulse
  const readAll = section.querySelector(".read-all-insights svg");
  if (readAll) {
    gsap.to(readAll, {
      x: 4,
      duration: 0.8,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      delay: 1.5,
    });
  }
}

/* ==========================================================================
   10. CASE STUDIES: Letter Cascade + Carousel Stack
   ========================================================================== */
function initCaseStudies() {
  const section = document.querySelector(".case-studies");
  if (!section) return;

  // Title — letter-by-letter cascade
  const title = section.querySelector(".case-title") as HTMLElement;
  if (title) {
    title.classList.remove("reveal");
    const text = title.textContent || "";

    // Split into individual characters wrapped in spans
    title.innerHTML = text
      .split("")
      .map((char) =>
        char === " "
          ? '<span class="char" style="display:inline-block">&nbsp;</span>'
          : `<span class="char" style="display:inline-block">${char}</span>`
      )
      .join("");

    gsap.from(title.querySelectorAll(".char"), {
      y: 40,
      opacity: 0,
      stagger: 0.025,
      duration: 0.5,
      ease: "back.out(1.4)",
      scrollTrigger: {
        trigger: section,
        start: "top 72%",
      },
    });
  }

  // Carousel cards arrange from scattered
  const carousel = section.querySelector(".case-carousel");
  if (carousel) {
    carousel.classList.remove("reveal");

    const allCards = carousel.querySelectorAll(".case-card");
    gsap.from(allCards, {
      scale: 0.7,
      rotateZ: (_i: number, _t: Element, a: Element[]) => {
        const idx = Array.from(a).indexOf(_t);
        return [-4, 4, 0][idx] || 0;
      },
      opacity: 0,
      stagger: 0.1,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: carousel,
        start: "top 75%",
      },
    });
  }

  // Dots pop in
  const dots = section.querySelectorAll(".case-dots span");
  if (dots.length) {
    gsap.from(dots, {
      scale: 0,
      stagger: 0.08,
      duration: 0.3,
      ease: "back.out(2)",
      scrollTrigger: {
        trigger: ".case-footer",
        start: "top 90%",
      },
    });
  }

  // Nav arrows fade in from edges
  const buttons = section.querySelectorAll(".case-controls button");
  if (buttons.length) {
    gsap.from(buttons[0], {
      x: -20,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".case-footer",
        start: "top 90%",
      },
    });
    gsap.from(buttons[1], {
      x: 20,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".case-footer",
        start: "top 90%",
      },
    });
  }
}

/* ==========================================================================
   11. FINAL CTA: Gravity Pull
   ========================================================================== */
function initFinalCta() {
  const section = document.querySelector(".final-cta");
  if (!section) return;

  const content = section.querySelector(".final-grid > div:first-child");
  if (content) {
    (content as HTMLElement).classList.remove("reveal");

    gsap.from(content, {
      y: 80,
      opacity: 0,
      duration: 0.9,
      ease: "power2.in", // Gravity feel — accelerates in
      scrollTrigger: {
        trigger: section,
        start: "top 78%",
      },
    });
  }

  // Buttons spring in from right
  const buttonRow = section.querySelector(".button-row");
  if (buttonRow) {
    gsap.from(buttonRow, {
      x: 60,
      opacity: 0,
      duration: 0.7,
      delay: 0.3,
      ease: "elastic.out(1, 0.6)",
      scrollTrigger: {
        trigger: section,
        start: "top 78%",
      },
    });
  }
}

/* ==========================================================================
   12. FOOTER: Brand Signature Reveal
   ========================================================================== */
function initFooterSignature() {
  const footer = document.querySelector(".site-footer");
  if (!footer) return;

  // Giant N7 logo — clip-path reveal like a signature
  const logo = footer.querySelector(".footer-logo");
  if (logo) {
    gsap.from(logo, {
      clipPath: "inset(0 100% 0 0)",
      duration: 1.4,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: footer,
        start: "top 82%",
      },
    });
  }

  // Addresses stagger in
  const addresses = footer.querySelectorAll("address");
  if (addresses.length) {
    gsap.from(addresses, {
      y: 25,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".footer-addresses",
        start: "top 88%",
      },
    });
  }

  // Footer link columns stagger up
  const columns = footer.querySelectorAll(".footer-column");
  if (columns.length) {
    gsap.from(columns, {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".footer-link-columns",
        start: "top 88%",
      },
    });
  }

  // Links within columns cascade in
  const links = footer.querySelectorAll(".footer-column a");
  if (links.length) {
    gsap.from(links, {
      x: -12,
      opacity: 0,
      stagger: 0.03,
      duration: 0.35,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".footer-link-columns",
        start: "top 82%",
      },
    });
  }

  // Copyright — last to appear
  const copyright = footer.querySelector(".copyright");
  if (copyright) {
    gsap.from(copyright, {
      opacity: 0,
      duration: 0.8,
      delay: 0.4,
      scrollTrigger: {
        trigger: copyright,
        start: "top 96%",
      },
    });
  }
}

/* ==========================================================================
   13. GLOBAL: Background Glow Breathing
   ========================================================================== */
function initBackgroundBreathing() {
  // Animate the ambient radial gradients on dark sections
  const darkSections = document.querySelectorAll(".section-dark");

  darkSections.forEach((section) => {
    gsap.fromTo(
      section,
      { "--glow-opacity": 0.35 },
      {
        "--glow-opacity": 0.75,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      }
    );
  });
}

/* ==========================================================================
   FALLBACK: Batch reveal for any remaining .reveal elements
   ========================================================================== */
function initBatchRevealFallback() {
  // Catch any .reveal elements that don't have a custom GSAP animation
  const unrevealed = document.querySelectorAll(".reveal");
  if (!unrevealed.length) return;

  ScrollTrigger.batch(unrevealed, {
    onEnter: (batch) => {
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: "power2.out",
        overwrite: true,
      });
    },
    start: "top 87%",
  });
}
