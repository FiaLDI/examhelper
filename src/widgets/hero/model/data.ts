import { Language } from "@/shared/lib";
import { HeroDict } from "../types/hero.type";

export const HeroData: Record<Language, HeroDict> = {
  en: {
    title: "Leonid Stepanov",
    subTitle: "Full-Stack Developer",
    value:
  "I develop and support web applications, implementing new features, integrating APIs, and fixing bugs. I have commercial development experience, working with both frontend and backend codebases, with a focus on clear structure and maintainability.",

    highlights: [
      "TypeScript · Next.js · NestJS · PostgreSQL",
      "Modular architecture · Clean code principles",
      "REST APIs · Real-time basics",
      "Docker · Performance fundamentals",
    ],
    ctaSkills: "Skills",
    ctaPrimary: "Projects",
    image: "/images/leonid.jpg",
  },

  ru: {
    title: "Леонид Степанов",
    subTitle: "Full-Stack разработчик",
    value:
      "Занимаюсь разработкой и поддержкой веб-приложений: реализую новый функционал, интегрирую API и исправляю баги. Имею коммерческий опыт разработки, работаю как с клиентской, так и с серверной частью, уделяя внимание структуре и поддерживаемости.",
    highlights: [
      "TypeScript · Next.js · NestJS · PostgreSQL",
      "Модульная архитектура · принципы чистого кода",
      "REST API · основы real-time",
      "Docker · основы производительности",
    ],
    ctaSkills: "Навыки",
    ctaPrimary: "Проекты",
    image: "/images/leonid.jpg",
  },
};
