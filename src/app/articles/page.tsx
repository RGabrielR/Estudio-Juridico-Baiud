import type { Metadata } from "next";

import ArticlesIndex from "@/app/articles/ArticlesIndex";

export const metadata: Metadata = {
  title: "Legal articles and practical guides in Argentina",
  description:
    "Practical guides about divorce, succession, dismissals and labor reform in Argentina by Dr. Miguel Alabi.",
  keywords: [
    "legal articles Argentina",
    "divorce in Argentina",
    "succession in Argentina",
    "dismissal without cause Argentina",
    "labor reform Argentina 2026",
    "Tucuman lawyer articles",
  ],
  alternates: {
    canonical: "https://www.estudiolcb.com.ar/articles",
  },
  openGraph: {
    title: "Legal articles and practical guides in Argentina",
    description:
      "Practical legal content about family, succession and labor matters in Argentina.",
    type: "website",
    url: "https://www.estudiolcb.com.ar/articles",
  },
};

export default function ArticlesPage() {
  return <ArticlesIndex />;
}
