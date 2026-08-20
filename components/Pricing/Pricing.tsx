"use client";

import { useState } from "react";
import styles from "./Pricing.module.css";
import { IconCheck } from "../icons";
import { useReveal } from "../../hooks/useReveal";

type Period = "mensal" | "trimestral" | "semestral" | "anual";

const PERIODS: { id: Period; label: string }[] = [
  { id: "mensal", label: "Mensal" },
  { id: "trimestral", label: "Trimestral" },
  { id: "semestral", label: "Semestral" },
  { id: "anual", label: "Anual" },
];

type Feature = { label: string; value?: string };

type Plan = {
  id: string;
  name: string;
  popular?: boolean;
  description: string;
  prices: Record<Period, number>;
  features: Feature[];
};

const PLANS: Plan[] = [
  {
    id: "individual",
    name: "Individual",
    description: "Para quem precisa de segurança e previsibilidade em deslocamentos pontuais.",
    prices: { mensal: 2657.31, trimestral: 2415.74, semestral: 2279.0, anual: 2210.63 },
    features: [
      { label: "Quantidade de horas:", value: "Utilize até 10h/mês" },
      { label: "Dependentes: 01" },
      { label: "WhatsApp" },
      { label: "Rastreamento" },
      { label: "Carros novos e espaçosos" },
      { label: "Ajuste de rota" },
    ],
  },
  {
    id: "essencial",
    name: "Essencial",
    popular: true,
    description: "Para quem precisa de mobilidade confiável no dia a dia, com previsibilidade e conforto.",
    prices: { mensal: 3670.8, trimestral: 3337.09, semestral: 3148.2, anual: 3242.65 },
    features: [
      { label: "Quantidade de horas:", value: "Utilize até 15h/mês" },
      { label: "Dependentes: 02" },
      { label: "Tudo do Individual" },
      { label: "Uso simultâneos: 1" },
      { label: "Coordenação de rotas" },
      { label: "Histórico por usuário" },
    ],
  },
  {
    id: "plus",
    name: "Plus",
    description: "Para quem quer mais autonomia e um segundo carro disponível para os seus dependentes.",
    prices: { mensal: 4573.05, trimestral: 4157.32, semestral: 3922.0, anual: 4039.66 },
    features: [
      { label: "Quantidade de horas:", value: "Utilize até 20h/mês" },
      { label: "Dependentes: 03" },
      { label: "Tudo do Essencial" },
      { label: "Uso simultâneos: 2" },
      { label: "Múltiplas rotas" },
      { label: "Relatório mensal" },
    ],
  },
  {
    id: "familiar",
    name: "Familiar",
    description: "Para famílias com vários deslocamentos diários que precisam de tranquilidade.",
    prices: { mensal: 6550.59, trimestral: 5955.08, semestral: 5618.0, anual: 5786.54 },
    features: [
      { label: "Quantidade de horas:", value: "Utilize até 30h/mês" },
      { label: "Dependentes: 04" },
      { label: "Uso simultâneos: 3" },
      { label: "Frota dedicada" },
      { label: "Central de atendimento" },
      { label: "Relatórios por colaborador" },
    ],
  },
];

function formatPrice(value: number) {
  return value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function Pricing() {
  const [period, setPeriod] = useState<Period>("mensal");
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>();
  const [gridRef, gridVisible] = useReveal<HTMLUListElement>();

  return (
    <section className={styles.pricing} id="planos" aria-label="Planos e preços">
      <div className="container">
        <div
          ref={headerRef}
          className={`${styles.header} reveal-text ${headerVisible ? "reveal-visible" : ""}`}
        >
          <span className="eyebrow">Planos</span>
          <h2 className={styles.title}>
            Escolha a assinatura da sua rotina
          </h2>
          <p className={styles.subtitle}>
            Um plano que se adapta ao seu ritmo, com motorista dedicado,
            conforto e presença garantida em cada trajeto.
          </p>
        </div>

        <div className={styles.tabsWrap}>
          <div className={styles.tabs} role="tablist" aria-label="Período de cobrança">
            {PERIODS.map((p) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={period === p.id}
                className={`${styles.tab} ${period === p.id ? styles.tabActive : ""}`}
                onClick={() => setPeriod(p.id)}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <ul
          ref={gridRef}
          className={`${styles.grid} reveal-stagger ${gridVisible ? "reveal-visible" : ""}`}
        >
          {PLANS.map((plan) => (
            <li
              key={plan.id}
              className={`${styles.card} ${plan.popular ? styles.cardPopular : ""}`}
            >
              <div className={styles.cardHead}>
                <h3 className={styles.cardName}>{plan.name}</h3>
                {plan.popular && <span className={styles.badge}>Mais popular</span>}
              </div>
              <p className={styles.cardDescription}>{plan.description}</p>

              <p className={styles.priceLabel}>a partir de</p>
              <p className={styles.price}>
                <span className={styles.priceCurrency}>R$</span>
                {formatPrice(plan.prices[period])}
                <span className={styles.pricePeriod}>/mês</span>
              </p>

              <a href="#" className={styles.cta}>
                Contratar assinatura
              </a>

              <ul className={styles.features}>
                {plan.features.map((f) => (
                  <li key={f.label} className={styles.feature}>
                    <IconCheck className={styles.featureIcon} />
                    <span>
                      {f.label}
                      {f.value && (
                        <>
                          <br />
                          {f.value}
                        </>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
