'use client'
import { LuUploadCloud } from "react-icons/lu";
import { useFileInput } from "./Root";

export function Trigger() {
    const { id } = useFileInput()
    return (
        <label htmlFor={id} className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-sky-200 hover:bg-sky-25 hover:text-sky-500">
            <div className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-sky-50 group-hover:bg-sky-100">
                <LuUploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-sky-500" />
            </div>
            <div className="flex flex-col items-center gap-1">
                <span className="text-sm">
                    <span className="font-semibold text-sky-500">Click to upload</span> or drag and drop
                </span>
                <span className="text-xs">SVG, PNG, JPG or GIF (max. 800x400)</span>
            </div>
        </label>
    )
}