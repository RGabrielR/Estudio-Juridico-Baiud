import type { Metadata } from "next";

import UnfairDismissalContent from "@/app/articles/unfair-dismissal-argentina/UnfairDismissalContent";

const pageUrl =
  "https://www.estudiolcb.com.ar/articles/unfair-dismissal-argentina";

export const metadata: Metadata = {
  title: "Dismissal without cause in Argentina: compensation and first steps",
  description:
    "Practical guide to compensation items, deadlines and first actions after dismissal without cause in Argentina.",
  keywords: [
    "dismissal without cause Argentina",
    "compensation dismissal Argentina",
    "labor lawyer Tucuman",
    "final settlement dismissal",
    "labor claim Argentina",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dismissal without cause in Argentina: compensation and first steps",
    description:
      "Practical guide to compensation items, deadlines and first actions after dismissal without cause in Argentina.",
    type: "article",
    url: pageUrl,
  },
};

export default function UnfairDismissalArgentinaPage() {
  return <UnfairDismissalContent />;
}
