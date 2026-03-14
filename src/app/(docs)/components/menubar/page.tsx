"use client"

import { PageHeader } from "@/components/docs/page-header"
import { MenubarDemo } from "./demo"

export default function MenubarPage() {
  return (
    <>
      <PageHeader
        title="Menubar"
        description="Horizontal menu bar with dropdown submenus, typical of desktop apps."
      />
      <MenubarDemo />
    </>
  )
}
