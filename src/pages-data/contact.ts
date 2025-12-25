import { Language } from "@/features/language-switcher/model/types";

export type ContactDict = {
  title: string;
  subtitle: string;
  messageTitle: string;
  messagePlaceholder: string;
  cta: string;
};

export const CONTACT_STATIC = {
  email: "leonid.stepanoff2015@gmail.com",
  github: "https://github.com/FiaLDI",
  telegram: "https://t.me/Leoniditlo",
};

export const ContactData: Record<Language, ContactDict> = {
  en: {
    title: "Let’s get in touch",
    subtitle:
      "Open for collaboration, freelance projects, and interesting ideas.",
    messageTitle: "Send me a message",
    messagePlaceholder: "Your message...",
    cta: "Send",
  },
  ru: {
    title: "Давайте свяжемся",
    subtitle:
      "Открыт к сотрудничеству, фриланс-проектам и интересным идеям.",
    messageTitle: "Написать сообщение",
    messagePlaceholder: "Ваше сообщение...",
    cta: "Отправить",
  },
};
