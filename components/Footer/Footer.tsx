"use client";

import Link from "next/link";
import css from "./Footer.module.css";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.top}>
          <div className={css.brand}>
            <Link href="/" className={css.logo}>
              SET<span className={css.accent}>AGRO</span>
            </Link>
            <p className={css.tagline}>
              Професійні рішення для агробізнесу: від логістики до високоточного
              внесення добрив.
            </p>
          </div>

          <div className={css.nav}>
            <h4 className={css.heading}>Навігація</h4>
            <Link href="/about">Про нас</Link>
            {/* <Link href="/services">Послуги</Link> */}
            <Link href="/ammonia">Безводний аміак</Link>
            <Link href="/equipment">Техніка</Link>
            <Link href="/contacts">Контакти</Link>
          </div>

          <div className={css.contacts}>
            <h4 className={css.heading}>Контакти</h4>
            <a href="mailto:setagro09@gmail.com">setagro09@gmail.com</a>
            <a href="tel:+380674455152">+38 (067) 445-51-52</a>
            {/* <p>Україна, Румунія, Молдова, Болгарія</p> */}
          </div>

          <div className={css.socials}>
            <h4 className={css.heading}>Ми в мережах</h4>
            <div className={css.socialIcons}>
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className={css.bottom}>
          <p className={css.copyright}>
            © {currentYear} SETAGRO. Всі права захищено.
          </p>
          <div className={css.legal}>
            <Link href="/privacy">Політика конфіденційності</Link>
            <span className={css.dot}>•</span>
            <Link href="/terms">Публічна оферта</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
