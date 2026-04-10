"use client";
import { IoClose } from "react-icons/io5";
import css from "./ContactModal.module.css";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className={`${css.overlay} ${isOpen ? css.active : ""}`}>
      <button className={css.closeBtn} onClick={onClose} aria-label="Закрити">
        <IoClose />
      </button>

      <div className={css.formWrapper}>
        <h2 className={css.formTitle}>Залишити заявку</h2>
        <form className={css.contactForm} onSubmit={(e) => e.preventDefault()}>
          <div className={css.inputGroup}>
            <input type="text" placeholder="Ім'я та Прізвище" required />
            <input type="email" placeholder="Email" required />
          </div>

          <input type="text" placeholder="Суть робіт (напр. Внесення аміаку)" />
          <input type="text" placeholder="Місце положення (Область/Район)" />

          <div className={css.dateWrapper}>
            <label className={css.label}>Приблизна дата робіт:</label>
            <input type="date" />
          </div>

          <textarea
            placeholder="Додаткова інформація (площа поля, особливості)"
            rows={4}
          ></textarea>

          <button type="submit" className={css.submitBtn}>
            Відправити заявку
          </button>
        </form>
      </div>
    </div>
  );
}
