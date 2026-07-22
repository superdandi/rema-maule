import { Mail, Phone, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { contacto } from "@/data/contacto";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Contacto() {
  const redesActivas = contacto.redes.filter((red) => red.url);

  return (
    <section id="contacto" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-rema-petroleum md:text-4xl">
            Contacto
          </h2>
          <p className="mt-4 text-rema-stone-soft">
            Escríbenos o postula para ser socio de REMA Maule.
          </p>
        </AnimateOnScroll>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <AnimateOnScroll delay={100}>
            <a
              href={`mailto:${contacto.email}`}
              className="flex items-center gap-4 rounded-2xl border border-rema-cream-warm bg-rema-cream p-6 transition-colors hover:border-rema-orange"
            >
              <Mail className="h-6 w-6 text-rema-orange" />
              <div>
                <p className="text-sm text-rema-stone-soft">Correo</p>
                <p className="font-medium text-rema-petroleum">
                  {contacto.email}
                </p>
              </div>
            </a>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <a
              href={contacto.whatsappUrl}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-4 rounded-2xl border border-rema-cream-warm bg-rema-cream p-6 transition-colors hover:border-rema-orange"
            >
              <Phone className="h-6 w-6 text-rema-orange" />
              <div>
                <p className="text-sm text-rema-stone-soft">WhatsApp</p>
                <p className="font-medium text-rema-petroleum">
                  +56 9 0000 0000
                </p>
              </div>
            </a>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll delay={200}>
          <div className="mt-8 rounded-2xl border border-rema-cream-warm bg-rema-cream p-6">
            <h3 className="text-lg font-semibold text-rema-petroleum">
              Redes sociales
            </h3>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              {redesActivas.length > 0 ? (
                redesActivas.map((red) => (
                  <a
                    key={red.nombre}
                    href={red.url}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-rema-olive/20 px-4 py-2 text-sm font-medium text-rema-petroleum transition-colors hover:border-rema-orange hover:bg-rema-orange hover:text-white"
                  >
                    {red.nombre} <ExternalLink size={14} />
                  </a>
                ))
              ) : (
                <span className="text-sm text-rema-stone-soft italic">
                  Próximamente en redes sociales.
                </span>
              )}
              <span className="text-xs text-rema-stone-soft italic">
                (Ajusta las URLs en src/data/contacto.ts)
              </span>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={250}>
          <a
            href={contacto.formularioInscripcion}
            target="_blank"
            rel="noopener"
            className={cn(
              "mt-8 flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-center font-bold text-white transition-colors",
              "bg-rema-petroleum hover:bg-rema-petroleum-light"
            )}
          >
            Formulario para nuevos socios <ExternalLink size={18} />
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
