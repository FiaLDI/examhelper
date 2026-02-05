import { Language } from "@/shared/lib";
import { HeroDict } from "../types/hero.type";

export const HeroData: Record<Language, HeroDict> = {
  en: {
    title: "Exam Helper",
    subTitle: "Web-application",
    value:
  "Exam Helper is a web application designed for exam preparation by storing, searching, and sharing exam questions and answers.",
    highlights: [
    "Context-aware search",
    "Convenient data input",
    "Local mode",
    "Remote connectivity",
    "Privacy",
    "Publishing capability"
  ],
    ctaSkills: "Guide",
    ctaPrimary: "Get Started",
    image: "/images/leonid.jpg",
  },

  ru: {
    title: "Exam Helper",
    subTitle: "Web-application",
    value:
      "Exam Helper — веб-приложение для подготовки к экзаменам, предназначенное для хранения, поиска и обмена экзаменационными вопросами и ответами.",
    highlights: [
      "Контекстный поиск",
      "Удобный ввод данных",
      "Локальный режим",
      "Удалённое подключение",
      "Приватность",
      "Возможность опубликовать"
    ],
    ctaSkills: "Документация",
    ctaPrimary: "Начать работать",
    image: "/images/leonid.jpg",
  },
};
