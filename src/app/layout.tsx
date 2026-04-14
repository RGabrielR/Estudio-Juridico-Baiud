import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";

import Footer from "@/components/footer";
import Header from "@/components/header";
import UIProvider from "@/providers/UIProvider";

import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });

const siteUrl = "https://www.estudiolcb.com.ar";
const officeName = "Dr. Miguel Alabi - Lawyer in Tucuman";
const officeDescription =
  "Law firm in Tucuman focused on civil, labor, family and criminal law. Member of the European Association of Lawyers (AEA). In-person and remote consultations for clients in Argentina and abroad.";
const socialLogo = `${siteUrl}/logo.png`;

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${siteUrl}/#legal-service`,
    name: officeName,
    description: officeDescription,
    url: `${siteUrl}/`,
    image: socialLogo,
    logo: socialLogo,
    telephone: "+54 381 4099177",
    email: "mailto:alabimiguel@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Avenida Salta 1563",
      addressLocality: "San Miguel de Tucuman",
      addressRegion: "Tucuman",
      postalCode: "4000",
      addressCountry: "AR",
    },
    openingHours: "Mo-Fr 08:00-20:00",
    priceRange: "$$",
    areaServed: [
      "San Miguel de Tucuman",
      "Tucuman",
      "Argentina",
      "Latin America",
    ],
    memberOf: {
      "@type": "Organization",
      name: "European Association of Lawyers",
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
    inLanguage: "en",
    publisher: {
      "@id": `${siteUrl}/#legal-service`,
    },
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lawyer in Tucuman | Dr. Miguel Alabi",
    template: "%s | Dr. Miguel Alabi",
  },
  description: officeDescription,
  keywords: [
    "lawyer Tucuman",
    "lawyer San Miguel de Tucuman",
    "lawyer Argentina",
    "law firm Tucuman",
    "Dr Miguel Alabi",
    "labor lawyer Tucuman",
    "civil lawyer Tucuman",
    "family lawyer Tucuman",
    "criminal lawyer Tucuman",
    "European Association of Lawyers",
    "AEA lawyers Argentina",
    "lawyer AEA member",
    "legal consultation Argentina",
    "online lawyer Argentina",
    "lawyer Latin America",
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
    title: "Lawyer in Tucuman | Dr. Miguel Alabi",
    description: officeDescription,
    siteName: officeName,
    locale: "en_US",
    url: `${siteUrl}/`,
    images: [
      {
        url: "/logo.png",
        alt: `${officeName} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lawyer in Tucuman | Dr. Miguel Alabi",
    description: officeDescription,
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  other: {
    "geo.region": "AR-T",
    "geo.placename": "San Miguel de Tucuman",
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
    <html lang="en">
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
