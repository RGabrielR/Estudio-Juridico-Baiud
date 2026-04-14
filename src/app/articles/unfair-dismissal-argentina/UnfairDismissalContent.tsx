"use client";

import Link from "next/link";

import { useLanguage } from "@/providers/LanguageProvider";

const pageUrl =
  "https://www.estudiolcb.com.ar/articles/unfair-dismissal-argentina";
const card =
  "rounded-3xl border border-zinc-800 bg-zinc-950/75 p-7 backdrop-blur-xl shadow-[14px_14px_30px_rgba(0,0,0,0.7),-8px_-8px_22px_rgba(63,63,70,0.18),inset_1px_1px_0_rgba(113,113,122,0.2)]";

const copy = {
  en: {
    title: "Dismissal without cause in Argentina: compensation and first steps",
    description:
      "Practical guide to compensation items, deadlines and first actions after dismissal without cause in Argentina.",
    breadcrumbCurrent: "Dismissal without cause",
    breadcrumbHome: "Home",
    breadcrumbArticles: "Articles",
    category: "Labor law",
    intro:
      "After a dismissal without cause, reviewing the documentation and the final settlement immediately is essential to protect labor credits and define the best claim strategy.",
    reviewTitle: "Items that are commonly reviewed",
    reviewItems: [
      "Severance based on seniority.",
      "Notice payment or integration when applicable.",
      "Proportional vacation pay and SAC.",
      "Salary differences or penalties in cases of deficient registration.",
    ],
    stepsTitle: "What to do after dismissal",
    steps: [
      "Keep telegrams, pay slips, contracts and all employment-related communications.",
      "Avoid signing settlements or acknowledgments without prior legal review.",
      "Check whether the final settlement matches the real employment relationship.",
      "Quickly decide whether to serve notice, conciliate or file suit.",
    ],
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        question: "What should be done as soon as the dismissal happens?",
        answer:
          "Keep telegrams, salary receipts, registration records and any communication linked to the employment relationship. That documentation is often decisive when checking settlement calculations and deadlines.",
      },
      {
        question: "Is the final settlement always correctly calculated?",
        answer:
          "Not necessarily. Depending on the case there may be differences in severance, notice, vacation pay, SAC and other items, so legal review is advisable before signing agreements.",
      },
      {
        question: "Are there deadlines to make a claim?",
        answer:
          "Yes. Labor claims have deadlines and formal steps. Waiting too long can weaken the worker's position, so it is advisable to seek counsel promptly.",
      },
    ],
    ctaTitle: "Representation in labor conflicts",
    ctaText:
      "Dr. Miguel Alabi advises on dismissals, settlements, notices, conciliation hearings and labor litigation.",
    relatedPrefix:
      "If you also want context on broader legal changes, you can review the article on",
    relatedLink: "labor reform in Argentina",
    ctaButton: "Request a consultation",
  },
  es: {
    title: "Despido sin causa en Argentina: indemnizacion y pasos a seguir",
    description:
      "Guia orientativa sobre rubros indemnizatorios, plazos y medidas iniciales frente a un despido sin causa en Argentina.",
    breadcrumbCurrent: "Despido sin causa",
    breadcrumbHome: "Inicio",
    breadcrumbArticles: "Articulos",
    category: "Derecho laboral",
    intro:
      "Frente a un despido sin causa, la revision inmediata de la documentacion y de la liquidacion final es central para proteger creditos laborales y definir la mejor estrategia de reclamo.",
    reviewTitle: "Rubros que suelen revisarse",
    reviewItems: [
      "Indemnizacion por antiguedad.",
      "Preaviso o integracion si corresponde.",
      "Vacaciones y SAC proporcionales.",
      "Diferencias salariales o multas en supuestos de registracion deficiente.",
    ],
    stepsTitle: "Que hacer despues del despido",
    steps: [
      "Conservar telegramas, recibos, contrato y comunicaciones laborales.",
      "Evitar firmar acuerdos o conformidades sin revision previa.",
      "Controlar si la liquidacion final coincide con la realidad del vinculo.",
      "Definir rapidamente si conviene intimar, conciliar o iniciar demanda.",
    ],
    faqTitle: "Preguntas frecuentes",
    faqs: [
      {
        question: "Que conviene hacer apenas ocurre el despido?",
        answer:
          "Guardar telegramas, recibos de sueldo, constancias de registracion y cualquier comunicacion vinculada al vinculo laboral. Esa documentacion suele ser decisiva para revisar liquidacion y plazos.",
      },
      {
        question: "La liquidacion final siempre esta bien calculada?",
        answer:
          "No necesariamente. Segun el caso pueden existir diferencias en indemnizacion, preaviso, vacaciones, SAC y otros rubros, por lo que conviene una revision profesional antes de firmar acuerdos.",
      },
      {
        question: "Hay plazos para reclamar?",
        answer:
          "Si. Los reclamos laborales tienen plazos y pasos formales. Esperar demasiado puede debilitar la posicion del trabajador, por lo que es recomendable asesorarse cuanto antes.",
      },
    ],
    ctaTitle: "Patrocinio en conflictos laborales",
    ctaText:
      "Dr. Miguel Alabi asesora en despidos, liquidaciones, intimaciones, audiencias de conciliacion y litigios laborales.",
    relatedPrefix:
      "Si queres entender ademas el marco general de cambios normativos, podes revisar la nota sobre",
    relatedLink: "reforma laboral en Argentina",
    ctaButton: "Solicitar consulta",
  },
} as const;

export default function UnfairDismissalContent() {
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
          <h2 className="text-3xl font-bold text-zinc-100">{t.reviewTitle}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-300">
            {t.reviewItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={card}>
          <h2 className="text-3xl font-bold text-zinc-100">{t.stepsTitle}</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-zinc-300">
            {t.steps.map((item) => (
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
              href="/articles/labor-reform-argentina-2026"
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
