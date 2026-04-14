import type { Metadata } from "next";

import AboutSection from "@/sections/aboutSection";
import ContactSection from "@/sections/contactSection";
import HeroSection from "@/sections/heroSection";
import ServicesSection from "@/sections/servicesSection";
import ValuesSection from "@/sections/valuesSection";

export const metadata: Metadata = {
  title: "Abogado en Tucumán para derecho laboral, civil y de familia",
  description:
    "Consultá con Dr. Miguel Alabi, abogado en Tucumán. Asesoramiento en derecho laboral, civil, familia y penal con atención presencial y online.",
  keywords: [
    "abogado en Tucumán",
    "abogado laboral Tucumán",
    "abogado civil Tucumán",
    "abogado de familia Tucumán",
    "consulta legal Tucumán",
    "abogado online Argentina",
  ],
  alternates: {
    canonical: "https://www.estudiolcb.com.ar/",
  },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
