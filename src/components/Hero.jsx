import "./Hero.css";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/andradebeatriz", icon: "gh" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/beatrizdeandradeleite/", icon: "in" },
  { label: "E-mail", href: "mailto:beatrizandrade020409@gmail.com", icon: "mail" },
];

function SocialIcon({ icon }) {
  if (icon === "gh") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55v-1.94c-3.16.69-3.83-1.52-3.83-1.52-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.16a10.9 10.9 0 0 1 5.72 0c2.18-1.47 3.13-1.16 3.13-1.16.63 1.57.24 2.73.12 3.02.73.79 1.17 1.8 1.17 3.04 0 4.35-2.66 5.31-5.19 5.59.41.35.77 1.04.77 2.11v3.13c0 .3.2.66.79.55 4.51-1.51 7.76-5.76 7.76-10.78C23.25 5.48 18.27.5 12 .5Z" />
      </svg>
    );
  }
  if (icon === "in") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.2.5 7.8 5.9L19.8 6H4.2Zm15.8 1.8-7.3 5.5a1.5 1.5 0 0 1-1.8 0L4.2 7.8V18a.5.5 0 0 0 .5.5h14.6a.5.5 0 0 0 .5-.5V7.8Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__glow" aria-hidden="true" />

      <aside className="hero__social" aria-label="Redes sociais">
        {SOCIALS.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
            <SocialIcon icon={s.icon} />
          </a>
        ))}
      </aside>

      <div className="container hero__content">
        <p className="eyebrow">AMS · Etec Fernando Prestes (extensão Fatec)</p>
        <h1 className="hero__title">
          Oi, sou a Beatriz<span className="hero__cursor">~</span>
        </h1>
        <p className="hero__subtitle">
          Estudante de Desenvolvimento de Sistemas reunindo, aqui, as palestras do
          AMS que assisti como horas complementares — junto dos aprendizados que
          levo de cada uma para a faculdade e para o mercado de trabalho.
        </p>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#2024">
            Ver palestras
          </a>
          <a
            className="btn btn--ghost"
            href="/Portfolio-Palestras-AMS.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Baixar PDF completo
          </a>
        </div>

        <a href="#sobre" className="hero__scroll">
          <span>Rolar</span>
          <span className="hero__scroll-pill">
            <span className="hero__scroll-dot" />
          </span>
        </a>
      </div>
    </section>
  );
}
