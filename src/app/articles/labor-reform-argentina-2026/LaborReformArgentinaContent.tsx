"use client";

import Link from "next/link";

import { useLanguage } from "@/providers/LanguageProvider";

const pageUrl =
  "https://www.estudiolcb.com.ar/articles/labor-reform-argentina-2026";
const softCard =
  "rounded-[2rem] border border-zinc-800 bg-zinc-950/75 p-7 backdrop-blur-2xl shadow-[16px_16px_36px_rgba(0,0,0,0.78),-10px_-10px_24px_rgba(63,63,70,0.22),inset_1px_1px_0_rgba(113,113,122,0.25)]";

const copy = {
  en: {
    title: "Law 27.802: key points of labor reform in Argentina",
    description:
      "Overview of several changes attributed to Law 27.802 and their possible impact on workers and employers.",
    breadcrumbCurrent: "Labor reform",
    breadcrumbHome: "Home",
    breadcrumbArticles: "Articles",
    category: "Labor law in Argentina",
    intro:
      "This guide offers an orientation-focused summary of several points commonly discussed around Law 27.802. The real impact in any case depends on the current regulation, implementing rules and supporting documentation.",
    changesTitle: "Five points worth reviewing",
    changes: [
      {
        title: "Changes in compensation calculations",
        text: "A change in how certain compensation items are calculated can affect the final amount and makes case-by-case review more important.",
      },
      {
        title: "New documentary and compliance burdens",
        text: "Companies should reinforce registration, documentation and formal compliance to reduce exposure during inspections or disputes.",
      },
      {
        title: "Greater importance of written agreements",
        text: "Agreements on working time, compensation and work organization need clear drafting and solid proof to avoid later disputes.",
      },
      {
        title: "Review of vacations and rest periods",
        text: "Leave and rest schemes should be reviewed carefully to avoid affecting acquired rights or generating breaches.",
      },
      {
        title: "Regularization and transition windows",
        text: "Some changes may open regularization or transition scenarios. Their practical convenience depends on current regulation and the employment history involved.",
      },
    ],
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        question: "Does labor reform affect every case in the same way?",
        answer:
          "No. The specific effect depends on the type of employment relationship, the relevant dates, the current regulation and the documentation available in each case.",
      },
      {
        question: "What should employers review first?",
        answer:
          "Contracts, personnel files, receipts, internal policies, time control records and settlement criteria are usually good starting points to identify risk before a conflict arises.",
      },
      {
        question: "What should workers review first?",
        answer:
          "It is important to keep pay slips, telegrams, registration records and proof of the work actually performed in order to assess differences or breaches.",
      },
    ],
    ctaTitle: "Labor advice for companies and workers",
    ctaText:
      "Dr. Miguel Alabi advises on labor compliance, contract review, dismissals, settlements and litigation linked to regulatory changes.",
    relatedPrefix:
      "If you need to review a specific dismissal or salary difference, you can also read the guide on",
    relatedLink: "dismissal without cause in Argentina",
    ctaButton: "Request a consultation",
    moreArticles: "See more articles",
  },
  es: {
    title: "Ley 27.802: puntos clave de la reforma laboral en Argentina",
    description:
      "Resumen orientativo sobre algunos cambios atribuidos a la Ley 27.802 y su posible impacto para trabajadores y empleadores.",
    breadcrumbCurrent: "Reforma laboral",
    breadcrumbHome: "Inicio",
    breadcrumbArticles: "Articulos",
    category: "Derecho laboral en Argentina",
    intro:
      "Esta guia resume de forma orientativa algunos ejes que suelen mencionarse al analizar la Ley 27.802. La aplicacion concreta debe revisarse con la normativa vigente, la reglamentacion disponible y la documentacion de cada caso.",
    changesTitle: "Cinco puntos a revisar",
    changes: [
      {
        title: "Cambios en el calculo indemnizatorio",
        text: "La revision del modo de calcular determinados rubros puede impactar en el monto final y vuelve mas importante controlar la liquidacion caso por caso.",
      },
      {
        title: "Nuevas cargas y obligaciones documentales",
        text: "Las empresas deben extremar registracion, respaldo documental y cumplimiento formal para reducir contingencias ante inspecciones o conflictos.",
      },
      {
        title: "Mayor relevancia de acuerdos escritos",
        text: "Los pactos sobre jornadas, compensaciones y organizacion del trabajo requieren redaccion clara y prueba suficiente para evitar discusiones posteriores.",
      },
      {
        title: "Revision de vacaciones y tiempos de descanso",
        text: "Los esquemas de licencias y descansos deben analizarse con atencion para no afectar derechos adquiridos ni generar incumplimientos.",
      },
      {
        title: "Regularizacion laboral y ventanas de adecuacion",
        text: "Algunos cambios abren escenarios de normalizacion o adecuacion. La conveniencia practica depende de la reglamentacion vigente y del historial laboral.",
      },
    ],
    faqTitle: "Preguntas frecuentes",
    faqs: [
      {
        question: "La reforma laboral impacta igual en todos los casos?",
        answer:
          "No. La aplicacion concreta depende del tipo de vinculo, la fecha de los hechos, la reglamentacion vigente y la documentacion de cada relacion laboral.",
      },
      {
        question: "Que deberian revisar primero los empleadores?",
        answer:
          "Conviene revisar contratos, legajos, recibos, politicas internas, control horario y criterios de liquidacion para detectar riesgos antes de un conflicto.",
      },
      {
        question: "Que deberian revisar primero los trabajadores?",
        answer:
          "Es importante conservar recibos, telegramas, constancias de registracion y cualquier prueba del trabajo efectivamente prestado para evaluar si hubo diferencias o incumplimientos.",
      },
    ],
    ctaTitle: "Asesoramiento laboral para empresas y trabajadores",
    ctaText:
      "Dr. Miguel Alabi asesora en cumplimiento laboral, revision de contratos, despidos, liquidaciones y litigios relacionados con cambios normativos.",
    relatedPrefix:
      "Si necesitas revisar un caso concreto de despido o diferencias salariales, tambien podes leer la guia sobre",
    relatedLink: "despido sin causa en Argentina",
    ctaButton: "Solicitar consulta",
    moreArticles: "Ver mas articulos",
  },
} as const;

export default function LaborReformArgentinaContent() {
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
    <main className="relative isolate mx-auto min-h-screen w-full max-w-5xl overflow-hidden bg-black px-6 py-16 text-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-80"
      >
        <div className="absolute -left-20 top-[-70px] h-72 w-72 rounded-full bg-zinc-700/20 blur-3xl" />
        <div className="absolute -right-16 bottom-[-40px] h-72 w-72 rounded-full bg-zinc-600/20 blur-3xl" />
      </div>
      <article className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-8">
        <section className={`${softCard} relative overflow-hidden`}>
          <div className="bg-zinc-500/15 absolute -right-24 -top-24 h-52 w-52 rounded-full blur-3xl" />
          <div className="relative z-10">
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
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-zinc-300">
              {t.intro}
            </p>
          </div>
        </section>

        <section className={softCard}>
          <h2 className="text-3xl font-bold text-zinc-100">{t.changesTitle}</h2>
          <div className="mt-6 grid gap-4">
            {t.changes.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-zinc-800 bg-black p-5 shadow-[inset_1px_1px_0_rgba(82,82,91,0.3),0_10px_24px_rgba(0,0,0,0.45)]"
              >
                <h3 className="text-xl font-semibold text-zinc-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-zinc-300">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={softCard}>
          <h2 className="text-3xl font-bold text-zinc-100">{t.faqTitle}</h2>
          <div className="mt-6 grid gap-4">
            {t.faqs.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-zinc-800 bg-black p-5 shadow-[inset_1px_1px_0_rgba(82,82,91,0.3),0_10px_24px_rgba(0,0,0,0.45)]"
              >
                <h3 className="text-xl font-semibold text-zinc-100">
                  {item.question}
                </h3>
                <p className="mt-2 text-zinc-300">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-zinc-800 bg-gradient-to-br from-black via-zinc-950 to-black p-8 shadow-[18px_18px_40px_rgba(0,0,0,0.78),-8px_-8px_22px_rgba(63,63,70,0.2)] backdrop-blur-2xl">
          <h2 className="text-3xl font-bold text-zinc-100">{t.ctaTitle}</h2>
          <p className="mt-4 text-zinc-300">{t.ctaText}</p>
          <p className="mt-4 text-zinc-400">
            {t.relatedPrefix}{" "}
            <Link
              href="/articles/unfair-dismissal-argentina"
              className="font-medium text-zinc-200 hover:text-zinc-100"
            >
              {t.relatedLink}
            </Link>
            .
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/#Contact"
              className="rounded-full border border-zinc-700 bg-black px-7 py-3 font-semibold text-zinc-100 transition hover:-translate-y-0.5 hover:border-zinc-500 hover:bg-zinc-950"
            >
              {t.ctaButton}
            </Link>
            <Link
              href="/articles"
              className="rounded-full border border-zinc-700 bg-black px-7 py-3 font-semibold text-zinc-100 transition hover:-translate-y-0.5 hover:border-zinc-500 hover:bg-zinc-950"
            >
              {t.moreArticles}
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
