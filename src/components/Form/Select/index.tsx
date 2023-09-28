'use client'
import * as SelecPrimitive from '@radix-ui/react-select'
import { LuChevronDown } from 'react-icons/lu'
import { SelectItem } from './SelectItem'
import { ReactNode } from 'react'

export interface SelectProps extends SelecPrimitive.SelectProps{
    children: ReactNode
    placeholder: string
}

export function Select({children, placeholder, ...props}: SelectProps) {
    return (
        <SelecPrimitive.Root {...props}>
            <SelecPrimitive.Trigger
                className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 
              py-2 shadow-sm data-[placeholder]:text-zinc-600">
                <SelecPrimitive.Value placeholder={placeholder} className="text-black" />
                <SelecPrimitive.Icon>
                    <LuChevronDown className="h-5 w-5 text-zinc-500" />
                </SelecPrimitive.Icon>
            </SelecPrimitive.Trigger>
            <SelecPrimitive.Portal>
                <SelecPrimitive.Content side="bottom" position="popper" sideOffset={8}
                    className='z-10 rounded-lg border border-zinc-200 bg-white w-[--radix-select-trigger-width] overflow-hidden shadow-sm'>
                    <SelecPrimitive.Viewport className='outline-none'>
                        {children}
                    </SelecPrimitive.Viewport>
                </SelecPrimitive.Content>
            </SelecPrimitive.Portal>
        </SelecPrimitive.Root>
    )
}