import { Language } from "@/features/language-switcher/model/useLanguageStore";

/* ---------------------------------- */
/* TYPES */
/* ---------------------------------- */

export type SkillGroup = {
  level: string;
  description: string;
  glow?: boolean;
  items: {
    capability: string;
    stack: string[];
  }[];
};

/* ---------------------------------- */
/* SKILLS DATA */
/* ---------------------------------- */

export const skillsData: Record<Language, SkillGroup[]> = {
  en: [
    {
      level: "Core Expertise",
      description:
        "Areas where I design systems end-to-end and make architectural decisions.",
      glow: true,
      items: [
        {
          capability: "Designing scalable frontend architectures",
          stack: ["React", "Next.js", "TypeScript", "FSD"],
        },
        {
          capability: "Building real-time systems",
          stack: ["WebSockets", "Redis", "Node.js"],
        },
        {
          capability: "State & data flow management",
          stack: ["Zustand", "React Query"],
        },
      ],
    },
    {
      level: "Supporting Stack",
      description:
        "Technologies I use confidently to support and scale core solutions.",
      items: [
        {
          capability: "API & data layer",
          stack: ["Prisma", "PostgreSQL", "REST", "GraphQL"],
        },
        {
          capability: "Tooling & developer experience",
          stack: ["Docker", "CI/CD", "ESLint", "Prettier"],
        },
      ],
    },
    {
      level: "Contextual Knowledge",
      description:
        "Areas I explore or use for experimentation and side projects.",
      items: [
        {
          capability: "Native & experimental tooling",
          stack: ["Rust", "Tauri", "Unity", "WebRTC"],
        },
      ],
    },
  ],

  ru: [
    {
      level: "Ключевая экспертиза",
      description:
        "Области, где я проектирую системы целиком и принимаю архитектурные решения.",
      glow: true,
      items: [
        {
          capability: "Проектирование масштабируемой frontend-архитектуры",
          stack: ["React", "Next.js", "TypeScript", "FSD"],
        },
        {
          capability: "Разработка real-time систем",
          stack: ["WebSockets", "Redis", "Node.js"],
        },
        {
          capability: "Управление состоянием и потоками данных",
          stack: ["Zustand", "React Query"],
        },
      ],
    },
    {
      level: "Поддерживающий стек",
      description:
        "Технологии, которые я уверенно использую для поддержки и масштабирования решений.",
      items: [
        {
          capability: "API и слой данных",
          stack: ["Prisma", "PostgreSQL", "REST", "GraphQL"],
        },
        {
          capability: "Инструменты и опыт разработки",
          stack: ["Docker", "CI/CD", "ESLint", "Prettier"],
        },
      ],
    },
    {
      level: "Контекстные знания",
      description:
        "Области, которые я изучаю или использую для экспериментов и pet-проектов.",
      items: [
        {
          capability: "Нативные и экспериментальные инструменты",
          stack: ["Rust", "Tauri", "Unity", "WebRTC"],
        },
      ],
    },
  ],
};
