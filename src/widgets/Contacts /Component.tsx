"use client";

import { ContactData, CONTACT_STATIC } from "@/pages-data/contact";
import { motion, Variants } from "framer-motion";
import { useContext } from "react";
import { FullpageContext } from "@/shared/lib/scroll-to-section/FullpageContext";
import { useLanguage } from "@/features/language-switcher/model/useLanguage";

const CONTACT_INDEX = 4;

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE_OUT },
  },
};

export const Contacts = () => {
  const ctx = useContext(FullpageContext);
  if (!ctx) return null;

  const { index } = ctx;
  const isActive = index === CONTACT_INDEX;

  const { current: lang } = useLanguage();
  const data = ContactData[lang];

  return (
    <section className="h-screen max-w-7xl mx-auto w-full px-6">
      <motion.div
        variants={container}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="relative flex items-center justify-center h-full"
      >
        {/* GLOW */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[700px] h-[700px] rounded-full bg-indigo-500/10 blur-[160px]" />
        </div>

        {/* CARD */}
        <motion.div
          variants={item}
          className="relative z-10 w-full max-w-5xl rounded-3xl
                     bg-neutral-900/60 backdrop-blur-xl
                     border border-neutral-800
                     shadow-[0_30px_80px_rgba(0,0,0,0.6)]
                     p-10 text-white"
        >
          {/* HEADER */}
          <motion.div variants={item} className="mb-10">
            <h2 className="text-4xl font-semibold tracking-tight">
              {data.title}
            </h2>
            <p className="mt-3 text-sm text-neutral-400 max-w-xl">
              {data.subtitle}
            </p>
          </motion.div>

          {/* CONTENT */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* CONTACT INFO */}
            <motion.div variants={item} className="space-y-6 text-neutral-300">
              <div>
                <span className="text-xs uppercase tracking-wide text-neutral-500">
                  Email
                </span>
                <p className="text-lg mt-1">
                  <a
                    href={`mailto:${CONTACT_STATIC.email}`}
                    className="hover:text-indigo-400 transition"
                  >
                    {CONTACT_STATIC.email}
                  </a>
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wide text-neutral-500">
                  GitHub
                </span>
                <p className="text-lg mt-1">
                  <a
                    href={CONTACT_STATIC.github}
                    target="_blank"
                    className="hover:text-indigo-400 transition"
                  >
                    {CONTACT_STATIC.github}
                  </a>
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wide text-neutral-500">
                  Telegram
                </span>
                <p className="text-lg mt-1">
                  <a
                    href={CONTACT_STATIC.telegram}
                    target="_blank"
                    className="hover:text-indigo-400 transition"
                  >
                    {CONTACT_STATIC.telegram}
                  </a>
                </p>
              </div>
            </motion.div>

            {/* FORM */}
            <motion.div variants={item}>
              <h3 className="text-xl font-medium mb-4">
                {data.messageTitle}
              </h3>

              <form className="flex flex-col gap-4">
                <textarea
                  placeholder={data.messagePlaceholder}
                  className="w-full h-32 rounded-xl
                             bg-neutral-950/60
                             border border-neutral-800
                             p-4 text-sm text-white
                             focus:outline-none focus:border-indigo-500/60
                             transition resize-none"
                />

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="mt-2 self-start
                             px-6 py-2.5 rounded-xl
                             bg-indigo-500/90 hover:bg-indigo-500
                             text-sm font-medium
                             shadow-lg shadow-indigo-500/20
                             transition"
                >
                  {data.cta}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
