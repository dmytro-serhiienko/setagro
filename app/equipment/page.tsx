"use client";

import React from "react";
import Image from "next/image";
import css from "./Equipment.module.css";
import { MdOutlinePrecisionManufacturing, MdSpeed } from "react-icons/md";

import { FaTractor, FaTruckMoving, FaTools, FaCogs } from "react-icons/fa";
import { MdPrecisionManufacturing } from "react-icons/md";

export default function EquipmentPage() {
  return (
    <main className={css.main}>
      {/* ── HERO SECTION ── */}
      <section className={css.hero}>
        <div className={css.overlay} />
        <div className={css.container}>
          <h1 className={css.title}>
            НАША <span className={css.accent}>ТЕХНІКА</span>
          </h1>
          <p className={css.heroSubtitle}>
            Використовуємо лише потужне та сучасне обладнання провідних світових
            брендів.
          </p>
        </div>
      </section>

      {/* ── ТРАКТОРИ ── */}
      <section className={css.section}>
        <div className={css.container}>
          <div className={css.techRow}>
            <div className={css.textContent}>
              <div className={css.iconLabel}>
                <FaTractor /> Трактори
              </div>
              <h2>Високопотужні тягачі</h2>
              <p>
                Внесення безводного аміаку здійснюється високопотужними
                тракторами провідних брендів (450 – 535 к.с.), що забезпечує
                стабільну роботу на складних ґрунтах.
              </p>

              <div className={css.brandGrid}>
                <div className={css.brandCard}>
                  <strong>JOHN DEERE</strong>
                  <span>450 - 500 к.с.</span>
                </div>
                <div className={css.brandCard}>
                  <strong>CASE</strong>
                  <span>385 - 535 к.с.</span>
                </div>
                <div className={css.brandCard}>
                  <strong>NEW HOLLAND</strong>
                  <span>435 - 535 к.с.</span>
                </div>
              </div>
            </div>
            <div className={css.imageSide}>
              <Image
                src="/images/equipment/tractor.jpg"
                alt="Трактори John Deere"
                width={600}
                height={400}
                className={css.roundedImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── КУЛЬТИВАТОРИ ТА ОБЛАДНАННЯ (Темна секція) ── */}
      <section className={css.darkSection}>
        <div className={css.container}>
          <div className={`${css.techRow} ${css.reverse}`}>
            <div className={css.textContent}>
              <div className={css.iconLabel}>
                <MdOutlinePrecisionManufacturing /> Точність
              </div>
              <h2>Культиватори CASE</h2>
              <p>
                Внесення виконується культиваторами CASE, оснащеними
                спеціалізованим обладнанням для точного контролю речовини:
              </p>
              <ul className={css.featureList}>
                <li>
                  <MdSpeed /> Дозувальні клапани
                </li>
                <li>
                  <MdSpeed /> Витратоміри
                </li>
                <li>
                  <MdSpeed /> Системи охолодження
                </li>
              </ul>
            </div>
            <div className={css.imageSide}>
              <Image
                src="/images/equipment/cultivator.jpg"
                alt="Культиватор Case"
                width={600}
                height={400}
                className={css.roundedImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── ЛОГІСТИКА ── */}
      <section className={css.section}>
        <div className={css.container}>
          <div className={css.techRow}>
            <div className={css.textContent}>
              <div className={css.iconLabel}>
                <FaTruckMoving /> Логістика
              </div>
              <h2>Перевезення аміаку</h2>
              <p>
                Ми забезпечуємо повний цикл доставки власним спецтранспортом.
                Перевезення здійснюється вантажними автомобілями з великою
                вантажопідйомністю.
              </p>
              <div className={css.capacityBadge}>
                Вантажопідйомність: <strong>18-20 тонн</strong>
              </div>
            </div>
            <div className={css.imageSide}>
              <Image
                src="/images/equipment/truck.jpg"
                alt="Логістика аміаку"
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
