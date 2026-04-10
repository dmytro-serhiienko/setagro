import React from "react";
import css from "./Vacancies.module.css";
import { jobs } from "./vacanciesList";
import Link from "next/link";

export default function VacanciesPage() {
  return (
    <main className={css.main}>
      <section className={css.hero}>
        <div className={css.overlay} />
        <div className={css.container} data-gsap="hero">
          <h1 className={css.title}>
            КАРʼЄРА В <span className={css.accent}>SETAGRO</span>
          </h1>
          <p className={css.heroSubtitle}>
            Приєднуйтесь до команди професіоналів та розвивайте агросектор разом
            з нами
          </p>
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
                <Link href={`/contacts`} className={css.applyBtn}>
                  Відгукнутись
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
