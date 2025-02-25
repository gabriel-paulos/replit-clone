import React from "react"
import Link from "next/link"
import clsx from 'clsx'
import { cn } from "@/lib/utils";
import Logo from "@/app/favicon.ico"
import Image from "next/image"
import { buttonVariants } from "@/components/ui/button"

export default function NewDashboard(){

    return (

        <div className="h-16 px-4 w-full flex items-center sticky justify-between border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="ring-offset-2 ring-offset-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none rounded-sm"
          >
            <Image src={Logo} alt="Logo" width={36} height={36} />
          </Link>
          <div className="text-sm font-medium flex items-center">Baking</div>
        </div>
        <div className="flex items-center space-x-4">

            <Link className={buttonVariants({ variant: "destructive" })} scroll={false} href='/dashboard'>COBEKEKEKKE</Link>
        </div>
      </div>


    );

}