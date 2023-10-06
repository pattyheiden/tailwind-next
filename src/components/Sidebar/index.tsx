'use client'
import {
    LuBarChart,
    LuCheckSquare,
    LuCog,
    LuFlag,
    LuHome,
    LuLifeBuoy,
    LuMenu,
    LuSearch,
    LuSquareStack,
    LuUsers
} from "react-icons/lu";
import * as Collapsible from '@radix-ui/react-collapsible'
import { NavItem } from "./NavItem";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";
import * as Input from "../Input";
import { Button } from "../Button";
import { Logo } from "./Logo";


export function Sidebar() {
    return (
        <Collapsible.Root
            className='fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 
            data-[state=open]:bottom-0  data-[state=open]:h-screen lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 
            lg:data-[state=closed]:bottom-0 dark:bg-zinc-900 dark:border-zinc-800'>
            <div className="flex items-center justify-between">
                <Logo />
                <Collapsible.Trigger asChild className="lg:hidden">
                    <Button variant="ghost">
                        <LuMenu className="h-6 w-6" />
                    </Button>
                </Collapsible.Trigger>
            </div>
            <Collapsible.Content forceMount className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex">
                <Input.Root>
                    <Input.Prefix>
                        <LuSearch className="h-5 w-5 text-zinc-500 mr-2" />
                    </Input.Prefix>
                    <Input.Control placeholder="Search" />
                </Input.Root>

                <nav className="space-y-0.5">
                    <NavItem title="Home" icon={LuHome} />
                    <NavItem title="Dashboard" icon={LuBarChart} />
                    <NavItem title="Projects" icon={LuSquareStack} />
                    <NavItem title="Tasks" icon={LuCheckSquare} />
                    <NavItem title="Reporting" icon={LuFlag} />
                    <NavItem title="Users" icon={LuUsers} />
                </nav>

                <div className="mt-auto flex flex-col gap-6">
                    <nav className="space-y-0.5">
                        <NavItem title="Support" icon={LuLifeBuoy} />
                        <NavItem title="Settings" icon={LuCog} />
                    </nav>

                    <UsedSpaceWidget />

                    <div className="h-px bg-zinc-200 dark:bg-zinc-700" />
                    <Profile />
                </div>
            </Collapsible.Content>
        </Collapsible.Root>
    )
}