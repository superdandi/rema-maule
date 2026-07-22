"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { contacto } from "@/data/contacto";

const links = [
  { label: "Presentación", href: "#presentacion" },
  { label: "Identidad", href: "#identidad" },
  { label: "Música", href: "#musica" },
  { label: "Líneas estratégicas", href: "#lineas" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-rema-olive/10 bg-rema-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-3">
          <Image
            src="/rema-maule/remamaule.jpg"
            alt="REMA Maule"
            width={56}
            height={56}
            className="h-12 w-auto"
            priority
          />
          <span className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-rema-petroleum">
            REMA Maule
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-rema-stone-soft transition-colors hover:text-rema-orange"
            >
              {link.label}
            </a>
          ))}
          <a
            href={contacto.formularioInscripcion}
            target="_blank"
            rel="noopener"
            className="rounded-full bg-rema-orange px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-rema-orange-dark"
          >
            Súmate
          </a>
        </nav>

        <button
          className="p-2 text-rema-petroleum md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-rema-olive/10 bg-rema-cream px-6 pb-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-rema-stone-soft transition-colors hover:text-rema-orange"
            >
              {link.label}
            </a>
          ))}
          <a
            href={contacto.formularioInscripcion}
            target="_blank"
            rel="noopener"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-rema-orange px-5 py-2 text-center font-semibold text-white"
          >
            Súmate
          </a>
        </div>
      )}
    </header>
  );
}
