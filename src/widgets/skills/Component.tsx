"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useContext } from "react";
import { useMounted } from "@/shared/utils/useMounted";
import { useDict } from "@/shared/utils/useDict";
import { SkillsDict } from "@/pages-data/skills";
import { FullpageContext } from "@/shared/lib/scroll-to-section/FullpageContext";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type SkillsProps = {
  skillsDict: SkillsDict;
};

export const Skills = ({ skillsDict }: SkillsProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const mounted = useMounted();
  const ctx = useContext(FullpageContext);

  /* ---------- SCROLL BOUNDARY (для mobile / drag) ---------- */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !ctx) return;

    const onScroll = () => {
      const atTop = el.scrollTop <= 0;
      const atBottom =
        el.scrollTop + el.clientHeight >= el.scrollHeight - 1;

      // если внутри ещё есть scroll — лочим fullpage
      ctx.setLockScroll(!(atTop || atBottom));
    };

    el.addEventListener("scroll", onScroll);
    onScroll();

    return () => el.removeEventListener("scroll", onScroll);
  }, [ctx]);

  /* ---------- FRAMER ---------- */
  const { scrollYProgress } = useScroll({
    container: scrollRef,
  });

  const bgShift = useTransform(scrollYProgress, [0, 1], [0, -120]);

  /* ---------- DATA ---------- */
  const clientDict = useDict("skills");
  const data = mounted ? clientDict : skillsDict;

  return (
    <section className="h-screen w-full">
      {/* ❗️ТОЛЬКО ЭТОТ div — scrollable */}
      <div
        ref={scrollRef}
        data-scrollable
        className="h-full max-w-7xl mx-auto
                   px-6 py-40
                   overflow-y-auto overscroll-contain
                   touch-pan-y
                   no-scrollbar
                   text-white
                   relative"
      >
        {/* BACKGROUND SHIFT */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ y: bgShift }}
        />

        {/* HEADER */}
        <div className="mb-5 max-w-2xl relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-4xl font-semibold tracking-tight"
          >
            {data.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: EASE }}
            className="mt-4 text-sm text-neutral-400"
          >
            {data.subtitle}
          </motion.p>
        </div>

        {/* CONTENT */}
        <div className="space-y-20 relative z-10">
          {data.groups.map((group) => (
            <motion.section
              key={group.level}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-30%" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="relative"
            >
              {group.glow && (
                <div className="absolute -inset-12 rounded-3xl
                                bg-indigo-500/10 blur-2xl
                                pointer-events-none" />
              )}

              <div className="mb-10">
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
      </div>
    </section>
  );
};
