"use client"

import { PageHeader } from "@/components/docs/page-header"
import { CollapsibleDemo } from "./demo"

export default function CollapsiblePage() {
  return (
    <>
      <PageHeader
        title="Collapsible"
        description="An interactive component which expands/collapses a panel."
      />
      <CollapsibleDemo />
    </>
  )
}
