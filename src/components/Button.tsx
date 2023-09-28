import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
    base: [
        'rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm',
        'focus-visible:ring-2 focus-visible:rinf-offset-2 focus-visible:ring-sky-500',
        'active:opacity-80',
    ],
    variants: {
        variant: {
            primary: 'bg-sky-600 text-white hover:bg-sky-700',
            outline: 'border border-zinc-300 text-zinc-700 hover:bg-zinc-50'
        },
    },
    defaultVariants: {
        variant: 'primary',
    }
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({variant, ...props}: ButtonProps) {
    return (
        <button className={button({variant: variant})} {...props}/>           
    )
}