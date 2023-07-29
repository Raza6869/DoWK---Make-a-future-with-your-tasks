'use client'
import { useRouter } from "next/router.js"
import SideTools from "./SideTools.js"
import { createContext } from "vm"


export default function Navegator(){
    const context = createContext()
    const activeLink = 'bg-white text-green-600 p-1 rounded w-64 -ml-1'
    const inactiveLink = 'text-white'
    const router = useRouter()
    const {pathname}= router;

    return(
        <div>
            <ul className="ml-3 flex flex-col gap-3">
                <li className={pathname === '/board' ? activeLink : inactiveLink}>
                <SideTools 
                text="Dashboard"
                icon="bi bi-calendar2-check text-xl"
                href="/board"
                />
                </li>
                <li>
                <SideTools 
                text="Costumize"
                icon="bi bi-pencil-square text-xl"
                href="/board/costumize"
                />
                </li>
                <li>
                <SideTools 
                text="Organize"
                icon="bi bi-folder2-open text-xl"
                href="/board/organize"
                />
                </li>
                <li>
                <SideTools 
                text="Report Error"
                icon="bi bi-exclamation-circle text-xl"
                href="/board/reportError"
                />
                </li>
            </ul>
        </div>
    )
}