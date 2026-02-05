import { LanguageSwitcher } from "@/features/language-switcher";
import { ThemeSwitcher } from "@/features/theme-switcher";

export const Control = () => (
    <div className="fixed inset-0 z-20 pointer-events-none">
        <div className="pointer-events-auto">
            <LanguageSwitcher />
        </div>
        <div className="pointer-events-auto">
            <ThemeSwitcher /> 
        </div>
    </div>
)