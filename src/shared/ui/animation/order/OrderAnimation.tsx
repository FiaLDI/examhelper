"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.72,
      delayChildren: 0.8,
    },
  },
};

export const OrderAnimation = ({children, isActive}: {children: ReactNode, isActive: boolean}) => (
  <motion.div
      variants={container}
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      className="relative flex items-center justify-center h-full"
  >
  {children}
  </motion.div>
)
