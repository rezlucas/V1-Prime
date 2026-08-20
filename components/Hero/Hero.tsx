import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Apresentação">
      <div className={styles.scene} aria-hidden="true">
        <Image
          src="/images/hero/hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.photo}
        />
        <div className={styles.grain} />
        <div className={styles.vignette} />
      </div>

      <div className={`container ${styles.inner}`}>
        <h1 className={styles.title}>Sua rotina, conduzida.</h1>
        <p className={styles.subtitle}>
          V1 Prime é a assinatura de mobilidade que opera pela sua rotina:
          motorista dedicado, atendimento pelo WhatsApp e presença garantida
          em cada trajeto.
        </p>
      </div>
    </section>
  );
}
