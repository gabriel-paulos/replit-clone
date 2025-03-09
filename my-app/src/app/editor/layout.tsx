import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { cookies } from "next/cookies";

import { NavUser } from "./(components)/nav-user";

import { SidebarInset, SidebarProvider, SidebarSeparator, SidebarTrigger, SidebarFooter, } from "@/components/ui/sidebar";

import { Separator } from "@/components/ui/separator";

import { AppSidebar } from "./(components)/master-sidebar";

import { TestSidebar } from "./(components)/app-sidebar"; 

import { EditorHeader } from "./(components)/site-header";

import { ProfileForm } from "./(components)/formtest";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Editor } from "@monaco-editor/react";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI vs code clone",
  description: "This cool, I guess",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (

/*
<SidebarProvider
      style={
        {
          "--sidebar-width": "350px",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">All Inboxes</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Inbox</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {Array.from({ length: 24 }).map((_, index) => (
            <div
              key={index}
              className="aspect-video h-12 w-full rounded-lg bg-muted/50"
            />
          ))}
        </div>
        {children}
      </SidebarInset>
    </SidebarProvider>
    */

    /*
      <SidebarProvider>
        <TestSidebar />
        <main>
        <header className="sticky top-0 flex shrink-0 items-center justify-right gap-2 border-b bg-background p-4">
          <div className="h-6 px-4 w-full flex items-center sticky justify-between top-0 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex items-center space-x-4">
              
            </div>
          </div>
          </header>

          <SidebarInset>

          {children}
          </SidebarInset>
          
        </main>
      </SidebarProvider>
      */

    <EditorHeader/>
  );
}
