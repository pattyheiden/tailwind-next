'use client'
import * as Select from '@radix-ui/react-select'
import { LuCheck } from "react-icons/lu"

export type SelectItemProps = Select.SelectItemProps & {
    text: string
}
export function SelectItem({text, ...props}: SelectItemProps) {
    return(
        <Select.Item className='flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50 dark:data-[highlighted]:bg-zinc-700' {...props}>
                            <Select.ItemText asChild>
                                <span className='text-black dark:text-zinc-100'>{text}</span>
                            </Select.ItemText>
                            <Select.ItemIndicator>
                                <LuCheck className="h-4 w-4 text-sky-500 dark:text-sky-300" />
                            </Select.ItemIndicator>
                        </Select.Item>
    )
}