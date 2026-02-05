import Link from "next/link";

export const LinkDefault = ({href, text} : {href: string; text: string}) => <li><Link href={href} className="hover:text-indigo-400">{text}</Link></li>