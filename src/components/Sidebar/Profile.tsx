import { LuLogOut } from "react-icons/lu";
import { Button } from "../Button";

export function Profile() {
    return (
        <div className="flex items-center gap-3">
            <img className="h-10 w-10 rounded-full" src="https://github.com/pattyheiden.png" alt="photo profile" />
            <div className="flex flex-col truncate">
                <span className="text-sm font-semibold text-zinc-700">Patricia da Silva Lima</span>
                <span className="text-sm text-zinc-500 truncate">patriciasilvalimah@gmail.com</span>
            </div>
            <Button type="button" variant="ghost">
                <LuLogOut className="w-5 h-5 text-zinc-500"/>
            </Button>
        </div>
    )
}