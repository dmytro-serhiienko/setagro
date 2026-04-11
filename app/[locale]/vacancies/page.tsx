"use client";

import React from "react";
import css from "./Vacancies.module.css";
import { useMessages, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

type Job = { id: number; position: string; location: string };

type VacanciesMessages = {
  Vacancies: { jobs: Job[] };
};

export default function VacanciesPage() {
  const t = useTranslations("Vacancies");
  const messages = useMessages() as VacanciesMessages;
  const jobs = messages.Vacancies.jobs;

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

      <section className={css.whiteSection}>
        <div className={css.container}>
          <div className={css.list}>
            {jobs.map((job) => (
              <div key={job.id} className={css.jobCard}>
                <div className={css.info}>
                  <h3>{job.position}</h3>
                  <span className={css.location}>{job.location}</span>
                </div>
                <Link href="/contacts" className={css.applyBtn}>
                  {t("apply")}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
