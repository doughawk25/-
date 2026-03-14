"use client"

import { PageHeader } from "@/components/docs/page-header"
import { ContextMenuDemo } from "./demo"

export default function ContextMenuPage() {
  return (
    <>
      <PageHeader
        title="Context Menu"
        description="Displays a menu on right-click."
      />
      <ContextMenuDemo />
    </>
  )
}
