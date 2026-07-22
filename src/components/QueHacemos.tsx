import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function QueHacemos() {
  return (
    <section id="que-hacemos" className="bg-rema-cream py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-rema-petroleum md:text-4xl">
            ¿Qué hacemos?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-rema-stone-soft">
            Desarrollamos el ecosistema creativo del Maule a través de la
            formación, la producción, la circulación y la gestión colaborativa.
            Ponemos especial énfasis en el sector musical como motor de
            articulación cultural, y desde ahí abrimos el diálogo hacia todas
            las disciplinas artísticas y creativas de la región.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
