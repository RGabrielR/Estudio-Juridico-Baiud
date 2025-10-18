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
    "Estudio Jurídico en San Salvador de Jujuy especializado en Derecho Civil, Familia, Laboral y Penal. Consultas legales con la Dra. Lidia Cristina Baiud. Atención personalizada y experiencia en defensa de sus derechos.",
  url: "https://www.estudiolcb.com.ar/",
  image: "https://www.estudiolcb.com.ar/logo.webp",
  telephone: "+54 388 4881609",
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
  openingHours: "Mo-Fr 08:00-20:00",
  priceRange: "$$",
  areaServed: "Jujuy, Argentina",
  sameAs: ["https://www.facebook.com/profile.php?id=100089098967597"],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.estudiolcb.com.ar'),
  title: {
    default: "Estudio Jurídico Baiud | Abogada en Jujuy – Derecho Civil, Familia y Laboral",
    template: "%s | Estudio Jurídico Baiud",
  },
  description:
    "Estudio Jurídico en San Salvador de Jujuy especializado en Derecho Civil, Familia, Laboral y Penal. Consultas legales con la Dra. Lidia Cristina Baiud. Atención personalizada y experiencia en defensa de sus derechos.",
  keywords: [
    "abogada en Jujuy",
    "estudio jurídico",
    "derecho de familia",
    "derecho laboral",
    "divorcios",
    "sucesiones",
    "despidos",
    "San Salvador de Jujuy",
    "abogados san salvador de jujuy",
    "derecho civil jujuy",
    "derecho penal jujuy",
    "asesoría legal jujuy",
    "mediación y arbitraje",
    "derecho comercial",
    "derecho previsional",
  ],
  category: "Legal",
  authors: [{ name: "Estudio Jurídico Lidia Cristina Baiud" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://www.estudiolcb.com.ar/",
  },
  openGraph: {
    type: "website",
    title: "Estudio Jurídico Baiud | Abogada en Jujuy – Derecho Civil, Familia y Laboral",
    description:
      "Estudio Jurídico en San Salvador de Jujuy especializado en Derecho Civil, Familia, Laboral y Penal. Consultas legales con la Dra. Lidia Cristina Baiud.",
    siteName: "Estudio Jurídico Baiud",
    locale: "es_AR",
    url: "https://www.estudiolcb.com.ar/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Estudio Jurídico Baiud | Abogada en Jujuy",
    description:
      "Consultas legales con la Dra. Lidia Cristina Baiud. Derecho Civil, Familia, Laboral y Penal en San Salvador de Jujuy.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1CK50HM2ZS"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1CK50HM2ZS');
            `,
          }}
        />

        {/* Google Ads Conversion Tracking */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17663647340"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17663647340');
            `,
          }}
        />
      </head>
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
