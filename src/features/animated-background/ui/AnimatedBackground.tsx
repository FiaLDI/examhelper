"use client";

import { MotionValue } from "framer-motion";

import { useBackgroundTheme } from "../model/useBackgroundTheme";
import { useBackgroundMotion } from "../model/useBackgroundMotion";

import { DesktopBackground } from "./DesktopBackground";
import { MobileBackground } from "./MobileBackground";
import { IOSBackground } from "./IOSBackground";

import {
  isIOS,
  isMobile,
  prefersReducedMotion,
} from "@/shared/lib";

export interface IComponentProps {
  index: number;
  progress: MotionValue<number>;
  projectsProgress: MotionValue<number>;
}

export function AnimatedBackground({
  index,
  progress,
  projectsProgress,
}: IComponentProps) {
  /**
   * theme — зависит только от index
   */
  const theme = useBackgroundTheme(index);

  /**
   * motion — ХУК ВСЕГДА ВЫЗЫВАЕТСЯ
   * даже если результат не используется
   */
  const motion = useBackgroundMotion(progress, projectsProgress);

  /**
   * iOS / reduced motion — самый лёгкий путь
   */
  if (isIOS || prefersReducedMotion) {
    return <IOSBackground theme={theme} />;
  }

  /**
   * Mobile (Android / touch)
   */
  if (isMobile) {
    return <MobileBackground theme={theme} />;
  }

  /**
   * Desktop — полный FX
   */
  return (
    <DesktopBackground
      index={index}
      theme={theme}
      {...motion}
    />
  );
}
