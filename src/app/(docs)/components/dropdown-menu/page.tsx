"use client"

import { PageHeader } from "@/components/docs/page-header"
import { DropdownMenuDemo } from "./demo"

export default function DropdownMenuPage() {
  return (
    <>
      <PageHeader
        title="Dropdown Menu"
        description="Displays a menu of actions/options triggered by a button."
      />
      <DropdownMenuDemo />
    </>
  )
}
