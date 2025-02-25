import { Calendar, Home, Inbox, Search, Settings, FolderOpenDot, Folder } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"

const items = [

    {
        title: "New Project",
        url: "#",
        icon: FolderOpenDot
    },

    {
        title: "Home",
        url: "#",
        icon: Home
    },
    
    {
        title: "Projects",
        url: "#",
        icon: Folder
    },

    {
        title: "Settings",
        url: "#",
        icon: Settings
    },

]

   
export function AppSidebar() {
    return (
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    )
  }