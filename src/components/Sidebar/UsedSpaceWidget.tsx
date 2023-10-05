export function UsedSpaceWidget() {
    return(
        <div className="flex flex-col gap-4 rounded-lg bg-sky-50 px-4 py-5 dark:bg-zinc-800">
        <div className="space-y-1">
            <span className="text-sm/5 font-medium text-sky-700 dark:text-zinc-100">
                Used space
            </span>
            <p className="text-sm/5 text-sky-500 dark:text-zinc-400">
                Your team has used 80% of your available space. Need more?
            </p>
        </div>
        <div className="h-2 rounded-full bg-sky-100 dark:bg-zinc-600">
            <div className="h-2 w-4/5 rounded-full bg-sky-600 dark:bg-sky-400" />
        </div>
        <div className="space-x-3">
            <button type="button" className="text-sm font-medium text-sky-500 hover:text-sky-700 dark:text-sky-300 dark:hover:text-sky-300/70 transition">Dismiss</button>
            <button type="button" className="text-sm font-medium text-sky-700 hover:text-sky-900 dark:text-zinc-300 dark:hover:text-zinc-300/70 transition">Upgrade plan</button>
        </div>
    </div>
    )
}