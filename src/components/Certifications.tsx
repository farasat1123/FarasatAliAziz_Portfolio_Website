"use client";

import SectionWrapper from "./SectionWrapper";
import { FiAward, FiBookOpen, FiExternalLink } from "react-icons/fi";
import { usePortfolio } from "@/lib/LanguageContext";

export default function Certifications() {
  const { t } = usePortfolio();
  const hasCerts = t.certifications.length > 0;

  return (
    <SectionWrapper id="certifications">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
        {hasCerts ? t.ui.certAndEduHeading : t.ui.educationHeading}
      </h2>

      <div className={hasCerts ? "grid grid-cols-1 md:grid-cols-2 gap-10" : ""}>
        {hasCerts && (
          <div>
            <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-6 flex items-center gap-2">
              <FiAward /> {t.ui.certHeading}
            </h3>
            <ul className="space-y-4">
              {t.certifications.map((cert) => (
                <li
                  key={cert.title}
                  className="bg-surface border border-surface-border rounded-lg p-4"
                >
                  <p className="text-white font-medium text-sm">{cert.title}</p>
                  <p className="text-gray-500 text-xs mt-1">{cert.issuer}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className={hasCerts ? "" : "max-w-2xl"}>
          <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-6 flex items-center gap-2">
            <FiBookOpen /> {t.ui.eduHeading}
          </h3>
          <div className="space-y-4">
            {t.education.map((edu) => (
              <div
                key={edu.institution}
                className="bg-surface border border-surface-border rounded-lg p-6"
              >
                <p className="text-white font-semibold">{edu.degree}</p>
                {edu.url ? (
                  <a
                    href={edu.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent text-sm mt-1 hover:text-accent-light transition-colors duration-200"
                  >
                    {edu.institution}
                    <FiExternalLink size={12} />
                  </a>
                ) : (
                  <p className="text-accent text-sm mt-1">{edu.institution}</p>
                )}
                <p className="text-gray-500 text-xs mt-1">{edu.location}</p>
                <div className="flex items-center gap-4 mt-3">
                  <span className="text-gray-400 text-sm">
                    {edu.startYear} — {edu.endYear}
                  </span>
                  {edu.gpa && (
                    <span className="text-accent-light text-sm font-medium">
                      CGPA: {edu.gpa}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
