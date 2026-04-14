"use client";

import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

import { siteCopy } from "@/i18n/siteCopy";
import { useLanguage } from "@/providers/LanguageProvider";

export default function ArticlesIndex() {
  const { language } = useLanguage();
  const copy = siteCopy[language].articlesIndex;

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name:
      language === "es"
        ? "Articulos legales de Dr. Miguel Alabi"
        : "Legal articles by Dr. Miguel Alabi",
    itemListElement: copy.items.map((article, index) => ({
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
          {copy.eyebrow}
        </span>
        <h1 className="mt-3 text-4xl font-black text-zinc-100 sm:text-5xl">
          {copy.title}
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg font-light text-zinc-300">
          {copy.description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {copy.items.map((article) => (
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
                {copy.readMore}
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
          {copy.ctaTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base font-light text-zinc-300">
          {copy.ctaText}
        </p>
        <Link href="/#Contact" className="neo-button mt-6 inline-block">
          {copy.ctaButton}
        </Link>
      </div>
    </main>
  );
}
