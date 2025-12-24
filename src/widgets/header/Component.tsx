import { NavLink } from "@/shared/ui";
import { ToDown } from "@/shared/ui/ToDown/ToDown";

export const Header = () => {

    return (
        <ToDown>
            <nav className="absolute w-full top-0 bg-fuchsia-100 p-5">
                <ul className="flex gap-5">
                    <NavLink href="#hero" title="Home"/>
                    <NavLink href="#about" title="About"/>
                    <NavLink href="#projects" title="Projects"/>
                    <NavLink href="#contact" title="Contact"/>
                    <NavLink href="#hero" title=""/>
                </ul>
            </nav>
        </ToDown>
    )
}