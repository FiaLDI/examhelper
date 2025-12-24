import { create } from "zustand";

interface LanguageState {
    current: Language;

    setCurrent: (current: Language) => void;
}

export const LANGUAGES = ["en", "ru"] as const;
export type Language = typeof LANGUAGES[number];


export const useLanguageStore = create<LanguageState>(set => ({
    current: "en",

    setCurrent: (current: Language) => set({ current: current }),
}));
