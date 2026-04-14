import type { Metadata } from "next";

import DivorceInArgentinaContent from "@/app/articles/divorce-in-argentina/DivorceInArgentinaContent";

const pageUrl = "https://www.estudiolcb.com.ar/articles/divorce-in-argentina";

export const metadata: Metadata = {
  title: "Divorce in Argentina: process, requirements and key agreements",
  description:
    "Practical guide to documentation, filing stages and major agreements in a divorce case in Argentina.",
  keywords: [
    "divorce in Argentina",
    "family lawyer Tucuman",
    "divorce process Argentina",
    "unilateral divorce Argentina",
    "divorce agreement Argentina",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Divorce in Argentina: process, requirements and key agreements",
    description:
      "Practical guide to documentation, filing stages and major agreements in a divorce case in Argentina.",
    type: "article",
    url: pageUrl,
  },
};

export default function DivorceInArgentinaPage() {
  return <DivorceInArgentinaContent />;
}
