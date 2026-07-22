import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "REMA Maule — Red de Música y Artes del Maule",
  description:
    "REMA Maule es una cooperativa en proceso de conformación que fortalece el ecosistema artístico y creativo de la Región del Maule mediante la colaboración, la asociatividad y el desarrollo de proyectos con impacto territorial.",
  icons: { icon: "/rema-maule/favicon.png", apple: "/rema-maule/favicon.png" },
  openGraph: {
    title: "REMA Maule — Red de Música y Artes del Maule",
    description:
      "Cooperativa que fortalece el ecosistema artístico y creativo de la Región del Maule.",
    type: "website",
    url: "https://superdandi.github.io/rema-maule/",
    images: [
      {
        url: "https://superdandi.github.io/rema-maule/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "REMA Maule - Red de Música y Artes del Maule",
      },
    ],
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title: "REMA Maule — Red de Música y Artes del Maule",
    description:
      "Cooperativa que fortalece el ecosistema artístico y creativo de la Región del Maule.",
    images: ["https://superdandi.github.io/rema-maule/og-image.jpg"],
  },
  other: {
    "theme-color": "#F8ECE0",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={cn(
        inter.variable,
        playfair.variable,
        "scroll-smooth"
      )}
    >
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
