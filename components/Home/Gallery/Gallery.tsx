"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useMessages, useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import lightGallery from "lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";
import "swiper/css";

import { photosGallery, videoGallery } from "@/app/gallery"; // перевір шлях
import css from "./Gallery.module.css";

type HomeMessages = {
  Home: {
    gallery: { photoAlts: string[]; videoAlts: string[] };
  };
};

export default function Gallery() {
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
    <section className={css.gallerySection} id="gallery">
      <div className={`${css.container} ${css.galleryContainer}`}>
        <div className={css.textHeader} data-gsap="stagger">
          <h2 className={css.galleryTitle}>
            {t("gallery.title")}{" "}
            <span className={css.accent}>{t("gallery.titleAccent")}</span>
          </h2>
          <p className={css.gallerySubtitle}>{t("gallery.subtitle")}</p>
        </div>

        <div id="customize-thumbnails-gallery" ref={galleryRef}>
          <Swiper
            className={css.galleryGrid}
            modules={[FreeMode]}
            freeMode
            grabCursor
            spaceBetween={8}
            slidesPerView={1.2}
            breakpoints={{
              520: { slidesPerView: 1.5, spaceBetween: 7 },
              768: { slidesPerView: 2.2, spaceBetween: 9 },
              1080: { slidesPerView: 3.1, spaceBetween: 11 },
              1480: { slidesPerView: 3.6, spaceBetween: 13 },
            }}
          >
            {photosGallery.map((el, index) => (
              <SwiperSlide key={`photo-${index}`}>
                <a href={el.src} className={css.galleryLink}>
                  <Image
                    src={el.src}
                    alt={photoAlts[index] ?? el.alt}
                    width={300}
                    height={200}
                    className={css.galleryThumb}
                  />
                </a>
              </SwiperSlide>
            ))}
            {videoGallery.map((video, index) => (
              <SwiperSlide key={`video-${index}`}>
                <a
                  className={css.galleryLink}
                  data-lg-size="1280-720"
                  data-src={video.src}
                  data-poster={video.poster}
                >
                  <Image
                    src={video.poster}
                    alt={videoAlts[index] ?? video.alt}
                    width={300}
                    height={200}
                    className={css.galleryThumb}
                  />
                  <span className={css.playIcon}>▶</span>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
