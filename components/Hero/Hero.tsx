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
        <h1 className={styles.title}>
          A tranquilidade de saber que seu
          <br />
          motorista já está a caminho.
        </h1>
      </div>
    </section>
  );
}
