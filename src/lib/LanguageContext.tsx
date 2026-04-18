"use client";

import { createContext, useContext, useState } from "react";
import type { PortfolioData } from "@/lib/types";
import { en, de } from "@/data/portfolio";

export type Lang = "en" | "de";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: PortfolioData;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const t = lang === "en" ? en : de;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function usePortfolio() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("usePortfolio must be used within LanguageProvider");
  return ctx;
}
