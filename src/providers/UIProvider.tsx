"use client";

import { NextUIProvider } from "@nextui-org/react";

import { LanguageProvider } from "@/providers/LanguageProvider";

export default function UIProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextUIProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </NextUIProvider>
  );
}
