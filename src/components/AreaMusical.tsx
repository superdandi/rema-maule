import type { ElementType } from "react";
import {
  Mic2,
  Radio,
  Network,
  Calendar,
  Disc,
  Globe,
  ShieldCheck,
} from "lucide-react";
import { areaMusical } from "@/data/musica";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const iconMap: ElementType[] = [
  Mic2,
  Radio,
  Network,
  Calendar,
  Disc,
  Globe,
  ShieldCheck,
];

export default function AreaMusical() {
  return (
    <section
      id="musica"
      className="bg-rema-petroleum py-20 text-rema-cream md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-rema-cream md:text-4xl">
            {areaMusical.titulo}
          </h2>
          <p className="mt-4 max-w-2xl text-rema-cream-warm">
            {areaMusical.bajada}
          </p>
        </AnimateOnScroll>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areaMusical.items.map((item, index) => {
            const Icon = iconMap[index] || Mic2;
            return (
              <AnimateOnScroll key={item.titulo} delay={index * 80}>
                <div className="rounded-2xl bg-rema-petroleum-light/40 p-6 transition-transform hover:-translate-y-1">
                  <Icon className="h-8 w-8 text-rema-orange" />
                  <h3 className="mt-4 text-lg font-semibold">{item.titulo}</h3>
                  <p className="mt-2 text-sm text-rema-cream-warm/90">
                    {item.descripcion}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
