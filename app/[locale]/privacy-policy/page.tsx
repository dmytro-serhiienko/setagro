import React from "react";
import css from "./Privacy.module.css";
import { getMessages, getTranslations } from "next-intl/server";

type PrivacyLists = {
  Privacy: {
    s2: { items: string[] };
    s3: { items: string[] };
  };
};

export default async function PrivacyPolicy() {
  const t = await getTranslations("Privacy");
  const messages = (await getMessages()) as PrivacyLists;
  const s2items = messages.Privacy.s2.items;
  const s3items = messages.Privacy.s3.items;

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
          <div className={css.textContent}>
            <p className={css.updateDate}>{t("updateDate")}</p>

            <h3>{t("s1.title")}</h3>
            <p>
              {t.rich("s1.text", {
                site: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>

            <h3>{t("s2.title")}</h3>
            <p>{t("s2.intro")}</p>
            <ul>
              {s2items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3>{t("s3.title")}</h3>
            <p>{t("s3.intro")}</p>
            <ul>
              {s3items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3>{t("s4.title")}</h3>
            <p>{t("s4.text")}</p>

            <h3>{t("s5.title")}</h3>
            <p>
              {t.rich("s5.text", {
                emph: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>

            <h3>{t("s6.title")}</h3>
            <p>{t("s6.text")}</p>

            <div className={css.footerNote}>
              <p className={css.footerText}>
                {t("footerPrefix")}{" "}
                <strong>
                  <a href={`mailto:${t("footerEmail")}`}>{t("footerEmail")}</a>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
