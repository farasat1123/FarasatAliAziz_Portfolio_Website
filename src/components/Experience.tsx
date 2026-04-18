"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { usePortfolio } from "@/lib/LanguageContext";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Experience() {
  const { t } = usePortfolio();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-16 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          {t.ui.experienceHeading}
        </h2>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-surface-border hidden md:block" />

          <div className="space-y-12">
            {t.experience.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: i * 0.15 }}
                className="relative md:pl-10"
              >
                <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full bg-accent border-2 border-background hidden md:block" />

                <div className="bg-surface border border-surface-border rounded-xl p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {exp.role}
                      </h3>
                      {exp.url ? (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-accent hover:text-accent-light transition-colors duration-200"
                        >
                          {exp.company}
                          <FiExternalLink size={12} />
                        </a>
                      ) : (
                        <p className="text-accent">{exp.company}</p>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 shrink-0">
                      {exp.startDate} — {exp.endDate}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((point, j) => (
                      <li
                        key={j}
                        className="text-gray-400 text-sm flex items-start gap-2"
                      >
                        <span className="text-accent mt-0.5 shrink-0 leading-none">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  {exp.techStack && exp.techStack.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-surface-border flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-gray-400 bg-background border border-surface-border rounded px-2 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {exp.achievement && (
                    <div className="mt-4 pt-4 border-t border-surface-border">
                      <p className="text-sm text-accent-light font-medium">
                        ★ {exp.achievement}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
