import { Language } from "@/features/language-switcher/model/types";

/* ---------------------------------- */
/* TYPES */
/* ---------------------------------- */

export type ProjectCategory = "Core" | "Contribution" | "Pet" | "Legacy";

export interface ProjectItem {
  id: number;
  category: ProjectCategory;
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

export type ProjectsDict = {
  title: string;
  categoriesMeta: Record<ProjectCategory, string>;
  items: ProjectItem[];
};

/* ---------------------------------- */
/* PROJECTS DATA */
/* ---------------------------------- */

export const ProjectsData: Record<Language, ProjectsDict> = {
  /* ================================ */
  /* EN */
  /* ================================ */
  en: {
    title: "Projects",
    categoriesMeta: {
      Core:
        "Production-grade systems designed end-to-end with focus on architecture, scalability and long-term maintainability.",
      Contribution:
        "Team and open-source work inside existing codebases and real business constraints.",
      Pet:
        "Exploration projects for learning, experimentation and tooling.",
      Legacy:
        "Early-stage projects showcasing foundational engineering skills.",
    },
    items: [
      // ---------- CORE ----------
      {
        id: 1,
        category: "Core",
        title: "Orbis — Real-Time Communication Platform (Diploma)",
        description:
          "Designed and implemented a modular real-time communication platform with private channels, role-based access control, moderation workflows, and distributed services. Focused on scalability, clean architecture, and long-term maintainability.",
        tech: [
          "React",
          "Next.js",
          "Express",
          "Redis",
          "PostgreSQL",
          "Socket.IO",
          "Prisma",
          "FSD Architecture",
        ],
        link: "https://github.com/FiaLDI/Orbis-Diplom",
      },
      {
        id: 2,
        category: "Core",
        title: "Orbis Game — Sci-Fi Survival (Unity)",
        description:
          "Architected core gameplay systems including abilities, stats, buffs, quests, world generation, and streaming. Optimized rendering and spawning pipelines using GPU instancing and custom data models.",
        tech: [
          "Unity",
          "C#",
          "FishNet",
          "ScriptableObjects",
          "GPU Instancing",
          "Gameplay Systems",
        ],
      },

      // ---------- CONTRIBUTION ----------
      {
        id: 3,
        category: "Contribution",
        title: "singlepagestartup — Contributor",
        description:
          "Implemented centralized HTTP error handling and improved paginated search in the admin panel. Contributed production-quality code to a live SaaS product.",
        tech: ["React", "Next.js", "TypeScript"],
        link: "https://github.com/singlepagestartup/singlepagestartup",
      },
      {
        id: 4,
        category: "Contribution",
        title: "Kultfond RF (Private Project)",
        description:
          "Delivered responsive UI improvements and optimized layout for mobile devices across a live production website.",
        tech: ["React", "Next.js", "TailwindCSS"],
      },
      {
        id: 5,
        category: "Contribution",
        title: "business.zapaha.net (Private Project)",
        description:
          "Enhanced UX and implemented adaptive layouts, ensuring consistent rendering across device groups.",
        tech: ["React", "Next.js", "TailwindCSS"],
      },
      {
        id: 6,
        category: "Contribution",
        title: "didigallery.com (Private Project)",
        description:
          "Developed new functional UI blocks and optimized responsive behavior based on real business requirements.",
        tech: ["React", "Next.js", "TailwindCSS"],
      },

      // ---------- PET ----------
      {
        id: 7,
        category: "Pet",
        title: "Markdown Editor — Tauri Desktop App",
        description:
          "Cross-platform Markdown editor built with Next.js and Rust (Tauri). Designed for speed, portability, and extensibility.",
        tech: ["Next.js", "Tauri", "Rust", "TypeScript"],
        link: "https://github.com/FiaLDI/Markdown-Editor",
      },
      {
        id: 8,
        category: "Pet",
        title: "Project Terraform (Unity)",
        description:
          "Implemented a feature-sliced architecture for gameplay systems including stats, abilities, and buffs. Focused on maintainability and modularity.",
        tech: ["Unity", "C#", "FSD", "Gameplay Systems"],
      },
      {
        id: 9,
        category: "Pet",
        title: "PostCreator — Automated Post Generator",
        description:
          "Production-ready tool for generating structured posts based on user prompts. Includes custom UI, local storage, and animated flows.",
        tech: [
          "React",
          "Next.js",
          "Zustand",
          "TailwindCSS",
          "Framer Motion",
          "PostgreSQL",
        ],
        link: "https://github.com/FiaLDI/PostCreator",
      },

      // ---------- LEGACY ----------
      {
        id: 10,
        category: "Legacy",
        title: "TaskManager",
        description:
          "Frontend client for interacting with a JSON-based backend. Implemented CRUD operations and data transformation pipelines.",
        tech: ["React", "Next.js", "Redux", "Tailwind", "TypeScript"],
        link: "https://github.com/FiaLDI/TaskManager",
      },
      {
        id: 11,
        category: "Legacy",
        title: "Voice Chat — WebRTC Audio Chat",
        description:
          "Minimal WebRTC audio application with a custom signaling server. Demonstrates understanding of real-time media fundamentals.",
        tech: ["JavaScript", "WebRTC", "Node.js", "Express"],
        link: "https://github.com/FiaLDI/voice-chat",
      },
    ],
  },

  /* ================================ */
  /* RU */
  /* ================================ */
  ru: {
    title: "Проекты",
    categoriesMeta: {
      Core:
        "Production-ready системы, спроектированные целиком с упором на архитектуру, масштабируемость и долгосрочную поддержку.",
      Contribution:
        "Командная и open-source разработка в рамках существующих кодовых баз и бизнес-ограничений.",
      Pet:
        "Исследовательские проекты для обучения, экспериментов и создания инструментов.",
      Legacy:
        "Ранние проекты, демонстрирующие базовые инженерные навыки.",
    },
    items: [
      {
        id: 1,
        category: "Core",
        title: "Orbis — платформа real-time коммуникации (Диплом)",
        description:
          "Спроектировал и реализовал модульную платформу реального времени с приватными каналами, ролевым доступом, системой модерации и распределёнными сервисами.",
        tech: [
          "React",
          "Next.js",
          "Express",
          "Redis",
          "PostgreSQL",
          "Socket.IO",
          "Prisma",
          "FSD Architecture",
        ],
        link: "https://github.com/FiaLDI/Orbis-Diplom",
      },
      {
        id: 2,
        category: "Core",
        title: "Orbis Game — Sci-Fi Survival (Unity)",
        description:
          "Спроектировал ключевые игровые системы: способности, характеристики, баффы, квесты, генерацию мира и стриминг контента. Оптимизировал рендеринг с использованием GPU instancing.",
        tech: [
          "Unity",
          "C#",
          "FishNet",
          "ScriptableObjects",
          "GPU Instancing",
          "Gameplay Systems",
        ],
      },

      {
        id: 3,
        category: "Contribution",
        title: "singlepagestartup — вклад в проект",
        description:
          "Реализовал централизованную обработку HTTP-ошибок и улучшил пагинацию поиска в админ-панели SaaS-продукта.",
        tech: ["React", "Next.js", "TypeScript"],
        link: "https://github.com/singlepagestartup/singlepagestartup",
      },
      {
        id: 4,
        category: "Contribution",
        title: "Kultfond RF (частный проект)",
        description:
          "Реализовал адаптивные UI-улучшения и оптимизацию верстки под мобильные устройства.",
        tech: ["React", "Next.js", "TailwindCSS"],
      },
      {
        id: 5,
        category: "Contribution",
        title: "business.zapaha.net (частный проект)",
        description:
          "Улучшил UX и реализовал адаптивные макеты для разных типов устройств.",
        tech: ["React", "Next.js", "TailwindCSS"],
      },
      {
        id: 6,
        category: "Contribution",
        title: "didigallery.com (частный проект)",
        description:
          "Разработал новые UI-блоки и оптимизировал адаптивное поведение интерфейса.",
        tech: ["React", "Next.js", "TailwindCSS"],
      },

      {
        id: 7,
        category: "Pet",
        title: "Markdown Editor — desktop-приложение (Tauri)",
        description:
          "Кроссплатформенный Markdown-редактор на Next.js и Rust (Tauri), ориентированный на скорость и расширяемость.",
        tech: ["Next.js", "Tauri", "Rust", "TypeScript"],
        link: "https://github.com/FiaLDI/Markdown-Editor",
      },
      {
        id: 8,
        category: "Pet",
        title: "Project Terraform (Unity)",
        description:
          "Реализовал feature-sliced архитектуру игровых систем: характеристики, способности и баффы.",
        tech: ["Unity", "C#", "FSD", "Gameplay Systems"],
      },
      {
        id: 9,
        category: "Pet",
        title: "PostCreator — генератор постов",
        description:
          "Инструмент для автоматической генерации структурированных постов. Включает кастомный UI, localStorage и анимации.",
        tech: [
          "React",
          "Next.js",
          "Zustand",
          "TailwindCSS",
          "Framer Motion",
          "PostgreSQL",
        ],
        link: "https://github.com/FiaLDI/PostCreator",
      },

      {
        id: 10,
        category: "Legacy",
        title: "TaskManager",
        description:
          "Frontend-клиент для работы с JSON backend. Реализованы CRUD-операции и трансформация данных.",
        tech: ["React", "Next.js", "Redux", "Tailwind", "TypeScript"],
        link: "https://github.com/FiaLDI/TaskManager",
      },
      {
        id: 11,
        category: "Legacy",
        title: "Voice Chat — WebRTC аудиочат",
        description:
          "Минимальное WebRTC-приложение с кастомным signaling-сервером для peer-to-peer аудиосвязи.",
        tech: ["JavaScript", "WebRTC", "Node.js", "Express"],
        link: "https://github.com/FiaLDI/voice-chat",
      },
    ],
  },
};
