import React from "react"
import Link from "next/link"
import clsx from 'clsx'
import { cn } from "@/lib/utils";



export default function DashboardSidebar(){
    return(

        <div className="lg:block hidden border-r h-full">
        <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-[55px] items-center justify-between border-b px-3 w-full">
                <Link className="flex items-center gap-2 font-semibold ml-1" href="/">
                    <span>Home</span>
                </Link>
            </div>

            <nav className="grid items-start px-4 text-sm font-medium">
                <Link
                    className={cn(
                        "flex items-center gap-2 rounded-lg px-3 py-2 text-white-500 transition-all hover:text-gray-900 dark:text-white-950"
                    )}
                    href='/dashboard'
                > 
                    <div className="border rounded-lg dark:bg-black dark:border-gray-800 border-gray-400 p-1 bg-white">
                        Where tf
                    </div>
                </Link>
                </nav>

        </div>
        <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
                <Link
                    className={cn(
                        "flex items-center gap-2 rounded-lg px-3 py-2 text-white-500 transition-all hover:text-gray-900 dark:text-white-950"
                    )}
                    href='/dashboard'
                > 
                    <div className="border rounded-lg dark:bg-black dark:border-gray-800 border-gray-400 p-1 bg-white">
                        Where tf
                    </div>
                </Link> 
            </nav>
        </div>
    </div>


    );
}

