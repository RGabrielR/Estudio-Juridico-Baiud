import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import UIProvider from "@/providers/UIProvider";
import Footer from "@/components/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Estudio Jurídico - Cristina Baiud",
  description:
    "En estudio jurídico, ofrecemos servicios legales especializados en diversas áreas del derecho. Nuestro equipo de abogados altamente capacitados está comprometido a brindar asesoramiento y representación legal de calidad. Nos enfocamos en entender las necesidades de nuestros clientes y proporcionar soluciones efectivas y personalizadas. Con una sólida reputación en el sector, estamos aquí para proteger sus derechos y alcanzar los mejores resultados posibles.",
  keywords:
    "estudio jurídico, servicios legales, abogados, asesoramiento legal, representación legal, derecho, soluciones legales, protección de derechos, resultados legales, firma de abogados, consulta legal, litigio, mediación, arbitraje, derecho civil, derecho penal, derecho laboral, derecho familiar, derecho comercial, derecho tributario, derecho administrativo, derecho internacional, defensa legal, derechos humanos, justicia, ética legal, profesionalismo, experiencia legal, compromiso con el cliente.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR">
      <body className={montserrat.className}>
        <UIProvider>
          <Header />
          {children}
          <Footer />
        </UIProvider>
      </body>
    </html>
  );
}
