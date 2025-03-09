"use client"

import { 
    SidebarIcon,
    SquareArrowOutUpRight,
    GitFork,
    EllipsisVertical,
    FileCode,
    Boxes,
    Share,
    Trash,
 } from "lucide-react"

import { Command } from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { Separator } from "@radix-ui/react-separator"
import { useSidebar } from "@/components/ui/sidebar"

import { 
    useFormField,
    Form,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
    FormField, 
} from "@/components/ui/form"

import { 
    DropdownMenu,  
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger, 
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger
} from "@/components/ui/dropdown-menu"

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"

import { ProfileForm } from "./formtest";

export function EditorHeader(){

    return (
<header className="flex sticky top-0 z-50 w-full items-center border-b bg-background">
  <div className="flex h-[--header-height] w-full items-center gap-2 px-4">
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="h-8 w-16 flex cursor-pointer items-center justify-center hover:bg-accent hover:text-accent-foreground rounded-lg ">
          <Boxes />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-md p-2">
        
        {/* Single row layout */}
        <div className="flex items-center gap-2">
          <DropdownMenuItem className="p-0 hover:bg-transparent">
            <Button variant="outline" className="hover:bg-muted ml-auto">
              {/* TODO: Add user avatar with initials */}
              GabrielP9
            </Button>
          </DropdownMenuItem>

          <DropdownMenuItem className="p-0 hover:bg-transparent">
            <Button variant="destructive" className="hover:bg-red-600 w-full">
              Cover Page <SquareArrowOutUpRight />
            </Button>
          </DropdownMenuItem>

          <DropdownMenuItem className="p-0 hover:bg-transparent">
            <Button variant="outline" className="hover:bg-muted w-full">Share <Share/></Button>
          </DropdownMenuItem>
        
            <Menubar className="p-0 hover:bg-transparent">
                <MenubarMenu >
                    <MenubarTrigger className="p-0">
                        <Button variant="ghost" size='icon' className="hover:bg-muted w-full">
                            <EllipsisVertical/>
                        </Button>
                    </MenubarTrigger>

                    <MenubarContent>
                    <MenubarItem>
                    <GitFork className="w-4 h-4"/> <span className="pl-1"> Remix </span> 
                    </MenubarItem>
                    <MenubarItem> <FileCode className="w-4 h-4"/><span className="pl-1"> Publish as Template </span> </MenubarItem>
                    <MenubarItem> <Trash className="w-4 h-4"/> <span className="pl-1"> Delete </span> </MenubarItem>

                    </MenubarContent>
                </MenubarMenu>
            </Menubar>

        </div>
        
        {/* Add Form with inputs basically */}
        <ProfileForm/>

      </DropdownMenuContent>
    </DropdownMenu>
    <Separator orientation="vertical" />
    <Command />
  </div>
</header>

    )

}