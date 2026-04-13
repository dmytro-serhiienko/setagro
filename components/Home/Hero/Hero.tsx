"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import css from "./Hero.module.css";

export default function Hero() {
  const t = useTranslations("Home");

  return (
    <section className={css.hero} id="home">
      <div className={css.overlay} />
      <div className={css.container}>
        <div className={css.content} data-gsap="hero">
          <h1 className={css.title}>
            {t("hero.titleBefore")}{" "}
            <span className={css.accent}>{t("hero.titleAccent")}</span>{" "}
            {t("hero.titleAfter")}
          </h1>
          <p className={css.description}>{t("hero.description")}</p>
          <div className={css.actions}>
            <Link href="/#about" className={css.primaryBtn}>
              {t("hero.more")}
            </Link>
            <Link href="/contacts" className={css.secondaryBtn}>
              {t("hero.consult")}
            </Link>
          </div>
        </div>
      </div>
      <div className={css.imageWrapper} data-gsap="hero-img">
        <Image
          src="/images/hero/Nik.png"
          alt={t("hero.heroImageAlt")}
          width={600}
          height={600}
          className={css.photo}
          priority
        />
      </div>
    </section>
  );
}
