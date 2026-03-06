import type { Metadata } from "next";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

export const metadata: Metadata = {
  title: "Artículos Legales",
  description:
    "Información legal especializada sobre derecho civil, familia y laboral en Jujuy. Guías prácticas y artículos del Estudio Jurídico Baiud.",
  alternates: {
    canonical: "https://www.estudiolcb.com.ar/articulos",
  },
};

const articulos = [
  {
    slug: "divorcio-en-jujuy",
    title: "Divorcio en Jujuy: Guía Completa de Trámites y Procedimientos",
    description:
      "Todo lo que necesitás saber sobre el proceso de divorcio en la provincia de Jujuy. Requisitos, plazos y asesoramiento legal profesional.",
    categoria: "Derecho de Familia",
  },
  {
    slug: "sucesion-herencia-jujuy",
    title: "Sucesiones y Herencias en Jujuy: Cómo Tramitar Correctamente",
    description:
      "Guía completa sobre trámites de sucesión y herencia en Jujuy. Documentación, plazos y procedimientos legales explicados paso a paso.",
    categoria: "Derecho Civil",
  },
  {
    slug: "despido-injustificado-jujuy",
    title: "Despido Injustificado en Jujuy: Derechos y Compensaciones",
    description:
      "Conocé tus derechos ante un despido sin causa justificada. Indemnizaciones, plazos y cómo reclamar lo que te corresponde legalmente.",
    categoria: "Derecho Laboral",
  },
  {
    slug: "reforma-laboral-argentina",
    title: "Nueva Ley 27.802: Modernización Laboral Argentina 2026",
    description:
      "Todo sobre la Ley 27.802 de Modernización Laboral 2026: nuevo cálculo de indemnizaciones, banco de horas, FAL y blanqueo laboral explicados en simple.",
    categoria: "Derecho Laboral",
  },
];

export default function ArticulosPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-6 py-20 xl:max-w-[1380px]">
      <div className="mb-12 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.45em] text-amber-500">
          Recursos Legales
        </span>
        <h1 className="mt-3 text-4xl font-black text-slate-950 sm:text-5xl">
          Artículos y Guías Legales
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg font-light text-slate-600">
          Información legal actualizada y confiable para ayudarte a entender tus
          derechos y los procedimientos legales en Jujuy.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articulos.map((articulo) => (
          <article
            key={articulo.slug}
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="flex flex-1 flex-col gap-4 p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                {articulo.categoria}
              </span>
              <h2 className="text-xl font-bold text-slate-900">
                {articulo.title}
              </h2>
              <p className="text-sm font-light leading-relaxed text-slate-600">
                {articulo.description}
              </p>
            </div>
            <div className="p-6 pt-0">
              <Link
                href={`/articulos/${articulo.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 transition hover:text-amber-700"
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

      <div className="mt-16 rounded-3xl bg-slate-950 p-8 text-center text-white md:p-12">
        <h2 className="text-2xl font-bold md:text-3xl">
          ¿Necesitás asesoramiento legal personalizado?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base font-light text-slate-200">
          Contactá al Estudio Baiud para una consulta personalizada. Estamos
          aquí para defender tus derechos y brindarte soluciones legales
          efectivas.
        </p>
        <Link
          href="/#Contact"
          className="mt-6 inline-block rounded-full border border-amber-400/60 bg-amber-400/90 px-8 py-4 text-base font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-300"
        >
          Agendar consulta
        </Link>
      </div>
    </main>
  );
}
