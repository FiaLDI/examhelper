
import { Language } from "@/shared/lib";
import { ProjectsDict } from "../types/project.types";

export const ProjectsData: Record<Language, ProjectsDict> = {
  en: {
    categoriesMeta: {
      Core:
        "Large personal or academic projects where I implemented core functionality and worked with application structure.",
      Contribution:
        "Commercial and team projects where I worked within existing codebases and business requirements.",
      Pet:
        "Side projects created for learning, experimentation, and improving practical skills.",
      Legacy:
        "Earlier projects demonstrating basic frontend and backend concepts.",
    },
    items: [
      {
        id: 1,
        category: "Core",
        title: "Orbis — Real-Time Communication Platform (Diploma)",
        description:
          "Developed a real-time communication platform with private channels, role-based access, and moderation features. Worked on both frontend and backend parts, focusing on modular structure and stable data flow.",
        tech: [
          "React",
          "Next.js",
          "Express",
          "Redis",
          "PostgreSQL",
          "Socket.IO",
          "FSD",
        ],
        link: "https://github.com/FiaLDI/Orbis-Diplom",
        isPrivate: false,
      },
      {
        id: 2,
        category: "Core",
        title: "Orbis Game — Sci-Fi Survival (Unity)",
        description:
          "Implemented gameplay systems such as abilities, stats, buffs, quests, and world generation. Worked on performance improvements related to rendering and object spawning.",
        tech: [
          "Unity",
          "C#",
          "FishNet",
          "ScriptableObjects",
          "GPU Instancing",
        ],
        link: "https://github.com/FiaLDI/Project-Terraform",
        isPrivate: false,
      },

      {
        id: 3,
        category: "Contribution",
        title: "singlepagestartup — Contributor",
        description:
          "Implemented centralized HTTP error handling and improved search pagination in the admin panel. Worked within an existing production codebase.",
        tech: ["React", "Next.js", "TypeScript"],
        link: "https://github.com/singlepagestartup/singlepagestartup",
        isPrivate: false,
      },
      {
        id: 4,
        category: "Contribution",
        title: "Kultfond RF (Private Project)",
        description:
          "Worked on responsive UI improvements and layout adjustments for mobile devices on a production website.",
        tech: ["React", "Next.js", "TailwindCSS"],
        isPrivate: true,
      },
      {
        id: 5,
        category: "Contribution",
        title: "business.zapaha.net (Private Project)",
        description:
          "Improved user interface and implemented adaptive layouts to support different screen sizes.",
        tech: ["React", "Next.js", "TailwindCSS"],
        isPrivate: true,
      },
      {
        id: 6,
        category: "Contribution",
        title: "didigallery.com (Private Project)",
        description:
          "Developed new UI components and adjusted responsive behavior based on business requirements.",
        tech: ["React", "Next.js", "TailwindCSS"],
        isPrivate: true,
      },

      {
        id: 7,
        category: "Pet",
        title: "Markdown Editor — Tauri Desktop App",
        description:
          "Built a cross-platform Markdown editor using Next.js and Tauri. Focused on basic desktop integration, performance, and usability.",
        tech: ["Next.js", "Tauri", "Rust", "TypeScript"],
        link: "https://github.com/FiaLDI/Markdown-Editor",
      },
      {
        id: 8,
        category: "Pet",
        title: "PostCreator — Automated Post Generator",
        description:
          "Created a web tool for generating structured posts. Implemented UI logic, animations, and local data storage.",
        tech: [
          "React",
          "Next.js",
          "Zustand",
          "TailwindCSS",
          "Framer Motion",
        ],
        link: "https://github.com/FiaLDI/PostCreator",
      },

      {
        id: 9,
        category: "Legacy",
        title: "TaskManager",
        description:
          "Frontend application for interacting with a JSON-based backend. Implemented CRUD operations and basic data transformations.",
        tech: ["React", "Next.js", "Redux", "Tailwind", "TypeScript"],
        link: "https://github.com/FiaLDI/TaskManager",
      },
      {
        id: 10,
        category: "Legacy",
        title: "Voice Chat — WebRTC Audio Chat",
        description:
          "Simple WebRTC audio chat application with a custom signaling server. Demonstrates understanding of real-time communication basics.",
        tech: ["JavaScript", "WebRTC", "Node.js", "Express"],
        link: "https://github.com/FiaLDI/voice-chat",
      },
    ],
  },

  ru: {
    categoriesMeta: {
      Core:
        "Крупные учебные и личные проекты, где я реализовывал основную функциональность и структуру приложения.",
      Contribution:
        "Коммерческие и командные проекты с работой в существующих кодовых базах и бизнес-требованиях.",
      Pet:
        "Pet-проекты для обучения, экспериментов и прокачки практических навыков.",
      Legacy:
        "Ранние проекты, демонстрирующие базовые frontend и backend навыки.",
    },
    items: [
      {
        id: 1,
        category: "Core",
        title: "Orbis — платформа real-time коммуникации (Диплом)",
        description:
          "Разработал платформу реального времени с приватными каналами, ролевым доступом и функциями модерации. Работал с frontend- и backend-частями, уделяя внимание модульной структуре.",
        tech: [
          "React",
          "Next.js",
          "Express",
          "Redis",
          "PostgreSQL",
          "Socket.IO",
          "Prisma",
          "FSD",
        ],
        link: "https://github.com/FiaLDI/Orbis-Diplom",
        isPrivate: false,
      },
      {
        id: 2,
        category: "Core",
        title: "Orbis Game — Sci-Fi Survival (Unity)",
        description:
          "Реализовал игровые системы: способности, характеристики, баффы, квесты и генерацию мира. Работал над оптимизацией рендеринга и спавна объектов.",
        tech: [
          "Unity",
          "C#",
          "FishNet",
          "ScriptableObjects",
          "GPU Instancing",
        ],
        link: "https://github.com/FiaLDI/Project-Terraform",
        isPrivate: false,
      },
      {
        id: 3,
        category: "Contribution",
        title: "singlepagestartup — вклад в проект",
        description:
          "Реализовал централизованную обработку HTTP-ошибок и улучшил пагинацию поиска в админ-панели в рамках существующего production-кода.",
        tech: ["React", "Next.js", "TypeScript"],
        link: "https://github.com/singlepagestartup/singlepagestartup",
        isPrivate: false,
      },
      {
        id: 4,
        category: "Contribution",
        title: "Kultfond RF (частный проект)",
        description:
          "Работал над адаптивной версткой и улучшениями UI для мобильных устройств.",
        tech: ["React", "Next.js", "TailwindCSS"],
        isPrivate: true,
      },
      {
        id: 5,
        category: "Contribution",
        title: "business.zapaha.net (частный проект)",
        description:
          "Улучшал пользовательский интерфейс и реализовывал адаптивные макеты под разные экраны.",
        tech: ["React", "Next.js", "TailwindCSS"],
        isPrivate: true,
      },
      {
        id: 6,
        category: "Contribution",
        title: "didigallery.com (частный проект)",
        description:
          "Разрабатывал новые UI-компоненты и настраивал адаптивное поведение интерфейса.",
        tech: ["React", "Next.js", "TailwindCSS"],
        isPrivate: true,
      },

      {
        id: 7,
        category: "Pet",
        title: "Markdown Editor — desktop-приложение (Tauri)",
        description:
          "Кроссплатформенный Markdown-редактор на Next.js и Tauri с базовой desktop-интеграцией и упором на удобство использования.",
        tech: ["Next.js", "Tauri", "Rust", "TypeScript"],
        link: "https://github.com/FiaLDI/Markdown-Editor",
        isPrivate: false,
      },
      {
        id: 8,
        category: "Pet",
        title: "PostCreator — генератор постов",
        description:
          "Веб-инструмент для генерации структурированных постов с UI-логикой, анимациями и локальным хранением данных.",
        tech: [
          "React",
          "Next.js",
          "Zustand",
          "TailwindCSS",
          "Framer Motion",
        ],
        link: "https://github.com/FiaLDI/PostCreator",
        isPrivate: false,
      },

      {
        id: 9,
        category: "Legacy",
        title: "TaskManager",
        description:
          "Frontend-приложение для работы с JSON backend. Реализованы CRUD-операции и базовая обработка данных.",
        tech: ["React", "Next.js", "Redux", "Tailwind", "TypeScript"],
        link: "https://github.com/FiaLDI/TaskManager",
        isPrivate: false,
      },
      {
        id: 10,
        category: "Legacy",
        title: "Voice Chat — WebRTC аудиочат",
        description:
          "Простое WebRTC-приложение с кастомным signaling-сервером для peer-to-peer аудиосвязи.",
        tech: ["JavaScript", "WebRTC", "Node.js", "Express"],
        link: "https://github.com/FiaLDI/voice-chat",
        isPrivate: false,
      },
    ],
  },
};
