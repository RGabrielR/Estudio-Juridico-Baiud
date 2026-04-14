import type { Metadata } from "next";

import LaborReformArgentinaContent from "@/app/articles/labor-reform-argentina-2026/LaborReformArgentinaContent";

const pageUrl =
  "https://www.estudiolcb.com.ar/articles/labor-reform-argentina-2026";

export const metadata: Metadata = {
  title: "Law 27.802: key points of labor reform in Argentina",
  description:
    "Overview of several changes attributed to Law 27.802 and their possible impact on workers and employers.",
  keywords: [
    "Law 27.802",
    "labor reform Argentina",
    "labor changes 2026 Argentina",
    "labor lawyer Tucuman",
    "employment law Argentina",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Law 27.802: key points of labor reform in Argentina",
    description:
      "Overview of several changes attributed to Law 27.802 and their possible impact on workers and employers.",
    type: "article",
    url: pageUrl,
  },
};

export default function LaborReformArgentina2026Page() {
  return <LaborReformArgentinaContent />;
}
