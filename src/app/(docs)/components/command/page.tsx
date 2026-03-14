"use client"

import { PageHeader } from "@/components/docs/page-header"
import { CommandDemo } from "./demo"

export default function CommandPage() {
  return (
    <>
      <PageHeader
        title="Command"
        description="Fast, composable command menu with search and keyboard navigation."
      />
      <CommandDemo />
    </>
  )
}
