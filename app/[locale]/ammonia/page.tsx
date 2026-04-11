"use client";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import css from "./Ammonia.module.css";
import {
  MdSettingsSuggest,
  MdOutlineAccessTime,
  MdAcUnit,
  MdWbSunny,
} from "react-icons/md";
import { GiChemicalDrop, GiPlantRoots, GiTornado } from "react-icons/gi";

export default function AmmoniaPage() {
  const t = useTranslations("Ammonia");

  return (
    <main className={css.main}>
      <section className={css.hero}>
        <div className={css.overlay} />
        <div className={css.container} data-gsap="hero">
          <h1 className={css.title}>
            {t("hero.title")}{" "}
            <span className={css.accent}>{t("hero.titleAccent")}</span>
          </h1>
          <p className={css.heroSubtitle}>{t("hero.subtitle")}</p>
        </div>
      </section>

      <section className={css.advantagesSection}>
        <div className={css.container}>
          <h2 className={css.sectionTitle} data-gsap="fade-up">
            {t("advantagesTitle")}
          </h2>
          <div className={css.advantagesGrid} data-gsap="stagger">
            <div className={css.advCard}>
              <div className={css.advIcon}>
                <GiChemicalDrop />
              </div>
              <h3>{t("adv1.title")}</h3>
              <p>{t("adv1.text")}</p>
            </div>
            <div className={css.advCard}>
              <div className={css.advIcon}>
                <MdOutlineAccessTime />
              </div>
              <h3>{t("adv2.title")}</h3>
              <p>{t("adv2.text")}</p>
            </div>
            <div className={css.advCard}>
              <div className={css.advIcon}>
                <GiPlantRoots />
              </div>
              <h3>{t("adv3.title")}</h3>
              <p>{t("adv3.text")}</p>
            </div>
            <div className={css.advCard}>
              <div className={css.advIcon}>
                <GiTornado />
              </div>
              <h3>{t("adv4.title")}</h3>
              <p>{t("adv4.text")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={css.chartSection}>
        <div className={css.container}>
          <div className={css.chartContent}>
            <div className={css.chartText} data-gsap="fade-left">
              <h2>{t("chart.title")}</h2>
              <p>{t("chart.text")}</p>
              <div className={css.formulaBadge}>
                <span>
                  {t("chart.formula")} <strong>NH3</strong>
                </span>
                <span>
                  {t("chart.nitrogen")} <strong>82,3%</strong>
                </span>
              </div>
            </div>
            <div className={css.chartImageWrapper} data-gsap="reveal">
              <Image
                src="/images/ammonia/ammoniaCompare.png"
                alt={t("chart.chartAlt")}
                className={css.chartImg}
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={css.seasonSection}>
        <div className={css.container}>
          <h2 className={css.sectionTitleLight} data-gsap="fade-up">
            {t("servicesTitle")}
          </h2>
          <div className={css.seasonGrid} data-gsap="stagger">
            <div className={css.seasonCard}>
              <MdWbSunny className={css.seasonIcon} />
              <div className={css.seasonBadge}>{t("spring.badge")}</div>
              <h3>{t("spring.title")}</h3>
              <p>{t("spring.text")}</p>
            </div>
            <div className={css.seasonCard}>
              <MdAcUnit className={css.seasonIcon} />
              <div className={css.seasonBadge}>{t("autumn.badge")}</div>
              <h3>{t("autumn.title")}</h3>
              <p>{t("autumn.text")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={css.techSection}>
        <div className={css.container}>
          <div className={css.techCard} data-gsap="fade-up">
            <div className={css.iconWrapper}>
              <MdSettingsSuggest />
            </div>
            <h3>{t("professional.title")}</h3>
            <p>{t("professional.text")}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
