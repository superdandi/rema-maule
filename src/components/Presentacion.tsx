import { presentacion } from "@/data/presentacion";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Presentacion() {
  return (
    <section id="presentacion" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-rema-petroleum md:text-4xl">
            {presentacion.titulo}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-rema-stone-soft">
            {presentacion.bajada}
          </p>
        </AnimateOnScroll>

        <div className="mt-10 space-y-6">
          {presentacion.parrafos.map((parrafo, index) => (
            <AnimateOnScroll key={index} delay={index * 100}>
              <p className="text-base leading-relaxed text-rema-stone md:text-lg">
                {parrafo}
              </p>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
