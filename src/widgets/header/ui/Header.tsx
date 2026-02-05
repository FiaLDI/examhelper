"use client";

export const Header = () => {

  return (
    <header
      id="header"
      className=" w-full"
    >
      <nav className="max-w-7xl mx-auto h-full p-6 flex justify-between items-center">
        <ul className="flex h-full items-center gap-6 text-white">
          <li><a href="" className="hover:text-indigo-400">Главная</a></li>
          <li><a href="" className="hover:text-indigo-400">База экзаменов</a></li>
          <li><a href="" className="hover:text-indigo-400">База вопросов</a></li>
        </ul>
        <div className="flex gap-5">
            <button className="text-white p-1 px-6 cursor-pointer border-2 border-indigo-400 rounded-2xl py-1 shadow-[0_0_5px_0.5px_rgba(99,102,241,0.9)]">local</button>
            {/* <input className="border border-indigo-400 p-1 m-0 text-white outline-none" type="text" value={"localhost:4000"}/> */}
        </div>
      </nav>
      <div className=" h-0.5 w-screen bg-indigo-400 shadow-[0_0_5px_0.5px_rgba(99,102,241,0.9)]"></div>

    </header>
  );
};
