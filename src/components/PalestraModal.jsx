import { useEffect, useState } from "react";
import "./PalestraModal.css";

export default function PalestraModal({ palestra, onClose }) {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    // Só trava o scroll da página quando o modal está de fato aberto.
    // Sem esse `if`, o efeito rodava uma vez no carregamento inicial
    // (mesmo com palestra = null) e travava o scroll do site inteiro.
    if (!palestra) return;

    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [palestra, onClose]);

  if (!palestra) return null;

  const {
    titulo,
    palestrante,
    empresa,
    data,
    modalidade,
    resumo,
    aprendizados,
    reflexao,
    imagens,
  } = palestra;

  return (
    <div className="modal" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal__panel" role="dialog" aria-modal="true" aria-label={titulo}>
        <button className="modal__close" onClick={onClose} aria-label="Fechar">
          ×
        </button>

        <div className="modal__meta">
          <span>{data}</span>
          {modalidade && <span className="modal__tag">{modalidade}</span>}
        </div>

        <h3 className="modal__title">{titulo}</h3>
        <p className="modal__by">
          {palestrante ? palestrante : "Equipe convidada"}
          {empresa ? ` · ${empresa}` : ""}
        </p>

        <section className="modal__block">
          <h4>Resumo</h4>
          <p>{resumo}</p>
        </section>

        {imagens?.length > 0 && (
          <section className="modal__block">
            <h4>Registros</h4>
            <div className="modal__gallery">
              {imagens.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`Registro ${i + 1} da palestra ${titulo}`}
                  loading="lazy"
                  onClick={() => setLightbox(src)}
                />
              ))}
            </div>
          </section>
        )}

        {aprendizados?.length > 0 && (
          <section className="modal__block">
            <h4>Principais aprendizados</h4>
            <ul>
              {aprendizados.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {reflexao && (
          <section className="modal__block modal__block--reflexao">
            <h4>Reflexão pessoal</h4>
            <p>{reflexao}</p>
          </section>
        )}
      </div>

      {lightbox && (
        <div
          className="lightbox"
          onMouseDown={(e) => {
            e.stopPropagation();
            setLightbox(null);
          }}
        >
          <img src={lightbox} alt="Registro em tamanho ampliado" />
        </div>
      )}
    </div>
  );
}
