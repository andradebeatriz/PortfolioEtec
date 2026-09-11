import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import YearSection from "./components/YearSection";
import PalestraModal from "./components/PalestraModal";
import Contact from "./components/Contact";
import palestras from "./data/palestras";

export default function App() {
  const [selected, setSelected] = useState(null);

  const porAno = useMemo(() => {
    const anos = [...new Set(palestras.map((p) => p.ano))].sort();
    return anos.map((ano) => ({
      ano,
      lista: palestras.filter((p) => p.ano === ano),
    }));
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        {porAno.map(({ ano, lista }) => (
          <YearSection key={ano} ano={ano} palestras={lista} onOpen={setSelected} />
        ))}
      </main>
      <Contact />
      <PalestraModal palestra={selected} onClose={() => setSelected(null)} />
    </>
  );
}
