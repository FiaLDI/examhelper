"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useContext } from "react";
import { useMounted } from "@/shared/utils/useMounted";
import { FullpageContext } from "@/features/custom-scroll/lib";
import { useDict } from "@/shared/utils/useDict";
import { HeroDict } from "../types/hero.type";

export const Hero = ({ heroDict }: {heroDict: HeroDict;}) => {
  const mounted = useMounted();
  const { setIndex } = useContext(FullpageContext);

  const clientDict = useDict("hero");

  const hero: HeroDict = mounted ? clientDict : heroDict;

  return (
    <section className="h-screen max-w-7xl mx-auto w-full px-6">
      <div className="relative flex h-full items-center justify-between gap-16 text-white">

        {/* LEFT */}
        <div className="flex flex-col gap-8 lg:gap-8 max-w-xl">

          <div className="relative inline-block">
            <h1 className="text-3xl lg:text-5xl tracking-tight leading-tight">
              {hero.title}
            </h1>

            <motion.span
              className="absolute left-0 -bottom-2 h-[2px] bg-indigo-400"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>

          <p className="lg:text-lg text-neutral-300">
            {hero.subTitle}
          </p>

          <p className="lg:text-xl text-neutral-400 min-h-12">
            {hero.value}
          </p>

          <div className="flex flex-col gap-3">
            {hero.highlights.map((val, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 text-sm text-neutral-300"
              >
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-400 shrink-0" />
                <span className="leading-relaxed">{val}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <button
              className="w-full lg:w-fit relative px-6 py-3 rounded-xl bg-indigo-500 text-sm font-medium
                        shadow-[0_0_30px_-8px_rgba(99,102,241,0.8)]
                        hover:shadow-[0_0_40px_-6px_rgba(99,102,241,1)]
                        transition cursor-pointer"
            >
              {hero.ctaPrimary}
            </button>
            <button
              onClick={() => setIndex?.(1)}
              className="w-full lg:w-fit px-6 py-2.5 rounded-xl border border-neutral-700 bg-neutral-900/40 text-sm font-medium hover:bg-neutral-800 transition cursor-pointer"
            >
              {hero.ctaSkills}
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="relative hidden md:block"
        >
          <div className="absolute -inset-12 rounded-full bg-indigo-500/20 blur-[140px]" />
          <Image
            src={hero.image}
            width={320}
            height={320}
            alt={hero.title}
            className="relative z-10 rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur"
          />
        </div>

      </div>
    </section>
  );
};
