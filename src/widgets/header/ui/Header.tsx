"use client";

import { LinkDefault } from "@/shared/ui/link";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
    const [open, setOpen] = useState<boolean>(false);

  return (
    <header
      id="header"
      className=" w-full"
    >
      <nav className="max-w-7xl mx-auto h-full p-6 py-6 flex justify-between items-center">
        <Menu className="lg:hidden text-white z-30" onClick={()=> setOpen(prev => !prev)} />
        <ul data-open={open} className="h-full items-center gap-6 text-white data-[open=false]:hidden lg:data-[open=false]:flex lg:flex">
          <LinkDefault href="/" text="Главная" />
          <LinkDefault href="/exam" text="База экзаменов" />
          <LinkDefault href="/questions" text="База вопросов" />
        </ul>
        <div className="flex gap-5">
            <button 
              className="text-white p-1 px-6 cursor-pointer border-2 border-indigo-400 rounded-2xl py-1 shadow-[0_0_5px_0.5px_rgba(99,102,241,0.9)] hover:text-indigo-400"
            >
                Local
            </button>
        </div>
      </nav>
      <div className=" h-0.5 w-screen bg-indigo-400 shadow-[0_0_5px_0.5px_rgba(99,102,241,0.9)]"></div>

    </header>
  );
};
