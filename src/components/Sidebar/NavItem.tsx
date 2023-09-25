import { LuChevronDown } from "react-icons/lu";
import {ElementType} from "react"

export interface NavItemProps {
    title: string
    icon: ElementType
}

export function NavItem({title, icon: Icon}: NavItemProps) {
    return (
        <a href="" className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-sky-50">
            <Icon className='h-5 w-5 text-zinc-500' />
            <span className="font-medium text-zinc-700 group-hover:text-sky-500">{title}</span>
            <LuChevronDown className='ml-auto h-5 w-5 text-zinc-400 group-hover:text-sky-300' />
        </a>
    )
}