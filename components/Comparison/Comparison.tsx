"use client";

import styles from "./Comparison.module.css";
import Logo from "../Logo";
import { IconCheck, IconX } from "../icons";
import { useReveal } from "../../hooks/useReveal";

const PRIME_POINTS = [
  "Tarifa fixa por assinatura, sem surpresas",
  "Motorista dedicado à sua rotina",
  "Frota própria, híbrida e padronizada",
  "Atendimento direto via WhatsApp",
  "Presença garantida, zero cancelamento",
];

const OTHERS_POINTS = [
  "Preço dinâmico, muda a qualquer hora",
  "Motorista diferente a cada trajeto",
  "Carros terceirizados, sem padrão",
  "Atendimento só dentro do app",
  "Risco de cancelamento a qualquer momento",
];

export default function Comparison() {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>();
  const [primeCardRef, primeCardVisible] = useReveal<HTMLDivElement>();
  const [othersCardRef, othersCardVisible] = useReveal<HTMLDivElement>();
  const [primeListRef, primeListVisible] = useReveal<HTMLUListElement>();
  const [othersListRef, othersListVisible] = useReveal<HTMLUListElement>();

  return (
    <section className={styles.comparison} id="comparativo" aria-label="Por que é uma nova experiência em mobilidade">
      <div className="container">
        <div
          ref={headerRef}
          className={`${styles.header} reveal-text ${headerVisible ? "reveal-visible" : ""}`}
        >
          <span className={`eyebrow ${styles.eyebrow}`}>Comparativo</span>
          <h2 className={styles.title}>Por que é uma nova experiência em mobilidade?</h2>
        </div>

        <div className={styles.grid}>
          <div
            ref={primeCardRef}
            className={`${styles.card} ${styles.cardPrime} reveal-left ${primeCardVisible ? "reveal-visible" : ""}`}
          >
            <div className={styles.cardHead}>
              <Logo className={styles.cardLogo} />
            </div>
            <ul
              ref={primeListRef}
              className={`${styles.list} reveal-stagger ${primeListVisible ? "reveal-visible" : ""}`}
            >
              {PRIME_POINTS.map((point) => (
                <li key={point}>
                  <IconCheck className={styles.checkIcon} />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div
            ref={othersCardRef}
            className={`${styles.card} ${styles.cardOthers} reveal-right ${othersCardVisible ? "reveal-visible" : ""}`}
          >
            <div className={styles.cardHead}>
              <span className={styles.othersLabel}>Aplicativos de mercado</span>
            </div>
            <ul
              ref={othersListRef}
              className={`${styles.list} reveal-stagger ${othersListVisible ? "reveal-visible" : ""}`}
            >
              {OTHERS_POINTS.map((point) => (
                <li key={point}>
                  <IconX className={styles.xIcon} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.footer}>
          <a href="#contato" className={styles.cta}>
            Conheça a assinatura
          </a>
        </div>
      </div>
    </section>
  );
}
