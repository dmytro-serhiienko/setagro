"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import css from "./Contacts.module.css";
import {
  MdPhoneInTalk,
  MdOutlineMail,
  MdLocationOn,
  MdSend,
} from "react-icons/md";

export default function ContactsPage() {
  const [sending, setSending] = useState(false);

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
      toast.warning("Вкажіть ваше імʼя");
      return;
    }
    if (!email) {
      toast.warning("Вкажіть ваш Email");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.warning("Невірний формат Email");
      return;
    }
    if (!message) {
      toast.warning("Напишіть повідомлення");
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
        toast.success("Повідомлення надіслано!", {
          description: "Ми звʼяжемось з вами якнайшвидше.",
        });
        form.reset();
      } else {
        toast.error("Помилка відправки", {
          description: "Спробуйте ще раз або напишіть нам безпосередньо.",
        });
      }
    } catch {
      toast.error("Помилка зʼєднання", {
        description: "Перевірте інтернет і спробуйте знову.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <main className={css.main}>
      {/* ── HERO SECTION ── */}
      <section className={css.hero}>
        <div className={css.overlay} />
        <div className={css.container} data-gsap="hero">
          <h1 className={css.title}>
            ЗВʼЯЖІТЬСЯ З <span className={css.accent}>НАМИ</span>
          </h1>
          <p className={css.heroSubtitle}>
            Ми завжди готові до співпраці та професійної консультації.
          </p>
        </div>
      </section>

      {/* ── CONTACTS BLOCK ── */}
      <section className={css.contentSection}>
        <div className={css.container}>
          <div className={css.grid}>
            {/* Статичні контакти */}
            <div className={css.infoSide} data-gsap="fade-left">
              <h2>Наші координати</h2>
              <div className={css.contactItem}>
                <div className={css.iconBox}>
                  <MdPhoneInTalk />
                </div>
                <div>
                  <h4>Телефон</h4>
                  <p>+38 067 445 51 52</p>
                </div>
              </div>
              <div className={css.contactItem}>
                <div className={css.iconBox}>
                  <MdOutlineMail />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>ua.setagro@gmail.com</p>
                </div>
              </div>
              <div className={css.contactItem}>
                <div className={css.iconBox}>
                  <MdLocationOn />
                </div>
                <div>
                  <h4>Адреса</h4>
                  <p>Україна, м. Київ</p>
                </div>
              </div>
            </div>

            {/* Форма зворотного зв'язку */}
            <div className={css.formSide} data-gsap="fade-right">
              <form className={css.form} onSubmit={handleSubmit} noValidate>
                <h3>Напишіть нам</h3>
                <div className={css.inputGroup}>
                  <input name="name" type="text" placeholder="Ваше ім'я" />
                </div>
                <div className={css.inputGroup}>
                  <input name="email" type="email" placeholder="Email" />
                </div>
                <div className={css.inputGroup}>
                  <input name="phone" type="tel" placeholder="Номер телефону" />
                </div>
                <div className={css.inputGroup}>
                  <textarea
                    name="message"
                    placeholder="Ваше повідомлення"
                    rows={5}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={css.submitBtn}
                  disabled={sending}
                >
                  {sending ? (
                    "Відправляємо..."
                  ) : (
                    <>
                      Відправити <MdSend />
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
