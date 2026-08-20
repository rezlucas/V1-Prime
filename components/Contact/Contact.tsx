"use client";

import Script from "next/script";
import styles from "./Contact.module.css";
import { useReveal } from "../../hooks/useReveal";

export default function Contact() {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>();
  const [formRef, formVisible] = useReveal<HTMLDivElement>();

  return (
    <section id="contato" className={styles.contact} aria-label="Fale com a gente">
      <div className="container">
        <div
          ref={headerRef}
          className={`${styles.header} reveal-text ${headerVisible ? "reveal-visible" : ""}`}
        >
          <span className="eyebrow">Contato</span>
          <h2 className={styles.title}>Fale com a gente</h2>
          <p className={styles.subtitle}>
            Preencha o formulário e nosso time entra em contato para
            apresentar o plano ideal para você.
          </p>
        </div>

        <div
          ref={formRef}
          className={`${styles.formCard} reveal ${formVisible ? "reveal-visible" : ""}`}
        >
          <div
            className="hs-form-frame"
            data-region="na1"
            data-form-id="74ae0c6c-6e9b-47ad-833c-587a0c96a8f1"
            data-portal-id="50353110"
          />
        </div>
      </div>

      <Script src="https://js.hsforms.net/forms/embed/50353110.js" strategy="lazyOnload" />
    </section>
  );
}
