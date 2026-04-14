"use client";

import { useLanguage } from "@/providers/LanguageProvider";

type LanguageToggleProps = {
  label: string;
};

export default function LanguageToggle({ label }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      aria-label={label}
      className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-950/80 p-1 shadow-[8px_8px_20px_rgba(0,0,0,0.35)]"
      role="group"
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] transition ${
          language === "en"
            ? "bg-zinc-100 text-black"
            : "text-zinc-400 hover:text-zinc-100"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("es")}
        aria-pressed={language === "es"}
        className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] transition ${
          language === "es"
            ? "bg-zinc-100 text-black"
            : "text-zinc-400 hover:text-zinc-100"
        }`}
      >
        ES
      </button>
    </div>
  );
}
