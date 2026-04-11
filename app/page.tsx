"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import css from "./Home.module.css";

// Icons
import { PiTractorBold, PiTruckTrailerBold } from "react-icons/pi";
import { MdOutlineScience } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";

// LightGallery
import lightGallery from "lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// LightGallery Styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// Додаємо плагін відео
import lgVideo from "lightgallery/plugins/video";

// Імпортуємо стилі відео (обов'язково!)
import "lightgallery/css/lg-video.css";

import { photosGallery } from "./gallery";
import { videoGallery } from "./gallery";

// Swiper & Partners
import "swiper/css";
import { partners } from "./partners";

export default function Hero() {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (galleryRef.current) {
      const lg = lightGallery(galleryRef.current, {
        plugins: [lgThumbnail, lgZoom, lgVideo],
        selector: "a",
        addClass: "lg-custom-thumbnails",
        appendThumbnailsTo: ".lg-outer",
        animateThumb: false,
        allowMediaOverlap: true,
        // Опціонально: додаємо мобільний респонсив
        mobileSettings: {
          controls: true,
          showCloseIcon: true,
          download: false,
        },
      });

      return () => {
        lg.destroy();
      };
    }
  }, []);

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
        <div className={css.imageWrapper} data-gsap="hero-img">
          <Image
            src="/images/hero/Nik.png"
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
              найкращого спеціалізованого обладнання.
            </p>
          </div>
        </div>
      </section>

      {/* РОБОТИ / ГАЛЕРЕЯ */}
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

          <div
            id="customize-thumbnails-gallery"
            ref={galleryRef}
            className={css.galleryGrid}
          >
            {photosGallery.map((el, index) => (
              <a key={index} href={el.src} className={css.galleryLink}>
                <Image
                  src={el.src}
                  alt={el.alt}
                  width={300}
                  height={200}
                  className={css.galleryThumb}
                />
              </a>
            ))}
            {/* ВІДЕО З YOUTUBE */}
            {videoGallery.map((video, index) => (
              <a
                key={index}
                data-lg-size="1280-720"
                data-src={video.src}
                data-poster={video.poster} // поки відео не запущене
              >
                <Image
                  src={video.poster}
                  alt={video.alt}
                  width={300}
                  height={200}
                />
                <span className={css.playIcon}>▶</span>
              </a>
            ))}
            {/*  */}
          </div>
        </div>
      </section>

      {/* ПАРТНЕРИ */}
      <section className={css.partnersSection}>
        <div>
          <div className={css.textBlock}>
            <span className={css.partnerAccent}>
              КОМПАНІЇ, ЩО НАМ ДОВІРЯЮТЬ
            </span>
            <h2 className={css.partnerTitle}>НАШІ ПАРТНЕРИ</h2>
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
    </>
  );
}
