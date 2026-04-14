"use client";

import Link from "next/link";

import { useLanguage } from "@/providers/LanguageProvider";

const pageUrl =
  "https://www.estudiolcb.com.ar/articles/succession-inheritance-argentina";
const card =
  "rounded-3xl border border-zinc-800 bg-zinc-950/75 p-7 backdrop-blur-xl shadow-[14px_14px_30px_rgba(0,0,0,0.7),-8px_-8px_22px_rgba(63,63,70,0.18),inset_1px_1px_0_rgba(113,113,122,0.2)]";

const copy = {
  en: {
    title: "Succession and inheritance in Argentina: how to start the process",
    description:
      "Practical guide to documentation, stages and critical points in succession proceedings in Argentina.",
    breadcrumbCurrent: "Succession and inheritance",
    breadcrumbHome: "Home",
    breadcrumbArticles: "Articles",
    category: "Civil law",
    intro:
      "A well-structured succession case is essential for registering assets, avoiding objections and reducing conflict among heirs. Early documentation and strategy usually make the difference.",
    docsTitle: "Basic documentation",
    docs: [
      "Death certificate.",
      "ID documents of the deceased person and the heirs.",
      "Birth or marriage certificates proving family relationship.",
      "Information on the last domicile.",
      "Deeds, titles, bank records or other documentation related to the estate.",
    ],
    stagesTitle: "Typical stages of the process",
    stages: [
      "Assessment of heirs and assets.",
      "Filing the succession case before the competent court.",
      "Public notices, official letters and proof of family relationship.",
      "Declaration of heirs and later registration or partition of assets.",
    ],
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        question: "When is it necessary to start a succession proceeding?",
        answer:
          "It is usually required when real estate, vehicles, money or other registrable assets must be legally transferred from a deceased person to the heirs.",
      },
      {
        question: "What documents are commonly required at the start?",
        answer:
          "Death certificate, identity documents, certificates proving family ties, information on the last domicile and documents related to the estate are commonly gathered first.",
      },
      {
        question:
          "Why does it help to organize the file carefully from day one?",
        answer:
          "Because an incomplete file leads to notices, observations and delays. A clear strategy from the start helps reduce unnecessary time and cost.",
      },
    ],
    ctaTitle: "Succession and inheritance legal support",
    ctaText:
      "Dr. Miguel Alabi advises on declarations of heirs, partitions, asset registration and succession disputes with a preventive or litigation-focused approach depending on the case.",
    relatedPrefix:
      "If you also need to review family issues connected to patrimony, you may want to read the guide on",
    relatedLink: "divorce in Argentina",
    ctaButton: "Request a consultation",
  },
  es: {
    title: "Sucesion y herencia en Argentina: como iniciar el tramite",
    description:
      "Guia orientativa sobre documentacion, etapas y puntos criticos del proceso sucesorio en Argentina.",
    breadcrumbCurrent: "Sucesion y herencia",
    breadcrumbHome: "Inicio",
    breadcrumbArticles: "Articulos",
    category: "Derecho civil",
    intro:
      "Un tramite sucesorio ordenado es clave para inscribir bienes, evitar objeciones y reducir conflictos entre herederos. La preparacion documental y la estrategia inicial suelen marcar la diferencia.",
    docsTitle: "Documentacion basica",
    docs: [
      "Partida de defuncion.",
      "DNI de la persona fallecida y de los herederos.",
      "Partidas de nacimiento o matrimonio para acreditar vinculo.",
      "Datos del ultimo domicilio.",
      "Escrituras, titulos, cuentas bancarias u otra documentacion de bienes.",
    ],
    stagesTitle: "Etapas habituales del proceso",
    stages: [
      "Relevamiento de herederos y bienes.",
      "Presentacion del expediente sucesorio ante el juzgado competente.",
      "Publicaciones, oficios y acreditacion del vinculo.",
      "Declaratoria de herederos y posterior inscripcion o particion de bienes.",
    ],
    faqTitle: "Preguntas frecuentes",
    faqs: [
      {
        question: "Cuando hace falta iniciar una sucesion?",
        answer:
          "La sucesion suele ser necesaria cuando hay que transferir inmuebles, vehiculos, dinero u otros bienes registrables de una persona fallecida a sus herederos.",
      },
      {
        question: "Que documentacion suele pedirse al comenzar?",
        answer:
          "Habitualmente se reunen partida de defuncion, documentos de identidad, partidas que acrediten vinculo, datos del ultimo domicilio y documentacion de los bienes que integran la herencia.",
      },
      {
        question:
          "Por que conviene ordenar bien el expediente desde el inicio?",
        answer:
          "Porque un expediente incompleto genera oficios, observaciones y demoras. Una estrategia prolija desde el comienzo ayuda a reducir tiempos y costos innecesarios.",
      },
    ],
    ctaTitle: "Asistencia en sucesiones y herencias",
    ctaText:
      "Dr. Miguel Alabi interviene en declaratorias de herederos, particiones, inscripcion de bienes y conflictos sucesorios con enfoque preventivo y litigioso segun el caso.",
    relatedPrefix:
      "Si necesitas revisar temas de familia vinculados al patrimonio, tambien puede interesarte la guia sobre",
    relatedLink: "divorcio en Argentina",
    ctaButton: "Solicitar consulta",
  },
} as const;

export default function SuccessionInheritanceContent() {
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
              href="/articles/divorce-in-argentina"
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
