"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { usePortfolio } from "@/lib/LanguageContext";
import type { Lang } from "@/lib/LanguageContext";
import Logo from "./Logo";

export default function Navbar() {
  const { lang, setLang, t } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const LangToggle = ({ className }: { className?: string }) => (
    <div className={`flex items-center border border-surface-border rounded-lg overflow-hidden ${className}`}>
      {([["en", "English"], ["de", "Deutsch"]] as [Lang, string][]).map(([l, label]) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1.5 text-xs font-semibold transition-colors duration-200 ${
            lang === l
              ? "bg-accent text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-background/80 backdrop-blur-md border-b border-surface-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group">
            <Logo size={34} />
            <span className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-200">
              Farasat
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {t.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                {link.label}
              </a>
            ))}
            <LangToggle />
            <a
              href="/Farasat-Ali-Aziz.pdf"
              download
              className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <FiDownload size={14} />
              {t.ui.resume}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-400 hover:text-white transition-colors z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background md:hidden"
          >
            <div className="flex flex-col items-center justify-center gap-8 h-full">
              {t.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors text-xl"
                >
                  {link.label}
                </a>
              ))}
              <LangToggle />
              <a
                href="/Farasat-Ali-Aziz.pdf"
                download
                className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
              >
                <FiDownload size={16} />
                {t.ui.downloadCV}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
