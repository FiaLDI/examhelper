"use client";

import { ProjectItem } from "@/entities/project";
import { useDict } from "@/shared/lib";
import { useProjectCategories } from "../model/useProjectCategories";
import { ActiveCategory } from "@/shared/ui/animation";

export const ProjectList = () => {
  const data = useDict("ProjectWidget");
  const items = useDict("projects");

  const {
    containerRef,
    activeCategory,
    setActiveCategory,
    grouped,
    categories,
  } = useProjectCategories(items.items);

  return (
    <section
      ref={containerRef}
      data-scrollable
      style={{ WebkitOverflowScrolling: "touch" }}
      className="
        h-screen w-full
        overflow-y-auto no-scrollbar
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-12 text-white relative">

        {/* HEADER */}
        <div className="mb-16 max-w-2xl">
          <h2
            className="
              text-4xl lg:text-5xl
              font-semibold
              tracking-tight
            "
          >
            {data.title}
          </h2>

          <div className="mt-4 h-px w-24 bg-indigo-500/60" />
        </div>

        {/* CATEGORY NAV */}
        <div
          className="
            fixed bottom-16 left-1/2 -translate-x-1/2 z-30
            flex gap-1
            rounded-full
            bg-neutral-900/70 backdrop-blur
            border border-neutral-800
            px-2 py-2
          "
        >
          {categories.map((cat) => (
            <button
              key={cat}
              data-active={activeCategory === cat}
              onClick={() =>
                document
                  .getElementById(`cat-${cat}`)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="
                px-3 py-1.5
                text-xs
                rounded-full
                transition-colors
                text-neutral-400
                hover:text-neutral-200
                data-[active=true]:bg-neutral-800
                data-[active=true]:text-indigo-400
              "
            >
              {cat}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="space-y-24 pb-32">
          {categories.map((category) => (
            <ActiveCategory
              key={`project-category-${category}`}
              category={category}
              setActiveCategory={setActiveCategory}
              isActive={activeCategory === category}
            >
              {/* CATEGORY HEADER */}
              <div className="relative z-10 mb-10 max-w-3xl">
                <h3
                  className="
                    text-2xl
                    font-medium
                    tracking-tight
                    mb-2
                  "
                >
                  {category}
                </h3>

                <p
                  className="
                    text-sm
                    text-neutral-400
                    leading-relaxed
                  "
                >
                  {items.categoriesMeta[category]}
                </p>
              </div>

              {/* PROJECTS GRID */}
              <div className="grid gap-6 md:grid-cols-2">
                {grouped[category].map((project) => (
                  <ProjectItem
                    key={`project-${project.id}`}
                    project={project}
                  />
                ))}
              </div>
            </ActiveCategory>
          ))}
        </div>
      </div>
    </section>
  );
};
