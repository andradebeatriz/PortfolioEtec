import "./About.css";
import palestras from "../data/palestras";

export default function About() {
  const anos = [...new Set(palestras.map((p) => p.ano))];
  const stats = [
    { value: palestras.length, label: "palestras assistidas" },
    { value: anos.length, label: "anos de AMS" },
    { value: "60h", label: "de horas complementares" },
  ];

  return (
    <section id="sobre" className="about">
      <div className="container about__grid">
        <div>
          <p className="eyebrow">Sobre o portfólio</p>
          <h2 className="section-title">
            Um registro do que aprendi fora da sala de aula
          </h2>
          <p className="about__text">
            Este portfólio reúne as palestras do AMS que assisti ao longo do
            curso técnico em Desenvolvimento de Sistemas na Etec Fernando
            Prestes (extensão Fatec), contabilizadas como horas
            complementares — pré-requisito importante para o ingresso no
            ensino superior.
          </p>
          <p className="about__text">
            Para cada palestra, deixei um resumo do que foi apresentado, os
            principais aprendizados e, quando fez sentido, uma reflexão
            pessoal sobre como aquele conteúdo se conecta com a minha
            formação e com o mercado de tecnologia.
          </p>
        </div>

        <div className="about__stats">
          {stats.map((s) => (
            <div key={s.label} className="stat-card">
              <span className="stat-card__value">{s.value}</span>
              <span className="stat-card__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
