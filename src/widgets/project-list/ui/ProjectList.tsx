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
      className="h-screen no-scrollbar relative overflow-y-auto
                 max-w-7xl mx-auto w-full p-5 pt-15 text-white"
    >
      <h2 className="text-3xl font-bold p-5">
        {data.title}
      </h2>

      <div className="fixed bottom-16 left-1/2 -translate-x-1/2 z-20
                      flex gap-4 bg-black/40 backdrop-blur-md
                      rounded-xl px-4 py-2">
        {categories.map((cat) => (
          <button
            data-active={activeCategory === cat}
            key={cat}
            onClick={() =>
              document
                .getElementById(`cat-${cat}`)
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className={
              "text-sm transition text-neutral-400 hover:text-neutral-200 data-[active=true]:text-indigo-400"
            }
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-14 p-5 pb-20">
        {categories.map((category) => (
          <ActiveCategory key={`project-category-${category}`} category={category} setActiveCategory={setActiveCategory} isActive={activeCategory === category} >
            <div
              data-type={activeCategory}
              className={`
                -z-10 absolute -inset-10 rounded-3xl
                bg-linear-to-br 
                data-[type=Core]:from-indigo-500/20 
                data-[type=Contribution]:from-sky-500/15
                data-[type=Pet]:from-emerald-500/10
                data-[type=Legacy]:from-neutral-500/5
                to-transparent blur-2xl
              `}
            />

            <div className="relative z-10 mb-8">
              <h3 className="text-2xl font-semibold mb-2">
                {category}
              </h3>
              <p className="text-sm text-neutral-400 max-w-3xl">
                {items.categoriesMeta[category]}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
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
    </section>
  );
};
