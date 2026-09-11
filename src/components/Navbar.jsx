import { useEffect, useState } from "react";
import "./Navbar.css";

const LINKS = [
  { href: "#home", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#2024", label: "2024" },
  { href: "#2025", label: "2025" },
  { href: "#2026", label: "2026" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner container">
        <a href="#home" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__brand-mark" aria-hidden="true">
            ✷
          </span>
          <img
            src="/Palestras.png"
            alt="Logotipo com o texto Palestras, exibido na barra de navegação do site."
            className="nav__brand-logo"
            style={{ width: "8rem", height: "auto" }}
          />
        </a>

        <nav className={`nav__links ${open ? "nav__links--open" : ""}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="nav__toggle"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
