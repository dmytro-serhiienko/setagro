"use client";

import { NewsItem } from "./newsType";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useMessages, useTranslations } from "next-intl";
import css from "./News.module.css";
import { IoIosClose } from "react-icons/io";

type NewsMessages = {
  News: { items: NewsItem[] };
};

export default function NewsPage() {
  const t = useTranslations("News");
  const messages = useMessages() as NewsMessages;
  const newsItems = messages.News.items;

  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedNews ? "hidden" : "";
    window.dispatchEvent(
      new Event(selectedNews ? "lenis:stop" : "lenis:start"),
    );
    return () => {
      document.body.style.overflow = "";
      window.dispatchEvent(new Event("lenis:start"));
    };
  }, [selectedNews]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedNews(null);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const closeModal = () => setSelectedNews(null);

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
          <div className={css.grid}>
            {newsItems.map((item) => (
              <article key={item.id} className={css.card}>
                <div className={css.imgWrap}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={css.cardImg}
                  />
                </div>
                <div className={css.cardContent}>
                  <div className={css.textBlock}>
                    <span className={css.date}>{item.date}</span>
                    <h2 className={css.cardTitle}>{item.title}</h2>
                  </div>
                  <button
                    className={css.openBtn}
                    onClick={() => setSelectedNews(item)}
                  >
                    {t("open")}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedNews && (
        <div className={css.modalOverlay} onClick={closeModal}>
          <div
            className={css.modal}
            data-lenis-prevent
            onClick={(e) => e.stopPropagation()}
          >
            <button className={css.closeBtn} onClick={closeModal}>
              <IoIosClose />
            </button>
            <div className={css.modalImageHeader}>
              <Image
                src={selectedNews.image}
                alt={selectedNews.title}
                fill
                className={css.modalImg}
              />
            </div>
            <div className={css.modalBody}>
              <span className={css.modalDate}>{selectedNews.date}</span>
              <h2 className={css.modalTitle}>{selectedNews.title}</h2>
              <div className={css.modalDivider} />
              <div
                className={css.modalText}
                dangerouslySetInnerHTML={{ __html: selectedNews.content }}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
