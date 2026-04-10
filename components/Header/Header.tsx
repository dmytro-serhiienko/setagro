"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import css from "./Header.module.css";
import { FaCircleDot } from "react-icons/fa6";

const menuLinks = [
  { name: "Головна", href: "/" },
  { name: "Про нас", href: "/#about" },
  { name: "Безводний аміак", href: "/ammonia" },
  { name: "Техніка", href: "/equipment" },
  { name: "Контакти", href: "/contacts" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <header className={`${css.header} ${scrolled ? css.scrolled : ""}`}>
        <div className={css.inner}>
          {/* Logo */}
          <Link href="/" className={css.logo} aria-label="SETAGRO — головна">
            <span className={css.logoMain}>SET</span>
            <span className={css.logoAccent}>AGRO</span>
          </Link>

          <div className={css.langWrap}>
            <Link href="/" className={css.langLink}>
              UA
              <FaCircleDot className={css.langDot} />
            </Link>
            <Link href="/" className={css.langLink}>
              EN
              <FaCircleDot className={css.langDot} />
            </Link>
            <Link href="/" className={css.langLink}>
              RO
              <FaCircleDot className={css.langDot} />
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className={css.desktopNav} aria-label="Основна навігація">
            {menuLinks.map((link) => (
              <Link key={link.href} href={link.href} className={css.navLink}>
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link href="/contacts" className={css.ctaButton}>
            Звязатись з нами
          </Link>

          {/* Burger */}
          <button
            className={css.burger}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Закрити меню" : "Відкрити меню"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`${css.overlay} ${menuOpen ? css.overlayVisible : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        className={`${css.drawer} ${menuOpen ? css.drawerOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Мобільне меню"
      >
        <nav aria-label="Мобільна навігація">
          {menuLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={css.drawerLink}
              style={{ animationDelay: menuOpen ? `${i * 60 + 60}ms` : "0ms" }}
              onClick={() => setMenuOpen(false)}
            >
              <span className={css.drawerIndex}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {link.name}
            </Link>
          ))}
        </nav>

        <div className={css.drawerFooter}>
          <Link
            href="/contacts"
            className={css.ctaMobile}
            onClick={() => setMenuOpen(false)}
          >
            Звязатись з нами
          </Link>
        </div>
      </div>
    </>
  );
}
