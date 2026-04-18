"use client";

import SectionWrapper from "./SectionWrapper";
import { FiMail, FiPhone, FiLinkedin, FiGithub } from "react-icons/fi";
import type { IconType } from "react-icons";
import { useSearchParams } from "next/navigation";
import { usePortfolio } from "@/lib/LanguageContext";

const platformIcon: Record<string, IconType> = {
  LinkedIn: FiLinkedin,
  GitHub: FiGithub,
};

export default function Contact() {
  const { t } = usePortfolio();
  const searchParams = useSearchParams();
  const submitted = searchParams.get("success") === "1";

  return (
    <SectionWrapper id="contact">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.ui.contactHeading}</h2>
      <p className="text-gray-400 text-lg mb-10 max-w-xl">{t.ui.contactSubtext}</p>

      {submitted && (
        <div className="mb-6 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-300">
          {t.ui.formSuccess}
        </div>
      )}

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
      </div>

      <form
        name="contact"
        method="POST"
        action="/?success=1#contact"
        data-netlify="true"
        className="bg-surface border border-surface-border rounded-xl p-6 md:p-8"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-2">
              {t.ui.formName} <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder={t.ui.formNamePlaceholder}
              className="w-full bg-background border border-surface-border rounded-lg px-4 py-3 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-accent/60 transition-colors duration-200"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-2">
              {t.ui.formEmail} <span className="text-accent">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder={t.ui.formEmailPlaceholder}
              className="w-full bg-background border border-surface-border rounded-lg px-4 py-3 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-accent/60 transition-colors duration-200"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-xs font-medium text-gray-400 mb-2">
            {t.ui.formMessage} <span className="text-accent">*</span>
          </label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder={t.ui.formMessagePlaceholder}
            className="w-full bg-background border border-surface-border rounded-lg px-4 py-3 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-accent/60 transition-colors duration-200 resize-none"
          />
        </div>

        <button
          type="submit"
          className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
        >
          {t.ui.formSubmit}
        </button>
      </form>
    </SectionWrapper>
  );
}
