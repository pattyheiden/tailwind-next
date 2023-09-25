import { LuBarChart, LuCheckSquare, LuCog, LuFlag, LuHome, LuLifeBuoy, LuSearch, LuSquareStack, LuUsers } from "react-icons/lu";
import { NavItem } from "./NavItem";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";
import * as Input from "../Input";


export function Sidebar() {
    return (
        <aside className='flex flex-col gap-6 border-r border-zinc-200 px-5 py-8'>
            <span className="mx-1 flex font-bold text-3xl gap-1 before:h-7 before:w-1 before:bg-sky-500 before:flex before:mt-0.5">My Dasboard</span>

                <Input.Root>
                    <Input.Prefix>
                        <LuSearch className="h-5 w-5 text-zinc-500 mr-2" />
                    </Input.Prefix>
                    <Input.Control placeholder="Search"/>
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

                <div className="h-px bg-zinc-200" />
                <Profile />
            </div>
        </aside>
    )
}