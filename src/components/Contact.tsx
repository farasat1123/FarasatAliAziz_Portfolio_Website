"use client";

import SectionWrapper from "./SectionWrapper";
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiAward } from "react-icons/fi";
import type { IconType } from "react-icons";
import { usePortfolio } from "@/lib/LanguageContext";

const platformIcon: Record<string, IconType> = {
  LinkedIn: FiLinkedin,
  GitHub: FiGithub,
};

export default function Contact() {
  const { t } = usePortfolio();

  return (
    <SectionWrapper id="contact">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.ui.contactHeading}</h2>
      <p className="text-gray-400 text-lg mb-10 max-w-xl">{t.ui.contactSubtext}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <a
          href={`mailto:${t.email}`}
          className="flex items-center gap-4 bg-surface border border-surface-border rounded-lg p-5 hover:border-accent/50 transition-colors duration-200 group"
        >
          <FiMail className="text-accent text-xl shrink-0 group-hover:scale-110 transition-transform" />
          <div className="min-w-0">
            <p className="text-xs text-gray-500 mb-0.5">{t.ui.emailLabel}</p>
            <p className="text-sm text-gray-300 truncate">{t.email}</p>
          </div>
        </a>

        <a
          href={`tel:${t.phone}`}
          className="flex items-center gap-4 bg-surface border border-surface-border rounded-lg p-5 hover:border-accent/50 transition-colors duration-200 group"
        >
          <FiPhone className="text-accent text-xl shrink-0 group-hover:scale-110 transition-transform" />
          <div>
            <p className="text-xs text-gray-500 mb-0.5">{t.ui.phoneLabel}</p>
            <p className="text-sm text-gray-300">{t.phone}</p>
          </div>
        </a>

        {t.socialLinks.map((link) => {
          const Icon = platformIcon[link.platform] ?? FiLinkedin;
          return (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-surface border border-surface-border rounded-lg p-5 hover:border-accent/50 transition-colors duration-200 group"
            >
              <Icon className="text-accent text-xl shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-xs text-gray-500 mb-0.5">{link.platform}</p>
                <p className="text-sm text-gray-300">{t.ui.viewProfile}</p>
              </div>
            </a>
          );
        })}

        <a
          href="https://www.linkedin.com/in/farasataliaziz/details/certifications/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-surface border border-surface-border rounded-lg p-5 hover:border-accent/50 transition-colors duration-200 group"
        >
          <FiAward className="text-accent text-xl shrink-0 group-hover:scale-110 transition-transform" />
          <div>
            <p className="text-xs text-gray-500 mb-0.5">Certifications</p>
            <p className="text-sm text-gray-300">LinkedIn Certifications</p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/farasataliaziz/details/featured/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-surface border border-surface-border rounded-lg p-5 hover:border-accent/50 transition-colors duration-200 group"
        >
          <FiAward className="text-accent text-xl shrink-0 group-hover:scale-110 transition-transform" />
          <div>
            <p className="text-xs text-gray-500 mb-0.5">Certifications</p>
            <p className="text-sm text-gray-300">LinkedIn Featured Posts</p>
          </div>
        </a>
      </div>

    </SectionWrapper>
  );
}
