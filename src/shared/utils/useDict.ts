"use client";

import { dictionaries, DictionaryKey } from "@/pages-data";
import { useLanguageStore } from "@/features/language-switcher/model/useLanguageStore";
import { Language } from "@/shared/lib/language";

export function useDict<K extends DictionaryKey>(key: K) {
  const lang = useLanguageStore((s) => s.lang);
  return dictionaries[key][lang] as (typeof dictionaries)[K][Language];
}
