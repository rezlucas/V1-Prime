import styles from "./Footer.module.css";
import Logo from "../Logo";

const COLUMNS = [
  {
    title: "Empresa",
    links: [
      "Como funciona",
      "Carreiras",
      "Imprensa",
      "Blog",
      "Iniciativas verdes",
      { label: "Fale com o V1", href: "#contato" },
      "Trabalhe Conosco",
    ],
  },
  {
    title: "V1 Prime para empresas",
    links: ["Visão geral", "Corporações", "Agências de viagem", "Parcerias estratégicas"],
  },
  {
    title: "Nossos planos",
    links: ["Individual", "Essencial", "Plus", "Familiar"],
  },
  {
    title: "Explorar",
    links: ["Para empresários", "Para famílias", "Para turismo e viagens", "Para advogados"],
  },
  {
    title: "Legal",
    links: ["Política de Privacidade", "Portal de Privacidade", "Canal de Denúncias", "Termo de uso"],
  },
];

const SOCIALS = [
  {
    label: "Instagram",
    path: "M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Zm0 6.27a2.47 2.47 0 1 1 0-4.94 2.47 2.47 0 0 1 0 4.94ZM16.9 3H7.1A4.1 4.1 0 0 0 3 7.1v9.8A4.1 4.1 0 0 0 7.1 21h9.8a4.1 4.1 0 0 0 4.1-4.1V7.1A4.1 4.1 0 0 0 16.9 3Zm2.77 13.9a2.77 2.77 0 0 1-2.77 2.77H7.1a2.77 2.77 0 0 1-2.77-2.77V7.1A2.77 2.77 0 0 1 7.1 4.33h9.8a2.77 2.77 0 0 1 2.77 2.77v9.8ZM17.02 6.4a.98.98 0 1 0 0 1.96.98.98 0 0 0 0-1.96Z",
  },
  {
    label: "LinkedIn",
    path: "M6.94 8.5H4.1V20h2.84V8.5ZM5.52 3.5A1.65 1.65 0 1 0 5.53 6.8a1.65 1.65 0 0 0 0-3.3ZM20 13.3c0-3-1.6-4.4-3.75-4.4a3.24 3.24 0 0 0-2.94 1.62V8.5H10.5c.04.8 0 11.5 0 11.5h2.83v-6.4c0-.34.02-.68.12-.93.27-.68.9-1.4 1.94-1.4 1.37 0 1.92 1.05 1.92 2.58V20H20v-6.7Z",
  },
  {
    label: "Facebook",
    path: "M13.5 21v-7.9h2.65l.4-3.08h-3.05V8.05c0-.89.25-1.5 1.52-1.5h1.63V3.86c-.28-.04-1.25-.12-2.37-.12-2.35 0-3.96 1.43-3.96 4.06v2.27H7.66v3.07h2.66V21h3.18Z",
  },
  {
    label: "TikTok",
    path: "M14.5 3h2.6c.15 1.5 1 2.9 2.4 3.6.7.35 1.5.5 2.3.5v2.7c-1.5 0-2.9-.45-4.1-1.3v6.9c0 3-2.4 5.4-5.4 5.4S6.9 17.4 6.9 14.4c0-2.9 2.2-5.2 5-5.4v2.8c-1.3.2-2.3 1.3-2.3 2.6a2.7 2.7 0 0 0 5.4 0V3Z",
  },
  {
    label: "YouTube",
    path: "M21.5 7.4a2.8 2.8 0 0 0-1.97-1.98C17.8 5 12 5 12 5s-5.8 0-7.53.42A2.8 2.8 0 0 0 2.5 7.4 29.6 29.6 0 0 0 2.08 12a29.6 29.6 0 0 0 .42 4.6 2.8 2.8 0 0 0 1.97 1.98C6.2 19 12 19 12 19s5.8 0 7.53-.42a2.8 2.8 0 0 0 1.97-1.98A29.6 29.6 0 0 0 21.92 12a29.6 29.6 0 0 0-.42-4.6ZM10 15V9l5.2 3-5.2 3Z",
  },
  {
    label: "X",
    path: "M13.6 10.6 20 3h-1.9l-5.5 6.5L8.3 3H3l6.7 9.6L3 20h1.9l5.9-6.9 5.5 6.9H21l-7.4-9.4Z",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer} id="ajuda">
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logo}>
              <Logo className={styles.logoMark} />
              V1 Prime
            </span>
            <p className={styles.tagline}>
              Mobilidade premium por assinatura, com motoristas exclusivos e
              atendimento garantido via WhatsApp.
            </p>
            <p className={styles.seal}>Parte do Grupo Águia Branca e da VIXPar.</p>
            <div className={styles.socials}>
              {SOCIALS.map((s) => (
                <a key={s.label} href="#" aria-label={s.label} className={styles.social}>
                  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <nav className={styles.columns} aria-label="Links do rodapé">
            {COLUMNS.map((col) => (
              <div key={col.title} className={styles.column}>
                <h3>{col.title}</h3>
                <ul>
                  {col.links.map((link) => {
                    const label = typeof link === "string" ? link : link.label;
                    const href = typeof link === "string" ? "#" : link.href;
                    return (
                      <li key={label}>
                        <a href={href}>{label}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} V1 Prime. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
