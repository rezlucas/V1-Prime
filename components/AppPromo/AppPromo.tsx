"use client";

import styles from "./AppPromo.module.css";
import { IconWhatsapp } from "../icons";
import { useReveal } from "../../hooks/useReveal";

export default function AppPromo() {
  const [copyRef, copyVisible] = useReveal<HTMLDivElement>();
  const [phoneRef, phoneVisible] = useReveal<HTMLDivElement>();
  const [chatRef, chatVisible] = useReveal<HTMLDivElement>();

  return (
    <section className={styles.appPromo} aria-label="Atendimento via WhatsApp">
      <div className={`container ${styles.inner}`}>
        <div
          ref={copyRef}
          className={`${styles.copy} reveal ${copyVisible ? "reveal-visible" : ""}`}
        >
          <h2 className={styles.title}>
            Agende em segundos
            <br />
            pelo WhatsApp.
          </h2>
          <p className={styles.text}>
            Um canal exclusivo e rápido para todas as suas solicitações.
            Converse com o V1 Prime e agende sua próxima viagem em poucos
            toques, sem precisar baixar nenhum aplicativo.
          </p>

          <a href="#planos" className={styles.badge}>
            <IconWhatsapp className={styles.badgeIcon} />
            <span>
              <small>Fale agora</small>
              Canal V1 Prime no WhatsApp
            </span>
          </a>
        </div>

        <div
          ref={phoneRef}
          className={`${styles.mockWrap} reveal ${phoneVisible ? "reveal-visible" : ""}`}
        >
          <div className={styles.phone}>
            <div className={styles.phoneScreen}>
              <div className={styles.phoneHeader}>
                <span className={styles.phoneAvatar}>V1</span>
                <div>
                  <p className={styles.phoneName}>V1 Prime</p>
                  <p className={styles.phoneStatus}>online</p>
                </div>
              </div>

              <div
                ref={chatRef}
                className={`${styles.phoneChat} reveal-stagger ${chatVisible ? "reveal-visible" : ""}`}
              >
                <div className={styles.bubbleIn}>
                  Olá! Vim pelo plano Essencial 👋
                </div>
                <div className={styles.bubbleOut}>
                  Perfeito! Para quando você precisa do motorista?
                </div>
                <div className={styles.bubbleIn}>Hoje, 18h. Rua Augusta, 100</div>
                <div className={styles.bubbleOut}>
                  Agendado ✅ Seu motorista chega às 18h em ponto.
                </div>
              </div>

              <div className={styles.phoneInputBar}>
                <span>Digite uma mensagem</span>
              </div>
            </div>
          </div>
          <div className={styles.glow} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
