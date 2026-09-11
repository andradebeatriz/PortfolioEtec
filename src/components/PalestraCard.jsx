import "./PalestraCard.css";

export default function PalestraCard({ palestra, onOpen }) {
  const { titulo, palestrante, empresa, data, modalidade, resumo, imagens } = palestra;
  const capa = imagens?.[0];

  return (
    <article className="p-card">
      {capa && (
        <button
          className="p-card__cover"
          onClick={() => onOpen(palestra)}
          aria-label={`Ver detalhes de ${titulo}`}
        >
          <img src={capa} alt="" loading="lazy" />
          {imagens.length > 1 && (
            <span className="p-card__cover-count">+{imagens.length - 1}</span>
          )}
        </button>
      )}

      <div className="p-card__meta">
        <span className="p-card__date">{data}</span>
        {modalidade && <span className="p-card__tag">{modalidade}</span>}
      </div>

      <h3 className="p-card__title">{titulo}</h3>

      <p className="p-card__by">
        {palestrante ? `${palestrante}` : "Equipe convidada"}
        {empresa ? ` · ${empresa}` : ""}
      </p>

      <p className="p-card__resumo">{resumo}</p>

      <button className="p-card__cta" onClick={() => onOpen(palestra)}>
        Ver aprendizados
        <span aria-hidden="true">→</span>
      </button>
    </article>
  );
}
