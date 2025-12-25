// shared/i18n/useDict.ts
"use client";

import { dictionaries, DictionaryKey } from "@/pages-data";
import { useLanguageStore } from "@/features/language-switcher/model/useLanguageStore";
import { Language } from "@/features/language-switcher/model/types";

export function useDict<K extends DictionaryKey>(key: K) {
  const lang = useLanguageStore((s) => s.lang);
  return dictionaries[key][lang] as (typeof dictionaries)[K][Language];
}
