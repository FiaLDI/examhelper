// pages-data/hero.ts

import { Language } from "@/features/language-switcher/model/useLanguageStore";

export const HeroData: Record<Language, {
  title: string;
  subTitle: string;
  value: string;
  highlights: string[];
  ctaSkills: string;
  ctaPrimary: string;
  image: string;
}> = {
  en: {
    title: "Leonid Stepanov",
    subTitle: "Full-Stack Software Engineer",
    value:
      "Software engineer focused on building scalable, resilient, and high-performance web platforms. I design systems that prioritize reliability, clean architecture, and long-term maintainability.",
    highlights: [
      "Core Stack: TypeScript, Next.js, Nest.js, Prisma, PostgreSQL",
      "Architecture: Modular systems, Clean Architecture, FSD, monorepo workflows",
      "Scalability: API design, real-time services, distributed architectures",
      "Engineering Practices: Docker, performance optimization",
    ],
    ctaSkills: "Skills",
    ctaPrimary: "View Projects",
    image: "/images/leonid.jpg",
  },

  ru: {
    title: "Леонид Степанов",
    subTitle: "Full-Stack разработчик",
    value:
      "Инженер-программист, специализирующийся на создании масштабируемых, отказоустойчивых и высокопроизводительных веб-платформ.",
    highlights: [
      "Стек: TypeScript, Next.js, Nest.js, Prisma, PostgreSQL",
      "Архитектура: модульные системы, Clean Architecture, FSD, монорепозитории",
      "Масштабирование: API-дизайн, real-time сервисы, распределённые системы",
      "Инженерные практики: Docker, оптимизация производительности",
    ],
    ctaSkills: "Навыки",
    ctaPrimary: "Проекты",
    image: "/images/leonid.jpg",
  },
};
