"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { partners } from "@/app/partners";
import css from "./Partners.module.css";

export default function Partners() {
  const t = useTranslations("Home");

  return (
    <section className={css.partnersSection}>
      <div>
        <div className={css.textBlock}>
          <span className={css.partnerAccent}>{t("partners.eyebrow")}</span>
          <h2 className={css.partnerTitle}>{t("partners.title")}</h2>
        </div>
        <div className={css.sliderWrapper}>
          <div className={css.sliderInner}>
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className={css.partnerCard}>
                <div className={css.imgWrap}>
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    fill
                    className={css.logoImg}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
