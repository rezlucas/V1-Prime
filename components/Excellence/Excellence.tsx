"use client";

import { useRef } from "react";
import styles from "./Excellence.module.css";
import { IconClock, IconShield, IconWhatsapp, IconLeaf, IconStar, IconPin, IconArrowLeft, IconArrowRight } from "../icons";
import { useReveal } from "../../hooks/useReveal";

const PERKS = [
  {
    icon: IconClock,
    title: "Flexibilidade total",
    description: "Planos personalizados para o seu estilo de vida.",
  },
  {
    icon: IconShield,
    title: "Sem cancelamentos",
    description: "Compromisso de disponibilidade garantida em todos os deslocamentos.",
  },
  {
    icon: IconWhatsapp,
    title: "Atendimento via WhatsApp",
    description: "Um canal direto e rápido para o que você precisar.",
  },
  {
    icon: IconLeaf,
    title: "Frota própria e híbrida",
    description: "Veículos próprios, mais sustentáveis e sempre em dia, sem terceirização.",
  },
  {
    icon: IconStar,
    title: "Motoristas dedicados",
    description: "Profissionais treinados para cuidar de cada detalhe, sempre à sua disposição.",
  },
  {
    icon: IconPin,
    title: "Rastreamento em tempo real",
    description: "Acompanhe o trajeto ao vivo, do início ao fim, com total segurança.",
  },
];

export default function Excellence() {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>();
  const [gridRef, gridVisible] = useReveal<HTMLUListElement>();
  const trackRef = useRef<HTMLUListElement>(null);

  const scroll = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("li");
    const amount = card ? card.getBoundingClientRect().width + 20 : track.clientWidth * 0.85;
    track.scrollBy({ left: amount * dir, behavior: "smooth" });
  };

  return (
    <section
      className={styles.excellence}
      id="vantagens"
      aria-label="A carteira de privilégios da sua assinatura"
    >
      <div className={styles.sheen} aria-hidden="true" />
      <div className="container">
        <div
          ref={headerRef}
          className={`${styles.header} reveal-text ${headerVisible ? "reveal-visible" : ""}`}
        >
          <span className="eyebrow">Vantagens</span>
          <h2 className={styles.title}>
            A carteira de privilégios
            <br />
            da sua assinatura
          </h2>
        </div>

        <ul
          className={`${styles.grid} reveal-stagger ${gridVisible ? "reveal-visible" : ""}`}
          ref={(node) => {
            trackRef.current = node;
            gridRef.current = node;
          }}
        >
          {PERKS.map(({ icon: Icon, title, description }) => (
            <li key={title} className={styles.card}>
              <div className={styles.iconStage}>
                <div className={styles.iconWrap}>
                  <Icon className={styles.icon} />
                </div>
                <div className={styles.iconReflection} aria-hidden="true">
                  <div className={styles.iconReflectionInner}>
                    <Icon className={styles.icon} />
                  </div>
                </div>
              </div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardText}>{description}</p>
            </li>
          ))}
        </ul>

        <div className={styles.mobileNavWrap}>
          <div className={styles.mobileNav}>
            <button type="button" aria-label="Anterior" onClick={() => scroll(-1)}>
              <IconArrowLeft />
            </button>
            <span className={styles.mobileNavDivider} aria-hidden="true" />
            <button type="button" aria-label="Próximo" onClick={() => scroll(1)}>
              <IconArrowRight />
            </button>
          </div>
        </div>

        <div className={styles.footer}>
          <a href="#contato" className={styles.cta}>
            Fale com a V1 Prime
          </a>
        </div>
      </div>
    </section>
  );
}
