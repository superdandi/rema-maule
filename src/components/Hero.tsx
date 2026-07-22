import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { contacto } from "@/data/contacto";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-rema-cream pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <AnimateOnScroll>
            <h1 className="text-4xl font-bold leading-tight text-rema-petroleum md:text-5xl lg:text-6xl">
              Red de Música y{" "}
              <span className="text-rema-orange">Artes del Maule</span>
            </h1>
            <p className="mt-6 text-lg text-rema-stone-soft md:text-xl">
              Fortalecemos el ecosistema creativo regional desde la cooperación,
              la asociatividad y el desarrollo de proyectos con impacto
              territorial.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={contacto.formularioInscripcion}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-rema-orange px-6 py-3 font-semibold text-white transition-colors hover:bg-rema-orange-dark"
              >
                Postula como socio <ArrowRight size={18} />
              </a>
              <a
                href="#presentacion"
                className="inline-flex items-center gap-2 rounded-full border-2 border-rema-petroleum px-6 py-3 font-semibold text-rema-petroleum transition-colors hover:bg-rema-petroleum hover:text-white"
              >
                Conoce más
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 rounded-3xl bg-rema-orange/10 blur-2xl" />
              <Image
                src="/rema-maule/remamaule.jpg"
                alt="Logo REMA Maule"
                width={640}
                height={641}
                className="relative rounded-3xl shadow-xl"
                priority
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
