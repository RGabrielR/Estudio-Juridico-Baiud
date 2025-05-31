import AboutSection from "@/sections/aboutSection";
import ContactSection from "@/sections/contactSection";
import HeroSection from "@/sections/heroSection";
import ServicesSection from "@/sections/servicesSection";
import ValuesSection from "@/sections/valuesSection";

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
