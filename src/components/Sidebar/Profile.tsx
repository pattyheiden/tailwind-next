import { LuLogOut } from "react-icons/lu";

export function Profile() {
    return (
        <div className="flex items-center gap-3">
            <img className="h-10 w-10 rounded-full" src="https://github.com/pattyheiden.png" alt="photo profile" />
            <div className="flex flex-col truncate">
                <span className="text-sm font-semibold text-zinc-700">Patricia da Silva Lima</span>
                <span className="text-sm text-zinc-500 truncate">patriciasilvalimah@gmail.com</span>
            </div>
            <button type="button" className="ml-auto p-2 hover:bg-zinc-50 rounded-md">
                <LuLogOut className="w-5 h-5 text-zinc-500"/>
            </button>
        </div>
    )
}