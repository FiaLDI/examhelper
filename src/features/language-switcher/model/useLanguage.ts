import { useLanguageStore } from "./useLanguageStore";

export function useLanguage() {
    const current = useLanguageStore(state => state.current);
    const setCurrent = useLanguageStore(state => state.setCurrent);
    return { current, setCurrent };
}
