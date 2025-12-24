"use client";

import Image from "next/image";
import { HeroData } from "@/pages-data/hero";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useContext } from "react";
import { useMounted } from "@/shared/utils/useMounted";
import { TypingText } from "@/shared/utils/TypingText";
import { FullpageContext } from "@/shared/lib/scroll-to-section/FullpageContext";
import { useLanguage } from "@/features/language-switcher/model/useLanguage";

export const Hero = () => {
  const mounted = useMounted();
  const { setIndex } = useContext(FullpageContext);
  const { current: lang } = useLanguage();

  const data = HeroData[lang];

  /* ---------- PARALLAX ---------- */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const imgX = useTransform(mouseX, (v) => v * 0.02);
  const imgY = useTransform(mouseY, (v) => v * 0.02);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <section className="h-screen max-w-7xl mx-auto w-full px-6">
      <div className="relative flex h-full items-center justify-between gap-16 text-white">

        {/* LEFT */}
        <div className="flex flex-col gap-8 max-w-xl">

          {/* TITLE */}
          <div className="relative inline-block">
            <h1 className="text-5xl font-semibold tracking-tight leading-tight">
              {data.title}
            </h1>

            <motion.span
              className="absolute left-0 -bottom-2 h-[2px] bg-indigo-400"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>

          <p className="text-lg text-neutral-300">
            {data.subTitle}
          </p>

          <p className="text-xl text-neutral-400 min-h-12">
            {mounted ? <TypingText text={data.value} /> : data.value}
          </p>

          <div className="flex flex-wrap gap-3">
            {data.highlights.map((val, idx) => (
              <span key={idx} className="px-4 py-1.5 rounded-full border border-neutral-700 bg-neutral-900/40 text-sm text-neutral-200">
                {val}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mt-4">
            <button
              onClick={() => setIndex?.(2)}
              className="px-6 py-2.5 rounded-xl bg-indigo-500/90 hover:bg-indigo-500 text-sm font-medium transition"
            >
              {data.ctaPrimary}
            </button>

            <button
              onClick={() => setIndex?.(1)}
              className="px-6 py-2.5 rounded-xl border border-neutral-700 bg-neutral-900/40 text-sm font-medium hover:bg-neutral-800 transition"
            >
              {data.ctaSkills}
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <motion.div style={{ x: imgX, y: imgY }} className="relative hidden md:block">
          <div className="absolute -inset-12 rounded-full bg-indigo-500/20 blur-[140px]" />
          <Image
            src={data.image}
            width={420}
            height={420}
            alt={data.title}
            className="relative z-10 rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur"
          />
        </motion.div>
      </div>
    </section>
  );
};
