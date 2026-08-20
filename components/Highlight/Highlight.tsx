"use client";

import styles from "./Highlight.module.css";
import { useReveal } from "../../hooks/useReveal";

export default function Highlight() {
  const [revealRef, visible] = useReveal<HTMLDivElement>();

  return (
    <section className={styles.highlight} aria-label="Escolha uma marca que cuida da sua mobilidade">
      <div
        ref={revealRef}
        className={`container ${styles.inner} reveal-text ${visible ? "reveal-visible" : ""}`}
      >
        <h2 className={styles.title}>
          Mobilidade é uma necessidade.
          <br />
          Escolha uma marca que cuida disso para você.
        </h2>
        <p className={styles.subtitle}>
          V1 Prime é a assinatura de mobilidade para quem sabe o valor do
          tempo e valoriza boas experiências.
        </p>
      </div>
    </section>
  );
}
