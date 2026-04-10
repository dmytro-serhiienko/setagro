"use client";

import Link from "next/link";
import css from "./Home.module.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { PiTractorBold } from "react-icons/pi";
import { PiTruckTrailerBold } from "react-icons/pi";
import { MdOutlineScience } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { useState } from "react";
import Image from "next/image";

const slides = [
  { src: "/images/gallery/work1.jpg" },
  { src: "/images/gallery/work2.jpg" },
  { src: "/images/gallery/work3.jpg" },
  { src: "/images/gallery/work4.jpg" },
  { src: "/images/gallery/work5.jpg" },
  { src: "/images/gallery/work6.jpg" },
];

export default function Hero() {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <section className={css.hero} id="home">
        <div className={css.overlay} />

        <div className={css.container}>
          <div className={css.content} data-gsap="hero">
            <h1 className={css.title}>
              Довірте внесення <span className={css.accent}>аміаку</span> —
              професіоналам!
            </h1>

            <p className={css.description}>
              Забезпечуємо максимальну ефективність вашого врожаю завдяки
              точному обладнанню та багаторічному досвіду в агрохімії.
            </p>

            <div className={css.actions}>
              <Link href="#about" className={css.primaryBtn}>
                Дізнатись більше
              </Link>
              <Link href="/contacts" className={css.secondaryBtn}>
                Консультація
              </Link>
            </div>
          </div>
        </div>
        <div className={css.imageWrapper}>
          <Image
            src="/Nik.png"
            alt="Hero Image"
            width={600}
            height={600}
            className={css.photo}
            priority
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className={css.featuresSection} id="about">
        <div className={css.featuresWrap} data-gsap="stagger">
          <div className={css.featureItem}>
            <strong>10+</strong> років досвіду
          </div>
          <div className={css.featureItem}>
            <PiTractorBold size={32} />
            Безперервне внесення аміаку
          </div>
          <div className={css.featureItem}>
            <MdOutlineScience size={32} />
            Науково обґрунтований підхід
          </div>
          <div className={css.featureItem}>
            <RiTeamLine size={32} />
            Кваліфікований персонал
          </div>
          <div className={css.featureItem}>
            <PiTruckTrailerBold size={32} />
            Власна техніка
          </div>
        </div>
      </section>

      <section className={css.aboutSection}>
        <div className={css.aboutContainer}>
          <div className={css.aboutHeader} data-gsap="stagger">
            <span className={css.aboutBadge}>Надійний партнер</span>
            <h2 className={css.aboutTitle}>Про компанію</h2>
            <div className={css.aboutDivider} />
          </div>

          <div className={css.aboutContent} data-gsap="stagger">
            <p className={css.aboutText}>
              Наша компанія має багаторічний досвід роботи в аграрному секторі.
              Ми надаємо повний спектр послуг, що охоплюють закупівлю,
              зберігання, транспортування та внесення{" "}
              <strong>безводного аміаку</strong> як азотного добрива.
            </p>
            <p className={css.aboutText}>
              Працюємо на ринках України, Румунії, Болгарії та Молдови,
              забезпечуючи своєчасне й високоточне внесення за допомогою
              найкращого спеціалізованого обладнання. Ми віримо в інновації та
              щодня працюємо задля сталого розвитку сільського господарства і
              поліпшення життя людей.
            </p>
          </div>
        </div>
      </section>

      <section className={css.gallerySection} id="gallery">
        <div className={css.container}>
          <div className={css.textHeader} data-gsap="stagger">
            <h2 className={css.sectionTitle}>
              Наші роботи <span className={css.accent}>у полі</span>
            </h2>
            <p className={css.sectionSubtitle}>
              Подивіться, як працює наша техніка та яких результатів ми
              досягаємо завдяки точному внесенню добрив.
            </p>
          </div>

          {/* ── ФОТО СІТКА ── */}
          <div className={css.photoGrid} data-gsap="stagger">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={css.galleryImgWrapper}
                onClick={() => setIndex(i)}
              >
                <Image
                  src={slide.src}
                  alt={`Галерея фото ${i + 1}`}
                  fill
                  className={css.imageItem}
                />
                <div className={css.overlayHover}>
                  <span>Переглянути</span>
                </div>
              </div>
            ))}
          </div>

          <Lightbox
            index={index}
            open={index >= 0}
            close={() => setIndex(-1)}
            slides={slides}
          />

          {/* ── ВІДЕО БЛОК ── */}
          <div className={css.videoGrid} data-gsap="stagger">
            <div className={css.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/cHTSmp7Gkh8"
                title="Робота в полі"
                allowFullScreen
              ></iframe>
            </div>
            <div className={css.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/H3G5y6HM6wg"
                title="Технологія внесення"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
