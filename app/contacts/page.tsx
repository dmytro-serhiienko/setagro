"use client";

import React, { useState } from "react";
import css from "./Contacts.module.css";
import {
  MdPhoneInTalk,
  MdOutlineMail,
  MdLocationOn,
  MdSend,
} from "react-icons/md";

export default function ContactsPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Відправляємо...");
    setTimeout(() => setStatus("Повідомлення відправлено!"), 2000);
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
                  <p>setagro09@gmail.com</p>
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
              <form className={css.form} onSubmit={handleSubmit}>
                <h3>Напишіть нам</h3>
                <div className={css.inputGroup}>
                  <input type="text" placeholder="Ваше ім'я" required />
                </div>
                <div className={css.inputGroup}>
                  <input type="email" placeholder="Email" required />
                </div>
                <div className={css.inputGroup}>
                  <input type="tel" placeholder="Номер телефону" />
                </div>
                <div className={css.inputGroup}>
                  <textarea
                    placeholder="Ваше повідомлення"
                    rows={5}
                    required
                  ></textarea>
                </div>
                <button type="submit" className={css.submitBtn}>
                  Відправити <MdSend />
                </button>
                {status && <p className={css.statusMsg}>{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
