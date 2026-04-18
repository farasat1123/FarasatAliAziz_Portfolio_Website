"use client";

import { FiLinkedin, FiGithub } from "react-icons/fi";
import type { IconType } from "react-icons";
import { usePortfolio } from "@/lib/LanguageContext";

const platformIcon: Record<string, IconType> = {
  LinkedIn: FiLinkedin,
  GitHub: FiGithub,
};

export default function Footer() {
  const { t } = usePortfolio();

  return (
    <footer className="border-t border-surface-border py-8 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {t.name}. {t.ui.allRightsReserved}
        </p>
        <div className="flex items-center gap-4">
          {t.socialLinks.map((link) => {
            const Icon = platformIcon[link.platform] ?? FiLinkedin;
            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.platform}
                className="text-gray-500 hover:text-accent transition-colors duration-200"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
