"use client";

import { useLanguage } from "../model/useLanguage";
import { Language } from "../model/useLanguageStore";

export const LanguageSwitcher = () => {

    const {current, setCurrent} = useLanguage();

    return (
        <div className="bg-neutral-800/50 backdrop-blur-3xl p-1 flex lg:flex-col gap-1 w-fit fixed z-50 right-0 top-0">
            {["en", "ru"].map((val, idx) => {
                const isCurrent = val == current
                return(
                    <button 
                        data-current={isCurrent} 
                        key={`${val}-idx`} 
                        onClick={()=> setCurrent(val as Language)} 
                        className="data-[current=true]:bg-blue-700 text-white hover:bg-neutral-800 p-2 cursor-pointer "
                    >
                        {val.toUpperCase()}
                    </button>
                )})}
        </div>)
};
