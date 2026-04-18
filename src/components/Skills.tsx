"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiCypress,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiNodedotjs,
  SiReact,
  SiNestjs,
  SiJira,
  SiPostman,
  SiGraphql,
  SiSlack,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { usePortfolio } from "@/lib/LanguageContext";
import type { SkillCategory } from "@/lib/types";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  Cypress: SiCypress,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Python: SiPython,
  "Node.js": SiNodedotjs,
  "React.js": SiReact,
  "React Native": SiReact,
  NestJS: SiNestjs,
  Jira: SiJira,
  Postman: SiPostman,
  GraphQL: SiGraphql,
  Slack: SiSlack,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
};

const categories: SkillCategory[] = [
  "QA & Testing",
  "Test Automation",
  "Programming",
  "Tools & Platforms",
  "Methodologies",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function Skills() {
  const { t } = usePortfolio();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-16 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          {t.ui.skillsHeading}
        </h2>

        <div className="space-y-10">
          {categories.map((category) => {
            const categorySkills = t.skills.filter(
              (s) => s.category === category
            );
            if (categorySkills.length === 0) return null;

            return (
              <div key={category}>
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                  {t.ui.skillCategories[category]}
                </h3>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
                >
                  {categorySkills.map((skill) => {
                    const Icon = iconMap[skill.name];
                    return (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        className="flex items-center gap-2 bg-surface border border-surface-border rounded-lg px-4 py-3 text-sm text-gray-300 hover:border-accent/50 transition-colors duration-200"
                      >
                        {Icon && <Icon className="text-accent shrink-0" />}
                        {skill.name}
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
