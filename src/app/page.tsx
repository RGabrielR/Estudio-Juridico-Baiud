import type { Metadata } from "next";

import AboutSection from "@/sections/aboutSection";
import ContactSection from "@/sections/contactSection";
import HeroSection from "@/sections/heroSection";
import ServicesSection from "@/sections/servicesSection";
import ValuesSection from "@/sections/valuesSection";

export const metadata: Metadata = {
  title: "Lawyer in Tucuman for labor, civil and family law",
  description:
    "Consult Dr. Miguel Alabi, a lawyer in Tucuman, for labor, civil, family and criminal law matters with in-person and remote service.",
  keywords: [
    "lawyer in Tucuman",
    "labor lawyer Tucuman",
    "civil lawyer Tucuman",
    "family lawyer Tucuman",
    "legal consultation Tucuman",
    "online lawyer Argentina",
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
