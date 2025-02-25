import Image from "next/image";

import ThemeSwitch from "../components/layout/ThemeSwitch"

import ThemeProvider from "@/components/layout/themeProvider";

import About from "./dashboard/page";
import { redirect } from "next/navigation";
import AboutModal from "@/components/dashboard/about";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
<ThemeSwitch />

<Link className={buttonVariants({ variant: "secondary" })} scroll={false} href='/dashboard'>Dashboard</Link>



</main>


)}

