import { dictionaries } from "@/pages-data";
import { Language } from "@/features/language-switcher/model/types";

export function getDict<
  K extends keyof typeof dictionaries
>(
  lang: Language,
  key: K
): (typeof dictionaries)[K][Language] {
  return dictionaries[key][lang];
}
