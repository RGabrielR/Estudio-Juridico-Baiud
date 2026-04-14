import type { Metadata } from "next";

import SuccessionInheritanceContent from "@/app/articles/succession-inheritance-argentina/SuccessionInheritanceContent";

const pageUrl =
  "https://www.estudiolcb.com.ar/articles/succession-inheritance-argentina";

export const metadata: Metadata = {
  title: "Succession and inheritance in Argentina: how to start the process",
  description:
    "Practical guide to documentation, stages and critical points in succession proceedings in Argentina.",
  keywords: [
    "succession in Argentina",
    "inheritance in Argentina",
    "succession lawyer Tucuman",
    "declaration of heirs",
    "succession process Argentina",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Succession and inheritance in Argentina: how to start the process",
    description:
      "Practical guide to documentation, stages and critical points in succession proceedings in Argentina.",
    type: "article",
    url: pageUrl,
  },
};

export default function SuccessionInheritanceArgentinaPage() {
  return <SuccessionInheritanceContent />;
}
