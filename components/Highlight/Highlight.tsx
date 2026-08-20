"use client";

import styles from "./Highlight.module.css";
import { useReveal } from "../../hooks/useReveal";

export default function Highlight() {
  const [revealRef, visible] = useReveal<HTMLDivElement>();

  return (
    <section className={styles.highlight} aria-label="Mobilidade premium é uma escolha">
      <div
        ref={revealRef}
        className={`container ${styles.inner} reveal-text ${visible ? "reveal-visible" : ""}`}
      >
        <h2 className={styles.title}>
          Mobilidade é uma necessidade.
          <br />
          Mobilidade premium é uma escolha.
        </h2>
        <p className={styles.subtitle}>
          Experimente mobilidade planejada para quem valoriza tempo,
          exclusividade e sofisticação.
        </p>
      </div>
    </section>
  );
}
