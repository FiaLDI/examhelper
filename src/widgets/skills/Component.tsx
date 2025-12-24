"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { skillsData } from "@/pages-data/skills";
import { useLanguage } from "@/features/language-switcher/model/useLanguage";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const Skills = () => {
  const ref = useRef<HTMLElement>(null);
  const { current: lang } = useLanguage();

  const SKILLS = skillsData[lang];

  const { scrollYProgress } = useScroll({
    container: ref,
  });

  const bgShift = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section
      ref={ref}
      data-scrollable
      className="h-screen max-w-7xl mx-auto w-full px-6 py-20
                 overflow-y-auto no-scrollbar text-white relative"
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgShift }}
      />

      {/* HEADER */}
      <div className="mb-20 max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-4xl font-semibold tracking-tight"
        >
          {lang === "en" ? "Skills" : "Навыки"}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 0.7, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5, ease: EASE }}
          className="mt-4 text-sm text-neutral-400"
        >
          {lang === "en"
            ? "A deeper look into how I build systems, not just what tools I use."
            : "Подробный взгляд на то, как я проектирую системы, а не просто список технологий."}
        </motion.p>
      </div>

      {/* CONTENT */}
      <div className="space-y-32 pb-32">
        {SKILLS.map((group) => (
          <motion.section
            key={group.level}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-30%" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="relative"
          >
            {group.glow && (
              <div className="absolute -inset-12 rounded-3xl bg-indigo-500/10 blur-2xl pointer-events-none" />
            )}

            <div className="top-20 mb-10">
              <h3 className="text-2xl font-medium">{group.level}</h3>
              <p className="mt-2 text-sm text-neutral-400 max-w-xl">
                {group.description}
              </p>
            </div>

            <div className="space-y-10 pl-6 border-l border-neutral-800">
              {group.items.map((item) => (
                <div key={item.capability} className="space-y-3">
                  <p className="text-base text-neutral-200">
                    {item.capability}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full
                                   border border-neutral-800
                                   bg-neutral-900/40 text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </section>
  );
};
