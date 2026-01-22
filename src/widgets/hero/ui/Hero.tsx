"use client";

import Image from "next/image";
import { useContext } from "react";

import { FullpageContext } from "@/features/custom-scroll/model";
import { useDict } from "@/shared/lib";
import { LineToRight } from "@/shared/ui/animation";
import { DefaultButton, PrimaryButton } from "@/shared/ui/button";

export const Hero = () => {
  const { setIndex } = useContext(FullpageContext);

  const hero = useDict("hero");

  return (
    <section className="h-screen max-w-7xl mx-auto w-full px-6">
      <div className="relative flex h-full items-center justify-between gap-16 text-white">

        <div className="flex flex-col gap-8 max-w-xl">

          <div className="relative inline-block">
            <h1 className="text-3xl lg:text-5xl tracking-tight leading-tight">
              {hero.title}
            </h1>

            <LineToRight />
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
            <DefaultButton title={hero.ctaPrimary} handler={() => setIndex?.(2)} />
            <PrimaryButton title={hero.ctaSkills} handler={() => setIndex?.(1)}/>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute -inset-12 rounded-full bg-indigo-500/20 blur-[140px]" />

          <Image
            src={hero.image}
            width={320}
            height={320}
            alt={hero.title}
            className="relative z-10 rounded-2xl
                       border border-neutral-800
                       bg-neutral-900/40 backdrop-blur"
          />
        </div>

      </div>
    </section>
  );
};
