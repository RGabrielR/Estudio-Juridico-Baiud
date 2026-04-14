import type { Metadata } from "next";
import Link from "next/link";

const pageUrl =
  "https://www.estudiolcb.com.ar/articles/labor-reform-argentina-2026";
const pageTitle = "Ley 27.802: puntos clave de la reforma laboral en Argentina";
const pageDescription =
  "Resumen orientativo sobre algunos cambios atribuidos a la Ley 27.802 y su posible impacto para trabajadores y empleadores.";

const keyChanges = [
  {
    title: "Cambios en el cálculo indemnizatorio",
    text: "La revisión del modo de calcular determinados rubros puede impactar en el monto final y vuelve más importante controlar la liquidación caso por caso.",
  },
  {
    title: "Nuevas cargas y obligaciones documentales",
    text: "Las empresas deben extremar registración, respaldo documental y cumplimiento formal para reducir contingencias ante inspecciones o conflictos.",
  },
  {
    title: "Mayor relevancia de acuerdos escritos",
    text: "Los pactos sobre jornadas, compensaciones y organización del trabajo requieren redacción clara y prueba suficiente para evitar discusiones posteriores.",
  },
  {
    title: "Revisión de vacaciones y tiempos de descanso",
    text: "Los esquemas de licencias y descansos deben analizarse con atención para no afectar derechos adquiridos ni generar incumplimientos.",
  },
  {
    title: "Regularización laboral y ventanas de adecuación",
    text: "Algunos cambios abren escenarios de normalización o adecuación. La conveniencia práctica depende de la reglamentación vigente y del historial laboral.",
  },
];

const faqItems = [
  {
    question: "¿La reforma laboral impacta igual en todos los casos?",
    answer:
      "No. La aplicación concreta depende del tipo de vínculo, la fecha de los hechos, la reglamentación vigente y la documentación de cada relación laboral.",
  },
  {
    question: "¿Qué deberían revisar primero los empleadores?",
    answer:
      "Conviene revisar contratos, legajos, recibos, políticas internas, control horario y criterios de liquidación para detectar riesgos antes de un conflicto.",
  },
  {
    question: "¿Qué deberían revisar primero los trabajadores?",
    answer:
      "Es importante conservar recibos, telegramas, constancias de registración y cualquier prueba del trabajo efectivamente prestado para evaluar si hubo diferencias o incumplimientos.",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Ley 27.802",
    "reforma laboral Argentina",
    "cambios laborales 2026 Argentina",
    "abogado laboral Tucumán",
    "derecho del trabajo Argentina",
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

const softCard =
  "rounded-[2rem] border border-zinc-800 bg-zinc-950/75 p-7 backdrop-blur-2xl shadow-[16px_16px_36px_rgba(0,0,0,0.78),-10px_-10px_24px_rgba(63,63,70,0.22),inset_1px_1px_0_rgba(113,113,122,0.25)]";

export default function LaborReformArgentina2026Page() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: pageTitle,
      description: pageDescription,
      inLanguage: "es-AR",
      articleSection: "Derecho laboral",
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
                Inicio
              </Link>{" "}
              /{" "}
              <Link href="/articles" className="hover:text-zinc-200">
                Artículos
              </Link>{" "}
              / <span className="text-zinc-300">Reforma laboral</span>
            </nav>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">
              Derecho laboral en Argentina
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-zinc-100 md:text-5xl">
              {pageTitle}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-zinc-300">
              Esta guía resume de forma orientativa algunos ejes que suelen
              mencionarse al analizar la Ley 27.802. La aplicación concreta debe
              revisarse con la normativa vigente, la reglamentación disponible y
              la documentación de cada caso.
            </p>
          </div>
        </section>

        <section className={softCard}>
          <h2 className="text-3xl font-bold text-zinc-100">
            Cinco puntos a revisar
          </h2>
          <div className="mt-6 grid gap-4">
            {keyChanges.map((item) => (
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
          <h2 className="text-3xl font-bold text-zinc-100">
            Preguntas frecuentes
          </h2>
          <div className="mt-6 grid gap-4">
            {faqItems.map((item) => (
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
          <h2 className="text-3xl font-bold text-zinc-100">
            Asesoramiento laboral para empresas y trabajadores
          </h2>
          <p className="mt-4 text-zinc-300">
            Dr. Miguel Alabi asesora en cumplimiento laboral, revisión de
            contratos, despidos, liquidaciones y litigios relacionados con
            cambios normativos.
          </p>
          <p className="mt-4 text-zinc-400">
            Si necesitás revisar un caso concreto de despido o diferencias
            salariales, también podés leer la guía sobre{" "}
            <Link
              href="/articles/unfair-dismissal-argentina"
              className="font-medium text-zinc-200 hover:text-zinc-100"
            >
              despido sin causa en Argentina
            </Link>
            .
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/#Contact"
              className="rounded-full border border-zinc-700 bg-black px-7 py-3 font-semibold text-zinc-100 transition hover:-translate-y-0.5 hover:border-zinc-500 hover:bg-zinc-950"
            >
              Solicitar consulta
            </Link>
            <Link
              href="/articles"
              className="rounded-full border border-zinc-700 bg-black px-7 py-3 font-semibold text-zinc-100 transition hover:-translate-y-0.5 hover:border-zinc-500 hover:bg-zinc-950"
            >
              Ver más artículos
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
