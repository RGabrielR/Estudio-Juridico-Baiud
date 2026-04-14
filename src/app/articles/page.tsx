import type { Metadata } from "next";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

export const metadata: Metadata = {
  title: "Artículos jurídicos y guías legales en Argentina",
  description:
    "Guías prácticas sobre divorcio, sucesiones, despidos y reforma laboral en Argentina por Dr. Miguel Alabi.",
  keywords: [
    "artículos legales Argentina",
    "divorcio en Argentina",
    "sucesiones en Argentina",
    "despido sin causa Argentina",
    "reforma laboral Argentina 2026",
    "abogado Tucumán artículos",
  ],
  alternates: {
    canonical: "https://www.estudiolcb.com.ar/articles",
  },
  openGraph: {
    title: "Artículos jurídicos y guías legales en Argentina",
    description:
      "Contenido legal práctico sobre familia, sucesiones y trabajo en Argentina.",
    type: "website",
    url: "https://www.estudiolcb.com.ar/articles",
  },
};

const articles = [
  {
    slug: "divorce-in-argentina",
    title: "Divorcio en Argentina: proceso, requisitos y acuerdos clave",
    description:
      "Qué documentación se necesita, cómo se inicia el trámite y qué temas conviene resolver antes de presentar la demanda.",
    category: "Derecho de familia",
  },
  {
    slug: "succession-inheritance-argentina",
    title: "Sucesión y herencia en Argentina: cómo iniciar el trámite",
    description:
      "Documentación básica, etapas del proceso sucesorio y errores frecuentes que generan demoras.",
    category: "Derecho civil",
  },
  {
    slug: "unfair-dismissal-argentina",
    title: "Despido sin causa en Argentina: indemnización y pasos a seguir",
    description:
      "Rubros indemnizatorios, plazos de reclamo y medidas inmediatas para resguardar derechos laborales.",
    category: "Derecho laboral",
  },
  {
    slug: "labor-reform-argentina-2026",
    title: "Ley 27.802: puntos clave de la reforma laboral en Argentina",
    description:
      "Resumen orientativo sobre algunos cambios relevantes para trabajadores y empleadores.",
    category: "Actualidad jurídica",
  },
];

export default function ArticlesPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Artículos legales de Dr. Miguel Alabi",
    itemListElement: articles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: article.title,
      url: `https://www.estudiolcb.com.ar/articles/${article.slug}`,
    })),
  };

  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-6 py-20 xl:max-w-[1380px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <div className="neo-panel mb-12 p-10 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.45em] text-zinc-400">
          Recursos legales
        </span>
        <h1 className="mt-3 text-4xl font-black text-zinc-100 sm:text-5xl">
          Artículos jurídicos y guías prácticas
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg font-light text-zinc-300">
          Información legal orientativa para entender tus derechos, anticipar
          riesgos y tomar mejores decisiones.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="neo-inset group flex h-full flex-col overflow-hidden p-6 transition hover:border-zinc-700"
          >
            <div className="flex flex-1 flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                {article.category}
              </span>
              <h2 className="text-xl font-bold text-zinc-100">
                {article.title}
              </h2>
              <p className="text-sm font-light leading-relaxed text-zinc-300">
                {article.description}
              </p>
            </div>
            <div className="pt-6">
              <Link
                href={`/articles/${article.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 transition hover:text-zinc-100"
              >
                Leer artículo completo
                <IoArrowForward
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="neo-panel mt-16 p-8 text-center md:p-12">
        <h2 className="text-2xl font-bold text-zinc-100 md:text-3xl">
          ¿Necesitás asesoramiento para tu caso?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base font-light text-zinc-300">
          Contactá al estudio para una consulta personalizada y una estrategia
          ajustada a tu situación.
        </p>
        <Link href="/#Contact" className="neo-button mt-6 inline-block">
          Solicitar consulta
        </Link>
      </div>
    </main>
  );
}
