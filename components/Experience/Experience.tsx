"use client";

import Image from "next/image";
import styles from "./Experience.module.css";
import { useReveal } from "../../hooks/useReveal";

const ITEMS = [
  {
    image: "/images/experience/acolhimento.png",
    title: "Você é recebido com cuidado",
    description: "A porta é aberta para você. Sua bagagem é guardada. Tudo é cuidado.",
  },
  {
    image: "/images/experience/tom.webp",
    title: "Você dá o tom",
    description: "Relaxe. Música e temperatura ajustadas às suas preferências, sempre.",
    imagePosition: "68% 35%",
  },
  {
    image: "/images/experience/imprevistos.jpeg",
    title: "Presença garantida",
    description: "Motorista dedicado, pontualidade e atenção em cada detalhe do trajeto.",
  },
];

export default function Experience() {
  const [revealRef, visible] = useReveal<HTMLDivElement>();

  return (
    <section className={styles.experience} aria-label="A experiência V1 Prime">
      <div
        ref={revealRef}
        className={`container ${styles.header} reveal-text ${visible ? "reveal-visible" : ""}`}
      >
        <h2 className={styles.title}>
          Entre. <br />
          Respire.
        </h2>
        <p className={styles.subtitle}>
          A marca operando pela sua rotina, com motorista dedicado e
          atendimento garantido.
        </p>
      </div>

      <div className={styles.stack}>
        {ITEMS.map(({ image, title, description, imagePosition }, i) => (
          <div
            key={title}
            className={styles.stackItem}
            style={{ zIndex: i + 1 }}
          >
            <article className={styles.card}>
              <Image
                src={image}
                alt=""
                fill
                sizes="100vw"
                className={styles.cardImage}
                style={imagePosition ? { objectPosition: imagePosition } : undefined}
              />
              <div className={styles.scrim} />
              <div className={styles.overlay}>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
