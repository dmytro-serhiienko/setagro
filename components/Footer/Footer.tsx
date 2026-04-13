"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import css from "./Footer.module.css";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("nav");
  const tf = useTranslations("footer");

  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.top} data-gsap="stagger">
          <div className={css.brand}>
            <Link href="/" className={css.logo}>
              {tf("logoMain")}
              <span className={css.accent}>{tf("logoAccent")}</span>
            </Link>
            <p className={css.tagline}>{tf("tagline")}</p>
          </div>

          <div className={css.nav}>
            <h4 className={css.heading}>{tf("navHeading")}</h4>
            <Link href="/">{t("home")}</Link>
            <Link href="/#about">{t("about")}</Link>
            <Link href="/ammonia">{t("ammonia")}</Link>
            <Link href="/equipment">{t("equipment")}</Link>
            <Link href="/news">{t("news")}</Link>
            <Link href="/vacancies">{t("vacancies")}</Link>
            <Link href="/contacts">{t("contacts")}</Link>
          </div>

          <div className={css.contacts}>
            <h4 className={css.heading}>{tf("contactsHeading")}</h4>
            <a href={`mailto:${tf("footerHrefEmail")}`}>{tf("email")}</a>
            <a href={`tel:${tf("footerHrefPhone")}`}>{tf("phone")}</a>
          </div>

          <div className={css.socials}>
            <h4 className={css.heading}>{tf("socialHeading")}</h4>
            <div className={css.socialIcons}>
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className={css.bottom}>
          <p className={css.copyright}>
            {tf("copyright", { year: currentYear })}
          </p>
          <div className={css.legal}>
            <Link href="/privacy-policy">{tf("privacy")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
