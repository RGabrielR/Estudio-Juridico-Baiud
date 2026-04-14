import type { Metadata } from "next";
import Link from "next/link";

const pageUrl =
  "https://www.estudiolcb.com.ar/articles/succession-inheritance-argentina";
const pageTitle = "Sucesión y herencia en Argentina: cómo iniciar el trámite";
const pageDescription =
  "Guía orientativa sobre documentación, etapas y puntos críticos del proceso sucesorio en Argentina.";

const faqItems = [
  {
    question: "¿Cuándo hace falta iniciar una sucesión?",
    answer:
      "La sucesión suele ser necesaria cuando hay que transferir inmuebles, vehículos, dinero u otros bienes registrables de una persona fallecida a sus herederos.",
  },
  {
    question: "¿Qué documentación suele pedirse al comenzar?",
    answer:
      "Habitualmente se reúnen partida de defunción, documentos de identidad, partidas que acrediten vínculo, datos del último domicilio y documentación de los bienes que integran la herencia.",
  },
  {
    question: "¿Por qué conviene ordenar bien el expediente desde el inicio?",
    answer:
      "Porque un expediente incompleto genera oficios, observaciones y demoras. Una estrategia prolija desde el comienzo ayuda a reducir tiempos y costos innecesarios.",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "sucesión en Argentina",
    "herencia en Argentina",
    "abogado sucesiones Tucumán",
    "declaratoria de herederos",
    "tramite sucesorio Argentina",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "article",
    url: pageUrl,
  },
};

const card =
  "rounded-3xl border border-zinc-800 bg-zinc-950/75 p-7 backdrop-blur-xl shadow-[14px_14px_30px_rgba(0,0,0,0.7),-8px_-8px_22px_rgba(63,63,70,0.18),inset_1px_1px_0_rgba(113,113,122,0.2)]";

export default function SuccessionInheritanceArgentinaPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: pageTitle,
      description: pageDescription,
      inLanguage: "es-AR",
      articleSection: "Derecho civil",
      mainEntityOfPage: pageUrl,
      author: {
        "@type": "Person",
        name: "Dr. Miguel Alabi",
      },
      publisher: {
        "@type": "LegalService",
        name: "Dr. Miguel Alabi - Abogado en Tucumán",
        logo: {
          "@type": "ImageObject",
          url: "https://www.estudiolcb.com.ar/logo.webp",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-6 py-16 text-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <article className="flex flex-col gap-8">
        <section className={card}>
          <nav aria-label="Breadcrumb" className="mb-5 text-sm text-zinc-400">
            <Link href="/" className="hover:text-zinc-200">
              Inicio
            </Link>{" "}
            /{" "}
            <Link href="/articles" className="hover:text-zinc-200">
              Artículos
            </Link>{" "}
            / <span className="text-zinc-300">Sucesión y herencia</span>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">
            Derecho civil
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-zinc-100 md:text-5xl">
            {pageTitle}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-300">
            Un trámite sucesorio ordenado es clave para inscribir bienes, evitar
            objeciones y reducir conflictos entre herederos. La preparación
            documental y la estrategia inicial suelen marcar la diferencia.
          </p>
        </section>

        <section className={card}>
          <h2 className="text-3xl font-bold text-zinc-100">
            Documentación básica
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-300">
            <li>Partida de defunción.</li>
            <li>DNI de la persona fallecida y de los herederos.</li>
            <li>Partidas de nacimiento o matrimonio para acreditar vínculo.</li>
            <li>Datos del último domicilio.</li>
            <li>
              Escrituras, títulos, cuentas bancarias u otra documentación de
              bienes.
            </li>
          </ul>
        </section>

        <section className={card}>
          <h2 className="text-3xl font-bold text-zinc-100">
            Etapas habituales del proceso
          </h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-zinc-300">
            <li>Relevamiento de herederos y bienes.</li>
            <li>
              Presentación del expediente sucesorio ante el juzgado competente.
            </li>
            <li>Publicaciones, oficios y acreditación del vínculo.</li>
            <li>
              Declaratoria de herederos y posterior inscripción o partición de
              bienes.
            </li>
          </ol>
        </section>

        <section className={card}>
          <h2 className="text-3xl font-bold text-zinc-100">
            Preguntas frecuentes
          </h2>
          <div className="mt-6 space-y-5">
            {faqItems.map((item) => (
              <article key={item.question} className="neo-inset p-5">
                <h3 className="text-xl font-semibold text-zinc-100">
                  {item.question}
                </h3>
                <p className="mt-2 text-zinc-300">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={card}>
          <h2 className="text-3xl font-bold text-zinc-100">
            Asistencia en sucesiones y herencias
          </h2>
          <p className="mt-4 text-zinc-300">
            Dr. Miguel Alabi interviene en declaratorias de herederos,
            particiones, inscripción de bienes y conflictos sucesorios con
            enfoque preventivo y litigioso según el caso.
          </p>
          <p className="mt-4 text-zinc-400">
            Si necesitás revisar temas de familia vinculados al patrimonio,
            también puede interesarte la guía sobre{" "}
            <Link
              href="/articles/divorce-in-argentina"
              className="font-medium text-zinc-200 hover:text-zinc-100"
            >
              divorcio en Argentina
            </Link>
            .
          </p>
          <Link href="/#Contact" className="neo-button mt-6 inline-block">
            Solicitar consulta
          </Link>
        </section>
      </article>
    </main>
  );
}
