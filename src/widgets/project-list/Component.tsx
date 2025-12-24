"use client";

import { useLanguage } from "@/features/language-switcher/model/useLanguage";
import { projectsData, CATEGORY_META } from "@/pages-data/projects";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const HEAT: Record<string, string> = {
  Core: "from-indigo-500/20",
  Contribution: "from-sky-500/15",
  Pet: "from-emerald-500/10",
  Legacy: "from-neutral-500/5",
};

export const ProjectList = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { current: lang } = useLanguage();

  const data = projectsData[lang];
  const meta = CATEGORY_META[lang];

  const grouped = data.reduce((acc, project) => {
    acc[project.category] = acc[project.category] || [];
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, typeof data>);

  const categories = Object.keys(grouped);

  return (
    <section
      ref={containerRef}
      data-scrollable
      className="h-screen no-scrollbar relative overflow-y-auto max-w-7xl mx-auto w-full p-5 pt-10 text-white"
    >
      <h2 className="text-3xl font-bold border-b-2 border-neutral-700 px-3 py-1">
        {lang === "en" ? "Projects" : "Проекты"}
      </h2>

      {/* CATEGORY RAIL */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-4 bg-black/40 backdrop-blur-md rounded-xl px-4 py-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() =>
              document
                .getElementById(`cat-${cat}`)
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className={`text-sm ${
              activeCategory === cat
                ? "text-indigo-400"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* CATEGORIES */}
      <div className="space-y-24 pb-20">
        {Object.entries(grouped).map(([category, items]) => (
          <motion.section
            key={category}
            id={`cat-${category}`}
            onViewportEnter={() => setActiveCategory(category)}
            viewport={{ margin: "-40%" }}
            animate={{ opacity: activeCategory === category ? 1 : 0.35 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <div
              className={`absolute -inset-10 rounded-3xl bg-gradient-to-br ${HEAT[category]} to-transparent blur-2xl`}
            />

            <div className="relative z-10 mb-8">
              <h3 className="text-2xl font-semibold mb-2">{category}</h3>
              <p className="text-sm text-neutral-400 max-w-2xl">
                {meta[category as keyof typeof meta]}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {items.map((project) => (
                <motion.div
                  key={project.id}
                  className="p-5 rounded-xl border border-neutral-700 bg-neutral-900/40"
                >
                  <h4 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h4>
                  <p className="text-sm text-neutral-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs border border-neutral-700 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </section>
  );
};
