import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import DashboardSidebar from "./(components)/DashboardSidebar";

import NewDashboard from "./(components)/fakeboard";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./(components)/dash-sidebar";

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

      <SidebarProvider>
            <AppSidebar />
         
            {/** Dashboard Sidebar <div className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">  <DashboardSidebar />   <div className="grid min-h-screen w-full grid-cols-1 ">  <div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-[280px_1fr]"> */} 
            <SidebarInset>
            <NewDashboard />
            {children}

            </SidebarInset>
            </SidebarProvider>
    );
}
