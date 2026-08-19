"use client";

import Image from "next/image";
import styles from "./Comparison.module.css";
import Logo from "../Logo";
import { IconCheck, IconX } from "../icons";
import { useReveal } from "../../hooks/useReveal";

const PRIME_POINTS = [
  "Tarifa fixa por assinatura, sem surpresas",
  "Motorista exclusivo e dedicado",
  "Frota própria, híbrida e padronizada",
  "Atendimento direto via WhatsApp",
  "Disponibilidade garantida, zero cancelamento",
];

const OTHERS_POINTS = [
  "Preço dinâmico, muda a qualquer hora",
  "Motorista diferente a cada corrida",
  "Carros terceirizados, sem padrão",
  "Atendimento só dentro do app",
  "Risco de cancelamento a qualquer momento",
];

export default function Comparison() {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>();
  const [gridRef, gridVisible] = useReveal<HTMLDivElement>();
  const [primeListRef, primeListVisible] = useReveal<HTMLUListElement>();
  const [othersListRef, othersListVisible] = useReveal<HTMLUListElement>();

  return (
    <section className={styles.comparison} id="comparativo" aria-label="Por que o Prime está em outro nível">
      <div className="container">
        <div
          ref={headerRef}
          className={`${styles.header} reveal ${headerVisible ? "reveal-visible" : ""}`}
        >
          <span className={`eyebrow ${styles.eyebrow}`}>Comparativo</span>
          <h2 className={styles.title}>Por que o Prime está em outro nível?</h2>
        </div>

        <div
          ref={gridRef}
          className={`${styles.grid} reveal-stagger ${gridVisible ? "reveal-visible" : ""}`}
        >
          <div className={`${styles.card} ${styles.cardPrime}`}>
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

          <div className={`${styles.card} ${styles.cardOthers}`}>
            <div className={styles.cardHead}>
              <Image
                src="/images/outros-app-logo.webp"
                alt="Outros apps"
                width={140}
                height={57}
                className={styles.othersLogo}
              />
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
          <a href="#planos" className={styles.cta}>
            Quero ser Prime
          </a>
        </div>
      </div>
    </section>
  );
}
