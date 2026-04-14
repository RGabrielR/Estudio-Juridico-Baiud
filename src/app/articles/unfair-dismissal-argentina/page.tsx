import type { Metadata } from "next";
import Link from "next/link";

const pageUrl =
  "https://www.estudiolcb.com.ar/articles/unfair-dismissal-argentina";
const pageTitle =
  "Despido sin causa en Argentina: indemnización y pasos a seguir";
const pageDescription =
  "Guía orientativa sobre rubros indemnizatorios, plazos y medidas iniciales frente a un despido sin causa en Argentina.";

const faqItems = [
  {
    question: "¿Qué conviene hacer apenas ocurre el despido?",
    answer:
      "Guardar telegramas, recibos de sueldo, constancias de registración y cualquier comunicación vinculada al vínculo laboral. Esa documentación suele ser decisiva para revisar liquidación y plazos.",
  },
  {
    question: "¿La liquidación final siempre está bien calculada?",
    answer:
      "No necesariamente. Según el caso pueden existir diferencias en indemnización, preaviso, vacaciones, SAC y otros rubros, por lo que conviene una revisión profesional antes de firmar acuerdos.",
  },
  {
    question: "¿Hay plazos para reclamar?",
    answer:
      "Sí. Los reclamos laborales tienen plazos y pasos formales. Esperar demasiado puede debilitar la posición del trabajador, por lo que es recomendable asesorarse cuanto antes.",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "despido sin causa Argentina",
    "indemnización despido Argentina",
    "abogado laboral Tucumán",
    "liquidación final despido",
    "reclamo laboral Argentina",
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

export default function UnfairDismissalArgentinaPage() {
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
            / <span className="text-zinc-300">Despido sin causa</span>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">
            Derecho laboral
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-zinc-100 md:text-5xl">
            {pageTitle}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-300">
            Frente a un despido sin causa, la revisión inmediata de la
            documentación y de la liquidación final es central para proteger
            créditos laborales y definir la mejor estrategia de reclamo.
          </p>
        </section>

        <section className={card}>
          <h2 className="text-3xl font-bold text-zinc-100">
            Rubros que suelen revisarse
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-300">
            <li>Indemnización por antigüedad.</li>
            <li>Preaviso o integración si corresponde.</li>
            <li>Vacaciones y SAC proporcionales.</li>
            <li>
              Diferencias salariales o multas en supuestos de registración
              deficiente.
            </li>
          </ul>
        </section>

        <section className={card}>
          <h2 className="text-3xl font-bold text-zinc-100">
            Qué hacer después del despido
          </h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-zinc-300">
            <li>
              Conservar telegramas, recibos, contrato y comunicaciones
              laborales.
            </li>
            <li>Evitar firmar acuerdos o conformidades sin revisión previa.</li>
            <li>
              Controlar si la liquidación final coincide con la realidad del
              vínculo.
            </li>
            <li>
              Definir rápidamente si conviene intimar, conciliar o iniciar
              demanda.
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
            Patrocinio en conflictos laborales
          </h2>
          <p className="mt-4 text-zinc-300">
            Dr. Miguel Alabi asesora en despidos, liquidaciones, intimaciones,
            audiencias de conciliación y litigios laborales.
          </p>
          <p className="mt-4 text-zinc-400">
            Si querés entender además el marco general de cambios normativos,
            podés revisar la nota sobre{" "}
            <Link
              href="/articles/labor-reform-argentina-2026"
              className="font-medium text-zinc-200 hover:text-zinc-100"
            >
              reforma laboral en Argentina
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
