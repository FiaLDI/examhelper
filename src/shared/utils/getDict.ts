import { dictionaries } from "./Dictionaries";
import { Language } from "@/shared/lib/language";

export function getDict<
  K extends keyof typeof dictionaries
>(
  lang: Language,
  key: K
): (typeof dictionaries)[K][Language] {
  return dictionaries[key][lang];
}
