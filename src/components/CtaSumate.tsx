import { ArrowRight } from "lucide-react";
import { contacto } from "@/data/contacto";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function CtaSumate() {
  return (
    <section className="bg-rema-orange py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Súmate a REMA Maule
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Si eres artista, gestor, productor, técnico, artesano o organización
            cultural, postula para ser parte de esta red cooperativa.
          </p>
          <a
            href={contacto.formularioInscripcion}
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-rema-orange transition-colors hover:bg-rema-cream"
          >
            Completa el formulario de inscripción <ArrowRight size={18} />
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
