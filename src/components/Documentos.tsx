"use client";

import AnimateOnScroll from "@/components/AnimateOnScroll";

const documentos = [
  {
    nombre: "rema-sercotec.pdf",
    label: "Proyecto REMA SERCOTEC (PDF)",
    tipo: "PDF",
    url: "/rema-maule/rema-sercotec.pdf",
  },
  {
    nombre: "rema-sercotec.pptx",
    label: "Presentación REMA SERCOTEC (PPTX)",
    tipo: "PPTX",
    url: "/rema-maule/rema-sercotec.pptx",
  },
] as const;

export default function Documentos() {
  return (
    <section id="documentos" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-rema-petroleum md:text-4xl">
            Documentos
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-rema-stone-soft">
            Documentos de referencia del proyecto REMA Maule presentados a SERCOTEC.
          </p>
        </AnimateOnScroll>

        <div className="mt-10 space-y-4">
          {documentos.map((doc, index) => (
            <AnimateOnScroll key={index} delay={index * 100}>
              <a
                href={doc.url}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-4 rounded-lg border border-rema-olive/30 bg-rema-cream p-5 transition-colors hover:border-rema-olive hover:bg-rema-olive/10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-rema-petroleum/10 text-rema-petroleum font-mono text-sm font-semibold">
                  {doc.tipo}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-rema-petroleum truncate">
                    {doc.label}
                  </p>
                  <p className="text-sm text-rema-stone-soft">
                    {doc.nombre}
                  </p>
                </div>
                <span className="text-rema-stone-soft">↗</span>
              </a>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}