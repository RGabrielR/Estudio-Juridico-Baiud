import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import Footer from "@/components/footer";
import Header from "@/components/header";
import UIProvider from "@/providers/UIProvider";

import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Estudio Jurídico Lidia Cristina Baiud",
  description:
    "Estudio jurídico integral en San Salvador de Jujuy especializado en derecho civil, laboral, comercial, previsional y mediación.",
  url: "https://estudio-baiud.com.ar/",
  image: "https://estudio-baiud.com.ar/og-image.jpg",
  telephone: "+54-388-4881-609",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ramírez de Velazco 672",
    addressLocality: "San Salvador de Jujuy",
    addressRegion: "Jujuy",
    postalCode: "4600",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -24.1841566,
    longitude: -65.2963359,
  },
  openingHours: "Mo-Fr 09:00-18:00",
  sameAs: ["https://www.facebook.com/profile.php?id=100089098967597"],
};

export const metadata: Metadata = {
  title: {
    default: "Estudio Jurídico Baiud | Abogacía integral en Jujuy",
    template: "%s | Estudio Jurídico Baiud",
  },
  description:
    "Servicio legal integral en San Salvador de Jujuy liderado por la Dra. Lidia Cristina Baiud. Asesoramiento y representación en derecho civil, laboral, comercial, previsional, sucesiones y mediación.",
  keywords: [
    "estudio jurídico en jujuy",
    "abogados san salvador de jujuy",
    "derecho civil",
    "derecho laboral",
    "asesoría legal",
    "mediación y arbitraje",
    "derecho comercial",
    "derecho previsional",
    "sucesiones",
  ],
  category: "Legal",
  authors: [{ name: "Estudio Jurídico Lidia Cristina Baiud" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Estudio Jurídico Baiud | Abogacía integral en Jujuy",
    description:
      "Equipo legal con más de 20 años de experiencia en derecho civil, laboral, comercial, previsional y mediación en San Salvador de Jujuy.",
    siteName: "Estudio Jurídico Baiud",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Estudio Jurídico Baiud | Abogacía integral en Jujuy",
    description:
      "Representación legal estratégica y cercana en Jujuy. Consultas presenciales y virtuales.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR">
      <body
        className={`${montserrat.className} min-h-screen bg-slate-50 text-slate-900 antialiased`}
      >
        <UIProvider>
          <Header />
          {children}
          <Footer />
        </UIProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
