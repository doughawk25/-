"use client"

import { PageHeader } from "@/components/docs/page-header"
import { SheetDemo } from "./demo"

export default function SheetPage() {
  return (
    <>
      <PageHeader
        title="Sheet"
        description="Extends the Dialog component to display content that slides in from the edge."
      />
      <SheetDemo />
    </>
  )
}
