import Hero from "@/components/Hero";
import Presentacion from "@/components/Presentacion";
import Identidad from "@/components/Identidad";
import Documentos from "@/components/Documentos";
import AreaMusical from "@/components/AreaMusical";
import LineasEstrategicas from "@/components/LineasEstrategicas";
import QueHacemos from "@/components/QueHacemos";
import CtaSumate from "@/components/CtaSumate";
import Contacto from "@/components/Contacto";

export default function Home() {
  return (
    <>
      <Hero />
      <Presentacion />
      <Identidad />
      <Documentos />
      <AreaMusical />
      <LineasEstrategicas />
      <QueHacemos />
      <CtaSumate />
      <Contacto />
    </>
  );
}
