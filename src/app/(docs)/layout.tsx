"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import { DocsSidebar } from "@/components/docs/sidebar-nav"
import { Logo } from "@/components/docs/logo"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <TooltipProvider>
      <SidebarProvider>
        {!isHome && <DocsSidebar />}
        <SidebarInset>
          <header className="flex h-14 items-center gap-2 px-4">
            {!isHome && <SidebarTrigger />}
            <Link href="/" className="ml-auto text-foreground" aria-label="Monad home">
              <Logo className="h-8 w-auto" aria-hidden />
            </Link>
          </header>
          <div className="flex-1 overflow-auto">
            <div className="mx-auto max-w-4xl px-6 py-8">
              {children}
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}
