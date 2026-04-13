"use client";
import { useTranslations } from "next-intl";
import css from "./About.module.css";

export default function About() {
  const t = useTranslations("Home");

  return (
    <section className={css.aboutSection}>
      <div className={css.aboutContainer}>
        <div className={css.aboutHeader} data-gsap="stagger">
          <span className={css.aboutBadge}>{t("about.badge")}</span>
          <h2 className={css.aboutTitle}>{t("about.title")}</h2>
          <div className={css.aboutDivider} />
        </div>
        <div className={css.aboutContent} data-gsap="stagger">
          <p className={css.aboutText}>
            {t.rich("about.p1", {
              fertilizer: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
          <p className={css.aboutText}>{t("about.p2")}</p>
        </div>
      </div>
    </section>
  );
}
