"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import css from "./Contacts.module.css";
import {
  MdPhoneInTalk,
  MdOutlineMail,
  MdLocationOn,
  MdSend,
} from "react-icons/md";

export default function ContactsPage() {
  const [sending, setSending] = useState(false);
  const t = useTranslations("Contacts");
  const tt = useTranslations("Contacts.toast");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (
      form.elements.namedItem("name") as HTMLInputElement
    ).value.trim();
    const email = (
      form.elements.namedItem("email") as HTMLInputElement
    ).value.trim();
    const phone = (
      form.elements.namedItem("phone") as HTMLInputElement
    ).value.trim();
    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    ).value.trim();

    if (!name) {
      toast.warning(tt("nameRequired"));
      return;
    }
    if (!email) {
      toast.warning(tt("emailRequired"));
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.warning(tt("emailInvalid"));
      return;
    }
    if (!message) {
      toast.warning(tt("messageRequired"));
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/nodemailer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });
      if (res.ok) {
        toast.success(tt("successTitle"), {
          description: tt("successDesc"),
        });
        form.reset();
      } else {
        toast.error(tt("errorTitle"), {
          description: tt("errorDesc"),
        });
      }
    } catch {
      toast.error(tt("networkTitle"), {
        description: tt("networkDesc"),
      });
    } finally {
      setSending(false);
    }
  };

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

      <section className={css.contentSection}>
        <div className={css.container}>
          <div className={css.grid}>
            <div className={css.infoSide} data-gsap="fade-left">
              <h2>{t("infoTitle")}</h2>
              <div className={css.contactItem}>
                <div className={css.iconBox}>
                  <MdPhoneInTalk />
                </div>
                <div>
                  <h4>{t("phoneLabel")}</h4>
                  <p>+38 067 445 51 52</p>
                </div>
              </div>
              <div className={css.contactItem}>
                <div className={css.iconBox}>
                  <MdOutlineMail />
                </div>
                <div>
                  <h4>{t("emailLabel")}</h4>
                  <p>ua.setagro@gmail.com</p>
                </div>
              </div>
              <div className={css.contactItem}>
                <div className={css.iconBox}>
                  <MdLocationOn />
                </div>
                <div>
                  <h4>{t("addressLabel")}</h4>
                  <p>{t("address")}</p>
                </div>
              </div>
            </div>

            <div className={css.formSide} data-gsap="fade-right">
              <form className={css.form} onSubmit={handleSubmit} noValidate>
                <h3>{t("formTitle")}</h3>
                <div className={css.inputGroup}>
                  <input
                    name="name"
                    type="text"
                    placeholder={t("placeholders.name")}
                  />
                </div>
                <div className={css.inputGroup}>
                  <input
                    name="email"
                    type="email"
                    placeholder={t("placeholders.email")}
                  />
                </div>
                <div className={css.inputGroup}>
                  <input
                    name="phone"
                    type="tel"
                    placeholder={t("placeholders.phone")}
                  />
                </div>
                <div className={css.inputGroup}>
                  <textarea
                    name="message"
                    placeholder={t("placeholders.message")}
                    rows={5}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={css.submitBtn}
                  disabled={sending}
                >
                  {sending ? (
                    t("sending")
                  ) : (
                    <>
                      {t("submit")} <MdSend />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
