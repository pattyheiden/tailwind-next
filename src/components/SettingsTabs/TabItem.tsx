'use client'
import * as Tabs from '@radix-ui/react-tabs'
import {motion} from 'framer-motion'

export interface TabItemProps {
    value: string
    title: string
    isSelected?: boolean
}

export function TabItem({ value, title, isSelected = false }: TabItemProps) {
    return (
        <Tabs.Trigger value={value} className='group relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-sky-500 data-[state=active]:text-sky-500 outline-none'>
            <span className='group-focus-visible:ring-2 group-focus-visible:ring-sky-400 group-focus-visible:ring-offset-4 rounded whitespace-nowrap'>{title}</span>
            {isSelected && (
                <motion.div layoutId='activeTab' className='absolute -bottom-px left-0 right-0 h-0.5 bg-sky-500' />
            )}
        </Tabs.Trigger>
    )
}