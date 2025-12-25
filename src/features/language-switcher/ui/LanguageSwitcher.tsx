"use client";
import { useLanguageStore } from "@/features/language-switcher/model/useLanguageStore";

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguageStore();

  return (
    <div className="flex gap-2 fixed z-30 right-0 top-0 bg-neutral-800 p-1 text-white text-sm [&>button]:p-2 [&>button]:cursor-pointer [&>button]:data-[lang=true]:bg-blue-600">
      <button
      data-lang={lang === "en"}
        onClick={() => setLang("en")}
      >
        EN
      </button>
      <button
        data-lang={lang === "ru"}
        onClick={() => setLang("ru")}
      >
        RU
      </button>
    </div>
  );
}

