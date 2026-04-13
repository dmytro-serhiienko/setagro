"use client";

import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import css from "./Header.module.css";
import { FaCircleDot } from "react-icons/fa6";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { menuLanguages } from "./HeaderLanguages";

export default function Header() {
  const t = useTranslations("nav");
  const th = useTranslations("header");
  const locale = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const menuLinks = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/#about" },
    { name: t("ammonia"), href: "/ammonia" },
    { name: t("equipment"), href: "/equipment" },
    { name: t("news"), href: "/news" },
    { name: t("vacancies"), href: "/vacancies" },
    { name: t("contacts"), href: "/contacts" },
  ];

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
          <Link href="/" className={css.logo} aria-label={th("logoAria")}>
            <span className={css.logoMain}>{th("logoMain")}</span>
            <span className={css.logoAccent}>{th("logoAccent")}</span>
          </Link>

          {/* Languages */}
          <div className={css.langWrap}>
            {menuLanguages.map((lang) => (
              <Link
                key={lang.code}
                href={pathname}
                locale={lang.code}
                className={css.langLink}
                aria-current={locale === lang.code ? "page" : undefined}
              >
                {lang.label}
                <FaCircleDot className={css.langDot} />
              </Link>
            ))}
          </div>

          <nav className={css.desktopNav} aria-label={th("mainNav")}>
            {menuLinks.map((link) => (
              <Link key={link.href} href={link.href} className={css.navLink}>
                {link.name}
              </Link>
            ))}
          </nav>

          <Link href="/contacts" className={css.ctaButton}>
            {th("contactCta")}
          </Link>

          <button
            className={css.burger}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? th("closeMenu") : th("openMenu")}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </header>

      <div
        className={`${css.overlay} ${menuOpen ? css.overlayVisible : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`${css.drawer} ${menuOpen ? css.drawerOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={th("mobileMenu")}
      >
        <nav aria-label={th("mobileNav")}>
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
            {th("contactCta")}
          </Link>
        </div>
      </div>
    </>
  );
}
