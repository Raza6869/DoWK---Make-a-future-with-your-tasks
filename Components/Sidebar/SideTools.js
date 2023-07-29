import Link from "next/link";

export default function SideTools({text, icon, href}){
    return(
        <Link href= "/app/board/page.js" className="flex gap-5 items-center">
            <i className={icon}></i>
            <Link href={href} className="text-lg">{text}</Link> 
        </Link>
    )
}