import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";

import Footer from "@/components/footer";
import Header from "@/components/header";
import UIProvider from "@/providers/UIProvider";

import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });

const siteUrl = "https://www.estudiolcb.com.ar";
const officeName = "Dr. Miguel Alabi - Abogado en Tucumán";
const officeDescription =
  "Estudio jurídico en Tucumán especializado en derecho civil, laboral, familia y penal. Miembro de la Asociación Europea de Abogados (AEA). Consultas presenciales y remotas para clientes en Argentina y el exterior.";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${siteUrl}/#legal-service`,
    name: officeName,
    description: officeDescription,
    url: `${siteUrl}/`,
    image: `${siteUrl}/herobanner.png`,
    telephone: "+54 381 4099177",
    email: "mailto:alabimiguel@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Avenida Salta 1563",
      addressLocality: "San Miguel de Tucumán",
      addressRegion: "Tucumán",
      postalCode: "4000",
      addressCountry: "AR",
    },
    openingHours: "Mo-Fr 08:00-20:00",
    priceRange: "$$",
    areaServed: [
      "San Miguel de Tucumán",
      "Tucumán",
      "Argentina",
      "América Latina",
    ],
    memberOf: {
      "@type": "Organization",
      name: "Asociación Europea de Abogados",
      alternateName: "AEA",
    },
    sameAs: ["https://wa.me/543814099177"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: officeName,
    url: `${siteUrl}/`,
    inLanguage: "es-AR",
    publisher: {
      "@id": `${siteUrl}/#legal-service`,
    },
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Abogado en Tucumán | Dr. Miguel Alabi",
    template: "%s | Dr. Miguel Alabi",
  },
  description: officeDescription,
  keywords: [
    "abogado Tucumán",
    "abogado San Miguel de Tucumán",
    "abogado Argentina",
    "estudio jurídico Tucumán",
    "Dr Miguel Alabi",
    "abogado laboral Tucumán",
    "abogado civil Tucumán",
    "abogado familia Tucumán",
    "abogado penal Tucumán",
    "Asociación Europea de Abogados",
    "AEA abogados Argentina",
    "abogado miembro AEA",
    "consulta legal Argentina",
    "abogado online Argentina",
    "abogado Latinoamérica",
    "lawyer Tucuman Argentina",
    "legal advice Argentina",
  ],
  category: "Legal",
  authors: [{ name: "Dr. Miguel Alabi" }],
  creator: "Dr. Miguel Alabi",
  publisher: "Dr. Miguel Alabi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: `${siteUrl}/`,
  },
  openGraph: {
    type: "website",
    title: "Abogado en Tucumán | Dr. Miguel Alabi",
    description: officeDescription,
    siteName: officeName,
    locale: "es_AR",
    url: `${siteUrl}/`,
    images: [
      {
        url: "/herobanner.png",
        width: 1200,
        height: 630,
        alt: officeName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abogado en Tucumán | Dr. Miguel Alabi",
    description: officeDescription,
    images: ["/herobanner.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "geo.region": "AR-T",
    "geo.placename": "San Miguel de Tucumán",
    "geo.position": "-26.8086267;-65.2052151",
    ICBM: "-26.8086267, -65.2052151",
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
        className={`${montserrat.className} min-h-screen bg-black text-zinc-100 antialiased`}
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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-1CK50HM2ZS"
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-1CK50HM2ZS');
      `}</Script>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17663647340"
        strategy="afterInteractive"
      />
      <Script id="gads-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-17663647340');
      `}</Script>
    </html>
  );
}
