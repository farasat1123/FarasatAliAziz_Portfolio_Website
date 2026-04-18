"use client";

import { useEffect, useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import type { IconType } from "react-icons";
import { usePortfolio } from "@/lib/LanguageContext";

const platformIcon: Record<string, IconType> = {
  LinkedIn: FiLinkedin,
  GitHub: FiGithub,
};

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { t } = usePortfolio();
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    const body = new URLSearchParams();

    data.forEach((value, key) => {
      body.append(key, String(value));
    });

    try {
      const endpoints = ["/__forms", "/__forms.html"];
      let delivered = false;

      for (const endpoint of endpoints) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: body.toString(),
        });

        if (res.status < 400) {
          delivered = true;
          break;
        }
      }

      if (!delivered) throw new Error("Form submission failed");

      setStatus("success");
      setSubmitted(true);
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  useEffect(() => {
    setSubmitted(window.location.search.includes("success=1"));
  }, []);

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
        action="/__forms"
        data-netlify="true"
        onSubmit={handleSubmit}
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

        {status === "success" && (
          <div className="flex items-center gap-2 text-sm text-green-400 mb-5">
            <FiCheckCircle className="shrink-0" />
            {t.ui.formSuccess}
          </div>
        )}

        {status === "error" && (
          <div className="flex items-center gap-2 text-sm text-red-400 mb-5">
            <FiAlertCircle className="shrink-0" />
            {t.ui.formError}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
        >
          <FiSend size={15} />
          {status === "sending" ? t.ui.formSending : t.ui.formSubmit}
        </button>
      </form>
    </SectionWrapper>
  );
}
