"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Logo from "../Logo";
import { IconClose, IconMenu } from "../icons";

const NAV_LINKS = [
  { label: "Nossos serviços", href: "#servicos" },
  { label: "Vantagens", href: "#vantagens" },
  { label: "Comparativo", href: "#comparativo" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const threshold = () => window.innerHeight * 0.82;
    const onScroll = () => setSolid(window.scrollY > threshold());
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`${styles.header} ${solid ? styles.solid : ""}`}>
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.logo} aria-label="V1 Prime, início">
          <Logo className={styles.logoMark} />
        </Link>

        <nav className={styles.nav} aria-label="Navegação principal">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={styles.burger}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
      >
        <nav aria-label="Navegação mobile">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
