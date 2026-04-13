"use client";

import { useEffect, useRef } from "react";
import { useMessages, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import css from "@/app/Home.module.css";

import { PiTractorBold, PiTruckTrailerBold } from "react-icons/pi";
import { MdOutlineScience } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";

import lightGallery from "lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgVideo from "lightgallery/plugins/video";

import "lightgallery/css/lg-video.css";

import { photosGallery } from "../gallery";
import { videoGallery } from "../gallery";

// import "swiper/css";
import { partners } from "../partners";

type HomeMessages = {
  Home: {
    gallery: { photoAlts: string[]; videoAlts: string[] };
  };
};

export default function Hero() {
  const t = useTranslations("Home");
  const messages = useMessages() as HomeMessages;
  const galleryRef = useRef<HTMLDivElement>(null);

  const photoAlts = messages.Home.gallery.photoAlts;
  const videoAlts = messages.Home.gallery.videoAlts;

  useEffect(() => {
    if (galleryRef.current) {
      const lg = lightGallery(galleryRef.current, {
        plugins: [lgThumbnail, lgZoom, lgVideo],
        selector: "a",
        addClass: "lg-custom-thumbnails",
        animateThumb: false,
        // showThumbByDefault: false,
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
              {t("hero.titleBefore")}{" "}
              <span className={css.accent}>{t("hero.titleAccent")}</span>{" "}
              {t("hero.titleAfter")}
            </h1>

            <p className={css.description}>{t("hero.description")}</p>

            <div className={css.actions}>
              <Link href="/#about" className={css.primaryBtn}>
                {t("hero.more")}
              </Link>
              <Link href="/contacts" className={css.secondaryBtn}>
                {t("hero.consult")}
              </Link>
            </div>
          </div>
        </div>
        <div className={css.imageWrapper} data-gsap="hero-img">
          <Image
            src="/images/hero/Nik.png"
            alt={t("hero.heroImageAlt")}
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

      {/* ABOUT */}
      <section className={css.aboutSection}>
        <div className={css.aboutContainer}>
          <div className={css.aboutHeader} data-gsap="stagger">
            <span className={css.aboutBadge}>{t("about.badge")}</span>
            <h2 className={css.aboutTitle}>{t("about.title")}</h2>
            <div className={css.aboutDivider} />
          </div>

          <div className={css.aboutContent} data-gsap="stagger">
            <p className={css.aboutText}>
              {t.rich("about.p1", {
                fertilizer: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
            <p className={css.aboutText}>{t("about.p2")}</p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className={css.gallerySection} id="gallery">
        <div className={css.container}>
          <div className={css.textHeader} data-gsap="stagger">
            <h2 className={css.sectionTitle}>
              {t("gallery.title")}{" "}
              <span className={css.accent}>{t("gallery.titleAccent")}</span>
            </h2>
            <p className={css.sectionSubtitle}>{t("gallery.subtitle")}</p>
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
                  alt={photoAlts[index] ?? el.alt}
                  width={300}
                  height={200}
                  className={css.galleryThumb}
                />
              </a>
            ))}
            {videoGallery.map((video, index) => (
              <a
                key={index}
                data-lg-size="1280-720"
                data-src={video.src}
                data-poster={video.poster}
              >
                <Image
                  src={video.poster}
                  alt={videoAlts[index] ?? video.alt}
                  width={300}
                  height={200}
                />
                <span className={css.playIcon}>▶</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
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
    </>
  );
}
