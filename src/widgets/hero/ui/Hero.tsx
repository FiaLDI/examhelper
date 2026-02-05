"use client";

import { motion } from "framer-motion";
import { Check, Search, Lock, Cloud, Upload, Database } from "lucide-react";
import { useDict } from "@/shared/lib";
import { LineToRight } from "@/shared/ui/animation";
import { DefaultButton, PrimaryButton } from "@/shared/ui/button";

const highlightIcons = [
  Search,
  Database,
  Lock,
  Cloud,
  Lock,
  Upload
];


export const Hero = () => {
  const hero = useDict("hero");

  return (
    <div
      id="hero"
      className="w-full py-10 lg:py-40"
    >
      <div className="max-w-7xl mx-auto h-full">
        <div className="relative flex flex-col lg:flex-row h-full items-center justify-between gap-16 text-white px-6">
          <div className="flex flex-col gap-8 max-w-xl">
            <div className="relative inline-block">
              <h1
                className="text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.1]"
              >
                {hero.title}
              </h1>
              <LineToRight />
            </div>
            <p
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-neutral-400"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              {hero.subTitle}
            </p>
            <p
              className="lg:text-lg text-neutral-300 leading-relaxed max-w-lg"
            >
              {hero.value}
            </p>
            
            <div className="flex gap-4 pt-4">
              <DefaultButton
                title={hero.ctaPrimary}
                handler={() => {}}
              />
              <PrimaryButton
                title={hero.ctaSkills}
                handler={() => {}}
              />
            </div>
          </div>
         <motion.div
  className="grid grid-cols-2 gap-4 pt-4"
  initial="hidden"
  animate="visible"
  variants={{
    visible: {
      transition: { staggerChildren: 0.08 },
    },
    hidden: {},
  }}
>
  {hero.highlights.map((val, idx) => {
    const Icon = highlightIcons[idx] ?? Check;

    return (
      <motion.div
        key={idx}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
        className="
          group flex items-center gap-3
          rounded-2xl border border-neutral-800
          bg-gradient-to-br from-neutral-900/60 to-neutral-950/30
          px-4 py-3 text-sm text-neutral-300
          transition-all duration-300
          hover:-translate-y-0.5
          hover:border-indigo-500/50
          hover:bg-neutral-900
        "
      >
        <span
          className="
            flex h-8 w-8 items-center justify-center
            rounded-md bg-indigo-500/10 text-indigo-400
            transition-colors
            group-hover:bg-indigo-500/20
          "
        >
          <Icon size={16} />
        </span>

        <span className="leading-relaxed">{val}</span>
      </motion.div>
    );
  })}
</motion.div>


        </div>
      </div>
    </div>
  );
};
