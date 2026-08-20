"use client";

import { useRef } from "react";
import Image from "next/image";
import styles from "./Services.module.css";
import { IconArrowLeft, IconArrowRight } from "../icons";
import { useReveal } from "../../hooks/useReveal";

const SERVICES = [
  {
    image: "/images/services/empresarios.jpeg",
    eyebrow: "Para empresários e executivos",
    title: "Sua agenda continua em movimento.",
    description:
      "Reuniões em locais diferentes e viagens frequentes. Um motorista dedicado conduz sua rotina, com presença garantida em cada trajeto.",
  },
  {
    image: "/images/services/familias.webp",
    eyebrow: "Para famílias",
    title: "Segurança em cada trajeto dos seus filhos.",
    description:
      "Da escola às atividades extracurriculares, motoristas de confiança e comunicação constante para sua tranquilidade.",
  },
  {
    image: "/images/services/ocasioes.webp",
    eyebrow: "Para turismo e viagens",
    title: "Presença que começa antes do destino.",
    description:
      "Assistência com bagagens, pontualidade e acompanhamento em cada compromisso, do aeroporto ao hotel.",
  },
  {
    image: "/images/services/rotina.png",
    eyebrow: "Para advogados",
    title: "Seu compromisso começa antes mesmo da chegada.",
    description:
      "Privacidade para ligações confidenciais, tempo para revisar documentos e a pontualidade que decisões estratégicas exigem.",
  },
];

export default function Services() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [revealRef, visible] = useReveal<HTMLUListElement>();

  const scroll = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("li");
    const amount = card ? card.getBoundingClientRect().width + 24 : track.clientWidth * 0.5;
    track.scrollBy({ left: amount * dir, behavior: "smooth" });
  };

  return (
    <section className={styles.services} id="servicos" aria-label="Nossos serviços">
      <div className="container">
        <ul
          className={`${styles.track} reveal-stagger ${visible ? "reveal-visible" : ""}`}
          ref={(node) => {
            trackRef.current = node;
            revealRef.current = node;
          }}
        >
          {SERVICES.map(({ image, eyebrow, title, description }) => (
            <li key={title} className={styles.card}>
              <div className={styles.cardArt}>
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(min-width: 720px) 45vw, 86vw"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.cardEyebrow}>{eyebrow}</span>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardText}>{description}</p>
                <a href="#contato" className={styles.cardLink}>
                  Saiba mais
                </a>
              </div>
            </li>
          ))}
        </ul>

        <div className={styles.navWrap}>
          <div className={styles.nav}>
            <button type="button" aria-label="Anterior" onClick={() => scroll(-1)}>
              <IconArrowLeft />
            </button>
            <span className={styles.navDivider} aria-hidden="true" />
            <button type="button" aria-label="Próximo" onClick={() => scroll(1)}>
              <IconArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
