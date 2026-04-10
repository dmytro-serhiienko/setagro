"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * GsapInit — глобальний ініціалізатор анімацій.
 *
 * Покладається на data-атрибути, проставлені на елементах сторінок:
 *   data-gsap="hero"       — вхідна анімація героя (без скролу, грає одразу)
 *   data-gsap="fade-up"    — поява знизу при скролі
 *   data-gsap="fade-left"  — поява зліва при скролі
 *   data-gsap="fade-right" — поява справа при скролі
 *   data-gsap="stagger"    — прямі нащадки з'являються послідовно при скролі
 *   data-gsap="reveal"     — wipe-розкриття (зображення/картки)
 */
export default function GsapInit() {
  const pathname = usePathname();

  // Синхронізуємо Lenis зі ScrollTrigger — кожен scroll-тік оновлює тригери
  useLenis(() => {
    ScrollTrigger.update();
  });

  useEffect(() => {
    // ctx оголошуємо поза rAF, щоб cleanup міг його скасувати
    let ctx: ReturnType<typeof gsap.context> | null = null;

    const raf = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        const ease = "power3.out";
        const heroEase = "power4.out";

        // ── HERO ENTRANCE ─────────────────────────────────────────────────
        const heroContainers = document.querySelectorAll('[data-gsap="hero"]');
        heroContainers.forEach((container) => {
          const children = Array.from(container.children);
          if (!children.length) return;

          gsap.set(children, { opacity: 0, y: 70 });
          gsap.to(children, {
            opacity: 1,
            y: 0,
            duration: 1.1,
            stagger: 0.18,
            ease: heroEase,
            delay: 0.15,
          });
        });

        // ── FADE UP ────────────────────────────────────────────────────────
        const fadeUpEls = document.querySelectorAll('[data-gsap="fade-up"]');
        gsap.set(fadeUpEls, { opacity: 0, y: 55 });
        fadeUpEls.forEach((el) => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease,
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          });
        });

        // ── FADE LEFT ──────────────────────────────────────────────────────
        const fadeLeftEls = document.querySelectorAll(
          '[data-gsap="fade-left"]',
        );
        gsap.set(fadeLeftEls, { opacity: 0, x: -65 });
        fadeLeftEls.forEach((el) => {
          gsap.to(el, {
            opacity: 1,
            x: 0,
            duration: 0.95,
            ease,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        });

        // ── FADE RIGHT ─────────────────────────────────────────────────────
        const fadeRightEls = document.querySelectorAll(
          '[data-gsap="fade-right"]',
        );
        gsap.set(fadeRightEls, { opacity: 0, x: 65 });
        fadeRightEls.forEach((el) => {
          gsap.to(el, {
            opacity: 1,
            x: 0,
            duration: 0.95,
            ease,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        });

        // ── STAGGER (direct children) ──────────────────────────────────────
        const staggerContainers = document.querySelectorAll(
          '[data-gsap="stagger"]',
        );
        staggerContainers.forEach((container) => {
          const children = Array.from(container.children);
          if (!children.length) return;

          gsap.set(children, { opacity: 0, y: 45 });
          gsap.to(children, {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.12,
            ease,
            scrollTrigger: {
              trigger: container,
              start: "top 86%",
              toggleActions: "play none none none",
            },
          });
        });

        // ── IMAGE / CARD REVEAL (clip-path wipe) ───────────────────────────
        const revealEls = document.querySelectorAll('[data-gsap="reveal"]');
        gsap.set(revealEls, { clipPath: "inset(0 100% 0 0)", opacity: 0 });
        revealEls.forEach((el) => {
          gsap.to(el, {
            clipPath: "inset(0 0% 0 0)",
            opacity: 1,
            duration: 1.15,
            ease,
            scrollTrigger: {
              trigger: el,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          });
        });
      });
    });

    // Правильний cleanup: скасовуємо rAF і повертаємо всі GSAP-стани
    return () => {
      cancelAnimationFrame(raf);
      ctx?.revert();
    };
  }, [pathname]);

  return null;
}
