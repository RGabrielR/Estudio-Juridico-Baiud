import type { Metadata } from "next";
import Link from "next/link";

const pageUrl = "https://www.estudiolcb.com.ar/articles/divorce-in-argentina";
const pageTitle = "Divorcio en Argentina: proceso, requisitos y acuerdos clave";
const pageDescription =
  "Guía práctica sobre documentación, etapas del trámite y acuerdos importantes en un divorcio en Argentina.";

const faqItems = [
  {
    question: "¿Se puede pedir el divorcio sin acuerdo entre las partes?",
    answer:
      "Sí. En Argentina el divorcio puede iniciarse de manera unilateral. Aun así, conviene presentar una propuesta clara sobre cuidado personal, alimentos, vivienda y bienes para evitar más conflicto.",
  },
  {
    question: "¿Qué documentos suelen pedirse para iniciar el trámite?",
    answer:
      "Por lo general se requieren partida de matrimonio, DNI, partidas de nacimiento de hijos si corresponde y la documentación útil para respaldar ingresos, domicilio y bienes a distribuir.",
  },
  {
    question: "¿Qué temas deben resolverse además de la sentencia de divorcio?",
    answer:
      "Además de la disolución del vínculo, suelen analizarse alimentos, cuidado personal, régimen de comunicación, atribución del hogar y división de bienes, según el caso.",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "divorcio en Argentina",
    "abogado de familia Tucumán",
    "tramite de divorcio Argentina",
    "divorcio unilateral Argentina",
    "acuerdo de divorcio Argentina",
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

export default function DivorceInArgentinaPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: pageTitle,
      description: pageDescription,
      inLanguage: "es-AR",
      articleSection: "Derecho de familia",
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
            / <span className="text-zinc-300">Divorcio en Argentina</span>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">
            Derecho de familia
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-zinc-100 md:text-5xl">
            {pageTitle}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-300">
            El divorcio en Argentina no exige probar culpa. La clave jurídica
            suele estar en ordenar correctamente los acuerdos sobre hijos,
            alimentos, vivienda y bienes para reducir tiempos, costos y
            conflictos futuros.
          </p>
        </section>

        <section className={card}>
          <h2 className="text-3xl font-bold text-zinc-100">
            Documentación habitual
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-300">
            <li>Partida de matrimonio actualizada.</li>
            <li>DNI de las partes.</li>
            <li>Partidas de nacimiento de hijos, si corresponde.</li>
            <li>Información sobre ingresos, domicilio y gastos relevantes.</li>
            <li>
              Documentación sobre bienes gananciales o de uso común si existe
              discusión patrimonial.
            </li>
          </ul>
        </section>

        <section className={card}>
          <h2 className="text-3xl font-bold text-zinc-100">
            Etapas del trámite
          </h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-zinc-300">
            <li>Consulta inicial para definir estrategia y documentación.</li>
            <li>
              Presentación judicial del pedido de divorcio y propuesta
              reguladora.
            </li>
            <li>
              Tratamiento de alimentos, cuidado personal, comunicación y
              vivienda si hay hijos.
            </li>
            <li>
              Resolución del divorcio y seguimiento de los acuerdos posteriores.
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
            Asesoramiento para divorcios en Tucumán
          </h2>
          <p className="mt-4 text-zinc-300">
            Dr. Miguel Alabi acompaña divorcios con o sin acuerdo previo,
            redacción de propuestas, negociación y representación judicial.
          </p>
          <p className="mt-4 text-zinc-400">
            Si además necesitás analizar bienes o herencia, podés leer también
            la guía sobre{" "}
            <Link
              href="/articles/succession-inheritance-argentina"
              className="font-medium text-zinc-200 hover:text-zinc-100"
            >
              sucesión y herencia en Argentina
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
