"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import css from "./Equipment.module.css";
import { MdOutlinePrecisionManufacturing, MdSpeed } from "react-icons/md";

import { FaTractor, FaTruckMoving } from "react-icons/fa";

export default function EquipmentPage() {
  const t = useTranslations("Equipment");

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

      <section className={css.section}>
        <div className={css.container}>
          <div className={css.techRow}>
            <div className={css.textContent} data-gsap="fade-left">
              <div className={css.iconLabel}>
                <FaTractor /> {t("tractors.label")}
              </div>
              <h2>{t("tractors.title")}</h2>
              <p>{t("tractors.text")}</p>

              <div className={css.brandGrid} data-gsap="stagger">
                <div className={css.brandCard}>
                  <strong>JOHN DEERE</strong>
                  <span>{t("tractors.brand1")}</span>
                </div>
                <div className={css.brandCard}>
                  <strong>CASE</strong>
                  <span>{t("tractors.brand2")}</span>
                </div>
                <div className={css.brandCard}>
                  <strong>NEW HOLLAND</strong>
                  <span>{t("tractors.brand3")}</span>
                </div>
              </div>
            </div>
            <div className={css.imageSide} data-gsap="fade-right">
              <Image
                src="/images/equipment/case.jpg"
                alt={t("tractors.imageAlt")}
                width={600}
                height={400}
                className={css.roundedImg}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={css.darkSection}>
        <div className={css.container}>
          <div className={`${css.techRow} ${css.reverse}`}>
            <div className={css.textContent} data-gsap="fade-right">
              <div className={css.iconLabel}>
                <MdOutlinePrecisionManufacturing />{" "}
                {t("cultivators.label")}
              </div>
              <h2>{t("cultivators.title")}</h2>
              <p>{t("cultivators.text")}</p>
              <ul className={css.featureList} data-gsap="stagger">
                <li>
                  <MdSpeed /> {t("cultivators.li1")}
                </li>
                <li>
                  <MdSpeed /> {t("cultivators.li2")}
                </li>
                <li>
                  <MdSpeed /> {t("cultivators.li3")}
                </li>
              </ul>
            </div>
            <div className={css.imageSide} data-gsap="fade-left">
              <Image
                src="/images/equipment/culti.jpg"
                alt={t("cultivators.imageAlt")}
                width={600}
                height={400}
                className={css.roundedImg}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={css.section}>
        <div className={css.container}>
          <div className={css.techRow}>
            <div className={css.textContent} data-gsap="fade-left">
              <div className={css.iconLabel}>
                <FaTruckMoving /> {t("logistics.label")}
              </div>
              <h2>{t("logistics.title")}</h2>
              <p>{t("logistics.text")}</p>
              <div className={css.capacityBadge}>
                {t("logistics.capacity")}{" "}
                <strong>{t("logistics.capacityValue")}</strong>
              </div>
            </div>
            <div className={css.imageSide} data-gsap="fade-right">
              <Image
                src="/images/equipment/truck.jpg"
                alt={t("logistics.imageAlt")}
                width={600}
                height={400}
                className={css.roundedImg}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
