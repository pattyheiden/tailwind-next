'use client'
import { LuUser } from "react-icons/lu";
import { useFileInput } from "./Root";
import { useMemo } from 'react'

export function ImagePreview() {
    const { files } = useFileInput()
    const previewURL = useMemo(() => {
        if (files.length === 0) {
            return null
        }
        return URL.createObjectURL(files[0])
    }, [files])

    if (previewURL === null) {
        return (
            <div className="bg-sky-50 flex h-16 w-16 items-center justify-center rounded-full dark:bg-sky-500/10">
                <LuUser className="w-8 h-8 text-sky-500 dark:text-sky-300" />
            </div>
        )
    } else {
        return (
            <img src={previewURL} alt="" className="h-16 w-16 rounded-full object-cover" />
        )
    }
}