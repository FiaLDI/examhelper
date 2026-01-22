
import { Language } from "@/shared/lib";
import { SkillsGroupDict } from "../types/skills.types";

export const SkillsGroupData: Record<Language, SkillsGroupDict> = {
  en: {
    groups: [
      {
        level: "Primary Skills",
        description:
          "Areas I work with most often in commercial and personal projects.",
        glow: true,
        items: [
          {
            capability: "Frontend development with modern frameworks",
            stack: ["React", "Next.js", "TypeScript", "FSD"],
          },
          {
            capability: "Backend development and API integration",
            stack: ["NestJS", "Node.js", "REST"],
          },
          {
            capability: "State management and data fetching",
            stack: ["Zustand", "React Query"],
          },
        ],
      },
      {
        level: "Additional Tools",
        description:
          "Technologies I regularly use to support development and improve reliability.",
        items: [
          {
            capability: "Database access and data modeling",
            stack: ["Prisma", "PostgreSQL"],
          },
          {
            capability: "Development tooling and workflows",
            stack: ["Docker", "CI/CD", "ESLint", "Prettier"],
          },
        ],
      },
      {
        level: "Exploring & Learning",
        description:
          "Technologies I have experience with through experimentation or side projects.",
        items: [
          {
            capability: "Experimental and cross-platform tools",
            stack: ["Rust", "Tauri", "Unity", "WebRTC"],
          },
        ],
      },
    ],
  },

  ru: {
    groups: [
      {
        level: "Основные навыки",
        description:
          "Области, с которыми я чаще всего работаю в коммерческих и личных проектах.",
        glow: true,
        items: [
          {
            capability: "Frontend-разработка на современных фреймворках",
            stack: ["React", "Next.js", "TypeScript", "FSD"],
          },
          {
            capability: "Backend-разработка и интеграция API",
            stack: ["NestJS", "Node.js", "REST"],
          },
          {
            capability: "Управление состоянием и загрузкой данных",
            stack: ["Zustand", "React Query"],
          },
        ],
      },
      {
        level: "Дополнительные инструменты",
        description:
          "Технологии, которые я регулярно использую для поддержки разработки и надёжности.",
        items: [
          {
            capability: "Работа с базами данных и моделями данных",
            stack: ["Prisma", "PostgreSQL"],
          },
          {
            capability: "Инструменты разработки и процессы",
            stack: ["Docker", "CI/CD", "ESLint", "Prettier"],
          },
        ],
      },
      {
        level: "Изучаю и пробую",
        description:
          "Технологии, с которыми я работал в рамках экспериментов и pet-проектов.",
        items: [
          {
            capability: "Экспериментальные и кроссплатформенные инструменты",
            stack: ["Rust", "Tauri", "Unity", "WebRTC"],
          },
        ],
      },
    ],
  },
};
