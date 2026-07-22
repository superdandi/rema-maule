# REMA Maule — Red de Música y Artes del Maule

[![Deploy to GitHub Pages](https://github.com/superdandi/rema-maule/actions/workflows/deploy.yml/badge.svg)](https://github.com/superdandi/rema-maule/actions/workflows/deploy.yml)

Sitio web de **REMA Maule**, cooperativa en proceso de conformación que fortalece el ecosistema artístico y creativo de la Región del Maule.

🔗 **URL pública:** [https://superdandi.github.io/rema-maule](https://superdandi.github.io/rema-maule)

---

## Stack

- **Next.js 16** — App Router, export estático (`output: "export"`)
- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **lucide-react**
- **GitHub Pages** con despliegue automático vía GitHub Actions

## Estructura del contenido

El sitio es un *one-pager* con las siguientes secciones:

1. Hero con CTA al formulario de inscripción
2. Presentación
3. Nuestra identidad
4. Desarrollo del sector musical
5. Líneas estratégicas
6. ¿Qué hacemos?
7. CTA de suma
8. Contacto

## Editar contenido

Todo el texto editable se encuentra en `src/data/`:

- `presentacion.ts` — texto de presentación
- `identidad.ts` — sección de identidad (actualmente en el componente)
- `musica.ts` — área musical y sus 7 ejes
- `lineas.ts` — líneas estratégicas
- `contacto.ts` — correo, WhatsApp, redes y formulario de inscripción

## Formulario de inscripción

El botón "Súmate" enlaza al formulario de Google Forms ya existente:

[https://forms.gle/GwsSFR45EFwvZzt59](https://forms.gle/GwsSFR45EFwvZzt59)

Actualiza la URL en `src/data/contacto.ts` si cambia.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000/rema-maule](http://localhost:3000/rema-maule).

## Build de producción

```bash
npm run build
```

Genera el sitio estático en la carpeta `out/`.

## Despliegue

Cada push a `main` dispara el workflow `.github/workflows/deploy.yml`, que construye y publica el sitio en GitHub Pages.

---

© REMA Maule. Todos los derechos reservados.
