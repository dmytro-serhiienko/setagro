"use client";
import Image from "next/image";
import React from "react";
import css from "./Ammonia.module.css";
import {
  MdSettingsSuggest,
  MdOutlineAccessTime,
  MdAcUnit,
  MdWbSunny,
} from "react-icons/md";
import { GiChemicalDrop, GiPlantRoots, GiTornado } from "react-icons/gi";

export default function AmmoniaPage() {
  return (
    <main className={css.main}>
      <section className={css.hero}>
        <div className={css.overlay} />
        <div className={css.container} data-gsap="hero">
          <h1 className={css.title}>
            ВНЕСЕННЯ <span className={css.accent}>БЕЗВОДНОГО АМІАКУ</span>
          </h1>
          <p className={css.heroSubtitle}>
            Хімічна формула: NH3 | Масова частка азоту: 82,3%
          </p>
        </div>
      </section>

      {/* ── ПЕРЕВАГИ (Grid з іконками) ── */}
      <section className={css.advantagesSection}>
        <div className={css.container}>
          <h2 className={css.sectionTitle} data-gsap="fade-up">
            Переваги використання
          </h2>
          <div className={css.advantagesGrid} data-gsap="stagger">
            <div className={css.advCard}>
              <div className={css.advIcon}>
                <GiChemicalDrop />
              </div>
              <h3>82,3% Азоту</h3>
              <p>Максимально можлива концентрація діючої речовини.</p>
            </div>
            <div className={css.advCard}>
              <div className={css.advIcon}>
                <MdOutlineAccessTime />
              </div>
              <h3>Пролонгована дія</h3>
              <p>Стає доступним поступово після нітрифікації бактеріями.</p>
            </div>
            <div className={css.advCard}>
              <div className={css.advIcon}>
                <GiPlantRoots />
              </div>
              <h3>Амонійна форма</h3>
              <p>Високий коефіцієнт засвоєння безпосередньо коренем.</p>
            </div>
            <div className={css.advCard}>
              <div className={css.advIcon}>
                <GiTornado />
              </div>
              <h3>Стійкість</h3>
              <p>Добриво не змивається опадами та не випаровується.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ПОРІВНЯННЯ ТА ГРАФІК ── */}
      <section className={css.chartSection}>
        <div className={css.container}>
          <div className={css.chartContent}>
            <div className={css.chartText} data-gsap="fade-left">
              <h2>Порівняння вмісту азоту</h2>
              <p>
                Безводний аміак є безумовним лідером за вмістом азоту серед усіх
                доступних мінеральних добрив. Це робить його найбільш економічно
                вигідним рішенням у перерахунку на одиницю діючої речовини.
              </p>
              <div className={css.formulaBadge}>
                <span>
                  Формула: <strong>NH3</strong>
                </span>
                <span>
                  Азот: <strong>82,3%</strong>
                </span>
              </div>
            </div>
            <div className={css.chartImageWrapper} data-gsap="reveal">
              <Image
                src="/images/ammonia/ammoniaCompare.png"
                alt="Графік порівняння азоту"
                className={css.chartImg}
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── СЕЗОННІСТЬ ВНЕСЕННЯ ── */}
      <section className={css.seasonSection}>
        <div className={css.container}>
          <h2 className={css.sectionTitleLight} data-gsap="fade-up">
            Наші послуги з внесення
          </h2>
          <div className={css.seasonGrid} data-gsap="stagger">
            <div className={css.seasonCard}>
              <MdWbSunny className={css.seasonIcon} />
              <div className={css.seasonBadge}>Весна</div>
              <h3>Початок посівної</h3>
              <p>Посів можливий вже через два дні після внесення добрива.</p>
            </div>
            <div className={css.seasonCard}>
              <MdAcUnit className={css.seasonIcon} />
              <div className={css.seasonBadge}>Осінь — Зима</div>
              <h3>Оптимізація процесів</h3>
              <p>Зменшення навантаження на техніку перед весняними роботами.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ПРОФЕСІЙНИЙ ПІДХІД ── */}
      <section className={css.techSection}>
        <div className={css.container}>
          <div className={css.techCard} data-gsap="fade-up">
            <div className={css.iconWrapper}>
              <MdSettingsSuggest />
            </div>
            <h3>Професійний підхід</h3>
            <p>
              Безводний аміак потребує спеціалізованого обладнання та високої
              кваліфікації. Наші спеціалісти забезпечують точне закладання на
              необхідну глибину, що гарантує максимальну ефективність без втрат
              речовини.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
