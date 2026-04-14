"use client";

import Link from "next/link";

import { useLanguage } from "@/providers/LanguageProvider";

const pageUrl = "https://www.estudiolcb.com.ar/articles/divorce-in-argentina";
const card =
  "rounded-3xl border border-zinc-800 bg-zinc-950/75 p-7 backdrop-blur-xl shadow-[14px_14px_30px_rgba(0,0,0,0.7),-8px_-8px_22px_rgba(63,63,70,0.18),inset_1px_1px_0_rgba(113,113,122,0.2)]";

const copy = {
  en: {
    title: "Divorce in Argentina: process, requirements and key agreements",
    description:
      "Practical guide to documentation, filing stages and major agreements in a divorce case in Argentina.",
    breadcrumbCurrent: "Divorce in Argentina",
    breadcrumbHome: "Home",
    breadcrumbArticles: "Articles",
    category: "Family law",
    intro:
      "Divorce in Argentina does not require proving fault. The main legal work usually lies in structuring arrangements regarding children, support, housing and assets in a way that reduces time, cost and future conflict.",
    docsTitle: "Common documentation",
    docs: [
      "Updated marriage certificate.",
      "ID documents for both parties.",
      "Birth certificates for children, if applicable.",
      "Information on income, domicile and relevant expenses.",
      "Documents related to marital or jointly used assets if there is a property dispute.",
    ],
    stagesTitle: "Main stages of the process",
    stages: [
      "Initial consultation to define strategy and documentation.",
      "Court filing of the divorce petition and proposed arrangements.",
      "Review of support, parental care, communication and housing issues if there are children.",
      "Divorce ruling and follow-up of the resulting agreements.",
    ],
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        question:
          "Can divorce be requested without agreement between the parties?",
        answer:
          "Yes. In Argentina a divorce may be filed unilaterally. Even so, it is advisable to submit a clear proposal about parental care, support, housing and assets to reduce conflict.",
      },
      {
        question: "What documents are usually needed to start the case?",
        answer:
          "Marriage certificate, ID documents, children's birth certificates when applicable and supporting information on income, domicile and assets are commonly required.",
      },
      {
        question:
          "What issues should be resolved besides the divorce ruling itself?",
        answer:
          "Besides dissolving the marriage, the case often involves support, parental care, communication arrangements, use of the family home and distribution of assets, depending on the situation.",
      },
    ],
    ctaTitle: "Divorce legal counsel in Tucuman",
    ctaText:
      "Dr. Miguel Alabi assists with divorce matters with or without prior agreement, drafting proposals, negotiation and court representation.",
    relatedPrefix:
      "If you also need to review assets or inheritance, you can read the guide on",
    relatedLink: "succession and inheritance in Argentina",
    ctaButton: "Request a consultation",
  },
  es: {
    title: "Divorcio en Argentina: proceso, requisitos y acuerdos clave",
    description:
      "Guia practica sobre documentacion, etapas del tramite y acuerdos importantes en un divorcio en Argentina.",
    breadcrumbCurrent: "Divorcio en Argentina",
    breadcrumbHome: "Inicio",
    breadcrumbArticles: "Articulos",
    category: "Derecho de familia",
    intro:
      "El divorcio en Argentina no exige probar culpa. La clave juridica suele estar en ordenar correctamente los acuerdos sobre hijos, alimentos, vivienda y bienes para reducir tiempos, costos y conflictos futuros.",
    docsTitle: "Documentacion habitual",
    docs: [
      "Partida de matrimonio actualizada.",
      "DNI de las partes.",
      "Partidas de nacimiento de hijos, si corresponde.",
      "Informacion sobre ingresos, domicilio y gastos relevantes.",
      "Documentacion sobre bienes gananciales o de uso comun si existe discusion patrimonial.",
    ],
    stagesTitle: "Etapas del tramite",
    stages: [
      "Consulta inicial para definir estrategia y documentacion.",
      "Presentacion judicial del pedido de divorcio y propuesta reguladora.",
      "Tratamiento de alimentos, cuidado personal, comunicacion y vivienda si hay hijos.",
      "Resolucion del divorcio y seguimiento de los acuerdos posteriores.",
    ],
    faqTitle: "Preguntas frecuentes",
    faqs: [
      {
        question: "Se puede pedir el divorcio sin acuerdo entre las partes?",
        answer:
          "Si. En Argentina el divorcio puede iniciarse de manera unilateral. Aun asi, conviene presentar una propuesta clara sobre cuidado personal, alimentos, vivienda y bienes para evitar mas conflicto.",
      },
      {
        question: "Que documentos suelen pedirse para iniciar el tramite?",
        answer:
          "Por lo general se requieren partida de matrimonio, DNI, partidas de nacimiento de hijos si corresponde y la documentacion util para respaldar ingresos, domicilio y bienes a distribuir.",
      },
      {
        question:
          "Que temas deben resolverse ademas de la sentencia de divorcio?",
        answer:
          "Ademas de la disolucion del vinculo, suelen analizarse alimentos, cuidado personal, regimen de comunicacion, atribucion del hogar y division de bienes, segun el caso.",
      },
    ],
    ctaTitle: "Asesoramiento para divorcios en Tucuman",
    ctaText:
      "Dr. Miguel Alabi acompana divorcios con o sin acuerdo previo, redaccion de propuestas, negociacion y representacion judicial.",
    relatedPrefix:
      "Si ademas necesitas analizar bienes o herencia, podes leer tambien la guia sobre",
    relatedLink: "sucesion y herencia en Argentina",
    ctaButton: "Solicitar consulta",
  },
} as const;

export default function DivorceInArgentinaContent() {
  const { language } = useLanguage();
  const t = copy[language];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: t.title,
      description: t.description,
      inLanguage: language === "es" ? "es-AR" : "en",
      articleSection: t.category,
      mainEntityOfPage: pageUrl,
      author: {
        "@type": "Person",
        name: "Dr. Miguel Alabi",
      },
      publisher: {
        "@type": "LegalService",
        name: "Dr. Miguel Alabi - Lawyer in Tucuman",
        logo: {
          "@type": "ImageObject",
          url: "https://www.estudiolcb.com.ar/logo.webp",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: t.faqs.map((item) => ({
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
              {t.breadcrumbHome}
            </Link>{" "}
            /{" "}
            <Link href="/articles" className="hover:text-zinc-200">
              {t.breadcrumbArticles}
            </Link>{" "}
            / <span className="text-zinc-300">{t.breadcrumbCurrent}</span>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">
            {t.category}
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-zinc-100 md:text-5xl">
            {t.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-300">
            {t.intro}
          </p>
        </section>

        <section className={card}>
          <h2 className="text-3xl font-bold text-zinc-100">{t.docsTitle}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-300">
            {t.docs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={card}>
          <h2 className="text-3xl font-bold text-zinc-100">{t.stagesTitle}</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-zinc-300">
            {t.stages.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </section>

        <section className={card}>
          <h2 className="text-3xl font-bold text-zinc-100">{t.faqTitle}</h2>
          <div className="mt-6 space-y-5">
            {t.faqs.map((item) => (
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
          <h2 className="text-3xl font-bold text-zinc-100">{t.ctaTitle}</h2>
          <p className="mt-4 text-zinc-300">{t.ctaText}</p>
          <p className="mt-4 text-zinc-400">
            {t.relatedPrefix}{" "}
            <Link
              href="/articles/succession-inheritance-argentina"
              className="font-medium text-zinc-200 hover:text-zinc-100"
            >
              {t.relatedLink}
            </Link>
            .
          </p>
          <Link href="/#Contact" className="neo-button mt-6 inline-block">
            {t.ctaButton}
          </Link>
        </section>
      </article>
    </main>
  );
}
