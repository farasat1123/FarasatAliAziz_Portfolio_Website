"use client";

import SectionWrapper from "./SectionWrapper";
import { usePortfolio } from "@/lib/LanguageContext";

export default function About() {
  const { t } = usePortfolio();

  return (
    <SectionWrapper id="about">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
        {t.ui.aboutHeading}
      </h2>
      <div className="max-w-3xl space-y-4">
        {t.about.map((paragraph, i) => (
          <p key={i} className="text-gray-400 text-lg leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </SectionWrapper>
  );
}
