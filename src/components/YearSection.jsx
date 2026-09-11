import PalestraCard from "./PalestraCard";
import "./YearSection.css";

export default function YearSection({ ano, palestras, onOpen }) {
  return (
    <section id={String(ano)} className="year">
      <div className="container">
        <div className="year__header">
          <p className="eyebrow">Palestras {ano}</p>
          <h2 className="section-title">{palestras.length} palestras em {ano}</h2>
        </div>

        <div className="year__grid">
          {palestras.map((p) => (
            <PalestraCard key={p.id} palestra={p} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  );
}
