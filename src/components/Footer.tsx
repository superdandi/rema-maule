import { contacto } from "@/data/contacto";

export default function Footer() {
  return (
    <footer className="bg-rema-stone py-10 text-rema-cream">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-[family-name:var(--font-playfair)] text-xl font-bold">
              REMA Maule
            </p>
            <p className="mt-1 text-sm text-rema-cream-warm">
              Red de Música y Artes del Maule
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="#presentacion"
              className="transition-colors hover:text-rema-orange"
            >
              Presentación
            </a>
            <a
              href="#identidad"
              className="transition-colors hover:text-rema-orange"
            >
              Identidad
            </a>
            <a
              href="#musica"
              className="transition-colors hover:text-rema-orange"
            >
              Música
            </a>
            <a
              href="#lineas"
              className="transition-colors hover:text-rema-orange"
            >
              Líneas estratégicas
            </a>
            <a
              href="#contacto"
              className="transition-colors hover:text-rema-orange"
            >
              Contacto
            </a>
            <a
              href={contacto.formularioInscripcion}
              target="_blank"
              rel="noopener"
              className="transition-colors hover:text-rema-orange"
            >
              Súmate
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-rema-cream-warm/20 pt-6 text-center text-xs text-rema-cream-warm/70">
          © {new Date().getFullYear()} REMA Maule. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
