import { NavLink } from "@/shared/ui"

export const Footer = () => {

    return (
        <footer className="max-w-7xl w-full mx-auto  h-0 relative">
            <div className="w-full absolute flex bg-fuchsia-100 justify-between ">
                
            <div className=" p-5">
                © {new Date().getFullYear()} Stepanov Leonid, Inc.
            </div>
            <nav>
                <ul className="flex gap-5 p-5">
                    <NavLink href="#hero" title="Home"/>
                    <NavLink href="#about" title="About"/>
                    <NavLink href="#projects" title="Projects"/>
                    <NavLink href="#contact" title="Contact"/>
                    <NavLink href="#hero" title=""/>
                </ul>
            </nav>
            </div>
        </footer>
    )
}