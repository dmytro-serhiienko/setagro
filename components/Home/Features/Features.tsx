"use client";
import { useTranslations } from "next-intl";
import { PiTractorBold, PiTruckTrailerBold } from "react-icons/pi";
import { MdOutlineScience } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import css from "./Features.module.css";

export default function Features() {
  const t = useTranslations("Home");

  return (
    <section className={css.featuresSection} id="about">
      <div className={css.featuresWrap} data-gsap="stagger">
        <div className={css.featureItem}>
          <strong>{t("features.yearsCount")}</strong> {t("features.years")}
        </div>
        <div className={css.featureItem}>
          <PiTractorBold size={32} />
          {t("features.continuous")}
        </div>
        <div className={css.featureItem}>
          <MdOutlineScience size={32} />
          {t("features.science")}
        </div>
        <div className={css.featureItem}>
          <RiTeamLine size={32} />
          {t("features.staff")}
        </div>
        <div className={css.featureItem}>
          <PiTruckTrailerBold size={32} />
          {t("features.fleet")}
        </div>
      </div>
    </section>
  );
}
