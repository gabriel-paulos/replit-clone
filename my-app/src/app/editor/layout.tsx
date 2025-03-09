import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { cookies } from "next/cookies";

import { SidebarInset, SidebarProvider, SidebarSeparator, SidebarTrigger, SidebarFooter, } from "@/components/ui/sidebar"

import { TestSidebar } from "./(components)/app-sidebar"; 

import { EditorHeader } from "./(components)/site-header";


import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Editor } from "@monaco-editor/react";
import App from "next/app";


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

    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        <EditorHeader/>
        
        <div className="flex flex-1">
          <TestSidebar />
          <SidebarInset>
          <div className="flex flex-1 flex-col gap-4 p-4">
              <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="aspect-video rounded-xl bg-muted/50" />
                <div className="aspect-video rounded-xl bg-muted/50" />
                <div className="aspect-video rounded-xl bg-muted/50" />
              </div>
              <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
            </div>
          </SidebarInset>
        </div>
      
      </SidebarProvider>

    </div>

    
  );
}
