import "./Contact.css";

export default function Contact() {
  return (
    <footer id="contato" className="contact">
      <div className="container contact__inner">
        <div>
          <p className="eyebrow">Contato</p>
          <h2 className="section-title">Vamos conversar?</h2>
          <p className="section-lede">
            Dúvidas sobre alguma palestra ou quer trocar uma ideia sobre
            tecnologia e carreira em TI? É só me chamar.
          </p>
        </div>

        <div className="contact__links">
          <a href="mailto:beatrizandrade020409@gmail.com" className="btn btn--primary">
            Email
          </a>
          <a
            href="https://github.com/andradebeatriz"
            target="_blank"
            rel="noreferrer"
            className="btn btn--ghost"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <p className="contact__credit">
        Beatriz de Andrade Leite · Desenvolvimento de Sistemas · Etec Fernando
        Prestes (extensão Fatec)
      </p>
    </footer>
  );
}
