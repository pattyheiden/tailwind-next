import { ComponentProps } from "react";
import { LuSearch } from "react-icons/lu";

type InputPrefixProps = ComponentProps<'div'>

export function Prefix(props: InputPrefixProps) {
    return (
        <div {...props} />
    )
}

type InputControlProps = ComponentProps<'input'>

export function Control(props: InputControlProps) {
    return (
        <input className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none
        dark:placeholder-zinc-400 dark:text-zinc-100" type="text" {...props} />
    )
}

export type InputRootProps = ComponentProps<'div'>

export function Root(props: InputRootProps) {
    return (
        <div className="flex w-full items-center rounded-lg border border-zinc-300 px-3 py-2 shadow-sm 
        focus-within:border-sky-300 focus-within:ring-4 focus-within:ring-sky-100
        dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-sky-500 dark:focus-within:ring-sky-500/20" {...props} />
    )
}