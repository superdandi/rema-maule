import type { ElementType } from "react";
import {
  Music,
  GraduationCap,
  Rocket,
  Users,
  TrendingUp,
  Cpu,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { lineasEstrategicas } from "@/data/lineas";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const iconMap: Record<string, ElementType> = {
  Music,
  GraduationCap,
  Rocket,
  Users,
  TrendingUp,
  Cpu,
  MapPin,
};

export default function LineasEstrategicas() {
  return (
    <section id="lineas" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-rema-petroleum md:text-4xl">
            {lineasEstrategicas.titulo}
          </h2>
        </AnimateOnScroll>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lineasEstrategicas.items.map((item, index) => {
            const Icon = iconMap[item.icono] || Music;
            return (
              <AnimateOnScroll key={item.titulo} delay={index * 80}>
                <article
                  className={cn(
                    "relative h-full rounded-2xl border p-6 transition-shadow hover:shadow-lg",
                    item.prioritaria
                      ? "border-rema-orange bg-rema-orange/5"
                      : "border-rema-cream-warm bg-rema-cream"
                  )}
                >
                  {item.prioritaria && (
                    <span className="absolute right-4 top-4 rounded-full bg-rema-orange px-2 py-1 text-xs font-bold text-white">
                      Prioritaria
                    </span>
                  )}
                  <Icon
                    className={cn(
                      "h-8 w-8",
                      item.prioritaria ? "text-rema-orange" : "text-rema-olive"
                    )}
                  />
                  <h3 className="mt-4 text-lg font-semibold text-rema-petroleum">
                    {item.titulo}
                  </h3>
                  <p className="mt-2 text-sm text-rema-stone-soft">
                    {item.descripcion}
                  </p>
                </article>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
